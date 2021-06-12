import icon from "../assets/img/eicon_head_1.png";
import Nav from "./Navigation";
import Typist from "react-typist";

function Header({ title, subtitle, additional, homepage }) {
	return (
		<header>
			<h1
				className={
					homepage
						? "font-title text-7xl text-center md:text-blue animate-fade-in-down"
						: "text-center lg:text-left lg:mx-48"
				}
			>
				{title}
			</h1>
			<p className="font-body text-center lg:text-left italic text-lg lg:mx-48">
				<Typist>
					<Typist.Delay ms={1000} />
					{subtitle}
				</Typist>
				<b>{additional || ""}</b>
			</p>
		</header>
	);
}

export default Header;
