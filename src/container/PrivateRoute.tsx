import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { key, rootContext } from "../store";
import { routes } from "../config/routes_config";
import { observer } from "mobx-react";

const PrivateRoute: React.FC = observer((props) => {
	const { state, setState } = useContext(rootContext);

	if (state.user || localStorage.getItem(key)) {
		if (!state.user) {
			setState(JSON.parse(localStorage.getItem(key) || ""));
		}
		return <Route {...props} />;
	}
	return <Redirect to={routes.addName.path} />;
});

export default PrivateRoute;
