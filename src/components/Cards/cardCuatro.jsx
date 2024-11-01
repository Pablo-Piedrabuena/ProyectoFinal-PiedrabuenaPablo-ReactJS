import '../Cards/Card.css'
/* import imgDistribucion from './assets/distribucion.png' */
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/Cards%2Fdistribucion.png?alt=media&token=71bf63db-8374-4229-ae62-579fd6a90332" alt="Persona midiendo ph de queso"/>
                </div>
            </div>
        </>
    )
}

export default CardCuatro