import '../NavBar/NavBar.css'
/* import imgCarrito from './assets/carrito.svg' */
import imgCarrito2 from '/components/NavBar/assets/carrito.svg'
const CartWidget =()=>{
    return (
        <>
            <div className='carrito__nav-ecomerce'>
                {/* <img src="./src/components/NavBar/assets/carrito.svg" alt="carrito" /> */}
                <img src={imgCarrito2} alt="carrito" />
                <span>1500</span>
            </div>
        </>
    )
}

export default CartWidget