import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
    render() {
        if (this.props.hideIconMenu) {
            return (
                <div className="topbar active">
                    <div onClick={this.props.toggleActiveHojaVida} className="logo">Portafolio</div>
                    <div className="toggle" onClick={this.props.toggleActiveHojaVida}>
                        <i aria-hidden="true">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </i>
                    </div>
                </div>
            );
        }
        return (
            <div className={this.props.menuActive('topbar')}>
                <div className="logo">Portafolio</div>
                <div className={this.props.menuActive('toggle')} onClick={this.props.toggleMenu}>
                    <i aria-hidden="true">
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </div>
            </div>
        );
    }
}

export default Navbar;