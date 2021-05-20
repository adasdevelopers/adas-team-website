import icon from "../assets/img/eicon_head_1.png";
import Navigation from "./Navigation"
import Navbar from "./Navigation2"


function Header() {
    return (
        <header className=" p-3 flex justify-between items-center">
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

            <Navigation />
            {/* <Navbar /> */}
    
        </header>
    );
}

export default Header;