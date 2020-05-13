import React from "react";
import AddName from "../components/AddName";

const AddNamePage: React.FC = () => {
	return (
		<div className="card">
			<h1>Add name</h1>
			<div className="addName-container">
				<AddName />
			</div>
		</div>
	);
};

export default AddNamePage;
