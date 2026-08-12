import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Opportunity from './pages/Opportunity'

import Cursor from './components/Cursor'

export default function App(){
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos" element={<Products/>} />
        <Route path="/testimonios" element={<Testimonials/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/oportunidad" element={<Opportunity/>} />
        <Route path="/acerca-de-nosotros" element={<Home/>} />
      </Routes>
    </>
  )
}
