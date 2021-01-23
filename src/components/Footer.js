// Import images
import facebook from "../assets/img/efacebook.png";
import twitter from "../assets/img/etwitter.png";
import instagram from "../assets/img/einstagram.png";
import linkedin from "../assets/img/elinkedin.png";
import github from "../assets/img/egithub.png";
import email from "../assets/img/eemail.png";

function Footer() {
  return (
    <div>
      <div className="social-icons">
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="#">
          <img src={github} alt="github" />
        </a>
        <a href="#">
          <img src={email} alt="email" />
        </a>
      </div>
      <div id="address">
        <div className="divider-thick"></div>
        <div className="address-heading">Our Office Location</div>
        <p>CSC 1-32</p>
        <div className="address-heading">Address</div>
        <p>
          Computing Science Centre (CSC)
          <br />
          8900 114 St NW
          <br />
          Edmonton, AB T6G 2S4
        </p>
      </div>
    </div>
  );
}

export default Footer;
