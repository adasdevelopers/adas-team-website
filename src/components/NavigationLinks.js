import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

/**
 * Collection of the links to each page
 * @returns Links
 */
const NavigationLinks = ({ footer }) => {
	const pages = [
		{ title: "Home", link: "/" },
		{ title: "About", link: "/about" },
		{ title: "FAQ", link: "/faq" },
		{ title: "Events", link: "/events" },
		{ title: "Job Board", link: "/jobboard" },
		{ title: "Join", link: "/join" },
		{ title: "Contact", link: "/connect" },
	];

	const divStyle = footer
		? "w-1/2 lg:items-center lg:w-auto"
		: "w-full block flex-grow lg:flex lg:items-center lg:w-auto";

	const ulStyle = footer
		? "text-sm text-left grid grid-cols-2 gap-2 last:ml-0 md:text-left md:justify-start md:pr-0 lg:flex"
		: "text-sm text-center last:mr-0 lg:text-right lg:flex-grow lg:justify-between lg:pl-0";

	const liStyle =
		"block mt-4 text-teal-100 text-md font-extralight font-title lg:inline-block lg:mt-0 " +
		(footer ? "lg:mr-6" : "lg:ml-12");

	const NavigationLink = ({ title, link }) => (
		<li key={title} className={liStyle}>
			<NavLink
				to={link}
				activeStyle={{ fontWeight: "bold", color: "#39B6FB" }}
				exact={title === "Home"}
			>
				{title}
			</NavLink>
		</li>
	);

	return (
		<div className={divStyle}>
			<ul className={ulStyle}>
				{pages.map(({ title, link }) => (
					<NavigationLink title={title} link={link} key={title} />
				))}
			</ul>
		</div>
	);
};

export default NavigationLinks;
