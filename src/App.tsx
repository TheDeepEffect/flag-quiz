import React from "react";
import { observer } from "mobx-react";
import "./App.css";
import { Router, Switch } from "react-router-dom";
import { history, routes } from "./config/routes";
import PrivateRoute from "./container/PrivateRoute";
import PublicRoute from "./container/PublicRoute";

const App: React.FC = observer(() => {
	return (
		<Router history={history}>
			<div className="App ">
				<div className="blur"></div>
				<Switch>
					{Object.keys(routes).map((key) => {
						const value = routes[key];
						const { isPrivate } = value;
						const SelectedRoute = isPrivate ? PrivateRoute : PublicRoute;
						return <SelectedRoute {...value} key={key} />;
					})}
				</Switch>
			</div>
		</Router>
	);
});

export default App;
