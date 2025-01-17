import "./header.scss";
import logo from '../../images/logo.png';
import Menu from "../menu/Menu";

export const Header = ({ scrollToCategories, scrollToIntro }) => {  // Added scrollToIntro for another section
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <Menu scrollToCategories={scrollToCategories} scrollToIntro={scrollToIntro} /> 
    </div>
  );
};
