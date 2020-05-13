import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import { getCountries_Country } from "./../generated/getCountries";
import { observer } from "mobx-react";
import { rootContext } from "../store";
import { getRandomInt } from "../service/Random";
import { useMount } from "react-use";
type IGamePageProps = {
	flags: (getCountries_Country | null)[] | undefined;
};

const Game: React.FC<IGamePageProps> = observer(({ flags }) => {
	const {
		GameStore: { setCurrentFlag, state },
	} = useContext(rootContext);
	const [selectedFlags, setSelectedFlags] = useState<
		(getCountries_Country | null)[] | undefined
	>([]);

	const randomize = () => {
		const random1 = getRandomInt(251);
		const last = random1.pop();
		const temp = flags?.filter((f, i) => i === random1[0] || i === random1[1]);
		setSelectedFlags(temp);
		const trueFlag = temp?.find((f, i) => i === last);
		setCurrentFlag(trueFlag);
	};
	useEffect(() => {
		randomize();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [flags]);
	// console.log(state.currentFlag?.name);
	return (
		<div>
			{selectedFlags?.map((flag, i) => (
				<Card
					key={i}
					handleClick={(e) => console.log(flag?.name)}
					flag={flag?.flag?.svgFile}
				/>
			))}
			<button onClick={() => randomize()}>next</button>
		</div>
	);
});

export default Game;
