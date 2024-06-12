import "./Contact.css"

const Contact = () => {

    return (
        <section id="contact-section">
            <h2 className="subheaders">Want to get in touch?</h2>
            <p>Fill out this form to send me an email!</p>

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

export default Contact;