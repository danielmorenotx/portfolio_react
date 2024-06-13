import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // initial state of menuOpen is 'false'
    
    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen); // sets state to the opposite of what it is when clicked
    }

    const handleNavClick = (event, sectionId) => {
        event.preventDefault(); // prevents default anchor behavior
        const offset = 250; // sets value of my offset for then scroll

        const section = document.querySelector(sectionId);
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({
            top: sectionTop,
            behavior: "smooth"
        });

        event.currentTarget.blur();
    }


    return (
        <header className="heading-nav">
            <div className="heading-content">
                
                <h1><img src="./images/Daniel_logo.png" alt="Daniel Moreno" title="Daniel Moreno"/></h1>
                
                <nav className={`full-nav ${menuOpen ? "open" : ""}`}>
                    <ul className="nav-list">
                        <li className="header-link">
                            <a href="#" className="header-link">About</a>
                        </li>
                        <li className="header-link">
                            <a href="#gallery-section" className="header-link" onClick={(e) => handleNavClick(e, "#gallery-section")}>My Work</a>
                        </li>
                        <li className="header-link">
                            <a href="#followme-section" className="header-link">Follow Me</a>
                        </li>
                        <li className="header-link">
                            <a href="#contact-section" className="header-link">Contact</a>
                        </li>
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