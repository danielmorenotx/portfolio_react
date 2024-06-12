import { useState } from "react";
import List from "../List/List"
import "./Header.css"

const Header = () => {
    return (
        <section className="heading-nav">
            <h1><img src="./images/Daniel_logo.png" alt="Daniel Moreno" title="Daniel Moreno"/></h1>
            <nav>
                <ul>
                    <li className="header-link"><a href="#about-section">About</a></li>
                    <li className="header-link"><a href="#gallery-section">My Work</a></li>
                    <li className="header-link"><a href="#followme-section">Follow Me</a></li>
                    <li className="header-link"><a href="#contact-section">Contact</a></li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;