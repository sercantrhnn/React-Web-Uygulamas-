import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/menu' exact element={<Menu/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
