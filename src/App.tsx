import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenSize } from "./features/GeneralSlice";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import "./app.css";
import SignUpPage from "./pages/SignUpPage";
import SignUpCreatPage from "./pages/SignUpCreatPage";

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
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-up-create" element={<SignUpCreatPage />} />
      </Routes>
    </>
  );
};

export default App;
