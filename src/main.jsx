import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage.jsx'
import SignIn from './components/Account/SignIn.jsx'
import SignUp from './components/Account/SignUp.jsx'
import AuthProvider from './components/Auth/AuthProvider.jsx'
import AddToy from './components/AddToy/AddToy.jsx'
import AllToys from './components/AllToys/AllToys.jsx'
import MyToy from './components/MyToy/MyToy.jsx'
import ReactModal from './components/MyToy/ReactModal.jsx'
import Details from './components/Details/Details.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/sign_in',
        element: <SignIn></SignIn>
      },
      {
        path: '/sign_up',
        element: <SignUp></SignUp>
      },
      {
        path: '/add_toy',
        element: <AddToy></AddToy>
      },
      {
        path: '/all_toy',
        element: <AllToys></AllToys>
      },
      {
        path: '/my_toy',
        element: <MyToy></MyToy>
      },
      {
        path: '/toy/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy_details/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <ReactModal></ReactModal>,
        loader: ({ params }) => fetch(`http://localhost:5000/toy_details/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
