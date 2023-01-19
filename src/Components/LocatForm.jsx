import React, { useState } from "react";
import ModalForm from "./ModalForm";

const LocatForm = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="flex flex-col justify-between items-start">
			<span className="text-9xl">Weather with us.</span>
			<h3 className="text-2xl mt-10">
				Get all the information regarding Weather from us.
			</h3>
			<button onClick={() => setShow(true)} className="text-xl px-10 mt-7">
				Get Started
			</button>
			<ModalForm show={show} setShow={setShow} />
		</div>
	);
};

export default LocatForm;
