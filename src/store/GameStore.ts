import { observable, action } from "mobx";
import { RootStore } from "./";
import { getCountries_Country } from "../generated/getCountries";

export type IInitialGameState = {
	currentFlag: getCountries_Country | null;
	usedFlags: (getCountries_Country | null | undefined)[];
};

const initialState: IInitialGameState = {
	currentFlag: null,
	usedFlags: [],
};

export class GameStore {
	@observable state: IInitialGameState = initialState;
	rootStore: RootStore;
	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@action
	setState = (params: Partial<IInitialGameState>) => {
		const { state } = this;
		this.state = {
			...state,
			...params,
		};
	};

	setCurrentFlag = (currentFlag: getCountries_Country | null | undefined) => {
		const { usedFlags } = this.state;

		this.setState({
			usedFlags: [...usedFlags, currentFlag],
			currentFlag,
		});
	};
}
