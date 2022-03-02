import react, {useEffect, useState} from "react";
import { Boton } from "./Components/Boton";
import './App.css';

function App() {

const [contador, setContador] = useState(0);
const [nombre, setNombre] = useState("");
useEffect(()=>{
  setContador(150);
}, [nombre]);
  return (
  <div className="App">
  <div>El valor de mi contador es: {contador}</div>

<button
onClick={()=>{
setContador(contador + 50);
}}
>Aumentar contador</button>

<button
onClick={()=>{
  setContador(contador - 15);
}}
>Disminuir contador
</button>

<button
onClick={()=>{
  setContador(contador * 0);
}}
>Limpiar contador
</button>

<input 
value={nombre}
onChange={(event)=>{
setNombre(event.target.value);
}}
placeholder="Ingresa tu nombre"
/>
<Boton/>
<span>Mi nombre es:{nombre}</span>

  </div>
  );
}

export default App;
