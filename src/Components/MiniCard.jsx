import React from "react";

const MiniCard = ({ bg, label, lvalue, color }) => {
	return (
		<div
			className="my-1 md:my-0.5 px-1 w-1/3 lg:my-4 lg:px-4 md:px-0 flex justify-center items-center"
			// style={{ border: "2px solid red" }}
		>
			<article
				className="overflow-hidden rounded-2xl w-4/5 py-4 md:py-2 lg:py-0 lg:w-full shadow-2xl"
				style={{ backgroundColor: bg }}
			>
				<header className="flex flex-col items-center justify-between leading-tight lg:p-3 md:p-3">
					<h1 className="text-lg text-white font-medium text-xs">
						<a
							style={{ textDecoration: "none", color: color }}
							className="font-medium"
						>
							{label}
						</a>
					</h1>
					<h1
						className="mt-2 text-white font-xl font-extrabold tracking-wider"
						style={{ color: color }}
					>
						{lvalue}
					</h1>
				</header>
			</article>
		</div>
	);
};

export default MiniCard;
