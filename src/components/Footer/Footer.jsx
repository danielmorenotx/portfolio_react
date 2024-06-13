import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <p>Follow me:</p>
            <a href="https://github.com/danielmorenotx" target="_blank">
                <FaGithub className="social-footer"/>
            </a>
            <a href="https://www.linkedin.com/in/danielsmoreno/" target="_blank">
                <FaLinkedin className="social-footer"/>
            </a>
        </footer>
    )
}

export default Footer;