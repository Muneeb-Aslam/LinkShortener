import { Link } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
    const [formData, setformData] = React.useState({ email: "", password: "" })
    const [formError, setformError] = React.useState({ email: "", password: "" });

    function handleChange(event) {
        return setformData((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value };
        });
    }
    function Validation(e) {
        if (!formData[e.target.name]) {
            return setformError((preValue) => {
                return { ...preValue, [e.target.name]: "Required" }
            })
        } else {
            return setformError((preValue) => {
                return { ...preValue, [e.target.name]: "" }
            })
        }
    }
    return (
        <div className="bg-bkg font-sans w-full min-h-screen flex flex-col justify-center items-center space-y-2 sm:space-y-12">
            <div className="text-green font-bold text-3xl leading-none sm:pt-8 sm:pb-2 text-center">
                Link Shortener
            </div>
            <form
                action="/signin"
                className="w-2/3 lg:w-1/2 flex max-h-full flex-col space-y-4 items-center justify-center space-5 p-4"
                method="post"
            >
                <p className="text-green font-semibold text-2xl text-center">
                    Login
                </p>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-green w-full sm:w-2/3 md:w-1/2 text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Email"
                    onBlur={Validation}
                />
                <div className="text-red text-xs px-2 text-start w-full sm:w-2/3 md:w-1/2">{formError.email}</div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="text-gray w-full sm:w-2/3 md:w-1/2 text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Password"
                    onBlur={Validation}
                />
                <div className="text-red text-xs px-2 text-start w-full sm:w-2/3 md:w-1/2">{formError.password}</div>
                <Link
                    className="text-lightgray w-full sm:w-2/3 md:w-1/2 text-end text-xs"
                    to="/forgot"
                >
                    Forgot Password?
                </Link>
                <button
                    type="submit"
                    className="w-1/4 md:w-1/6 text-white text-xs bg-green rounded-md h-8 shadow-lg"
                >
                    Login
                </button>
            </form>
            <Link
                className="text-lightgray w-full text-center text-xs"
                to="/register"
            >
                Do Not Have an Account ? Sign Up
            </Link>
        </div>
    );
}

export default App;
