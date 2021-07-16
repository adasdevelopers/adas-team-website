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
		<div className="w-1/2  lg:items-center lg:w-auto" id="navbar">
			<ul className="text-sm grid grid-cols-2 gap-2 lg:flex text-left md:text-left md:justify-start md:pr-0 last:ml-0">
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
		className="block mt-4  text-teal-100 text-md font-extralight font-title lg:inline-block lg:mt-0 lg:mr-6"
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
