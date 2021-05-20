import SocialMedia from './SocialMedia'
import NavigationLinks  from './NavigationLinks'

function Footer() {
  return (
    <footer>
      <div id="footer" 
        className="m-0 bg-black text-xs text-white">

        <div id="footer-social-media"
            className="py-8 mx-8">
          <div id="social-media-icons" className="content-evenly space-x-4">
              <SocialMedia />
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
              <nav className="grid grid-cols-2 gap-x-2 text-base">
                <NavigationLinks />
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
