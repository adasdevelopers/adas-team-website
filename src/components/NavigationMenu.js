import React from 'react'
import { Link } from 'react-router-dom'

import SocialMedia from './SocialMedia'
import NavigationLinks from './NavigationLinks'


function NavigationMenu(props) {

    return (
        /*
            Navigation Animation 
        */
        <div 
            // className={
            //     "p-3 lg:flex flex-grow items-center" +
            //     (props.closeMenu ? "flex" : "hidden")}
        > 

        <ul id="navigation-menu" 
            className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li key="Home">
            <Link to="/"
                  onClick={(props.closeMenu)}>
              Home
            </Link>
          </li>
          <li key="About">
            <Link to="/about"
                onClick={(props.closeMenu)}
            >
                About
            </Link>
          </li>
          <li key="FAQ">
            <Link to="/faq"
                  onClick={(props.closeMenu)}
            >
              FAQ
            </Link>
          </li>
          <li key="Events">
            <Link to="/events"
                  onClick={(props.closeMenu)}
            >
              Events
            </Link>
          </li>
          <li key="JobBoard">
            <Link to="/jobboard"
                  onClick={(props.closeMenu)}
            >
              Job Board
            </Link>
          </li>
          <li key="JoinUs">
            <Link to="/join"
                  onClick={(props.closeMenu)}
            >
              Join
            </Link>
          </li>
          <li key="Contact">
            <Link to="/connect"
                  onClick={(props.closeMenu)}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        {/* Pink divider */}
        <div className="divider-thick"></div>
        
        <SocialMedia />

      </div>

    );
}

export default NavigationMenu;