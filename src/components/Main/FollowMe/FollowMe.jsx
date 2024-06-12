import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./FollowMe.css";


const FollowMe = () => {

    return (
        <section id="followme-section">
            <h2 className="subheaders">Follow me!</h2>
            <p>Click the icons to check out my GitHub or LinkedIn</p>
            <div>
                <a href="https://github.com/danielmorenotx" target="_blank">
                    <FaGithub className="social-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/danielsmoreno/" target="_blank">
                    <FaLinkedin className="social-icon"/>
                </a>
            </div>
            
        </section>
    )
}

export default FollowMe;