import React from "react";
import { Button } from "@material-ui/core";

type ICardProps = {
	handleClick: () => void;
	flag: string | undefined;
	isClicked: boolean;
};

const FlagCard: React.FC<ICardProps> = ({ handleClick, flag, isClicked }) => {
	return (
		<div className="flag">
			<Button onClick={handleClick} disabled={isClicked}>
				<img src={flag} alt="flag" />
			</Button>
		</div>
	);
};

export default FlagCard;
