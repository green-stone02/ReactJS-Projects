import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Drawer from './components/Drawer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Drawer/>
      <Home/>
    </>
  )
}

export default App