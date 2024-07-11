import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // initial state of menuOpen is 'false'
    const location = useLocation();
    const navigate = useNavigate();

    const handleOpenMenu = () => {
        setMenuOpen(!menuOpen); // sets state to the opposite of what it is when clicked
    }

    const handleNavClick = (event, href) => {
        event.preventDefault(); // prevents default anchor behavior

        if (href.startsWith("/")) { // checks if it's a new page
            navigate(href); // navigate to the desired page
            window.scrollTo(0, 0); // scroll to the top of the page instantly
        } else {
            const sectionId = href;
            if (location.pathname !== "/") {
                // Navigate to home and scroll to the section
                navigate(`/#${sectionId.replace("#", "")}`);
            } else {
                // scrollToSection(sectionId);
            }
        }
    };

    const isActiveLink = (path) => {
        return location.pathname === path;
    }


    // const scrollToSection = (sectionId) => {
    //     const offset = 200; // sets value of my offset for then scroll
    //     const section = document.querySelector(sectionId); // finds first DOM matching element

    //     // calculate scroll position
    //     const sectionTop = 
    //         section.getBoundingClientRect() // provides the size of an element provided and position relative to viewport
    //         .top //returns the distance from the top
    //         + window.scrollY // returns number of pixels the doc is currently scrolled vertically
    //         - offset; // subtracts what we want it to be offset by (length of header in this case)

    //     window.scrollTo({ // scrollTo scrolls to particular coordinates
    //         top: sectionTop, // vertical scroll position
    //         behavior: "smooth" // how it scrolls to the position
    //     });
    // };

        // Use useEffect to handle the scrolling when navigating back to the main page
        // useEffect(() => {
        //     if (location.hash) {
        //         scrollToSection(location.hash);
        //     }
        // }, [location]);


    return (
        <header className="heading-nav">
            <div className="heading-content">
                <h1>
                    <Link to="/" onClick={(e) => handleNavClick(e, "/")}>
                        <img className="name-logo" src="./images/Daniel.png" alt="Daniel Moreno" title="Daniel Moreno" />
                    </Link>
                </h1>
                <nav className={`full-nav ${menuOpen ? "open" : ""}`}>
                    <ul className="nav-list">
                        <li className="header-link">
                            <Link to="/" className={`header-link ${isActiveLink("/") ? "active" : ""}`} onClick={(e) => handleNavClick(e, "/")}>
                                About
                            </Link>
                        </li>
                        <li className="header-link">
                            <Link to="/skills" className={`header-link ${isActiveLink("/skills") ? "active" : ""}`} onClick={(e) => handleNavClick(e, "/skills")}>
                                Skills
                            </Link>
                        </li>
                        <li className="header-link">
                            <Link to="/ga-report" className={`header-link ${isActiveLink("/ga-report") ? "active" : ""}`} onClick={(e) => handleNavClick(e, "/ga-report")}>
                                Bootcamp
                            </Link>
                        </li>
                        <li className="header-link">
                            <Link to="/projects" className={`header-link ${isActiveLink("/projects") ? "active" : ""}`} onClick={(e) => handleNavClick(e, "/projects")}>
                                My Work
                            </Link>
                        </li>
                        <li className="header-link">
                            <Link to="/contact" className={`header-link ${isActiveLink("/contact") ? "active" : ""}`} onClick={(e) => handleNavClick(e, "/contact")}>
                                Contact
                            </Link>
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