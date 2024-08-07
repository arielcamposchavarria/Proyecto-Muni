import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Inicial from './PaginaInicial/Inicial'
import Login from './PaginaInicial/Login'

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Inicial/>}/>
      <Route path="Login" element ={<Login/>}/>

    </Routes>
  )
}

export default App
