import '../../App.css'
import { useNavigate } from 'react-router-dom'
import ArticuloCarrito from "./ArticuloCarrito"
import ResumenCompra from "./ResumenCompra"
import { collection, getDocs, query, where } from "firebase/firestore"
import BBDD from "../../config/firebase"
import { useEffect, useState } from 'react'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Carrito =()=>{
    const [items, setItems] = useState([])
    const [totales, setTotales] = useState([])
    const { usuario } = useContext(UserContext)

    useEffect(() => {
            const collectionsRef = collection(BBDD.db, "carrito")
            const filtroQuery = query(collectionsRef, where("idUsuario", "==", usuario.idUsuario))    
            getDocs(filtroQuery)
                .then((snapshot) => {
                    const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                    setItems(list)
                })
            .catch((error) => {
                /* console.error("Error getting documents: ", error) */
            })
        }, [])
    return (
        <>
            <section className="seccion-carrito">
                <article className="contendor-carrito">
                    <h2 className="carrito__titulo">Productos en carrito</h2>
                    {items &&
                        items.map((element) => {
                        return <ArticuloCarrito key={element.id} datosProducto={element} />
                    })}
                </article>
                <ResumenCompra datosProducto={items}/>
        </section>
        </>
    )
}

export default Carrito