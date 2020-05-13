import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export const createClient = () => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: "https://countries-274616.ew.r.appspot.com/",
		}),
	});
};
