/* import {doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react"; */
import {addDoc, collection } from "firebase/firestore";
import BBDD from "../config/firebase";

var productos=[
    {
        "nombre":"Queso Cremoso",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 5165.94,
        "stock": 70,
        "img":"/src/assets/productos/cremoso.png"
    },
    {
        "nombre":"Queso Cremoso Pizzero Hilado",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 5062,
        "stock": 55,
        "img":"/src/assets/productos/cremoso-pizzero-hilado.png"
    },
    {
        "nombre":"Queso Magro - Media Horma",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 6020,
        "stock": 80,
        "img":"/src/assets/productos/magro.png"
    },
    {
        "nombre":"Queso Por Salut",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 5733,
        "stock": 90,
        "img":"/src/assets/productos/por-salut.png"
    },
    {
        "nombre":"Queso Mozzarella Cilindro Hilada",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 6198,
        "stock": 100,
        "img":"/src/assets/productos/mozzarella-cilindro-hilada.png"
    },
    {
        "nombre":"Queso Mozzarella Hilada Para Fetear",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 7031,
        "stock": 100,
        "img":"/src/assets/productos/mozzarella-hilada-barra.png"
    },
    {
        "nombre":"Queso Tybo",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 6697,
        "stock": 100,
        "img":"/src/assets/productos/tybo.png"
    },
    {
        "nombre":"Queso Colonia",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 10000,
        "stock": 100,
        "img":"/src/assets/productos/colonia.png"
    },
    {
        "nombre":"Queso Holanda",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 9500,
        "stock": 100,
        "img":"/src/assets/productos/holanda.png"
    },
    {
        "nombre":"Queso Reggianito",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 9300,
        "stock": 100,
        "img":"/src/assets/productos/reggianito.png"
    },
    {
        "nombre":"Queso Sardo",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 9168,
        "stock": 100,
        "img":"/src/assets/productos/sardo.png"
    },
    {
        "nombre":"Queso Azul",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 8942,
        "stock": 100,
        "img":"/src/assets/productos/queso-azul.png"
    },
    {
        "nombre":"Ricotta Semi Magra",
        "descripción": "Precio por kg",
        "categoria":"queso",
        "precio": 1435,
        "stock": 100,
        "img":"/src/assets/productos/ricotta.png"
    },
    {
        "nombre":"Salsa Queso Azul en Pouch",
        "descripción": "Precio por Pouch de 3 Lts.",
        "categoria":"queso",
        "precio": 12141,
        "stock": 100,
        "img":"/src/assets/productos/salsa-queso-azul-pouch.png"
    },
    {
        "nombre":"Salsa Cheddar en Pouch",
        "descripción": "Precio por Pouch de 3 Lts.",
        "categoria":"queso",
        "precio": 11787,
        "stock": 100,
        "img":"/src/assets/productos/salsa-cheddar-pouch.png"
    },
    {
        "nombre":"Rallado Nogolac en Sobre",
        "descripción": "Precio por sobre 30 gr.",
        "categoria":"queso",
        "precio": 302,
        "stock": 100,
        "img":"/src/assets/productos/rallado-sobre.png"
    },
    {
        "nombre":"Crema de leche en Balde",
        "descripción": "Precio por Balde de 5 Lts.",
        "categoria": "crema",
        "precio": 27840,
        "stock": 100,
        "img":"/src/assets/productos/crema-leche-balde.png"
    },
    {
        "nombre":"Crema de leche en Pote",
        "descripción": "Precio por Pote 360 cc.",
        "categoria":"crema",
        "precio": 1200,
        "stock": 100,
        "img":"/src/assets/productos/crema-leche-pote.png"
    },
    {
        "nombre":"Crema de leche en Pouch",
        "descripción": "Precio por Pouch de 3 Lts.",
        "categoria":"crema",
        "precio": 15738,
        "stock": 100,
        "img":"/src/assets/productos/crema-leche-pouch.png"
    },
    {
        "nombre":"Manteca en Pan",
        "descripción": "Precio por pan 200 gr.",
        "categoria":"manteca",
        "precio": 890,
        "stock": 100,
        "img":"/src/assets/productos/manteca-pan.png"
    },
    {
        "nombre":"Leche Entera",
        "descripción": "Precio por unidad.",
        "categoria": "leche",
        "precio": 1200,
        "stock": 100,
        "img":"/src/assets/productos/leche-entera.png"
    }
]

const AddItem = () =>{
    const AddProduct = async () =>{
        /* console.log("Click") */
        const collRef = collection (BBDD.db, "productos");
        productos.map(() =>{
            
        })
        productos.map((el)=>{
            const doc = addDoc (collRef, {
                nombre: el.nombre,
                descripción: el.descripción,
                categoria: el.categoria,
                precio: el.precio,
                stock: el.stock,
                img:el.img
                })
        })
        
    }
    return (
        <>
        <button onClick={AddProduct}>Agregar Producto</button>
        </>
    )
}
export default AddItem