import { Tooltip } from "flowbite-react";
import React from "react";

const HorizontalProgress = ({ width }) => {
	return (
		<div className="w-full px-1 flex justify-center items-center mt-4 lg:mb-2">
			<div className="rounded-2xl p-4 bg-white w-10/12 shadow-2xl">
				<ul
					className="flex justify-between items-center w-full"
					// style={{ border: "2px solid red" }}
				>
					<li className="text-sm">Good</li>
					<li className="text-sm">Hazardous</li>
				</ul>
				{/* <Tooltip
					anchorId="props-basic"
					content="hello world!"
					style={{
						backgroundColor: "#19283f",
						color: "#fff",
					}}
					className="rounded-xl p-3"
				/> */}
				{/* progress gray border */}
				<div className="bg-gray-300 w-full rounded-2xl mt-4">
					{/* innerprogress */}
					<div
						style={{
							backgroundColor: "rgb(116, 194, 92)",
							color: "white",
							padding: "1%",
							textAlign: "right",
							fontSize: "20px",
							borderRadius: "15px",
							width: width,
						}}
						className="flex justify-end"
					>
						<Tooltip content="Tooltip content">
							<div>
								<div
									id="props-basic"
									className="w-full bg-yellow-400"
									style={{ padding: "1px" }}
								></div>
							</div>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalProgress;
