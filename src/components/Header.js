import icon from "../assets/img/eicon_head_1.png";
import Navigation from "./Navigation"
import Nav from './NavigationTW'


function Header() {
    return (
        <header className="p-3 flex justify-between items-center z-20 top-0">
            <a href="/" className="">
                <img id="home-icon" src={icon} alt="adas-team-icon"
                    className="inline float-left" />
                <h4 
                    className=
                        {"inline float-right my-5 mx-3 invisible lg:visible"}
                >
                    ADA'S TEAM
                </h4>
            </a>

            {/* <Navigation /> */}
            {/* <Nav /> */}

        </header>
    );
}

export default Header;