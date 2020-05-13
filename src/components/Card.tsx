import React from "react";

type ICardProps = {
	handleClick: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
	flag: string | undefined;
};

const FlagCard: React.FC<ICardProps> = ({ handleClick, flag }) => {
	return (
		<div className="flag">
			<img src={flag} onClick={handleClick} />
		</div>
	);
};

export default FlagCard;
