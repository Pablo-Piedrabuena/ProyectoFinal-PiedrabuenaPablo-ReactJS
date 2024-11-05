import '../../App.css'
import { useNavigate } from 'react-router-dom'
/* import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"; */


const Carrito =()=>{
    /* const params = useParams() 
    const navigate = useNavigate()
    const handleClick= (event) => {
        if (datosProducto.stock > 0){
            if (params.categonia===undefined){
                let ruta = datosProducto.categoria + "/" + datosProducto.id
                navigate(ruta)
            }else {
                let ruta = datosProducto.id
                navigate(ruta)
                console.log("2")
            }
            return (
                <ItemDetailContainer idproducto={datosProducto.id}></ItemDetailContainer>
            )
        }
    } */

    return (
        <>
            <section className="seccion-carrito">
                <article className="contendor-carrito">
                    <h2 className="carrito__titulo">Productos en carrito</h2>


                    <div>
                        <div class="carrito-articulo">
                            <div className="articulo__contenedor-imagen">
                                <img className="contenedor-imagen__imagen" src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/crema-leche-balde.png?alt=media&token=027d27ab-9dc2-4ecc-bb90-a13e2ebc78b4" alt=""/>
                            </div>
                            <div className="articulo__contenedor-descripcion">
                                <h3 className="contenedor-descripcion__nombre-producto">PPPPP</h3>
                                <p className="contenedor-descripcion__descripcion-producto">$800</p>
                            </div>
                            <p className="articulo__boton-cantidad">Cantidad: 150</p>
                            <button className="articulo__boton-eliminar"><img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/iconos%2Feliminar.svg?alt=media&token=7c0e528c-8c55-4229-b87c-b20b94a9cce3" alt=""/></button>
                            <p className="articulo__precio">$1555</p>
                        </div>
                    </div>




                </article>
                <article className="contendor-resumen-compra">
                    <h2>Resumen de Compra</h2>
                    <p className="resumen-compra__total-prodcutos">Total Productos: 100.000</p>
                    <p className="resumen-compra__importe-total">Importe Total: $100.000.000,00</p>
                    <button className="resumen-compra__boton">Continuar Compra</button>
                </article>
        </section>
        </>
    )
}

export default Carrito