import '../ProductoItem/ProductoItem.css'
import { useNavigate } from 'react-router-dom'
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const SinTock = () =>{
    return (
        <>
            <div className="sin-stock">
                <p>Sin stock</p>
            </div>
        </>
        
    )
}

const ProductoItem =({datosProducto})=>{
    const params = useParams() 
    const navigate = useNavigate()
    const handleClick= (event) => {
        if (params.categonia===undefined){
            let ruta = datosProducto.categoria + "/" + datosProducto.id
            navigate(ruta)
            console.log("1")
        }else {
            let ruta = datosProducto.id
            navigate(ruta)
            console.log("2")
        }
        return (
            <ItemDetailContainer></ItemDetailContainer>
        )
    }

    return (
        <>
            <article className="productos__item" id={datosProducto.id}>
                    <figure>
                        <img src={datosProducto.img}/>
                        <figcaption><strong>{datosProducto.nombre}</strong></figcaption>
                    </figure>
                    <div className="item-infoProducto">
                        <p className="infoProducto-descripcion">{datosProducto.descripción}</p>
                        <p className="infoProducto-stock">Stock Disponible: {datosProducto.stock}</p>
                        <p className="infoProducto-precio">${datosProducto.precio.toFixed(2)}</p>
                        <p className="infoProducto-id">{datosProducto.id}</p>
                        <button type="boton" className="comprar" onClick={handleClick}>Comprar</button>
                    </div>
                    {datosProducto.stock === 0 ? <SinTock /> : null}
                {/* {item.stock==0 return <SinTock/>)       */}          
            </article>
        </>
    )
}

export default ProductoItem