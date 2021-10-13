import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={this.props.menuActiveResponsive('navigation', false)}>
                    <ul>
                        <li><a href="#banner" onClick={this.props.removeActive}>Inicio</a></li>
                        <li><a href="#about" onClick={this.props.removeActive}>Sobre mí</a></li>
                        <li><a href="#services" onClick={this.props.removeActive}>Servicios</a></li>
                        <li><a href="#project" onClick={this.props.removeActive}>Proyectos</a></li>
                        <li><a href="#testimonials" onClick={this.props.removeActive}>Testimonios</a></li>
                    </ul>
                    <div className="themeSwitch" onClick={this.props.switchThemeMode}>
                        <FontAwesomeIcon icon={this.props.dark ? faSun : faMoon} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation;