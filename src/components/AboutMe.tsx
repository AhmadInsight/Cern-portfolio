import author from "../images/waheed.jpg";

export const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img src={author} alt="Author..." className="profile-img" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            I am Ahmad Hassan, a dedicated software engineer with a passion for
            leveraging technology to solve complex problems and uncover
            meaningful insights from data. I specialize in developing robust,
            data-driven applications and have a strong foundation in scientific
            computing, data analysis, and algorithm design. With expertise in
            Python, Java, and SQL, I focus on building efficient, scalable
            solutions that blend technical performance with real-world impact.
            My goal is to apply my skills to challenging, data-intensive
            environments to contribute to discovery and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
