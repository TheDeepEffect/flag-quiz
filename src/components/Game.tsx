import React, { useContext, useState } from "react";
import Card from "./Card";
import { getCountries_Country } from "./../generated/getCountries";
import { observer } from "mobx-react";
import { rootContext } from "../store";
import { getRandomInt } from "../service/Random";
import ResultSnackbar from "./Snackbar";
import { Button } from "@material-ui/core";

type IGamePageProps = {
	flags: (getCountries_Country | null)[] | undefined;
};

const Game: React.FC<IGamePageProps> = observer(({ flags }) => {
	const [open, setOpen] = useState(false);
	const [isScored, setIsScored] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const {
		GameStore: { setCurrentFlag, state },
		addScore,
	} = useContext(rootContext);
	const [selectedFlags, setSelectedFlags] = useState<
		(getCountries_Country | null)[] | undefined
	>([]);

	const randomize = () => {
		setIsClicked(false);
		const random1 = getRandomInt(251);
		const last = random1.pop();
		const temp = flags?.filter((f, i) => i === random1[0] || i === random1[1]);
		setSelectedFlags(temp);
		const trueFlag = temp?.find((f, i) => i === last);
		setCurrentFlag(trueFlag);
	};

	const handleFlagSelect = (flag: string | undefined) => {
		setIsClicked(true);
		setOpen(true);
		if (state.currentFlag?.name === flag) {
			addScore(true);
			setIsScored(true);
		} else {
			addScore(false);
			setIsScored(false);
		}
	};

	const handleNext = () => {
		setOpen(false);
		randomize();
		setIsClicked(false);
	};
	return (
		<div className="game">
			{!isPlaying ? (
				<Button
					onClick={(e) => {
						setIsPlaying(true);
						randomize();
					}}
					variant="contained"
				>
					Start
				</Button>
			) : (
				<div>
					<ResultSnackbar
						open={open}
						isScored={isScored}
						flag={state?.currentFlag?.name}
						handleNext={handleNext}
					/>
					<h2>which flag is of {state.currentFlag?.name}?</h2>
					{selectedFlags?.map((flag, i) => (
						<Card
							key={i}
							handleClick={() => handleFlagSelect(flag?.name)}
							flag={flag?.flag?.svgFile}
							isClicked={isClicked}
						/>
					))}
				</div>
			)}

			{/* <button onClick={() => randomize()}>next</button> */}
		</div>
	);
});

export default Game;
