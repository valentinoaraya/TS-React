import React from 'react'
import "./Loading.css"
import { DotWave } from '@uiball/loaders'

function Loading({title, height}) {
  
  const sacarAltura = ()=> {
    if (height){
      return "altura"
    }else{
      return ""
    }
  }

  const altura = sacarAltura()

  return (
    <div className={`loading ${altura}`}>
        <DotWave size={60}speed={1} color="#f4cb00" />
        <h3 className='titleLoading'>{title}</h3>
    </div>
  )
}

export default Loading