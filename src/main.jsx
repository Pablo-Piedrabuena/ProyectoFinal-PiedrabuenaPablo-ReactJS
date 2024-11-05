import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import CartCounterProvider from "./context/CartCounterContext"
/* import './index.css' */

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <CartCounterProvider>
      <App />
    </CartCounterProvider>
    </StrictMode>
  </BrowserRouter>
)
