// Import components
import SocialMedia from "./SocialMedia";
import NavigationLinks from "./NavigationLinks";

/**
 * Displays the footer without navigation
 * @returns Footer
 */
const Footer = () => {
	const Address = ({ gridStyle }) => (
		<p id="address" className={gridStyle}>
			<b>Our Office Location</b>
			<br />
			UComms 2-136
			<br />
			<br />
			<b>Address</b>
			<br />
			Ada's Team
			<br />
			2-136 University Commons
			<br />
			11308 - 89 Ave NW
			<br />
			Edmonton, AB T6G 2N8
			<br />
			Canada
		</p>
	);
	return (
		<footer className="m-0 bg-black text-xs text-white mt-auto">
			<div id="footer-content" className="max-w-7xl mx-8 lg:mx-auto md:px-12 py-8">
				<div className="grid grid-cols-footer grid-rows-footer">
					<SocialMedia gridStyle="col-span-2 lg:col-span-1" />
					<Address gridStyle="mb-4 col-span-2 md:row-start-2 md:col-start-2 md:col-end-3 lg:row-start-1 lg:row-end-4" />
					<div
						id="footer_nav"
						className="col-span-2 md:row-start-2 md:col-start-1 md:col-end-2 lg:row-span-2"
					>
						<h3 className="uppercase">Navigation</h3>
						<NavigationLinks footer />
					</div>
				</div>
				<div className="divider-verythin my-4" aria-hidden />
				<p>© Copyright 2025 Ada's Team</p>
			</div>
		</footer>
	);
};

export default Footer;
