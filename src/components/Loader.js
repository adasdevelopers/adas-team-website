const Loader = ({ loading, children }) => {
	const LoadingSpinner = (
		<div className="max-w-6xl mx-auto my-16 flex items-center justify-center">
			<svg
				width="126"
				height="126"
				viewBox="0 0 126 126"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle
					className="spin-animation"
					cx="63.1659"
					cy="62.977"
					r="57.6728"
					stroke="#39B6FB"
					strokeWidth="7"
				/>
			</svg>
		</div>
	);

	return loading ? LoadingSpinner : children;
};

export default Loader;
