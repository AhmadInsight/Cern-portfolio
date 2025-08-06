import { FaFileCode } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { TbDeviceAnalytics } from "react-icons/tb";
import { LiaCodeBranchSolid } from "react-icons/lia";

export const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <LuBrainCircuit className="icon" size="35" />
              </div>
              <h3>Machine Learning</h3>
              <p>
                I develop intelligent ML solutions that automate tasks, uncover
                insights, and enhance user experiences. From predictive modeling
                to recommendation systems, I leverage Python, Scikit-learn
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
                <LiaCodeBranchSolid className="icon" size="30" />
              </div>
              <h3>Softawre Development</h3>
              <p>
                Versatile Software Developer crafting efficient, scalable
                solutions with a focus on innovation and seamless user
                experiences.
              </p>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <TbDeviceAnalytics className="icon" size="21" />
              </div>
              <h3>Data Analysis</h3>
              <p>
                Impact-driven Data Analyst with expertise in transforming
                complex data into powerful insights using SQL, Python, and
                visualization to fuel smarter decisions and business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

