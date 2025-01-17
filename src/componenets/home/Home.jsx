import { useRef, useEffect, useState } from "react";
import { Header } from "../header/Header";
import "./home.scss";
import categories from "../../images/types.webp";
import Categories from "../categories/Categories";
import AboutUs from "../aboutUs/AboutUs";
import Contact from "../contact/Contact";

const Home = () => {
  const categoriesRef = useRef(null);
  const introRef = useRef(null);
  const categoryImgRef = useRef(null); // Reference for categoryImg
  const [isAnimated, setIsAnimated] = useState(false); // State to track animation trigger

  const scrollToCategories = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToIntro = () => {
    if (introRef.current) {
      introRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (categoriesRef.current) {
        // Get the distance from the top of the page to the categories section
        const categoriesTop =
          categoriesRef.current.getBoundingClientRect().top + window.scrollY;

        // Set the trigger point where the animation should start
        const triggerPoint = categoriesTop - window.innerHeight * 0.75; // Trigger when you're 75% close

        // Check if the scroll position has passed the trigger point
        if (window.scrollY > triggerPoint) {
          setIsAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div className="home">
      <Header
        scrollToCategories={scrollToCategories}
        scrollToIntro={scrollToIntro}
      />
      <div className="engineerImage"></div>

      <div ref={categoriesRef} className="categories">
        <img
          ref={categoryImgRef}
          className={`categoryImg ${isAnimated ? "animate" : ""}`} // Add animation class based on scroll position
          src={categories}
          alt="Services categories offered by Helping Handymen"
        />
        <p>
          Welcome to Helping Handymen, home to dedicated and smart engineering
          workers! Here at Helping Handymen, we specialize in electrical and
          mechanical engineering. We also do plumbing, painting, installations,
          and carrying your home goods! Our team of expert and dedicated
          engineers makes sure to build and fix your problems away! Explore our
          wide range of services and discover how we can help to make your life
          easier. Let's build the future together—one step at a time.
        </p>
      </div>
      <span className="selectCategory">Select Category</span>
      <Categories />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
