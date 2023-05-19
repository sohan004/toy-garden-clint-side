import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav/Nav'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
  const navigation = useNavigation()

  return (
    <>
      <Nav></Nav>
      {navigation.state === 'loading' ? <div style={{ marginTop: '150px' }} className="d-flex  justify-content-center">
        <div className="spinner-border  text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> : <Outlet></Outlet>}

    </>
  )
}

export default App
