import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<header>
			<div className="header-wrapper">
				<h1 className="logo">
					<Link to="/">ContactsDB</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="new">New Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
export default Navbar;
