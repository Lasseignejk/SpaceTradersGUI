import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Ships from "./components/Ships";
import Contracts from "./components/Contracts";

const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/dashboard" element={<Dashboard />}></Route>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/ships" element={<Ships />}></Route>
			<Route path="/contracts" element={<Contracts />}></Route>
		</Routes>
	);
};

export default App;
