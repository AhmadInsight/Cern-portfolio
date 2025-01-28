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
            I’m Ahmad Hassan, a dedicated software engineer specializing in
            modern, scalable web apps. Passionate about web innovation,
            I craft dynamic, responsive websites with seamless front-end
            experiences and robust backend systems. With expertise in Python,
            MySQL, and Java, I focus on integrating complex functionalities to
            deliver efficient, user-friendly solutions. My goal is to leverage
            the latest technologies to build applications that empower
            businesses and enhance user engagement.
          </p>
        </div>
      </div>
    </div>
  );
};
