import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { createBuyOrder } from '../../services/firebase'
import { cartContext } from '../../storage/cartContext'
import Button from '../Button/Button'
import Loading from '../Loading/Loading'
import "./Form.css"
import InputForm from './InputForm'
import Swal from 'sweetalert2'

function Form() {
    const [buyerData, setBuyerData] = useState({
     nameSurname: "",
     email: "",
     phone: ""
    })

    const [loadingOrder, setLoadingOrder] = useState(false)

    const {cart, totalPrice, vaciarCarrito} = useContext(cartContext)
    const navigateTo = useNavigate()

    const handleCheckout= ()=>{
        
        const order = {
          buyer: buyerData, 
          date: new Date(),
          items: cart, 
          total: totalPrice()
        }
    
        createBuyOrder(order).then((id)=>{
          navigateTo(`/buyfinish/${id}`)
          vaciarCarrito()
        })
    }

   const handleInputChange = (evt) =>{
    let nameInput = evt.target.name
    let value = evt.target.value

    const newBuyerData = {...buyerData}
    newBuyerData[nameInput] = value
    setBuyerData(newBuyerData)
   }

   const verificarDatos = () =>{
    if (buyerData.nameSurname === "" && buyerData.email === "" && buyerData.phone === ""){
        return false
    } else{
        return true
    }
   }

   const onSubmit = (evt) =>{
    evt.preventDefault()
    let verificar = verificarDatos()
    if (verificar){
        setLoadingOrder(true)
        handleCheckout()
        setBuyerData({
            nameSurname: "",
            email: "",
            phone: ""
        })
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Complete todos los datos.',
            confirmButtonColor: "#f4cb00"
          })
    }
   }

  return (    
    <div className='divForm'>
        <h1 className='titleForm'>Crea tu orden de compra:</h1>
        <form className='form'>
            <InputForm
                title={"Nombre Completo"}
                value={buyerData.nameSurname}
                name="nameSurname"
                onChange={handleInputChange}
            />
            <InputForm
                title={"Email"}
                value={buyerData.email}
                name="email"
                onChange={handleInputChange}
            />
            <InputForm
                title={"Teléfono"}
                value={buyerData.phone}
                name="phone"
                onChange={handleInputChange}
            />
            
            <div className='divButton'>
                { loadingOrder ?
                    <Loading title={"Creando order"} height={false}/>
                :
                    <Button onFinish={onSubmit}>Crear orden</Button>
                }
                
            </div>
        </form>
    </div>
  )
}

export default Form