import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiCredly } from "react-icons/si";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/danielmorenotx" target="_blank" title="Follow me on GitHub">
                    <FaGithub className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/danielsmoreno/" target="_blank" title="Follow me on LinkeIn">
                    <FaLinkedin className="footer-icon"/>
                </a>
                <a href="https://www.credly.com/users/danielsmoreno/badges" target="_blank" title="See my credentials">
                    <SiCredly className="footer-icon"/>
                </a>
            </div>
            <p className="copyright">&copy; 2024 Daniel S. Moreno</p>
        </footer>
    )
}

export default Footer;