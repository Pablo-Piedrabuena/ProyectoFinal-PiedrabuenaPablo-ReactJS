
import CardUno from "../Cards/CardUno.jsx"
import CardDos from "../Cards/CardDos.jsx"
/* import imgOficina from '../components/Cards/assets/oficina.png' */
const Inicio =()=>{
    return (
        <>
        <h1>Quienes Somos</h1>
        {/* <CardUno titulo="La Empresa" descripcionUno="Nogolac es una PyME ubicada en la localidad de Nogoyá, Provincia de Entre Ríos, con proyección Nacional." descripcionDos="Nuestra producción se concentra principalmente en la elaboración de quesos, ricota, crema y mantecas. El sistema de producción utilizado respeta estrictas normas de cuidado y protección del medioambiente." imgsrc="/src/components/Cards/assets/oficina.png"/> */}
        <CardUno titulo="La Empresa" descripcionUno="Nogolac es una PyME ubicada en la localidad de Nogoyá, Provincia de Entre Ríos, con proyección Nacional." descripcionDos="Nuestra producción se concentra principalmente en la elaboración de quesos, ricota, crema y mantecas. El sistema de producción utilizado respeta estrictas normas de cuidado y protección del medioambiente." imgsrc="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/Cards%2Foficina.png?alt=media&token=fe5f2f3d-1f04-4b4c-bf3b-afbf0d92e1e3"/>
        <CardDos titulo="Compromiso" descripcionUno="Nos comprometemos en trabajar con ética, responsabilidad y compromiso para brindar a los consumidores productos de óptima calidad y seguridad alimentaria." imgsrc="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/Cards%2Fproduccion.jpg?alt=media&token=a4c58b6b-9c39-4b54-b2f7-45a8f8c8c9da"/>
        </>
    )
}

export default Inicio