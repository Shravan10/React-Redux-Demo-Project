import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {
  

  return (
    <>
    {/* <Counter/> */}
    <Navbar/>
    <Product/>
    <Cart/>
    </>
  )
}

export default App
