import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CriarConta from './Páginas/CriarConta/CriarConta'
import VisitanteConta from './Páginas/VisitanteConta/VisitanteConta'
import DeficienteConta from './Páginas/DeficienteConta/DeficienteConta'
import InterpetreConta from './Páginas/InterpetreConta/InterpetreConta'
import Home from './Páginas/Home/Home'
import Qrcode from './Páginas/Qrcode/Qrcode'
import Texto from './Páginas/Texto/Texto'



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>},
   {
    path:"/CriarConta",
    element:<CriarConta/>
  },
  {
    path:"/VisitanteConta",
    element:<VisitanteConta/>
  },
  {
    path:"/InterpetreConta",
    element:<InterpetreConta/>
  },
  {
    path:"/DeficienteConta",
    element:<DeficienteConta/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/Qrcode",
    element: <Qrcode/>
  },
  {
    path:"/texto",
    element:<Texto/>
  }
    

    
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
