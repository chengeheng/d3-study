import React from "react";
import { routers } from "./router";
import { parseRoute } from "./parseRoute";
const App = _ => {
	return <>{parseRoute(routers)}</>;
};

export default App;
