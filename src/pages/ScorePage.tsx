import React, { useContext } from "react";
import NavButton from "../components/NavButton";
import { rootContext, key } from "../store";
import ScoreCard from "../components/ScoreCard";

const ScorePage: React.FC = () => {
	const {
		state: { attempts },
	} = useContext(rootContext);
	return (
		<div className="card">
			<h1>Score</h1>
			<div className="score">
				{Object.keys(attempts).map((k, i) => {
					console.log(k);
					return <ScoreCard key={i} title={k} />;
				})}
			</div>
			<NavButton />
		</div>
	);
};
export default ScorePage;
