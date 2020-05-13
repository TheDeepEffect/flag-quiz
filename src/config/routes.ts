import { createBrowserHistory } from "history";

import { routes as routes_config, IRouteConfig } from "./routes_config";
import GamePage from "./../pages/GamePage";
import ScorePage from "./../pages/ScorePage";
import AddNamePage from "./../pages/AddNamePage";
export const history = createBrowserHistory();

export const routes: IRouteConfig = {
	[routes_config.play.id]: {
		...routes_config.play,
		component: GamePage,
	},
	[routes_config.score.id]: {
		...routes_config.score,
		component: ScorePage,
	},
	[routes_config.addName.id]: {
		...routes_config.addName,
		component: AddNamePage,
	},
};
