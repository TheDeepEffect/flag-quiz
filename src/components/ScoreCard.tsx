import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { rootContext } from "../store";

type IProps = {
	title: string;
};

const useStyles = makeStyles({
	root: {
		margin: "2.5%",
	},
	title: {
		fontSize: "2vmax",
		color: "white",
	},
	digit: {
		fontSize: "5vmax",
		color: "white",
		fontWeight: "bolder",
	},
});
const ScoreCard: React.FC<IProps> = observer(({ title }) => {
	const classes = useStyles();
	const {
		state: { attempts },
	} = useContext(rootContext);

	return (
		<Card
			className={classes.root}
			style={{ backgroundColor: title === "score" ? "green" : "red" }}
		>
			<CardContent>
				<Typography className={classes.title} gutterBottom>
					{title}
				</Typography>
				<Typography className={classes.digit}>{attempts[title]}</Typography>
			</CardContent>
		</Card>
	);
});

export default ScoreCard;
