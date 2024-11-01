
import '../Inicio/inicio.css'
import CardUno from "../Cards/CardUno.jsx"
import CardDos from "../Cards/CardDos.jsx"
import imgOficina from './components/Cards/assets/oficina.png'
const Inicio =()=>{
    return (
        <>
        <h1>Quienes Somos</h1>
        {/* <CardUno titulo="La Empresa" descripcionUno="Nogolac es una PyME ubicada en la localidad de Nogoyá, Provincia de Entre Ríos, con proyección Nacional." descripcionDos="Nuestra producción se concentra principalmente en la elaboración de quesos, ricota, crema y mantecas. El sistema de producción utilizado respeta estrictas normas de cuidado y protección del medioambiente." imgsrc="/src/components/Cards/assets/oficina.png"/> */}
        <CardUno titulo="La Empresa" descripcionUno="Nogolac es una PyME ubicada en la localidad de Nogoyá, Provincia de Entre Ríos, con proyección Nacional." descripcionDos="Nuestra producción se concentra principalmente en la elaboración de quesos, ricota, crema y mantecas. El sistema de producción utilizado respeta estrictas normas de cuidado y protección del medioambiente." imgsrc={imgOficina} />
        <CardDos titulo="Compromiso" descripcionUno="Nos comprometemos en trabajar con ética, responsabilidad y compromiso para brindar a los consumidores productos de óptima calidad y seguridad alimentaria." imgsrc="/src/components/Cards/assets/produccion.jpg"/>
        </>
    )
}

export default Inicio