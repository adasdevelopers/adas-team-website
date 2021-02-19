import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div id="icon-option"></div>

      <div className="hamburger">
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label for="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li key="Home">
              <Link to="/">Home</Link>
            </li>
            <li key="About">
              <Link to="/about">About</Link>
            </li>
            <li key="FAQ">
              <Link to="/faq">FAQ</Link>
            </li>
            <li key="Events">
              <Link to="/events">Events</Link>
            </li>
            <li key="JobBoard">
              <Link to="/jobboard">Job Board</Link>
            </li>
            <li key="JoinUs">
              <Link to="/join">Join</Link>
            </li>
            <li key="Contact">
              <Link to="/connect">Contact</Link>
            </li>
            <li key="bar">
              <div className="smallbar"></div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
