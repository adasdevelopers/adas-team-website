const Modal = ({ open, setOpen, title, children, titleCenter }) => {
	if (open) {
		return (
			<div
				id="modal__component"
				className="fixed inset-0 bg-opacity-50 bg-black backdrop-filter backdrop-grayscale backdrop-blur-md flex z-10 justify-center items-center"
				onClick={(e) => {
					// close when clicking away from children
					if (e.target.id === "modal__component") {
						setOpen(false);
					}
				}}
			>
				<div className="shadow rounded p-6 bg-white">
					<div className="flex items-top">
						<h3
							className={`text-base flex-1 my-2 ${titleCenter ? "text-center px-2" : ""} uppercase`}
						>
							{title}
						</h3>
						<p className="cursor-pointer text-2xl hover:text-blue" onClick={(e) => setOpen(false)}>
							&times;
						</p>
					</div>
					{children}
				</div>
			</div>
		);
	} else return <div className="empty"></div>;
};

export default Modal;
