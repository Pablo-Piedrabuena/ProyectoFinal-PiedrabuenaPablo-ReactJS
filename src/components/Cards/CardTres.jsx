import '../Cards/card.css'


const CardTres =()=>{
    return (
        <>
            <div class="contenedor__tarjeta tarjeta--filosofia-calidad">
                <h2>Filosofia de <strong>Calidad</strong></h2>
                <p>Nuestra <em>filosofía de calidad</em> se basa en los siguientes principios:</p>
                <figure class="tarjeta tarjeta--filosofia__item">
                    <img src="/src/components/Cards/assets/inocuidad.jpg" alt="foto de personal de laboratorio haciendo testeo"/>
                    <figcaption><em>Garantizar la Inocuidad de los productos.</em></figcaption>
                </figure>
                <figure class="tarjeta tarjeta--filosofia__item">
                    <img src="/src/components/Cards/assets/Optimizacion.png" alt="vista interna de sala elaboracion, tinas queseras"/>
                    <figcaption><em>Optimización de Recursos.</em></figcaption>
                </figure>
                <figure class="tarjeta tarjeta--filosofia__item">
                    <img src="/src/components/Cards/assets/revision.jpg" alt="Persona haciendo revisiones de calidad"/>
                    <figcaption><em>Revisión/corrección de los procesos.</em></figcaption>
                </figure>
                <figure class="tarjeta tarjeta--filosofia__item">
                    <img src="/src/components/Cards/assets/capacitacion.jpg" alt="foto de personas haciendo curso de capacitacion"/>
                    <figcaption><em>Capacitación continua del personal.</em></figcaption>
                </figure>
                <figure class="tarjeta tarjeta--filosofia__item">
                    <img src="/src/components/Cards/assets/instalacion.jpg" alt="Foto de un equipo de nanofiltración"/>
                    <figcaption><em>Modernización constante.</em></figcaption>
                </figure>
            </div>
            {/* <div className="contenedor__tarjeta">
                <div className="tarjeta__item item--texto">
                    <h2 className="">{params.titulo}</h2>
                    <p className="">{params.descripcionUno}</p>
                    <p className="">{params.descripcionDos}</p>
                </div>
                <div className="tarjeta__item item--imagen">
                    <img src={params.imgsrc} alt="Oficinas Nogolac"/>
                </div>
            </div> */}
        </>
    )
}

export default CardTres