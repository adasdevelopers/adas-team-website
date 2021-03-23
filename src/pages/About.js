//Import data files
import initiatives from "../_data/initiatives.json";
import executives from "../_data/executives.json";

// Import images
import linkedin from "../assets/img/elinkedin.png";
import github from "../assets/img/egithub.png";
import email from "../assets/img/eemail.png";
import instagram from "../assets/img/einstagram.png";

// Import initiative assets
import initiative_image from "../assets/img/eicon_body_2.png";
import dev_image from "../assets/img/eada_bot_scarf.png";
import student_image from "../assets/img/eada_bot_sleepy.png";
import mentor_image from "../assets/img/eada_bot_hands_up.png";
import podcast_image from "../assets/img/eplace_holder_only.png";
const images = [dev_image, student_image, mentor_image, podcast_image];



function About() {
  return (
    <div id="about-title" className="p-7">
      <div className="text-center my-12">
        <h1 className="font-title text-5xl">About</h1>
        <h3 className="font-body text-xl">Learn more about Ada's Team.</h3>
      </div>

      <div id="about-goal" className="my-6 mb-8">
        <p className="text-base">
          In Ada's Team, our goal is to <b>promote diversity in computing science, games, technology, engineering, and
          mathematics.</b> By diversity, we include but are not limited to the following categories:
          gender, race, ethnicity, religion, ability, sexuality, social class, and any other factor
          of discrimination or minority group. <br /> 
          <b>We embrace and celebrate your differences, striving
          to foster an inclusive culture and safe space for everyone to collaborate and thrive in.</b>
        </p>
      </div>


      <div id="initiatives">
        <h2 className="font-title text-blue text-3xl">OUR INITIATIVES</h2>
        {initiatives.map((initiative, i) => (
          <div className="initiative">
            <h3 className="font-title text-2xl">{initiative["name"]}</h3>
  
            <div className="bot-image">
              {initiative["image"] !== "" && <img src={images[i]} alt="adas-team-bot"
                className="" />}
            </div>
            <div className="description">
              <p>{initiative["description"]}</p>
            </div>
            <div className="contact">
              <p>
                {initiative["contact"]["email"] !== "" && (
                  <a href={initiative["contact"]["email"]}>
                    <img src={email} alt="email" />
                  </a>
                )}
                {initiative["contact"]["instagram"] !== "" && (
                  <a href={initiative["contact"]["instagram"]}>
                    <img src={instagram} alt="instagram" />
                  </a>
                )}
                {initiative["contact"]["other"] !== "" && (
                  <a href={initiative["contact"]["other"]}>
                    <img src={email} alt="other" />
                  </a>
                )}
              </p>
              <br />
            </div>
            <br />
          </div>
        ))}
      </div>

      <div id="the-team">
        <div className="title">
          <h2>MEET THE TEAM</h2>
          <h3>2020-2021</h3>
        </div>
        {executives.map((executive, i) => (
          <div className="executive">
            <div className="image">{executive["image"] !== "" && executive["image"]}</div>
            <div className="name">
              <h4>{executive["name"]}</h4>
            </div>
            <div className="role">
              <p>
                <em>{executive["role"]}</em>
              </p>
            </div>
            <div className="description">
              <p>{executive["description"]}</p>
            </div>
            <div className="contact">
              <img
                className="LinkedIn"
                src={linkedin}
                href={executive.contact.LinkedIn}
                alt="LinkedIn"
              />
              <img className="Github" src={github} href={executive.contact.Github} alt="Github" />
              {executive.contact.Other !== "" && (
                <img className="Contact" src={email} href={executive.contact.Other} alt="Contact" />
              )}
              <br />
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
