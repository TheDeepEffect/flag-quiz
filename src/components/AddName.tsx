import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { rootContext } from "./../store";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
			"& fieldset": {
				borderColor: "white",
			},
			"&:hover fieldset": {
				borderColor: "yellow",
			},
		},
	},
}));

const AddName: React.FC = () => {
	const { addUser } = useContext(rootContext);
	const [name, setName] = useState("");

	const submitHandle: (event: React.FormEvent<HTMLFormElement>) => void = (
		e
	) => {
		e.preventDefault();
		addUser(name);
	};
	const classes = useStyles();

	return (
		<form className={classes.root} autoComplete="off" onSubmit={submitHandle}>
			<TextField
				required
				id="outlined-required"
				label="Name"
				variant="outlined"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
		</form>
	);
};

export default AddName;
