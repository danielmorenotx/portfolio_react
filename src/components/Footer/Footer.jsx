import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiCredly } from "react-icons/si";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/danielmorenotx" target="_blank">
                    <FaGithub className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/danielsmoreno/" target="_blank">
                    <FaLinkedin className="footer-icon"/>
                </a>
                <a href="https://www.credly.com/users/danielsmoreno/badges" target="_blank">
                    <SiCredly className="footer-icon"/>
                </a>
            </div>
            <p className="copyright">&copy; Daniel S. Moreno</p>
            <a href="mailto:danielmoreno409@gmail.com" ><MdOutlineMailOutline className="footer-icon"/></a>
        </footer>
    )
}

export default Footer;