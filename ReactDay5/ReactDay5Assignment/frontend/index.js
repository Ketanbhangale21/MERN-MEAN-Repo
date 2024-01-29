import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginComponent from "./components/Login";
import RegisterComponent from "./components/Registration";
import AjaxDemo4 from "./components/AjaxDemo4";
import ProtectedRoute from "./components/ProtectedRoutes";
const routing = (
  <Router>
    <div style={{ textAlign: "center" }}>
      <Link className="links" to="/">
        Home
      </Link>
      <Link className="links" to="/login">
        Login
      </Link>
      <Link className="links" to="/register">
        Register
      </Link>
      <Link className="links" to="/students">
        Students
      </Link>
    </div>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
      <Route path="/register" element={<RegisterComponent />}></Route>
      <Route
        path="/students"
        element={
          <ProtectedRoute returnUrl="/students">
            <AjaxDemo4 />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{routing}</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
