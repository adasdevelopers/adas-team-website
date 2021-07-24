import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

/**
 * Collect all of Ada's Team social media platforms and their icons
 * @returns Social Media buttons
 */
const SocialMedia = ({ gridStyle }) => {
	library.add(fab, faEnvelope); //importing brand icons for social-media

	const socialMedia = [
		{ name: "Facebook", link: "https://www.facebook.com/AdasTeamFB/", icon: ["fab", "facebook"] },
		{ name: "Twitter", link: "https://twitter.com/adas_team?lang=en", icon: ["fab", "twitter"] },
		{ name: "Instagram", link: "https://www.instagram.com/adas_team/", icon: ["fab", "instagram"] },
		{
			name: "LinkedIn",
			link: "https://www.linkedin.com/company/adas-team/",
			icon: ["fab", "linkedin"],
		},
		{ name: "GitHub", link: "https://github.com/adas-team", icon: ["fab", "github"] },
		{ name: "Email", link: "mailto:adasteam@ualberta.ca", icon: faEnvelope },
	];

	return (
		<div id="social-media-icons" className={gridStyle}>
			<div className="content-evenly space-x-4">
				{socialMedia.map(({ name, link, icon }) => (
					<a
						href={link}
						className="text-3xl"
						alt={name}
						key={name}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon icon={icon} />
					</a>
				))}
			</div>
			<div className="divider-thick my-4" aria-hidden />
		</div>
	);
};

export default SocialMedia;
