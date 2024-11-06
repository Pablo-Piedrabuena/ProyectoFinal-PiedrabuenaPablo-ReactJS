import '../../App.css'
/* import { useNavigate } from 'react-router-dom' */

const ResumenCompra =({datosProducto})=>{
    let totalProductos=0
    let importeTotalCompra=0
    return (
        <>
            {totalProductos = datosProducto.reduce((acumulador, producto) => {
                return acumulador + producto.cantidad
            }, 0)
            }
            {importeTotalCompra = datosProducto.reduce((acumulador, producto) => {
                return acumulador + producto.total
            }, 0)
            }
            <article className="contendor-resumen-compra">
                    <h2>Resumen de Compra</h2>
                    <p className="resumen-compra__total-prodcutos">Total Productos: {totalProductos.toFixed(2)} </p>
                    <p className="resumen-compra__importe-total">Importe Total: ${importeTotalCompra.toFixed(2)}</p>
                    <button className="resumen-compra__boton">Continuar Compra</button>
            </article>
        </>
    )
}

export default ResumenCompra