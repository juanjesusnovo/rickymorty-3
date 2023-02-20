import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Router, Route, browserHistory} from "react-router"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Home from "./pages/Home"
import './main.sass'
import UserContext from './context/UserContext'
import { RouterProvider } from 'react-router'
import {router} from "./router"
import UserProvider from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
        <RouterProvider router={router}></RouterProvider>
    </UserProvider>
  </React.StrictMode>
)
