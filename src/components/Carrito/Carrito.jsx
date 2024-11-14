import '../../App.css'
import { useNavigate } from 'react-router-dom'
import ArticuloCarrito from "./ArticuloCarrito"
import ResumenCompra from "./ResumenCompra"
import { collection, getDocs, query, where } from "firebase/firestore"
import BBDD from "../../config/firebase"
import { useEffect, useState } from 'react'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { CartCounterContext} from "../../context/CartCounterContext"

const Carrito =()=>{
    const [items, setItems] = useState([])
    const [totales, setTotales] = useState([])
    const { usuario } = useContext(UserContext)
    /* let { carrito,setCarrito } = useContext(CartCounterContext) */
    let { carrito } = useContext(CartCounterContext)
    let { setCarrito } = useContext(CartCounterContext)
    /* let importeTotalCompra=0
    let totalProductos=0
    {totalProductos = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.cantidad
    }, 0)
    }
    {importeTotalCompra = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.totalCompra
    }, 0)
    } */
    const eliminarProducto = (itemId) =>{
        const carritoActualizado = carrito.filter(el => el.id !== itemId)
        setCarrito(carritoActualizado)
        localStorage.setItem("carrito", JSON.stringify(carritoActualizado))
        /* localStorage.setItem("carrito", JSON.stringify(carritoActualizado)) */
        /* setCarrito(JSON.parse(localStorage.getItem("carrito")) || []) */
        setItems(carritoActualizado)
        
    }
    useEffect(() => {
            setCarrito(JSON.parse(localStorage.getItem("carrito")) || [])
            setItems(carrito)
        }, [])
    return (
        <>
            <section className="seccion-carrito">
                <article className="contendor-carrito">
                    <h2 className="carrito__titulo">Productos en carrito</h2>
                    {items &&
                        items.map((element) => {
                        return <ArticuloCarrito key={element.id} itemId={element.id} itemStock={element.stock} itemCantidad={element.cantidad} datosProducto={element} onEliminarProducto={eliminarProducto}/>
                    })}
                </article>
                <ResumenCompra datosProducto={items}/>
        </section>
        </>
    )
}

export default Carrito