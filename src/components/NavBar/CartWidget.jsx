import { increment } from 'firebase/firestore';
import '../../App.css'
import { CartCounterContext } from "../../context/CartCounterContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
/* import imgCarrito from './assets/carrito.svg' */
/* import imgCarrito2 from '/components/NavBar/assets/carrito.svg' */


const CartWidget =()=>{
    const navigate = useNavigate()
    const handleClick= (event) => {
        navigate('/carrito')
    }

    const { cartCounter } = useContext(CartCounterContext)
    const { increment } = useContext(CartCounterContext)
    return (
        <>
            {/* <button onClick={increment}>CC</button> */}
            <div className='carrito__nav-ecomerce' onClick={handleClick}>
                {/* <img src="./src/components/NavBar/assets/carrito.svg" alt="carrito" /> */}
                <img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/iconos%2Fcarrito.svg?alt=media&token=4e1ef06c-b9d8-4c3d-8e81-4a1958a56bd8" alt="carrito" />
                <span>{cartCounter}</span>
            </div>
        </>
    )
}

export default CartWidget