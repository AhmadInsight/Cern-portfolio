import { Carousel } from "react-responsive-carousel";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/viviana.jpg";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <div>
        <img src={avatar2} alt="Aliya Rahman" />
        <div className="myCarousel">
          <h3>Aliya Rahman</h3>
          <p>
            Working with Ahmad was a pleasure! He turned my vision for an online
            organic shop into a stunning, user-friendly website. His
            responsiveness and insights exceeded expectations, and the results
            are already driving traffic and sales. Highly recommended!
          </p>
        </div>
      </div>
      <div>
        <img src={avatar1} alt="David Thompson" />
        <div className="myCarousel">
          <h3>David Thompson</h3>
          <p>
            Ahmad is a true professional! He crafted a stunning, modern
            portfolio website that beautifully showcases my photography, with
            exceptional attention to design, detail, and responsiveness. I’ve
            already received countless compliments—if you need a creative web
            developer, Ahmad is the one!
          </p>
        </div>
      </div>
      <div>
        <img src={avatar3} alt="Amina El-Sayed" />
        <div className="myCarousel">
          <h3>Amina El-Sayed</h3>
          <p>
            Ahmad excelled in developing my online learning platform with a
            user-friendly layout and key features like student progress
            tracking. His expertise in modern web technologies made the platform
            fast, secure, and reliable. Professional, efficient, and a pleasure
            to work with—I&#39;m thrilled with the result!
          </p>
        </div>
      </div>
      <div>
        <img src={avatar4} alt="Jason Lee" />
        <div className="myCarousel">
          <h3>Jason Lee</h3>
          <p>
            Ahmad exceeded our expectations with a clean, professional website
            that perfectly represents our brand. Elegant, fast, and
            SEO-optimized, his attention to detail and communication made the
            process seamless. Ahmad truly goes above and beyond—highly
            recommended!
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default TestimonialsCarousel;
