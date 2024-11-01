import '../../App.css'
/* import imgCarrito from './assets/carrito.svg' */
/* import imgCarrito2 from '/components/NavBar/assets/carrito.svg' */
const CartWidget =()=>{
    return (
        <>
            <div className='carrito__nav-ecomerce'>
                {/* <img src="./src/components/NavBar/assets/carrito.svg" alt="carrito" /> */}
                <img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/iconos%2Fcarrito.svg?alt=media&token=4e1ef06c-b9d8-4c3d-8e81-4a1958a56bd8" alt="carrito" />
                <span>1500</span>
            </div>
        </>
    )
}

export default CartWidget