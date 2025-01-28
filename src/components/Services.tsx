import { FaFacebookF, FaFileCode, FaGoogle } from "react-icons/fa6";
import { CiDesktop } from "react-icons/ci";

export const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <CiDesktop className="icon" size="35" />
              </div>

              <h3>Web Design</h3>
              <p>
                I design intuitive UI/UX solutions that grow with your business,
                delivering tailored, user-friendly experiences on time.
                Let&#39;s bring your vision to life.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaFileCode size="25" className="icon" />
              </div>
              <h3>Web Development</h3>
              <p>
                I create high-converting, mobile-friendly eCommerce sites on
                Shopify, Magento, WooCommerce, and BigCommerce, focusing on
                design and user experience to drive growth and elevate your
                brand.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaFacebookF className="icon" size="24" />
              </div>
              <h3>Facebook / SMM</h3>
              <p>
                I drive brand growth with data-driven Social Media Marketing
                strategies, specializing in content creation, audience
                engagement, and performance optimization across platforms like
                Facebook, Instagram, and LinkedIn.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FaGoogle className="icon" size="21" />
              </div>
              <h3>Google Ads</h3>
              <p>
                I create high-impact Google Ads campaigns that boost visibility,
                drive traffic, and maximize ROI. With expertise in targeting,
                optimization, and budget management,I deliver measurable
                results aligned with business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
