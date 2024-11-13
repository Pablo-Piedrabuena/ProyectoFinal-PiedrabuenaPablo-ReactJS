import { createContext, useEffect, useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import BBDD from "../config/firebase"

export const CartCounterContext = createContext(null)
/* let carrito = JSON.parse(localStorage.getItem("carrito")) || [] */
const CartCounterProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0)
    const { usuario } = useContext(UserContext)
    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || [])
    useEffect(() => {
        const totalProductos = carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)
        setCartCounter(totalProductos)
}, [carrito])

const value = {
    cartCounter,
    carrito,
    setCarrito
  }

  return (
    <CartCounterContext.Provider value={value}>{children}</CartCounterContext.Provider>
  )
}

export default CartCounterProvider