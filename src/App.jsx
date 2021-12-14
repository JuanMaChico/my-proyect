import React from "react";
import Inicio from "./components/Inicio";
import Base from "./components/Base";

import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link 
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<h1>URL BASE</h1>
					<Base />
				</Route>

				<Route path="/Inicio">
					<h1>Inicio</h1>
					<Inicio />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
