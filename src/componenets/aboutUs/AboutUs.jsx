import "./aboutUs.scss";
import teamwork from "../../images/teamwork.jpg";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <h1 className="aboutTitle">About Us</h1>
      <img src={teamwork} alt="teamwork" />
      <p>
        Welcome to Helping Handymen! We are a passionate team dedicated to
        [your mission or purpose, e.g., creating innovative solutions,
        delivering exceptional products, etc.]. Since our founding in 2023,
        we’ve been committed to [key values, e.g., quality, integrity, and
        customer satisfaction]. Our goal is simple: to [what you aim to achieve,
        e.g., make your life easier, bring your ideas to life, etc.]. By
        combining creativity, expertise, and a customer-first approach, we aim
        to exceed your expectations every step of the way. Thank you for being
        part of our journey. Together, we’re building something extraordinary!
        Feel free to provide more details about your business or audience if
        you'd like this tailored further!
      </p>
    </div>
  );
};

export default AboutUs;
