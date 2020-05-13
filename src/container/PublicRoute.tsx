import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { key, rootContext } from "../store";
import { routes } from "../config/routes_config";
import { observer } from "mobx-react";

const PublicRoute: React.FC = observer((props) => {
	const { state } = useContext(rootContext);
	if (state.user || localStorage.getItem(key)) {
		return <Redirect to={routes.play.path} />;
	}
	return <Route {...props} />;
});

export default PublicRoute;
