import '../../App.css'
import { useNavigate } from 'react-router-dom'
import { doc, deleteDoc } from "firebase/firestore";
import BBDD from "../../config/firebase";
const ArticuloCarrito =({datosProducto, itemId})=>{
    async function eliminarDocumento() {
        try {
          const docRef = doc(BBDD.db, "carrito", itemId);
          await deleteDoc(docRef);
        } catch (error) {
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
                <p className="articulo__boton-cantidad">Cantidad: {datosProducto.cantidad}</p>
                <button className="articulo__boton-eliminar" onClick={eliminarDocumento}><img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/iconos%2Feliminar.svg?alt=media&token=7c0e528c-8c55-4229-b87c-b20b94a9cce3" alt=""/></button>
                <p className="articulo__total">${datosProducto.total.toFixed(2)}</p>
            </div>
        </>
    )
}

export default ArticuloCarrito