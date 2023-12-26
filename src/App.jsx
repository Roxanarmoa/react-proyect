import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'


function App() {

  return (
    <BrowserRouter>
      <div id="app">
        <NavBar/>
      </div>
        <Routes>
          <Route path="/" element= {<Inicio/>}/>
          <Route path ="/categoria/:detalles" element={<ItemListContainer/>}/>
          <Route path="/categorias/:categoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
