import { createContext, useEffect, useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { collection, query, where, onSnapshot } from "firebase/firestore"
import BBDD from "../config/firebase"

export const CartCounterContext = createContext(null)

const CartCounterProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0)
    const { usuario } = useContext(UserContext)

    useEffect(() => {
        const collectionsRef = collection(BBDD.db, "carrito")
        const filtroQuery = query(collectionsRef, where("idUsuario", "==", usuario.idUsuario))

        const consulta = onSnapshot(filtroQuery, (snapshot) => {
            const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            const totalProductos = list.reduce((acumulador, producto) => acumulador + producto.cantidad, 0)
            setCartCounter(totalProductos)
        });

    return () => consulta()
}, [usuario])

const value = {
    cartCounter,
  }

  return (
    <CartCounterContext.Provider value={value}>{children}</CartCounterContext.Provider>
  )
}

export default CartCounterProvider