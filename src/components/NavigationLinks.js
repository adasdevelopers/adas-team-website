import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
/**
 * Collection of the links to each page
 * @returns Links
 */
function NavigationLinks() {
    return (
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="navbar">
            <ul className="text-sm lg:flex-grow  text-center lg:text-right pl-36">
            <li key="Home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink exact to="/" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}} >Home</NavLink>
            </li>
            <li key="About" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink to="/about" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}}>About</NavLink>
            </li>
            <li key="FAQ" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink to="/faq" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}}>FAQ</NavLink>
            </li>
            <li key="Events" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink to="/events" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}}>Events</NavLink>
            </li>
            <li key="JobBoard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink to="/jobboard" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}}>Job Board</NavLink>
            </li>
            <li key="Join Us" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink to="/join" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}}>Join</NavLink>
            </li>
            <li key="Contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <NavLink to="/connect" activeStyle={{ fontWeight: "bolder", color: "rgba(96, 165, 250,1)"}}>Contact</NavLink>
            </li>
        </ul>
      </div>

    );
}

export default NavigationLinks;
