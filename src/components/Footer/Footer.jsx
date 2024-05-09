import "./Footer.css"

const Footer = () => {

    return (
        <section id="contact-section">
            <div className="contact-info">
                <h2 className="subheaders">Want to get in touch?</h2>
                <p>Fill out the form and we can chat, or connect with me on socials.</p>
                <a href="https://git.generalassemb.ly/danielmoreno" target="_blank"><img src="images/github-mark.png" alt="my github" className="socials"></img></a>
                <a href="https://www.linkedin.com/in/danielsmoreno/" target="_blank"><img src="images/linkedin.png" alt="LinkedIn" className="socials"></img></a>
            </div>
                
            <form action="/submit-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required></input>
        
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required></input>
        
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
        
                <input type="submit" value="Submit"></input>
            </form>
        </section>
    )
}

export default Footer;