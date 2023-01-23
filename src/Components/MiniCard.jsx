import React from "react";

const MiniCard = ({ bg, label, lvalue, color }) => {
	return (
		<div className="my-1 md:my-0.5 px-1 w-full md:w-2/12 lg:my-4 lg:px-4 lg:w-1/3 md:px-0">
			<article
				className="overflow-hidden rounded-2xl shadow-2xl md:w-10/12 sm:w-7/12 lg:w-auto"
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
