import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type IRouteConfig = {
	[key: string]: {
		id: string;
		name: string;
		description?: string;
		path: string;
		exact: boolean;
		isPrivate: boolean;
		component?:
			| React.ComponentType<RouteComponentProps<any>>
			| React.ComponentType<any>;
	};
};

export const routes: IRouteConfig = {
	play: {
		id: "play",
		name: "Quiz",
		description: "Flag Quiz",
		path: "/",
		exact: true,
		isPrivate: true,
		component: undefined,
	},
	score: {
		id: "score",
		name: "score",
		description: "Score of current user",
		path: "/score",
		exact: true,
		isPrivate: true,
		component: undefined,
	},
	addName: {
		id: "addName",
		name: "Add name",
		description: "Add name of new user",
		path: "/addName",
		exact: true,
		isPrivate: false,
		component: undefined,
	},
};
