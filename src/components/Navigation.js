// Import React libraries
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

// Import Images
import icon from "../assets/img/AdaBot/icon_head.png";

// Import components
import NavigationLinks from "./NavigationLinks";

/**
 * Styles, animates and displays the navigation links
 * in mobile/tablet and desktop views
 * @returns
 */
const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav>
			<div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex flex-1 justify-between items-center">
						{/* Ada's Team Home Icon */}
						<div>
							<Link to="/" className="flex items-center space-x-3">
								<img id="home-icon" src={icon} alt="adas-team-icon" />
								<h4 className="leading-none invisible md:visible">ADA'S TEAM</h4>
							</Link>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex-1 lg:inline-block">
							<NavigationLinks />
						</div>
					</div>

					{/* Mobile/Tablet Navigation Menu */}
					<div className="-mr-2 flex lg:hidden">
						<span className="text-xl p-3">
							<AiOutlineMenu
								onClick={() => setIsOpen(!isOpen)}
								aria-controls="mobile-menu"
								aria-expanded="false"
								size="1.5em"
							/>
						</span>
					</div>
				</div>
			</div>

			{/* Hamburger menu animation */}
			<Transition
				show={isOpen}
				enter="transition ease-out duration-100 transform"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="transition ease-in duration-75 transform"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				{() => (
					<div className="lg:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-4 sm:px-3 bg-black text-white">
							<NavigationLinks />
						</div>
					</div>
				)}
			</Transition>
		</nav>
	);
};

export default Navigation;
