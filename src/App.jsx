import { Link } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="bg-bkg font-sans w-full min-h-screen flex flex-col justify-center items-center space-y-12">
            <div className="text-green font-bold text-3xl leading-none pt-8 pb-2 text-center">
                Link Shortener
            </div>
            <form
                action="/signin"
                className="w-1/2 sm:w-2/3 flex max-h-full flex-col space-y-8 items-center justify-center space-5 p-4"
                method="post"
            >
                <p className="text-green font-semibold text-2xl text-center">
                    Login
                </p>
                <input
                    type="email"
                    className="text-green w-full sm:w-2/3 md:w-1/2 text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="text-gray w-full sm:w-2/3 md:w-1/2 text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Password"
                />
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
