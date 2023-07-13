// react router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layout
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="new" element={<NewContact />} />
			<Route path="*" element={<PageNotFound />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
