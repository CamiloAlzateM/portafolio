import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import user from '../images/user.webp';

class Banner extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={this.props.menuActive('topbar')}>
                    <a href="#banner" className="logo">Portafolio</a>
                    <div className={this.props.menuActive('toggle')} onClick={this.props.toggleMenu}>
                        <i aria-hidden="true">
                            <FontAwesomeIcon icon={faBars} />
                        </i>
                    </div>
                </div>
                <section className="banner" id="banner">
                    <div className="content">
                        <div className="imgBx">
                            <img src={user} alt="Foto donde se muestra el autor del portafolio" />
                        </div>
                        <h3>Alexander Gallego Vasquez</h3>
                        <p>Hola, soy desarrollador full stack.</p>
                        <Link to="#" className="btn">Descarga mi hoja de vida</Link>
                        <ul className="socialMedia">
                            <li><a rel="noopener noreferrer" href="https://www.facebook.com/alexander.gallegovasquez/" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a></li>
                            <li><a rel="noopener noreferrer" href="https://www.linkedin.com/in/john-alexander-gallego-vasquez-988b361ba/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a></li>
                            <li><a rel="noopener noreferrer" href="https://www.instagram.com/Alexgv1108/?hl=es-la" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a></li>
                        </ul>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Banner;