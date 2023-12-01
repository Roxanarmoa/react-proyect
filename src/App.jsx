import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";

import './App.css'

function App() {

  return (
      <div id='app'>
        <NavBar/>
        <img className="Backimg" src="../public/img/DESTACADO1.png" alt="fondo-contenedor" />
        <Inicio/>
      </div>
  )
}

export default App;
