import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/Router'
import AuthProvider from './provider/AuthProvider'


createRoot(document.getElementById('root')).render(
 <BrowserRouter>

<AuthProvider>
 <Router></Router>
 </AuthProvider>
 </BrowserRouter>
)
