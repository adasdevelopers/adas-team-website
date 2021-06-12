import icon from "../assets/img/eicon_head_1.png";
import Nav from "./Navigation";
import Typist from "react-typist";

function Header({ title, subtitle, additional, homepage }) {
	return (
		<header>
			<h1
				className={
					homepage
						? "font-title text-5xl text-left md:text-7xl md:text-center md:text-blue animate-fade-in-down"
						: "text-center lg:text-left"

				}
			>
				{title}
			</h1>
			<p className="font-body text-left md:text-center lg:text-left italic text-lg">
				<Typist avgTypingDelay={40} stdTypingDelay={0}>
					<Typist.Delay ms={800} />

					{subtitle}
				</Typist>
				<b>{additional || ""}</b>
			</p>
		</header>
	);
}

export default Header;
