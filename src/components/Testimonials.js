import React from "react";

import sebas from '../images/sebas.webp';

class Testimonials extends React.Component {
    render() {
        return (
            <section className="testimonials adjust" id="testimonials">
                <div className="title">
                    <h2>Testimonios</h2>
                    <p>Estos son algunos de los testimonios de mis seres queridos y compañeros de trabajo.</p>
                </div>
                <div className="content">
                    <div className="testimonialsBox">
                        <div className="imgBx">
                            <img src={sebas} alt="Foto de identificación de Sebastian A." />
                        </div>
                        <div>
                            <p>Alex Gallego es sin duda un excelente desarrollador de software, me gustaría resaltar su compromiso, 
                            responsabilidad, proactividad y calidad en su trabajo, y en todo lo que se propone. Como persona tiene una 
                            excelente calidad humana y siempre busca contribuir a los demás miembros del equipo y de su alrededor.<br />
                            Me parece que va bien y considero que expresa bastante de la increíble persona que sé que eres.</p>
                            <h4>
                                Jhon Sebastian Agudelo<br />
                                <span>Desarrollador Fullstack</span>
                            </h4>
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default Testimonials;