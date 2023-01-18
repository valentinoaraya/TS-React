import { initializeApp } from "firebase/app";
import { addDoc, doc, getDoc ,getFirestore, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import arrayProducts from "../ddbb/dataBase"
import Swal from 'sweetalert2'

const firebaseConfig = {
  apiKey: "AIzaSyCB8_ns9KewOhWxI3B2MGdDQ2bq6XWzX0Q",
  authDomain: "thikia-a4879.firebaseapp.com",
  projectId: "thikia-a4879",
  storageBucket: "thikia-a4879.appspot.com",
  messagingSenderId: "355437338770",
  appId: "1:355437338770:web:6c690339bfe1c655f1c64b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getItems(){
  const collectionRef = collection(db, "products")
  const docsSnapshot = await getDocs(collectionRef)
  const docsArray = docsSnapshot.docs

  const dataDocs = docsArray.map( doc => ({...doc.data(), id: doc.id}))

  return dataDocs
}

export async function getItemsCategory(cat){
  const collectionRef = collection(db, "products")
  const q = query(collectionRef, where("cat", "==", (cat)))

  const docsSnapshot = await getDocs(q)
  const docsArray = docsSnapshot.docs

  const dataDocs = docsArray.map(doc => ({...doc.data(), id: doc.id}))
  return dataDocs
}

export async function getSingleItem(id){
  const docRef = doc(db, "products", id)
  const snapshot = await getDoc(docRef)
  const item = snapshot.data()
  item.id = snapshot.id
  return item
}

export async function exportItemsToFirestore(){
  const collectionRef = collection(db, "products")

  for (let item of arrayProducts){
    addDoc(collectionRef, item).then(res => console.log(item.nombre,"subido correctamente con el id", "-->", res.id))
  }
}


export async function createBuyOrder(order){
  const collectionRef = collection(db, "orders")
  const collectionProductsRef = collection(db, "products")
  
  const ids = order.items.map(itemsInCart=> itemsInCart.id)
  const q = query(collectionProductsRef, where(documentId(), "in", ids))
  let snapshot = await getDocs(q)
  let batch = writeBatch(db)
  
  snapshot.docs.forEach( doc => {

    let stockDisponible = doc.data().stock
    let itemInCart = order.items.find(item => item.id === doc.id )
    let countItemInCart = itemInCart.count
    if (stockDisponible < countItemInCart){
      Swal.fire({
        icon: 'error',
        title: 'Lo sentimos...',
        text: `El stock del producto "${itemInCart.nombre}" no está disponible.`,
        confirmButtonColor: "#f4cb00"
      })
      throw new Error("Stock no disponible")
    } else {
      batch.update(doc.ref, {stock: stockDisponible - countItemInCart})
    }
  })

  await batch.commit()
  let newOrder = await addDoc(collectionRef, order)
  return newOrder.id
}