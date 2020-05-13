import React, { useContext } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { rootContext } from "../store";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				position: "fixed",
				bottom: "10%",
				right: "10%",
			},
		},
	})
);

const LogoutButton: React.FC = () => {
	const { logOut } = useContext(rootContext);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Button variant="contained" color="primary" onClick={logOut}>
				Log Out
			</Button>
		</div>
	);
};

export default LogoutButton;
