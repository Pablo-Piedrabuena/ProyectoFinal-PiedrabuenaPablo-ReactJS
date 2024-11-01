
import './ItemDetailContainer.css'
/* import ProductoItem from "../ProductoItem/ProductoItem" */
/* import NavBarCategoria from "../NavBarCategoria/NavBarCategoria" */
/* import {Routes, Route} from 'react-router-dom' */
/* import { useParams } from "react-router-dom"; */
/* import { useEffect, useState } from 'react'; */
/* import ItemListContainer from "../ItemListContainer/ItemListContainer" */

/* import './ItemListContainer.css' */
/* import ProductoItem from "../ProductoItem/ProductoItem"
import NavBarCategoria from "../NavBarCategoria/NavBarCategoria"
import {Routes, Route} from 'react-router-dom' */
/* import { useParams } from "react-router-dom"; */
import { useEffect, useState } from 'react';
/* import { collection, getDocs } from "firebase/firestore"; */
import { doc, getDoc } from "firebase/firestore";
import BBDD from "../../config/firebase";
import { useParams } from "react-router-dom";


const ItemDetailContainer =(props)=>{
    const params = useParams() 
    const [item, setItem] = useState(null)
    const [inputValue, setinputValue] = useState('')

    const handleChange = (event) => {
        const newValue = parseInt(event.target.value)
        if (newValue > 0 && !isNaN(newValue) && newValue <= item.stock){
            setinputValue(newValue);
            if (newValue >= item.stock){
                console.log("La Cantidad Ingresada es " + newValue)
            }
            
        }else{
            console.log("La Pucha")
            setinputValue(newValue);
        }
    }
    useEffect(() => {
        const docRef = doc(BBDD.db, "productos", params.itemID);
        getDoc(docRef).then((snap) => {
        setItem(snap.data())
    });
    }, []);

    return (
        <>
        {item && (
        <>
            <section className="itemDetailContainer">
                <div className="agregarProducto-Carrito__ConetenedorImagen ">
                    <img src={item.img} alt="" className="agregarProducto-Carrito__item" />
                </div>
                <form className="agregarProducto-Carrito__Conetenedorform">
                    <h3 className="agregarProducto-Carrito__item" >{item.nombre}</h3>
                    <p className="agregarProducto-Carrito__item precio">Importe: ${item.precio.toFixed(2)}</p>
                    <p className="agregarProducto-Carrito__item">{item.descripcion}</p>
                    <div className="cantidad-disponible">
                        <p className="agregarProducto-Carrito__item cantidad-disponible">Cantidad Disponible: {item.stock}</p>
                    </div>
                    <div className="cantidad-comprar">
                        <label htmlFor="cantidad" className="agregarProducto-Carrito__item">Cantidad:</label>
                        <input type="number" id="cantidad" className="agregarProducto-Carrito__item" min="1" onChange={handleChange}  max={item.stock}></input>
                        {item.stock < inputValue ? <p className='icon-advertencia'><span className="fa-solid fa-circle-exclamation"></span> Sin stock</p> : null}
                    </div>
                    {item.stock >= inputValue ? <button className="Conetenedorform__agregar-carrito">Agregar al carrito</button> : null}
                    
                </form>
            </section>
          {/* <p>Nombre: {item.description}</p>
          <p>precio: {item.price}</p> */}
        </>
        )}
            {/* <section className="itemDetailContainer">
                <div className="agregarProducto-Carrito__ConetenedorImagen ">
                    <img src={item.img} alt="" className="agregarProducto-Carrito__item" />
                </div>
                <form className="agregarProducto-Carrito__Conetenedorform">
                    <h3 className="agregarProducto-Carrito__item" >Crema de leche en Balde</h3>
                    <p className="agregarProducto-Carrito__item precio">$5.245.28</p>
                    <p className="agregarProducto-Carrito__item">Precio por Balde de 5 Lts.</p>
                    <div className="cantidad-disponible">
                        <p className="agregarProducto-Carrito__item cantidad-disponible">Cantidad Disponible:</p>
                        <p className="agregarProducto-Carrito__item">100.</p>
                    </div>
                    <div className="cantidad-comprar">
                        <label htmlFor="cantidad" className="agregarProducto-Carrito__item">Cantidad:</label>
                    </div>
                    <button className="Conetenedorform__agregar-carrito">Agregar al carrito</button>
                </form>
            </section> */}
        </>
    )
}

export default ItemDetailContainer

