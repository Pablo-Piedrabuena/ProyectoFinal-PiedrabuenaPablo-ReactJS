/* import CardUno from "../Cards/CardUno.jsx"
import CardDos from "../Cards/CardDos.jsx" */
import "../Contacto/Contacto.css"
const Contacto =()=>{
    return (
        <>
        <h1>Contactanos</h1>
        {/* <h1>Contacto</h1> */}
        {/* <CardUno titulo="La Empresa" descripcionUno="Nogolac es una PyME ubicada en la localidad de Nogoyá, Provincia de Entre Ríos, con proyección Nacional." descripcionDos="Nuestra producción se concentra principalmente en la elaboración de quesos, ricota, crema y mantecas. El sistema de producción utilizado respeta estrictas normas de cuidado y protección del medioambiente." imgsrc="/src/components/Cards/assets/oficina.png"/> */}
        {/* <CardDos titulo="Compromiso" descripcionUno="Nos comprometemos en trabajar con ética, responsabilidad y compromiso para brindar a los consumidores productos de óptima calidad y seguridad alimentaria." imgsrc="/src/components/Cards/assets/produccion.jpg"/> */}
        <section className="contenedor__contacto" >
            <form className="contacto__formulario">
                <h3><strong>Consultas y Reclamos</strong></h3>
                <label htmlFor="nombre">Nombre*</label>
                <input type="text" id="nombre" name="nombre"  required/>
                <label htmlFor="direccion">Dirección*</label>
                <input type="text" id="direccion" name="direccion" />
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="telefono">Teléfono*</label>
                <input type="tel" id="telefono" name="telefono" required/>
                <label htmlFor="mensaje">Mensaje*</label>
                <textarea id="mensaje" name="mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>

            <div className="contacto__mapa">
                <h3>Estamos Aquí</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d107806.24324246972!2d-59.8002694!3d-32.3938333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b135e079e3198b%3A0x9a4e43d439446c0d!2sNogolac%20S.A.!5e0!3m2!1ses!2sar!4v1712623898726!5m2!1ses!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        </>
    )
}

export default Contacto