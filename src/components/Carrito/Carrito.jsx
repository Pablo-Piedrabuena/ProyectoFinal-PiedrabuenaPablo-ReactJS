import '../../App.css'
import { useNavigate } from 'react-router-dom'
import ArticuloCarrito from "./ArticuloCarrito"
import ResumenCompra from "./ResumenCompra"
import { collection, getDocs } from "firebase/firestore"
import BBDD from "../../config/firebase"
import { useEffect, useState } from 'react'
/* import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"; */


const Carrito =()=>{
    const [items, setItems] = useState([])
    const [totales, setTotales] = useState([])
    useEffect(() => {
        try {
            const collectionsRef = collection(BBDD.db, "carrito")
            getDocs(collectionsRef).then((snaps) => {
            const { docs } = snaps
            const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setItems(list)
        })
        } catch(error) {
            alert("Error al Cargar Productos" + error)
        }
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