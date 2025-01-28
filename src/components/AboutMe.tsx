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
            I am a full stack web developer from Bahawalpur Pakistan. I am
            assistant professor at IUB. I started writing code about 19 years
            ago. I started with Java and then moved to web technologies like
            HTML, CSS, JavaScript and PHP. I have worked for companies as well
            as ran my own. I love helping students learn to code and better
            their lives.
          </p>
        </div>
      </div>
    </div>
  );
};
