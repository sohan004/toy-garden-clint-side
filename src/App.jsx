import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
