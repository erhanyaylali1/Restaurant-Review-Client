import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenSize } from "./features/GeneralSlice";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import "./app.css";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateDimensions = () => {
		dispatch(setScreenSize(window.innerWidth));
	};

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/sign-in" element={<SignInPage />} />
			</Routes>
		</>
	);
};

export default App;
