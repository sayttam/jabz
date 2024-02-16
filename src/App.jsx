import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Jabz from './components/Jabz/Jabz'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/jabz' element={<Jabz/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App