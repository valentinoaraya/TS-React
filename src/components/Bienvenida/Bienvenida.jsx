import "./Bienvenida.css"

const Bienvenida = ({text, subtext, resalt})=>{
    return <div className="presentacion">
               <div className="nombre">
                    <h1 className="title">{text} <span className="resalt">{resalt}</span></h1>
                    <h2 className="subtitle">{subtext}</h2>
               </div>
           </div>
}

export default Bienvenida