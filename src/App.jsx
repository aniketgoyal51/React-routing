import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Nevigation from './components/nevigation'
import Home from './components/Home'
import Contact from './components/contact'
import About from './components/About'
import { Route,Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/About' element={<About/>}></Route>
    </Routes>
    </>
  )
}

export default App
