// Import components
import SocialMedia from "./SocialMedia";
import NavigationFooter from "./NavigationFooter";

/**
 * Displays the footer without navigation
 * @returns Footer
 */
const Footer = () => {
	return (
		<footer>
			<div id="footer" className="m-0 bg-black text-xs text-white">
				<div id="footer-social-media" className="max-w-7xl mx-8 lg:mx-auto md:px-12 py-8">
					<div id="social-media-icons" className="content-evenly space-x-4">
						<SocialMedia />
					</div>

					<div id="address">
						<div className="divider-thick my-4" />
						<p>
							<b>Our Office Location</b>
							<br />
							CSC 1-32
							<br />
							<br />
							<b>Address</b>
							<br />
							Computing Science Centre (CSC)
							<br />
							8900 114 St NW
							<br />
							Edmonton, AB T6G 2S4
						</p>
						<div id="footer_nav" className="mt-6">
							<h3>Navigation</h3>
							<div className="">
								<NavigationFooter />
							</div>
						</div>
						<div className="divider-verythin my-4" />
						<p>© Copyright 2020 Ada's Team</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
