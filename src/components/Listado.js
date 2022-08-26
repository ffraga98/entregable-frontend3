import React from 'react'
import objetos from "./data.json"
import Item from "./Item.js"

export default function Listado(props) {
  return (
    <div className='container'>
      { 
       objetos.map(elemento => {
          const {id, producto, stock} = elemento
          return <Item key={id} onComprar={props.comprarItem} nombre={producto.nombre} descripcion={producto.descripcion} stock={stock}/>
         }
       )
      }
    </div>
  )
}
