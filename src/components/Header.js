import Typist from "react-typist";
import { useState } from "react";

const Header = ({ title, subtitle, additional, homepage }) => {
	const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

	// eslint-disable-next-line
	const [animate, setAnimate] = useState(!mediaQuery.matches);

	return (
		<header>
			<h1
				className={
					homepage
						? `font-title text-5xl text-left md:text-7xl md:text-center text-blue ${
								animate ? "animate-fade-in-down" : ""
						  }`
						: "text-center lg:text-left"
				}
			>
				{title}
			</h1>
			<h2 className="font-body text-left text-lg text-black font-normal md:text-center lg:text-left italic ">
				{animate ? (
					<Typist avgTypingDelay={40} stdTypingDelay={0}>
						<Typist.Delay ms={800} />
						{subtitle}
					</Typist>
				) : (
					subtitle
				)}
				<b>{additional || ""}</b>
			</h2>
		</header>
	);
};

export default Header;
