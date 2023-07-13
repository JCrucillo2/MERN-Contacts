import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./RootLayout.scss";

const RootLayout = () => {
	return (
		<div>
			<Navbar />
			<div className="page-wrapper">
				<Outlet />
			</div>
		</div>
	);
};
export default RootLayout;
