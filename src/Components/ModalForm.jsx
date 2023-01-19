import React from "react";
import { Label, Modal, TextInput } from "flowbite-react";
const ModalForm = ({ show, setShow }) => {
	return (
		<Modal show={show} size="md" popup={true} onClose={() => setShow(false)}>
			<Modal.Header />
			<Modal.Body>
				<div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
					<h1 className="text-xl font-medium text-gray-900 dark:text-white">
						Enter your City
					</h1>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="location" value="Please Enter Valid City Name" />
						</div>
						<TextInput
							id="location"
							placeholder="Your Location"
							required={true}
						/>
					</div>
					<div>
						<h1 className="text-center">OR</h1>
					</div>
					<button className="text-xl text-center w-full">
						Get Device Location
					</button>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ModalForm;
