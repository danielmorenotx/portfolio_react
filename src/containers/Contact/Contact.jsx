import "./Contact.css"
import emailjs from 'emailjs-com';
import {emailjs_service_id, emailjs_template_id, emailjs_user_id} from "/Users/dmoreno/Projects/portfolio_react/src/private/private.js";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm(emailjs_service_id, emailjs_template_id, e.target, emailjs_user_id)
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <section id="contact-section">
            <h2 className="subheaders">Want to get in touch?</h2>
            <p>Fill out this form to send me an email!</p>

            <form action="/submit-form" onSubmit={sendEmail}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="from_name" required></input>
        
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="from_email" required></input>
        
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
        
                <input type="submit" value="Submit"></input>
            </form>
        </section>
    )
}

export default Contact;