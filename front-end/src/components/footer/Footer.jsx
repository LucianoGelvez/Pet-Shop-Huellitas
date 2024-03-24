import logo from '../../images/icons/footprints.png'
import facebook from '../../images/icons/facebook.png'
import instagram from '../../images/icons/instagram.png'
import place from '../../images/icons/place.png'
import phone from '../../images/icons/phone.png'
import email from '../../images/icons/email.png'

import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                <div className="container-footer_main">
                    <div className='container-footer_main__icons'>
                        <img src={logo} alt="logo"/>
                        <div className="container-footer_main__icons__social-media">
                            <img width="35px" src={facebook} alt="facebook" />
                            <img width="35px" src={instagram} alt="instagram" />
                        </div>
                    </div>
                    <div className="container-footer_main__internal-link">
                        <Link className='link' to="/Inicio" >Inicio</Link>
                        <Link className='link' to="/Servicios" >Productos</Link>
                        <Link className='link' to="/Servicios" >Servicios</Link>
                        <Link className='link' to="/Contacto" >Contacto</Link>
                    </div>
                    <div className="container-footer_main__contact">
                        <div className="contact-item">
                            <img src={phone} alt="" />
                            <p>+54376 4018</p>
                        </div>

                        <div className="contact-item">
                            <img src={email} alt="" />
                            <p>imalworldveterinaria.com.ar</p>
                        </div>

                        <div className="contact-item">
                            <img src={place} alt="" />
                            <p>Av. Francisco de Haro 4553 (Posadas, Misiones)</p>
                        </div>
                    </div>

                </div>
                <div className="container-footer_info">
                    <p>Terminos y condiciones</p>
                    <p>Politicas de Privacidad</p>
                </div>
            </div>
        </>
    )
}

export default Footer