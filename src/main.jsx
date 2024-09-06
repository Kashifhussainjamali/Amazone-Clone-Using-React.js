import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ContextApi } from './context/contextapi1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi><App /></ContextApi>
    
  </StrictMode>,
)
