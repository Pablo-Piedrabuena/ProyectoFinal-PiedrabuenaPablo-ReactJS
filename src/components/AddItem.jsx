
import {addDoc, collection } from "firebase/firestore";
import BBDD from "../config/firebase";

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