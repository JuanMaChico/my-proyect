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

			<Link to="/Inicio" >Inicio</Link>
			<Link to="/" >Base</Link>

			<Switch>
				<Route exact path="/">
					<Base />
				</Route>

				<Route path="/Inicio/:nombre">
					<Inicio />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
