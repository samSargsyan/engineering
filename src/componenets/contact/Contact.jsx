import "./contact.scss";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactLeft">
        <span className="contactTitle">Contact Us</span>
        <p className="contactDesc">
          We’re here to help! If you have any questions, feedback, or need
          assistance, please don’t hesitate to reach out. You can contact us via
          email, or fill out the contact form provided. Our team is available
          throughout 9 AM - 5 PM, and we’ll get back to you as soon as possible.
          We look forward to hearing from you!
        </p>
        <p className="contactDesc2">
          We have provided a fill out form for you to give us our feedback.
          Please fill out the form provided with your details and messages.
        </p>
      </div>
      <div className="contactRight">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
