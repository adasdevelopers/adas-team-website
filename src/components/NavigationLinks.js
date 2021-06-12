import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

/**
 * Collection of the links to each page
 * @returns Links
 */
function NavigationLinks() {
	const pages = [
		{ title: "Home", link: "/" },
		{ title: "About", link: "/about" },
		{ title: "FAQ", link: "/faq" },
		{ title: "Events", link: "/events" },
		{ title: "Job Board", link: "/jobboard" },
		{ title: "Join", link: "/join" },
		{ title: "Contact", link: "/connect" },
	];

	return (
		<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="navbar">
			<ul className="text-sm lg:flex-grow  text-center lg:text-right lg:justify-between lg:pl-0 last:mr-0">
				{pages.map((page) => (
					<NavigationLink title={page.title} link={page.link} />
				))}
			</ul>
		</div>
	);
}

const NavigationLink = ({ title, link }) => (
	<li
		key={title}
		className="block mt-4  text-teal-100 text-md font-extralight font-title lg:inline-block lg:mt-0 lg:ml-12 "
	>
		<NavLink
			to={link}
			activeStyle={{ fontWeight: "bold", color: "#39B6FB" }}
			exact={title === "Home"}
		>
			{title}
		</NavLink>
	</li>
);

export default NavigationLinks;
