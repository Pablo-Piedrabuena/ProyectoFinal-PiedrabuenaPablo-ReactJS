import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import AddItem from "./components/AddItem.jsx"
import Inicio from "./components/Inicio/Inicio.jsx"
import Nosotros from "./components/Nosotros/Nosotros.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/productos', label: 'Productos' },
  { href: '/contacto', label: 'Contacto' },
];


function App() {
  return (
    <>
    <NavBar logo="/src/assets/logo.png" links={links}></NavBar>
    {/* <AddItem/> */}
    <Routes>
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
      <Route path='/productos' element={<ItemListContainer titulo="Nuestros Productos"></ItemListContainer>}></Route>
      <Route path='/productos/:categonia' element={<ItemListContainer titulo="Nuestros Productos"></ItemListContainer>}></Route>
      <Route path='/productos/:categonia/:itemID' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      <Route path='/contacto' element={<Contacto></Contacto>}></Route>
    </Routes>
    <Footer/>
    </>
    
  )
}

export default App
