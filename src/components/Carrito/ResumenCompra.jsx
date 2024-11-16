import '../../App.css'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { doc, updateDoc, getDoc  } from "firebase/firestore"
import BBDD from "../../config/firebase"
/* import { CartCounterContext } from "../../context/CartCounterContext" */
/* import { useNavigate } from 'react-router-dom' */
import { CartCounterContext } from "../../context/CartCounterContext"
import { useEffect, useState } from 'react'
import Carrito from './Carrito'

const ResumenCompra =({datosProducto, onVaciarCarrito})=>{
    const { usuario } = useContext(UserContext)
    let { carrito,setCarrito } = useContext(CartCounterContext)
    const { cartCounter } = useContext(CartCounterContext)
    const { cartImporte } = useContext(CartCounterContext)
    const [validaDatos, setValidaDatos] = useState(false)

    const validaProcesoCompra = () =>{
        const nombre = document.getElementById('nombre')
        const apellido = document.getElementById('apellido')
        const dni = document.getElementById('dni')
        const entrega = document.querySelector('input[name="pago"]:checked')
        const pago = document.querySelector('input[name="pago"]:checked')

        if (nombre.value.trim() !== '' && apellido.value.trim() !== '' && dni.value.trim() !== '' && entrega !== null && pago !== null) {
            setValidaDatos(true)
        } else{
            setValidaDatos(false)
        }        
    }
    const terminarCompra =  () =>{
        carrito.forEach(async (el)  => {
            const docRef = doc(BBDD.db, "productos", el.id)
            const docSnap =  await getDoc(docRef)
            const newStock = docSnap.data().stock - el.cantidad
            updateDoc(docRef, {
                stock: newStock,
            })
        })
        onVaciarCarrito()
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "¡Gracias por su compra!",
            text: "¡Uno de nuestros asesores de ventas se estará comunicando con usted para concluir el proceso!",
            /* showConfirmButton: false, */
           /*  timer: 1500 */
        })
    }

    useEffect(() => {
        validaProcesoCompra()
    }, [])
    return (
        <>
            
            <article className="contendor-resumen-compra">
                    <h2>Resumen de Compra</h2>
                    <p className="resumen-compra__total-prodcutos">Total Productos: {parseInt(cartCounter).toFixed(2)} </p>
                    <p className="resumen-compra__importe-total">Importe Total: $ {parseFloat(cartImporte).toFixed(2)}</p>
                    {/* <hr className='linea-separadora'/> */}
                    <div className="datos-personales">
                        <details className='datos-personales__grupo' onChange={validaProcesoCompra}>
                            <summary>Datos Personales</summary>
                                <label htmlFor="nombre">Nombre*</label>
                                <input type="text" id="nombre" name="nombre" defaultValue={usuario.nombre} required/>
                                <label htmlFor="apellido">Apellido*</label>
                                <input type="text" id="apellido" name="nombre" defaultValue={usuario.apellido} required/>
                                <label htmlFor="dni">D.N.I.*</label>
                                <input type="text" id="dni" name="dni" defaultValue={usuario.dni} required/>
                        </details>
                        <details className='datos-personales__grupo' onChange={validaProcesoCompra}>
                            <summary>Datos de Entrega</summary>
                            <div className="flex-container">
                                <input  type="radio" id="entrega__retiro-planta" name="entrega" defaultValue="retiro-plata" defaultChecked></input>
                                <label htmlFor="entrega__retiro-planta">Retiro de planta</label>
                            </div>
                            <div className="flex-container">
                                <input type="radio" id="entrega__domicilio" name="entrega" defaultValue="entrega__domicilio"></input>
                                <label htmlFor="entrega__domicilio">Entrega a domicilio</label>
                            </div>
                        </details>
                        <details className='datos-personales__grupo' onChange={validaProcesoCompra}>
                            <summary>Forma de Pago</summary>
                            <div className="flex-container">
                                <input  type="radio" id="pago__efectivo" name="pago" defaultValue="pago__efectivo" defaultChecked></input>
                                <label htmlFor="pago__efectivo">Efectivo</label>
                            </div>
                            <div className="flex-container">
                                <input type="radio" id="pago__transferencia" name="pago" defaultValue="pago__transferencia"></input>
                                <label htmlFor="pago__transferencia">Transferencia</label>
                            </div>
                        </details>
                        {/* <details className='datos-personales__grupo'>
                            <summary>Datos de Entrega</summary>
                            <div className="flex-container">
                                <input  type="radio" id="form-entrega__retiro-planta" name="entrega" defaultValue="retiro-plata"></input>
                                <label htmlFor="form-entrega__retiro-planta">Retiro de planta</label>
                            </div>
                            <div className="flex-container">
                                <input type="radio" id="form-entrega__entrega-domicilio" name="entrega" defaultValue="entrega-domicilio"></input>
                                <label htmlFor="form-entrega__entrega-domicilio">Entrega a domicilio</label>
                            </div>
                        </details>
                        <details className='datos-personales__grupo'>
                            <summary>Forma de Pago</summary>
                            <div className="flex-container">
                                <input  type="radio" id="form-entrega__retiro-planta" name="pago" defaultValue="retiro-plata"></input>
                                <label htmlFor="form-entrega__retiro-planta">Efectivo</label>
                            </div>
                            <div className="flex-container">
                                <input type="radio" id="form-entrega__entrega-domicilio" name="pago" defaultValue="entrega-domicilio"></input>
                                <label htmlFor="form-entrega__entrega-domicilio">Transferencia</label>
                            </div>
                        </details> */}
                    </div>
                    <hr className='linea-separadora'/>
                    <button className="resumen-compra__boton" disabled={!validaDatos} onClick={terminarCompra} >Continuar Compra</button>
            </article>
        </>
    )
}

export default ResumenCompra