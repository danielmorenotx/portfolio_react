import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css"

const About = () => {
    return (
        <section id="about-section">
            <div className="about-info">
                <h2 className="subheaders">About Me</h2>
                <p>
                    Software developer at Indeed.
                </p>
            </div>
            <div>
                <a href="https://github.com/danielmorenotx" target="_blank" title="Follow me on GitHub">
                    <FaGithub className="footer-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/danielsmoreno/" target="_blank" title="Follow me on LinkeIn">
                    <FaLinkedin className="footer-icon"/>
                </a>
            </div>
            <img src="images/picture_of_me.jpg" alt="Picture of me" className="about-picture"></img>
        </section>
    )
}

export default About;
