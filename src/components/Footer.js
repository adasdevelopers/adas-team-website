// Import images
import facebook from "../assets/img/efacebook.png";
import twitter from "../assets/img/etwitter.png";
import instagram from "../assets/img/einstagram.png";
import linkedin from "../assets/img/elinkedin.png";
import github from "../assets/img/egithub.png";
import email from "../assets/img/eemail.png";

function Footer() {
  return (
    <footer>
      <div className="m-0 bg-black text-xs text-white">

        <div className="py-8 mx-8">
          <div id="social-media-icons" className="content-evenly space-x-4">
              <a href="#" className="inline-block">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="#" className="inline-block">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="#" className="inline-block">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="#" className="inline-block">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="#" className="inline-block">
                <img src={github} alt="github" />
              </a>
              <a href="#" className="inline-block">
                <img src={email} alt="email" />
              </a>
          </div>

          <div id="address">
            <div className="divider-thick"></div>
            <p>
              <b>Our Office Location</b><br />
              CSC 1-32<br /><br />
              <b>Address</b><br />
              Computing Science Centre (CSC)<br />
              8900 114 St NW<br />
              Edmonton, AB T6G 2S4
            </p>

            <div id="footer-nav">
              <h3 className="font-title text-blue text-lg bold pt-3">NAVIGATION</h3>
              <nav className="grid grid-cols-2 gap-2">
                <ul>Home</ul>
                <ul>JobBoard</ul>
                <ul>About</ul>
                <ul>Join</ul>
                <ul>FAQ</ul>
                <ul>Contact</ul>
                <ul>Events</ul>
              </nav>
            </div>

            <div className="divider-thin"></div>
            <p>© Copyright 2020 Ada's Team</p> 
          </div>
        </div>




       
      </div>

    </footer>
  );
}

export default Footer;
