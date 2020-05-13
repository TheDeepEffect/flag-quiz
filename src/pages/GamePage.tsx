import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_COUNTRIES } from "../queries/query";
import {
	getCountries,
	getCountries_Country,
} from "./../generated/getCountries";
import LogoutButton from "../components/LogoutButton";
import Game from "../components/Game";

// @todo : Add Game component jema onCLick and randomness handle thase and ema bdha flags mokli devana...

type IGamePageProps = {
	loading?: boolean;
	flags?: (getCountries_Country | null)[] | undefined;
};

const GamePage: React.FC<IGamePageProps> = ({ loading, flags }) => {
	return (
		<div className="card">
			<div className="game">
				<h1>{loading ? "Loading..." : "Flag Quiz"}</h1>
				<Game flags={flags} />
			</div>

			<LogoutButton />
		</div>
	);
};

const GamePageQuery: React.FC = () => {
	const { loading, data, error } = useQuery<getCountries>(GET_COUNTRIES);
	if (loading) {
		return <GamePage loading={loading} />;
	}
	if (error) {
		console.log(error);
	}
	if (data) {
		return <GamePage flags={[...data.Country]} />;
	}
	return <></>;
};

export default GamePageQuery;
