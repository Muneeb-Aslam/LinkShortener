import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Route,Routes  } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import SignUp from "./Pages/signup.jsx";
import Forgot from "./Pages/forgot.jsx";
import Dashboard from "./Pages/dashboard.jsx";
import Error from "./Pages/error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/login" element={<App />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/forgot" element={<Forgot />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
