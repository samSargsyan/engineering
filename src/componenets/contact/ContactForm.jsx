import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ix3nsff', 'template_vcwxez9', form.current, 'CtTEssWWq45t1YO7t')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset(); // Reset the form fields
          toast('Message sent successfully!'); // Optional: User feedback
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast('Failed to send message. Please try again.'); // Optional: User feedback
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <label>Name:</label>
      <input type="text" name="user_name" placeholder="Jacob S***" required />

      <label>Email:</label>
      <input type="email" name="user_email" placeholder="jacobS***@gmail.com" required />

      <label>Phone:</label>
      <input type="phone" name='phone' placeholder="+1(123)-456-7890" required />

      <label>Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
      <ToastContainer />
    </form>
  );
};

export default ContactForm;
