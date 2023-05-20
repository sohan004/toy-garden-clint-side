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
import Private from './components/Private/Private.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Blog from './components/Blog/Blog.jsx'

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
        element: <Private><AddToy></AddToy></Private>
      },
      {
        path: '/all_toy',
        element: <AllToys></AllToys>
      },
      {
        path: '/my_toy',
        element: <Private><MyToy></MyToy></Private>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/toy/:id',
        element: <Private><Details></Details></Private>,
        loader: ({ params }) => fetch(`https://assaignment-11-server-gules.vercel.app/toy_details/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <Private><ReactModal></ReactModal></Private>,
        loader: ({ params }) => fetch(`https://assaignment-11-server-gules.vercel.app/toy_details/${params.id}`)
      },
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
