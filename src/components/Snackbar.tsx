import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

type IProps = {
	open: boolean;
	handleNext?: () => void;
	isScored: boolean;
	flag: string | undefined;
};

const ResultSnackbar: React.FC<IProps> = ({
	open,
	isScored,
	flag,
	handleNext,
}) => {
	return (
		<Snackbar
			anchorOrigin={{
				vertical: "top",
				horizontal: "center",
			}}
			open={open}
			message={isScored ? `WELL DONE, ${flag} it is.` : `Oops! wrong flag`}
			action={
				<Button color="primary" size="large" onClick={handleNext}>
					Next
				</Button>
			}
		/>
	);
};
export default ResultSnackbar;
