import Typewriter from 'typewriter-effect';

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
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(800)  // Equivalent to Typist.Delay ms={800}
							.typeString(subtitle)
							.start();
					}}
					options={{
						delay: 40,  // Equivalent to avgTypingDelay={40}
						deleteSpeed: 40,
						cursor: '|'  // You can customize or remove the cursor
					}}
				/>
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
