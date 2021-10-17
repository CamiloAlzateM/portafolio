import React from "react";

import '../styles/hojavida.css';

import hojavida from '../documents/hojadevida.pdf';

class Hojavida extends React.Component {
    render() {
        return (
            <div className="hojavida">
                <button onClick={this.props.toggleActiveHojaVida} className="return">Regresar</button>
                <embed src={hojavida} type="application/pdf"/>

            </div>
        );
    }
}

export default Hojavida;