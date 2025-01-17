import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter}  from "react-router-dom"
import { Shopcontext } from './components/context.jsx'


createRoot(document.getElementById('root')).render(
  <Shopcontext.Provider>
    <BrowserRouter>
  
  <App />
  </BrowserRouter>
  </Shopcontext.Provider>
  
    )
