import "./Contact.css"

const Contact = () => {

    return (
        <section id="contact-section">
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