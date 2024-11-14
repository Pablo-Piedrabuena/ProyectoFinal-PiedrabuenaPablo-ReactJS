import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { doc, deleteDoc, updateDoc,getDoc  } from "firebase/firestore";
import { useState, useEffect  } from 'react';
import BBDD from "../../config/firebase";
import { useContext } from "react"
import { CartCounterContext} from "../../context/CartCounterContext"
const ArticuloCarrito =({datosProducto, itemId, onEliminarProducto})=>{
    /* console.log(datosProducto) */
    const [cantidadCompra, setCantidadCompra] = useState(datosProducto.cantidad)
    const [totalCompra, setTotalCompra] = useState(datosProducto.totalCompra)
    let { carrito,setCarrito } = useContext(CartCounterContext)
    const [item, setItem] = useState(null)

    async function mensajeAlarta (mensaje){
        
    }
    /* setCarrito(JSON.parse(localStorage.getItem("carrito")) || []) */
    async function eliminarDocumento() {
        Swal.fire({
            text: "¿Estas seguro de querer eliminar el producto seleccionado?",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText:"Cancelar",
            confirmButtonColor: "#135D87",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si"
        }).then((result) => {
            if (result.isConfirmed) {
                onEliminarProducto(itemId)
               /*  const carritoActualizado = carrito.filter(el => el.id !== itemId)
                localStorage.setItem("carrito", JSON.stringify(carritoActualizado)) */
                /* setCarrito(carrito) */
            }
        })
    }

    useEffect(() => {
        const docRef = doc(BBDD.db, "productos", itemId);
        getDoc(docRef).then((snap) => {
        setItem(snap.data())
    });
    }, [])
    async function incrementarCantidad() {
        /* console.log("La Cantidad a Comprar es: " + cantidadCompra + 1)
        console.log("El Stock es: " + item.stock) */
    
        if (!((cantidadCompra + 1) > item.stock)) {
            const productoEnCarrito = carrito.find(el => el.id === itemId)
            productoEnCarrito.cantidad+=1
            setCantidadCompra(cantidadCompra + 1)
            setTotalCompra(productoEnCarrito.cantidad * productoEnCarrito.precio)
            productoEnCarrito.totalCompra = productoEnCarrito.cantidad * productoEnCarrito.precio
           localStorage.setItem("carrito", JSON.stringify(carrito))
           setCarrito(JSON.parse(localStorage.getItem("carrito")) || [])
        }
        
    }

    async function reducirCantidad() {
        /* console.log("la Cantidad inicial es: " + cantidadCompra)
        console.log("La Cantidad a Comprar es: " + (cantidadCompra - 1))
        console.log("El Stock es: " + item.stock) */
        if (!((cantidadCompra - 1) <= 0)  ) {
            const productoEnCarrito = carrito.find(el => el.id === itemId)
            productoEnCarrito.cantidad-=1
            setCantidadCompra(cantidadCompra - 1)
            setTotalCompra(productoEnCarrito.cantidad * productoEnCarrito.precio)
            productoEnCarrito.totalCompra = productoEnCarrito.cantidad * productoEnCarrito.precio
           localStorage.setItem("carrito", JSON.stringify(carrito))
           setCarrito(JSON.parse(localStorage.getItem("carrito")) || [])
        }
        
    }
    return (
        <>
            <div className="carrito-articulo">
                <div className="articulo__contenedor-imagen">
                    <img className="contenedor-imagen__imagen" src={datosProducto.img} alt=""/>
                </div>
                <div className="articulo__contenedor-descripcion">
                    <h3 className="contenedor-descripcion__nombre-producto">{datosProducto.nombre}</h3>
                    <p className="contenedor-descripcion__descripcion-producto">{datosProducto.descripcion}</p>
                </div>
                {/* <p className="articulo__boton-cantidad">Cantidad: {datosProducto.cantidad}</p> */}
                <div className="articulo__contenedor-cantidad">
                    <button className="contenedor-cantidad__btn-incrementar" onClick={incrementarCantidad} >+</button>
                    {/* <input type="text" id="cantidad" name="cantidad" defaultValue={cantidadCompra} className="articulo__cantidad" value={cantidadCompra}/> */}
                    <p className="articulo__cantidad">{cantidadCompra}</p>
                    <button className="contenedor-cantidad__btn-disminuir" onClick={reducirCantidad}>-</button>
                </div>
                <button className="articulo__boton-eliminar" onClick={eliminarDocumento}><img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/iconos%2Feliminar.svg?alt=media&token=7c0e528c-8c55-4229-b87c-b20b94a9cce3" alt=""/></button>
                <p className="articulo__total">$ {parseFloat(totalCompra).toFixed(2)}</p>
            </div>
        </>
    )
}

export default ArticuloCarrito