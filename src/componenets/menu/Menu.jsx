import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = ({ scrollToCategories, scrollToIntro }) => {
  return (
    <div className='menu'>
      <span className='menu-item' onClick={scrollToIntro}>Home</span> {/* Scrolls to the Intro Section */}
      <span className='menu-item' onClick={scrollToCategories}>Category</span> {/* Scrolls to the Categories Section */}
      <Link to="/contact" className='menu-item'>Contact Us</Link> {/* Can still use <a> for static sections */}
      <Link to="/about" className='menu-item'>About Us</Link> {/* Can still use <a> for static sections */}
    </div>
  );
}

export default Menu;
