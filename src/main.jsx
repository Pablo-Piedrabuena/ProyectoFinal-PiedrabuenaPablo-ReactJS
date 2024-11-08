import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import CartCounterProvider from "./context/CartCounterContext"
import UserContextProvider from "./context/UserContext.jsx"
/* import './index.css' */

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
    <UserContextProvider>
      <CartCounterProvider>
        <App />
      </CartCounterProvider>
    </UserContextProvider>
    </StrictMode>
  </BrowserRouter>
)
