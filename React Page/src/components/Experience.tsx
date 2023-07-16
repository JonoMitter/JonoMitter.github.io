import nabLogo from "../img/nab_logo.png"
import rmitLogo from "../img/rmit_logo.png"
import techOnDemandLogo from "../img/tech-od_logo_text.png"

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div className="flexbox--center">
        <div className="container">

          <div className="experience--container">
            <div className="img-container">
              <img src={nabLogo} alt="NAB Logo"></img>
            </div>
            <h3 className="experience--heading">
              Software Engineer Intern
              <br></br>
              <span className="experience--company">National Australia Bank</span>
            </h3>
          </div>

          <div className="experience--container">
            <div className="img-container">
              <img src={rmitLogo} alt="RMIT Logo"></img>
            </div>
            <h3 className="experience--heading">
              Bachelor of Software Engineering
              <br></br>
              <span className="experience--company">RMIT University</span>
            </h3>
          </div>

          <div className="experience--container">
            <div className="img-container">
              <img src={techOnDemandLogo} alt="TechOnDemand Logo"></img>
            </div>
            <h3 className="experience--heading">
              Web Developer
              <br></br>
              <span className="experience--company">Freelance - TechOnDemand</span>
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
