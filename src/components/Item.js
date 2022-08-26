import { useState } from "react"

export default function Item(props) {

  const [stock, setStock] = useState(props.stock)
  //Permite cambiar el texto del boton según el stock.
  const [textoBoton, setTextoBoton] = useState("Comprar")

  function restarStock() {
    if (stock !== "agotado" && stock > 0) {
      setStock(stock - 1)
      props.onComprar()
    }
    // Comparo con 1, ya que el atributo stock cambia de valor al renderizarse de nuevo
    if (stock === 1) {
      setTextoBoton("Sin stock")
      setStock("agotado")
    }
  }
  
  return (
    <div className='producto'>
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>En stock <span>{stock}</span></h5>
      <button onClick={restarStock} disabled={stock==="agotado"}>{textoBoton}</button> 
    </div>
  )
}
