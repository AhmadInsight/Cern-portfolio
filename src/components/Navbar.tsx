import logo from "../images/3-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark fixed-top"
      style={{ backgroundColor: "#3D466E" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Waheed Anwar" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={false} to="home" className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={false}
                to="about"
                offset={-110}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={false}
                to="services"
                offset={-110}
                className="nav-link"
                href="#"
              >
                services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={false}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="#"
              >
                contacts
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Websites
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
