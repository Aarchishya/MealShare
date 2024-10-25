import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, {
        path: "/",
        element: React.createElement(LandingPage),
      }),
      React.createElement(Route, {
        path: "/login",
        element: React.createElement(LoginPage),
      }),
      React.createElement(Route, {
        path: "/register",
        element: React.createElement(RegisterPage),
      })
    )
  );
}

export default App;
