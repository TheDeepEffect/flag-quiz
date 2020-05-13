import { createContext } from "react";
import { observable, action } from "mobx";
import remotedev from "mobx-remotedev";
import { GameStore } from "./GameStore";

type IAttempt = {
	score: number;
	total: number;
};

type IInitialState = {
	user: string;
	attempts: IAttempt;
};
const initialState: IInitialState = {
	user: "",
	attempts: { score: 0, total: 0 },
};
export const key = "flag-quiz";

// @todo :Make a wrapper function to update user and score alag alag.... jaldi.....

export class RootStore {
	GameStore: GameStore;

	constructor() {
		this.GameStore = new GameStore(this);
	}
	@observable state: IInitialState = initialState;

	addUser = (name: string) => {
		this.setState({ user: name });
		localStorage.setItem(key, JSON.stringify(this.state));
	};
	addScore = (isScored: boolean) => {
		this.setState({
			attempts: {
				score: isScored
					? this.state.attempts.score + 1
					: this.state.attempts.score,
				total: this.state.attempts.total + 1,
			},
		});
		localStorage.setItem(key, JSON.stringify(this.state));
	};

	logOut = () => {
		this.reset();
		localStorage.clear();
	};

	@action
	setState = (params: Partial<IInitialState>) => {
		const { state } = this;
		this.state = {
			...state,
			...params,
		};
	};
	@action
	reset = () => {
		this.state = initialState;
	};
}
const store = (() => {
	const store = remotedev(RootStore, {
		global: true,
		onlyActions: true,
		name: "flag-quizz",
	});
	return new store();
})();

export const rootContext = createContext(store);
