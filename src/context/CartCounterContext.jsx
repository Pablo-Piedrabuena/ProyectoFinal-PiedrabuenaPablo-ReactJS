import { createContext, useEffect, useState } from "react";
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { collection, getDocs, query, where } from "firebase/firestore"
import BBDD from "../config/firebase"
export const CartCounterContext = createContext(null);

const CartCounterProvider = ({ children }) => {
    const [cartCounter, setcartCounter] = useState(0);
    const { usuario } = useContext(UserContext)
    let totalProductos=0
    useEffect(() => {
        const collectionsRef = collection(BBDD.db, "carrito")
        const filtroQuery = query(collectionsRef, where("idUsuario", "==", usuario.idUsuario))    
        getDocs(filtroQuery)
            .then((snapshot) => {
                const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                /* setItems(list) */
                {totalProductos = list.reduce((acumulador, producto) => {
                    return acumulador + producto.cantidad
                }, 0)}
                setcartCounter(totalProductos)
                /* alert(totalProductos) */
            })
        .catch((error) => {
            /* console.error("Error getting documents: ", error) */
        })
    }, [])

    const increment = () => {
        setcartCounter(cartCounter + 1000);
        console.log(cartCounter)
    };

    const value = {
        cartCounter,
        setcartCounter,
        increment,
    };

    return (
        <CartCounterContext.Provider value={value}>{children}</CartCounterContext.Provider>
        );
}; // HOC va a proveer a todo lo que sea children

export default CartCounterProvider;