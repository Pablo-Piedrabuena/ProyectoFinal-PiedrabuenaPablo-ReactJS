import '../Cards/card.css'

const CardCuatro =()=>{
    return (
        <>
            <div className="contenedor__tarjeta">
                <div className="tarjeta__item item--texto">
                    <h2>Zonas de Distribución</h2>
                    <p>Contamos con una Amplia Red de <strong>Distribuidores</strong>  <em>Directos de Fabrica</em> en las Provincias de:</p>
                    <ul>
                        <li><em>Entre Ríos</em> (<strong>Casa Central</strong>)</li>
                        <li><em>Buenos Aires</em></li>
                        <li><em>Santa Fe</em></li>
                        <li><em>Misiones</em></li>
                        <li><em>Corrientes</em></li>
                        <li><em>Chaco</em></li>
                        <li><em>Formosa</em></li>
                        <li><em>Chubut</em></li>
                    </ul>  
                </div>
                <div className="tarjeta__item item--imagen">
                    <img src="/src/components/Cards/assets/distribucion.png" alt="Persona midiendo ph de queso"/>
                </div>
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

export default CardCuatro