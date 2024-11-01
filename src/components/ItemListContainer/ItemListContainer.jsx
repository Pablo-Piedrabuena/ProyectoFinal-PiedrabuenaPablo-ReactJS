import '../../App.css'
import ProductoItem from "../ProductoItem/ProductoItem"
import NavBarCategoria from "../NavBarCategoria/NavBarCategoria"
import {Routes, Route} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import BBDD from "../../config/firebase";

const ItemListContainer =(props)=>{
    const params = useParams() 
    const [items, setItems] = useState([])
    
    useEffect(() => {
        if (params.categonia===undefined){
            try {
                const collectionsRef = collection(BBDD.db, "productos")
                getDocs(collectionsRef).then((snaps) => {
                const { docs } = snaps
                const list = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setItems(list)
                })
            } catch(error) {
                alert("Error al Cargar Productos" + error)
            }
        }else if(params.categonia!==undefined){
            const collectionsRef = collection(BBDD.db, "productos")
            getDocs(collectionsRef).then((snaps) => {
            const { docs } = snaps
            const list = docs.filter(doc => doc.data().categoria == params.categonia)
                .map(doc => ({ ...doc.data(), id: doc.id }))
            setItems(list)
            })
        }else{
        }
        
    }, [])
    return (
        <>
            <h1 className='titulo-principal'>{props.titulo}</h1>
            <NavBarCategoria/>
            <section className="galeria__productos">
                {items &&
                    items.map((element) => {
                    return <ProductoItem key={element.id} datosProducto={element} />
                })}
            </section>
        </>
    )
}

export default ItemListContainer