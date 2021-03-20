import React, { useState } from 'react' 
import {Link} from 'react-router-dom'
// Import icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'


function Navigation() {
    library.add(fab, faEnvelope); //importing brand icons for social-media

    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })



    return (
        <nav>
            <span className="text-xl p-3">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-black top-0 left-0 w-4/5 h-full z-50 shadow p-3
                                text-white font-title">
                    <div className="p-3">
                      <div id="hamburger-menu"></div>
                      <ul className="space-y-6">
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
                      </ul>
                      <div className="divider-thick"></div>
                      <div id="hamburger-social-media-icons"
                        className="space-x-5 text-3xl">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        <FontAwesomeIcon icon={'faEnvelope'} />
                      </div>
                    </div>


                    </animated.div>
                )
            }

        </nav>
    );
}

export default Navigation;