import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Contact from './components/Contact/Contact';

const router=createBrowserRouter([
 {
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: (() =>fetch('fakeData/tshirts.json'))
    },
    {
      path: '/order',
      element: <Order></Order>,
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
