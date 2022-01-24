import Typist from "react-typist";

const Header = ({ title, subtitle, additional, homepage }) => {
	return (
		<header>
			<h1
				className={
					homepage
						? "font-title text-5xl text-left md:text-7xl md:text-center text-blue animate-fade-in-down"
						: "text-center lg:text-left"
				}
			>
				{title}
			</h1>

			<p className="font-body text-left text-lg text-black font-normal md:text-center lg:text-left italic ">
				<Typist avgTypingDelay={40} stdTypingDelay={0}>
					<Typist.Delay ms={800} />
					{subtitle}
				</Typist>
			</p>

			{additional && (
				<p className="font-body text-left text-lg text-black md:text-center lg:text-left font-bold mt-4">
					{additional}
				</p>
			)}
		</header>
	);
};

export default Header;
