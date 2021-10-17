import React from "react";

import bg1 from '../images/bg1.webp';

class About extends React.Component {
    render() {
        return (
            <section className="about adjust" id="about">
                <div className="title">
                    <h2>Sobre mí</h2>
                </div>
                <div className="content">
                    <div className="textBox">
                        <p>¡Hola! mi nombre es Alexander, soy de Rionegro, Antioquia de Colombia.<br />
                            Desde pequeño he sido una persona muy curiosa, me fascina encontrar el por qué de todas
                            las cosas que me llaman la atención.<br />
                            Me considero una persona amable, respetuosa, sociable y solidaria; uno de mis pensamientos más sólidos
                            es que una persona vale por la forma en que trata a los demás y no por los títulos y riquezas que posee.<br />
                            Me encanta la programación, el fútbol, el ajedrez, los videojuegos, salir a dar un paseo con mis seres
                            queridos, ver películas, degustar nuevos sabores de comida y viajar por todo el mundo conociendo sus maravillas.<br />
                            Aproximadamente a los 15 años descubrí la programación y desde ese momento quedé fascinado; me quería
                            formar como un gran desarrollador de videojuegos. Con el tiempo fui descubriendo mi pasión por el desarrollado
                            Web; poco a poco y con pasos firmes y sólidos he ido formándome en esta area tan grande y hermosa 
                            y una de mis metas es continuar mi proceso de formación como desarrollador fullstack con tecnologías 
                            modernas y metodologías ágiles. 
                        </p>
                    </div>
                    <div className="imgBx">
                        <img src={bg1} alt="Foto donde se muestra el autor del portafolio (Alexander Gallego Vasquez)" />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;