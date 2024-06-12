import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // initial state of menuOpen is 'false'
    
    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen); // sets state to the opposite of what it is when clicked
    }


    return (
        <header className="heading-nav">
            <div className="heading-content">
                <h1><img src="./images/Daniel_logo.png" alt="Daniel Moreno" title="Daniel Moreno"/></h1>
                <nav className={`full-nav ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li className="header-link"><a href="#about-section">About</a></li>
                        <li className="header-link"><a href="#gallery-section">My Work</a></li>
                        <li className="header-link"><a href="#followme-section">Follow Me</a></li>
                        <li className="header-link"><a href="#contact-section">Contact</a></li>
                    </ul>
                    
                    <button className="nav-button nav-close-button" onClick={handleOpenMenu}>
                        <FaTimes />
                    </button>
                </nav>
            </div>

            <button className="nav-button" onClick={handleOpenMenu}>
                <FaBars />
            </button>
        </header>
    );
};

export default Header;