import { useState } from "react";
import "./Contact.css"
import emailjs from 'emailjs-com';
import { FaCheckCircle } from "react-icons/fa";

const emailjs_service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailjs_template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailjs_user_id = import.meta.env.VITE_EMAILJS_USER_ID;

const Contact = () => {

    const [contactFormVisible, setContactFormVisible] = useState(true); // default will display the contact form

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm(emailjs_service_id, emailjs_template_id, e.target, emailjs_user_id)
          .then((result) => {
              // window.location.reload(); // This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
              setContactFormVisible(false);
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <section id="contact-section">
            <h2 className="subheaders">Want to get in touch?</h2>
            <p>Fill out this form to send me an email!</p>

            <form action="/submit-form" onSubmit={sendEmail} className={`contact-form ${contactFormVisible ? "" : "hidden"}`}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="from_name" required></input>
        
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="from_email" required></input>
        
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
        
                <input type="submit" value="Submit"></input>
            </form>

            <div className={`submission-confirmation ${contactFormVisible ? "hidden" : ""}`}>
                <FaCheckCircle className="confirmation-check" size={40}/>
                <h3>Message sent!</h3>
            </div>
        </section>
    )
}

export default Contact;