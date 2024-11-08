import '../../App.css'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
/* import { useNavigate } from 'react-router-dom' */

const ResumenCompra =({datosProducto})=>{
    const { usuario } = useContext(UserContext)
    let totalProductos=0
    let importeTotalCompra=0
    {totalProductos = datosProducto.reduce((acumulador, producto) => {
        return acumulador + producto.cantidad
    }, 0)
    }
    {importeTotalCompra = datosProducto.reduce((acumulador, producto) => {
        return acumulador + producto.total
    }, 0)
    }

    return (
        <>
            
            <article className="contendor-resumen-compra">
                    <h2>Resumen de Compra</h2>
                    <p className="resumen-compra__total-prodcutos">Total Productos: {totalProductos.toFixed(2)} </p>
                    <p className="resumen-compra__importe-total">Importe Total: ${importeTotalCompra.toFixed(2)}</p>
                    {/* <hr className='linea-separadora'/> */}
                    <div className="datos-personales">
                        <details className='datos-personales__grupo'>
                            <summary>Datos Personales</summary>
                                <label htmlFor="nombre">Nombre*</label>
                                <input type="text" id="nombre" name="nombre" defaultValue={usuario.nombre} required/>
                                <label htmlFor="apellido">Apellido*</label>
                                <input type="text" id="apellido" name="nombre" defaultValue={usuario.apellido} required/>
                                <label htmlFor="dni">D.N.I.*</label>
                                <input type="text" id="apellido" name="dni" defaultValue={usuario.dni} required/>
                        </details>
                        <details className='datos-personales__grupo'>
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
                                <input  type="radio" id="form-entrega__retiro-planta" name="entrega" defaultValue="retiro-plata"></input>
                                <label htmlFor="form-entrega__retiro-planta">Efectivo</label>
                            </div>
                            <div className="flex-container">
                                <input type="radio" id="form-entrega__entrega-domicilio" name="entrega" defaultValue="entrega-domicilio"></input>
                                <label htmlFor="form-entrega__entrega-domicilio">Transferencia</label>
                            </div>
                        </details>
                    </div>
                    <hr className='linea-separadora'/>
                    <button className="resumen-compra__boton">Continuar Compra</button>
            </article>
        </>
    )
}

export default ResumenCompra