import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { history, routes } from "./../config/routes";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				position: "fixed",
				bottom: "10%",
				left: "10%",
			},
		},
	})
);

const NavButton: React.FC = () => {
	const [text, setText] = useState("");
	const {
		location: { pathname },
		push,
	} = history;
	useEffect(() => {
		if (pathname === routes.play.path) {
			setText("SCORE");
		} else {
			setText("GAME");
		}
	}, [pathname]);
	const handleCLick = () => {
		console.log(pathname, routes.play.path);
		if (pathname === routes.play.path) {
			console.log("clciked in play ");
			push(routes.score.path);
		} else {
			console.log("clciked in score");
			push(routes.play.path);
		}
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Button variant="contained" color="primary" onClick={handleCLick}>
				{text}
			</Button>
		</div>
	);
};

export default NavButton;
