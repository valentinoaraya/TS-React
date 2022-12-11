import arrayProducts from "../ddbb/dataBase"

const getItems = ()=>{
    return new Promise((res)=>{
        setTimeout(()=>{
            res(arrayProducts)
        },2000)
    })
}

export function getItemsCategory(cat){
    return new Promise((res)=>{
        let itemEncontrar = arrayProducts.filter(pr =>{
            return (pr.cat === cat)
        })
        res(itemEncontrar)
    })
}

export function getSingleItem(id){
    
    return new Promise((res)=>{
        setTimeout(() => {
            let itemEncontrar = arrayProducts.find(pr => pr.id === parseInt(id))
            res(itemEncontrar)
        }, 2000);
    })
}

export default getItems