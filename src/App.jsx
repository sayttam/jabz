import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/'/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App