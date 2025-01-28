import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          {/* Center the contact details */}
          <div className="col-lg-4 col-md-4 col-sm-6 d-flex flex-column align-items-center text-center mb-4 mb-lg-0">
            <div className="d-flex flex-column align-items-center mb-3">
              <p>City Bahawalpur, Punjab, Pakistan</p>
            </div>
            <div className="d-flex flex-column align-items-center mb-3">
              <a href="tel:+92-313-7754000" className="footer-contact-link">(+92)-313-7754000</a>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p className="footer-contact-link">waheed@iub.edu.pk</p>
            </div>
          </div>

          {/* Links section */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-6">
                <a href="" className="footer-nav">Home</a><br />
                <a href="" className="footer-nav">About me</a><br />
                <a href="" className="footer-nav">Services</a>
              </div>
              <div className="col-6">
                <a href="" className="footer-nav">Experience</a><br />
                <a href="" className="footer-nav">Portfolio</a><br />
                <a href="" className="footer-nav">Contact</a>
              </div>
            </div>
          </div>

          {/* Social media links section */}
          <div className="col-lg-5 col-md-4 col-sm-6 text-center mb-4 mb-lg-0">
            <div className="d-flex justify-content-center mb-3">
              <a href="https://www.facebook.com/waheed.anwer.94" target="_blank" rel="noopener noreferrer" className="footer-icons">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-icons">
                <FaTwitter size={30} />
              </a>
              <a href="https://www.linkedin.com/in/waheed-anwar-ph-d-95000321" target="_blank" rel="noopener noreferrer" className="footer-icons">
                <FaLinkedin size={30} />
              </a>
              <a href="https://scholar.google.com.pk/citations?user=IPHx6tIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="footer-icons">
                <FaGoogleScholar size={30} />
              </a>
            </div>
            <p className="pt-3 text-center">
              copyright&copy; {new Date().getFullYear()} WaheedInsights | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
