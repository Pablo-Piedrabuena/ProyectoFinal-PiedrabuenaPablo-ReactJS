import './card.css'

const CardDos =(params)=>{
    return (
        <>
            <div className="contenedor__tarjeta">
                <div className="tarjeta__item item--textoDos">
                    <h2 className="">{params.titulo}</h2>
                    <p className="">{params.descripcionUno}</p>
                    {/* <p className="">{params.descripcionDos}</p> */}
                </div>
                <div className="tarjeta__item item--imagenDos">
                    <img src={params.imgsrc} alt="Oficinas Nogolac"/>
                </div>
            </div>
        </>
    )
}

export default CardDos