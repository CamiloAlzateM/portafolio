import React from "react";

import '../styles/global.css';

import Navigation from "./Navigation";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Hojavida from "./Hojavida";

class Home extends React.Component {

    state = {
        toggleMenu: false,
        toggleMenuResponsive: false,
        dark: false,
        activeHojaVida: false
    };

    toggleMenu = () => {
        this.setState({
            toggleMenu: !this.state.toggleMenu,
            toggleMenuResponsive: !this.state.toggleMenuResponsive
        });
    };

    toggleActiveHojaVida = () => {
        this.setState({
            activeHojaVida: !this.state.activeHojaVida
        });
    };

    menuActive = className => {
        return this.state.toggleMenu ? `${className} active` : className;
    };

    menuActiveResponsive = className => {
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

        if (this.state.activeHojaVida) {
            return (
                <div className="container">
                    <div className="main active">
                        <Navbar
                            toggleActiveHojaVida={this.toggleActiveHojaVida}
                            hideIconMenu={true}
                        />
                        <Hojavida toggleActiveHojaVida={this.toggleActiveHojaVida} />

                        <div className="copyright">
                            <p>Copyright © 2021 Alexander Gallego Vasquez. All Right Reserved.</p>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <Navigation
                    menuActiveResponsive={this.menuActiveResponsive}
                    removeActive={this.removeActive}
                    switchThemeMode={this.switchThemeMode}
                    toggleMenuResponsive={this.state.toggleMenuResponsive}
                    dark={this.state.dark}
                />
                <div className={this.menuActiveResponsive('main')}>
                    <Navbar
                        menuActive={this.menuActive}
                        toggleMenu={this.toggleMenu}
                    />
                    <Banner toggleActiveHojaVida={this.toggleActiveHojaVida} />
                    <About />

                    <Services />

                    <Projects />

                    <Testimonials />

                    <div className="copyright">
                        <p>Copyright © 2021 Alexander Gallego Vasquez. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;