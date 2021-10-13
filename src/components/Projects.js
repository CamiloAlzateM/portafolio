import React from "react";

import rickMorty from '../images/rick-y-morty.jpg';
import portafolio from '../images/portafolio-anterior.png';

class Projects extends React.Component {
    render() {
        return (
            <section className="project adjust" id="project">
                <div className="title">
                    <h2>Proyectos</h2>
                    <p>Estos son algunos de mis proyectos en mis tiempos libres y de forma profesional</p>
                </div>
                <div className="content">
                    <div className="workBx">
                        <div className="imgBx">
                            <img src={rickMorty} alt="Rick y Morty" />
                        </div>
                        <a rel="noopener noreferrer" href="https://alexgv1108.github.io/Rick-y-Morty/" target="_blank">
                            <div className="textBx">
                                <h3>Rick and Morty API</h3>
                            </div>
                        </a>
                    </div>
                    <div className="workBx">
                        <div className="imgBx">
                            <img src={portafolio} alt="Portafolio anterior" />
                        </div>
                        <a rel="noopener noreferrer" href="http://mi-blog-personal123.000webhostapp.com/" target="_blank">
                            <div className="textBx">
                                <h3>Portafolio anterior</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;