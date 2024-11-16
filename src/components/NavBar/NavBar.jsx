
import '../../App.css'
import CartWidget from "./CartWidget"

const NavBar =({ logo, links })=>{
    return (
        <>
            <nav className="nav-ecomerce">
                <div className="nav-ecomerce__contenedor-logo">
                    <a href="index" tabIndex={-1}>
                        <img src={logo} alt="Logo"/>
                    </a>
                    <div className="contenedor-logo__relleno"></div>
                </div>
                <ul className='nav-ecomerce__enlaces'>
                    {links.map((link, index) => (
                        <li key={index} className='nav-ecomerce__enlaces'>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                <CartWidget/>
                {/* <button className='nav-ecomerce__btn-menu'><img src="https://firebasestorage.googleapis.com/v0/b/app-nogolac.appspot.com/o/iconos%2Fmenu.svg?alt=media&token=930f12b8-6565-49ba-af22-b4cd58c5b93d" alt="icono menu" /></button> */}
            </nav>
        </>
    )
}

export default NavBar