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

        const section = document.querySelector(sectionId); // finds first DOM matching element

        // calculate scroll position
        //
        const sectionTop = 
            section.getBoundingClientRect() // provides the size of an element provided and position relative to viewport
            .top //returns the distance from the top
            + window.scrollY // returns number of pixels the doc is currently scrolled vertically
            - offset; // subtracts what we want it to be offset by (length of header in this case)

        window.scrollTo({ // scrollTo scrolls to particular coordinates
            top: sectionTop, // vertical scroll position
            behavior: "smooth" // how it scrolls to the position
        });

        event.currentTarget.blur(); // removes focus after clicked
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