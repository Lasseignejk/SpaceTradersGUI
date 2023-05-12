import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/ships">Ships</Link>
			<Link to="/contracts">Contracts</Link>
		</nav>
	);
};

export default Nav;
