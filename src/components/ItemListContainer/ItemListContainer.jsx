import './ItemListContainer.css'
import ProductoItem from "../ProductoItem/ProductoItem"
import NavBarCategoria from "../NavBarCategoria/NavBarCategoria"
import {Routes, Route} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
var productos=[
    {
        "id":1,
        "nombre":"Queso Cremoso",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 5165.94,
        "stock": 70,
        "img":"/src/assets/productos/cremoso.png"
    },
    {
        "id":2,
        "nombre":"Queso Cremoso Pizzero Hilado",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 5062,
        "stock": 55,
        "img":"/src/assets/productos/cremoso-pizzero-hilado.png"
    },
    {
        "id":3,
        "nombre":"Queso Magro - Media Horma",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 6020,
        "stock": 80,
        "img":"/src/assets/productos/magro.png"
    },
    {
        "id":4,
        "nombre":"Queso Por Salut",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 5733,
        "stock": 90,
        "img":"/src/assets/productos/por-salut.png"
    },
    {
        "id":5,
        "nombre":"Queso Mozzarella Cilindro Hilada",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 6198,
        "stock": 100,
        "img":"/src/assets/productos/mozzarella-cilindro-hilada.png"
    },
    {
        "id":6,
        "nombre":"Queso Mozzarella Hilada Para Fetear",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 7031,
        "stock": 100,
        "img":"/src/assets/productos/mozzarella-hilada-barra.png"
    },
    {
        "id":7,
        "nombre":"Queso Tybo",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 6697,
        "stock": 100,
        "img":"/src/assets/productos/tybo.png"
    },
    {
        "id":8,
        "nombre":"Queso Colonia",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 10000,
        "stock": 100,
        "img":"/src/assets/productos/colonia.png"
    },
    {
        "id":9,
        "nombre":"Queso Holanda",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 9500,
        "stock": 100,
        "img":"/src/assets/productos/holanda.png"
    },
    {
        "id":10,
        "nombre":"Queso Reggianito",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 9300,
        "stock": 100,
        "img":"/src/assets/productos/reggianito.png"
    },
    {
        "id": 11,
        "nombre":"Queso Sardo",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 9168,
        "stock": 100,
        "img":"/src/assets/productos/sardo.png"
    },
    {
        "id": 12,
        "nombre":"Queso Azul",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 8942,
        "stock": 100,
        "img":"/src/assets/productos/queso-azul.png"
    },
    {
        "id": 13,
        "nombre":"Ricotta Semi Magra",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 1435,
        "stock": 100,
        "img":"/src/assets/productos/ricotta.png"
    },
    {
        "id": 14,
        "nombre":"Salsa Queso Azul en Pouch",
        "descripción": "Precio por Pouch de 3 Lts.",
        "categoria":"queso",
        "precio": 12141,
        "stock": 100,
        "img":"/src/assets/productos/salsa-queso-azul-pouch.png"
    },
    {
        "id": 15,
        "nombre":"Salsa Cheddar en Pouch",
        "descripción": "Precio por Pouch de 3 Lts.",
        "categoria":"queso",
        "precio": 11787,
        "stock": 100,
        "img":"/src/assets/productos/salsa-cheddar-pouch.png"
    },
    {
        "id": 16,
        "nombre":"Rallado Nogolac en Sobre",
        "descripción": "Precio por sobre 30 gr.",
        "categoria":"queso",
        "precio": 302,
        "stock": 100,
        "img":"/src/assets/productos/rallado-sobre.png"
    },
    {
        "id": 17,
        "nombre":"Crema de leche en Balde",
        "descripción": "Precio por Balde de 5 Lts.",
        "categoria": "crema",
        "precio": 27840,
        "stock": 100,
        "img":"/src/assets/productos/crema-leche-balde.png"
    },
    {
        "id": 18,
        "nombre":"Crema de leche en Pote",
        "descripción": "Precio por Pote 360 cc.",
        "categoria":"crema",
        "precio": 1200,
        "stock": 100,
        "img":"/src/assets/productos/crema-leche-pote.png"
    },
    {
        "id": 19,
        "nombre":"Crema de leche en Pouch",
        "descripción": "Precio por Pouch de 3 Lts.",
        "categoria":"crema",
        "precio": 15738,
        "stock": 100,
        "img":"/src/assets/productos/crema-leche-pouch.png"
    },
    {
        "id": 20,
        "nombre":"Manteca en Pan",
        "descripción": "Precio por pan 200 gr.",
        "categoria":"manteca",
        "precio": 890,
        "stock": 100,
        "img":"/src/assets/productos/manteca-pan.png"
    },
    {
        "id":21,
        "nombre":"Leche Entera",
        "descripción": "Precio por unidad.",
        "categoria": "leche",
        "precio": 1200,
        "stock": 100,
        "img":"/src/assets/productos/leche-entera.png"
    }
]

const ItemListContainer =({titulo})=>{
    const params = useParams() 
    const [productosBBDD, setProductosBBDD] = useState(0)
    useEffect(()=>{
        if (params.categonia===undefined){
            setProductosBBDD(productos)
        }else if(params.categonia!==undefined){
            setProductosBBDD(productos.filter(producto => producto.categoria == params.categonia))
        }else{
        }
        }, [params.categonia])
    return (
        <>
            <h1 className='titulo-principal'>{titulo}</h1>
            <NavBarCategoria/>
            <section className="galeria__productos">
                {productosBBDD &&
                    productosBBDD.map((element) => {
                    return <ProductoItem key={element.id} datosProducto={element} />
                })}
            </section>
        </>
    )
}

export default ItemListContainer