import { useState } from "react"
import Cabecera from "./components/Cabecera.js"
import Listado from "./components/Listado.js"

function App() {
  const [contador, setContador] = useState(0)

  function aumentarContador(){
    setContador(contador+1)
  }
  return (
    <div className="App">
      <Cabecera cantidad={contador}/>
      <Listado comprarItem={aumentarContador}/>
    </div>
  );
}

export default App;
