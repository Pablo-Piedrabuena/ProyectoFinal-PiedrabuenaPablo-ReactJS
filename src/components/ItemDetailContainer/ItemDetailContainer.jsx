import '../../App.css'
import { useEffect, useState } from 'react';
import { doc, getDoc, addDoc, collection } from "firebase/firestore"; 

/* import { doc, getDoc, collection,addDoc } from "firebase/firestore" */
import BBDD from "../../config/firebase";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { CartCounterContext } from "../../context/CartCounterContext"


const ItemDetailContainer =(props)=>{
    

    const { usuario } = useContext(UserContext)
    let { carrito } = useContext(CartCounterContext)
    let { setCarrito } = useContext(CartCounterContext)
    const params = useParams() 
    const [item, setItem] = useState(null)
    const [inputValue, setinputValue] = useState(1)
    const navigate = useNavigate()

    const AgregarProducto = async () => {
        const productoEnCarrito = carrito.find(el => el.id === params.itemID)
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += inputValue
            productoEnCarrito.totalCompra = productoEnCarrito.cantidad * item.precio
        } else {
            carrito.push({
                id: params.itemID,
                nombre: item.nombre,
                descripción: item.descripcion,
                categoria: item.categoria,
                precio: item.precio,
                img: item.img,
                cantidad: inputValue,
                totalCompra: (inputValue * parseFloat(item.precio)).toFixed(2)
            })
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))        
        navigate('/productos')
        setCarrito(JSON.parse(localStorage.getItem("carrito")) || [])
    };
    const handleChange = (event) => {
        let newValue = parseInt(event.target.value)
        if (newValue > 0 && newValue <= item.stock){
            setinputValue(newValue)
        }else if (Number.isNaN(newValue) ){
            newValue=1
        }else{
            //NO hacer Nada
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
                <div className="agregarProducto-Carrito__Conetenedorform">
                    <h3 className="agregarProducto-Carrito__item" >{item.nombre}</h3>
                    <p className="agregarProducto-Carrito__item precio">Importe: ${item.precio.toFixed(2)}</p>
                    <p className="agregarProducto-Carrito__item">{item.descripcion}</p>
                    <div className="cantidad-disponible">
                        <p className="agregarProducto-Carrito__item cantidad-disponible">Cantidad Disponible: {item.stock}</p>
                    </div>
                    <div className="cantidad-comprar">
                        <label htmlFor="cantidad" className="agregarProducto-Carrito__item">Cantidad:</label>
                        <input type="number" id="cantidad" className="agregarProducto-Carrito__item" min={1} onChange={handleChange}  max={item.stock} value={inputValue}></input>
                        {item.stock < inputValue ? <p className='icon-advertencia'><span className="fa-solid fa-circle-exclamation"></span> Sin stock</p> : null}
                    </div>
                    {item.stock >= inputValue ? <button className="Conetenedorform__btn-Agregar" onClick={AgregarProducto}>Agregar al carrito</button> : null}
                </div>
            </section>
        </>
        )}
        </>
    )
}

export default ItemDetailContainer

