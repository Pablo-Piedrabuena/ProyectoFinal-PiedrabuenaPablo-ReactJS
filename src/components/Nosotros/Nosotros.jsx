/* import './Inicio.css'*/

import CardUno from "../Cards/CardUno.jsx"
import CardDos from "../Cards/CardDos.jsx" 
import CardTres from "../Cards/CardTres.jsx"
import CardCuatro from "../Cards/cardCuatro.jsx"
const Nosotros =()=>{
    return (
        <>
        <h1>Nuestra Empresa</h1>
        <CardUno titulo="Calidad" descripcionUno="La calidad es una característica indiscutible de Lácteos Nogolac y un valor que cuidamos desde el inicio del proceso hasta llegar a la mesa del cliente. Se realizan controles microbiológicos y nuestra fábrica posee una gestión de calidad que cumple con los requisitos estrictos de los controles Bromatológicos supervisados por los Organismos Gubernamentales pertinentes." imgsrc="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/Cards%2Fcalidad.jpg?alt=media&token=b6c2edd4-d8e9-4b2c-a165-217142637dab"/>
        <CardTres/>
        <CardUno titulo="Nuestro Desafío" descripcionUno="Lácteos Nogolac es una PyME Regional con proyección Nacional enfocada en mejorar nuestros procesos productivos incorporando para ello la mejor Tecnología en la elaboración, envasados y presentación de nuestros productos lácteos." imgsrc="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/Cards%2Ffabrica.jpg?alt=media&token=571a779b-acf1-4a57-b801-2a6d99e45c74"/>
        <CardDos titulo="Mejora Continua" descripcionUno="Nuestra política de producción siempre apunta a la mejora continua y sostenida que se apoya como pilar básico en la re-inversión que hacemos y el apoyo de los clientes que ya nos eligen." imgsrc="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/Cards%2Fproduccion-mejora.jpg?alt=media&token=9861422d-19a0-4e23-a91c-126543e7d6d4"/>
        <CardCuatro/>
        </>
    )
}

export default Nosotros