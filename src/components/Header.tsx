import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <ReactTyped
          className="typed-text-new text-gradient"
          strings={["I am Ahmad Hassan"]}
          typeSpeed={50}
        />
        <ReactTyped
          className="typed-text"
          strings={[
            "Machine Learning Enthusiat",
            "Data Analyst",
            "Full Stack Web Developer",
          ]}
          typeSpeed={50}
          backSpeed={40}
          loop
        />
         <Link 
          to="contacts" // This will scroll to the contacts section
          smooth={false}  // Smooth scrolling
          offset={-110}  // Adjust offset if needed (e.g., for fixed navbar)
          className="btn-main-offer for-solid" // Button styling stays the same
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};
