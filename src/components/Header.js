import icon from "../assets/img/eicon_head_1.png";

import Navigation from "./Navigation"

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <a href="/" className="inline-block">
              <img id="home-icon" src={icon} alt="adas-team-icon" />
            </a>

            <Navigation />
    
        </header>
    );
}

export default Header;