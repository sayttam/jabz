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
      <BrowserRouter basename='/'>
      <NavBar />
        <Routes>
          <Route path='/jabz' element={<Jabz/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='*' element={<div style={{textAlign: 'center'}}><h1>Error 404 - Not found</h1></div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App