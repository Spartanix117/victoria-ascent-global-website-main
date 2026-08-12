import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cursor from './components/Cursor'

export default function App(){
  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}
