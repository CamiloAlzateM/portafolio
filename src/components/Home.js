import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import '../styles/global.css';

import Navigation from "./Navigation";
import Banner from "./Banner";

import bg1 from '../images/bg1.webp';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import user1 from '../images/user1.jpg';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.jpg';

class Home extends React.Component {

    state = {
        toggleMenu: false,
        toggleMenuResponsive: false,
        dark: false
    };

    toggleMenu = () => {
        this.setState({
            toggleMenu: !this.state.toggleMenu,
            toggleMenuResponsive: !this.state.toggleMenuResponsive
        });
    };

    menuActive = className => {
        return this.state.toggleMenu ? `${className} active` : className;
    };

    menuActiveResponsive = (className) => {
        return this.state.toggleMenuResponsive ? `${className} active` : className;
    };
    
    switchThemeMode = () => {
        let body = document.querySelector('body');
        body.classList.toggle('dark');
        this.setState({
            dark: !this.state.dark
        });
    };

    removeActive = () => {
        this.setState({
            toggleMenuResponsive: false
        });
    };

    render() {
        return (
            <React.Fragment>

                <div className="container">
                    <Navigation 
                        menuActiveResponsive={this.menuActiveResponsive}
                        removeActive={this.removeActive}
                        switchThemeMode={this.switchThemeMode}
                        toggleMenuResponsive={this.state.toggleMenuResponsive}
                        dark={this.state.dark}
                    />
                    <div className={this.menuActiveResponsive('main', false)}>
                        <div className={this.menuActive('topbar')}>
                            <a href="#banner" className="logo">Portafolio</a>
                            <div className={this.menuActive('toggle')} onClick={this.toggleMenu}>
                                <i aria-hidden="true">
                                    <FontAwesomeIcon icon={faBars} />
                                </i>
                            </div>
                        </div>

                        <Banner />

                        <section className="about adjust" id="about">
                            <div className="title">
                                <h2>About Me</h2>
                            </div>
                            <div className="content">
                                <div className="textBox">
                                    <p>¡Hola! mi nombre es Alexander, soy de Rionegro, Antioquia de Colombia.<br />
                                    Desde pequeño he sido una persona muy curiosa, me fascina encontrar el por qué de todas
                                    las cosas que me llaman la atención</p>
                                </div>
                                <div className="imgBx">
                                    <img src={bg1} alt="Foto donde se muestra el autor del portafolio (Alexander Gallego Vasquez)" />
                                </div>
                            </div>
                        </section>

                        <section className="services adjust" id="services">
                            <div className="title">
                                <h2>Our Services</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                    Iure hic aut accusantium quo incidunt iste,</p>
                            </div>
                            <div className="content">
                                <div className="serviceBox">
                                    <img src={icon1} alt="Ícono de un monitor" />
                                    <h2>Web Design</h2>
                                    <p>Expedita distinctio magni quae, accusamus
                                        laboriosam architecto quisquam asperiores beatae fuga voluptatem omnis, alias maiores unde esse nesciunt placeat
                                        dolores illum eaque.</p>
                                </div>
                                <div className="serviceBox">
                                    <img src={icon2} alt="Ícono de un monitor" />
                                    <h2>Web Development</h2>
                                    <p>Expedita distinctio magni quae, accusamus
                                        laboriosam architecto quisquam asperiores beatae fuga voluptatem omnis, alias maiores unde esse nesciunt placeat
                                        dolores illum eaque.</p>
                                </div>
                                <div className="serviceBox">
                                    <img src={icon3} alt="Ícono de un monitor" />
                                    <h2>Android Apss</h2>
                                    <p>Expedita distinctio magni quae, accusamus
                                        laboriosam architecto quisquam asperiores beatae fuga voluptatem omnis, alias maiores unde esse nesciunt placeat
                                        dolores illum eaque.</p>
                                </div>
                                <div className="serviceBox">
                                    <img src={icon4} alt="Ícono de un monitor" />
                                    <h2>Photography</h2>
                                    <p>Expedita distinctio magni quae, accusamus
                                        laboriosam architecto quisquam asperiores beatae fuga voluptatem omnis, alias maiores unde esse nesciunt placeat
                                        dolores illum eaque.</p>
                                </div>
                                <div className="serviceBox">
                                    <img src={icon5} alt="Ícono de un monitor" />
                                    <h2>Content Writing</h2>
                                    <p>Expedita distinctio magni quae, accusamus
                                        laboriosam architecto quisquam asperiores beatae fuga voluptatem omnis, alias maiores unde esse nesciunt placeat
                                        dolores illum eaque.</p>
                                </div>
                                <div className="serviceBox">
                                    <img src={icon6} alt="Ícono de un monitor" />
                                    <h2>Video Editing</h2>
                                    <p>Expedita distinctio magni quae, accusamus
                                        laboriosam architecto quisquam asperiores beatae fuga voluptatem omnis, alias maiores unde esse nesciunt placeat
                                        dolores illum eaque.</p>
                                </div>
                            </div>
                        </section>

                        <section className="project adjust" id="project">
                            <div className="title">
                                <h2>Recent Work</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                    Iure hic aut accusantium quo incidunt iste,</p>
                            </div>
                            <div className="content">
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 01</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 02</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 03</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img4} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 04</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img5} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 05</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img6} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 06</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img7} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 07</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img8} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 08</h3>
                                    </div>
                                </div>
                                <div className="workBx">
                                    <div className="imgBx">
                                        <img src={img9} alt="" />
                                    </div>
                                    <div className="textBx">
                                        <h3>project 09</h3>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="testimonials adjust" id="testimonials">
                            <div className="title">
                                <h2>Testimonials</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                    Iure hic aut accusantium quo incidunt iste,</p>
                            </div>
                            <div className="content">
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user2} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user3} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user1} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user2} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div><div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user2} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user3} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user1} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                                <div className="testimonialsBox">
                                    <div className="imgBx">
                                        <img src={user2} alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                        Iure hic aut accusantium quo incidunt iste,</p>
                                    <h4>
                                        Someone Famouse<br />
                                        <span>Website Designer</span>
                                    </h4>
                                </div>
                            </div>
                        </section>

                        <section className="contact adjust" id="contact">
                            <div className="title">
                                <h2>let's Say hi</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere dolores laboriosam!
                                    Iure hic aut accusantium quo incidunt iste,</p>
                            </div>
                            <div className="contactForm">
                                <div className="row">
                                    <input type="text" name="" placeholder="First Name" />
                                    <input type="text" name="" placeholder="Last Name" />
                                </div>
                                <div className="row">
                                    <input type="text" name="" placeholder="Email Address" />
                                    <input type="text" name="" placeholder="Mobile No." />
                                </div>
                                <div className="row2">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div className="row2">
                                    <input type="submit" value="Send" />
                                </div>
                            </div>
                        </section>

                        <div className="copyright">
                            <p>Copyright © 2021 Alexander Gallego Vasquez. All Right Reserved.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;