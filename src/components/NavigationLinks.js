import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @returns Links required for Navigation sections
 */
function NavigationLinks() {
    return (
        <ul className="space-y-4 ml-10
                        lg:flex lg:space-x-6 lg:ml-40">
            <li key="Home">
                <Link to="/">Home</Link>
            </li>
            <li key="About" >
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
        </ul>

    );
}

export default NavigationLinks;