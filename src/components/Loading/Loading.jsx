import React from 'react'
import "./Loading.css"
import { DotWave } from '@uiball/loaders'

function Loading({title}) {
  return (
    <div className='loading'>
        <DotWave size={60}speed={1} color="#f4cb00" />
        <h3 className='titleLoading'>{title}</h3>
    </div>
  )
}

export default Loading