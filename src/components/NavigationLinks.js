import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Collection of the links to each page
 * @returns Links
 */
function NavigationLinks() {
    return (
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="navbar">
            <ul className="text-sm lg:flex-grow  text-center lg:text-right pl-36">
            <li key="Home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/">Home</Link>
            </li>
            <li key="About" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/about">About</Link>
            </li>
            <li key="FAQ" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/faq">FAQ</Link>
            </li>
            <li key="Events" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/events">Events</Link>
            </li>
            <li key="JobBoard" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/jobboard">Job Board</Link>
            </li>
            <li key="Join Us" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/join">Join</Link>
            </li>
            <li key="Contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-100  mr-16 text-lg">
                <Link to="/connect">Contact</Link>
            </li>
        </ul>
      </div>

    );
}

export default NavigationLinks;
