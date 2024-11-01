import './card.css'

const CardUno =(params)=>{
    return (
        <>
            <div className="contenedor__tarjeta">
                <div className="tarjeta__item item--texto">
                    <h2 className="">{params.titulo}</h2>
                    <p className="">{params.descripcionUno}</p>
                    <p className="">{params.descripcionDos}</p>
                </div>
                <div className="tarjeta__item item--imagen">
                    <img src={params.imgsrc} alt="Oficinas Nogolac"/>
                </div>
            </div>
        </>
    )
}

export default CardUno
