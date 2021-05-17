import React from 'react'

import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



function NavigationMenu(props) {
    library.add(fab, faEnvelope); //importing brand icons for social-media

    return (
        <div className="p-3">
        <ul id="navigation-menu" className="space-y-6">
          <li key="Home">
            <Link to="/"
                  onClick={(props.closeMenu)}
            >
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

        <div className="divider-thick"></div>
        
        <div id="hamburger-social-media-icons"
          className="space-x-3 text-3xl">
          <FontAwesomeIcon icon={['fab', 'facebook']}/>
          <FontAwesomeIcon icon={['fab', 'twitter']}/>
          <FontAwesomeIcon icon={['fab', 'instagram']}/>
          <FontAwesomeIcon icon={['fab', 'linkedin']}/>
          <FontAwesomeIcon icon={['fab', 'github']}/>
          <FontAwesomeIcon icon={faEnvelope}/>
        </div>
      </div>

    );
}

export default NavigationMenu;