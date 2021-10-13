import React from "react";

import icon2 from '../images/icon2.png';
import icon5 from '../images/icon5.png';

class Services extends React.Component {
    render() {
        return (
            <section className="services adjust" id="services">
                <div className="title">
                    <h2>Servicios</h2>
                    <p>Estos son los servicios que puedes adquirir conmigo :)</p>
                </div>
                <div className="content">
                    <div className="serviceBox">
                        <img src={icon2} alt="Ícono de un monitor" />
                        <h2>Desarrollo Web</h2>
                        <p>Páginas Web personalizadas a tu necesidad con un diseño amigable y compatible con dispositivos móviles,
                        tabletas y computadores y una interfaz sencilla de comprender.</p>
                    </div>
                    <div className="serviceBox">
                        <img src={icon5} alt="Ícono de un monitor" />
                        <h2>Soporte técnico</h2>
                        <p>Instalación de sistemas operativos con su respectiva configuración, aplicaciones de escritorio (Office, Autocad...).</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;