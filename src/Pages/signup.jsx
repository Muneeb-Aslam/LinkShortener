import { Link } from "react-router-dom";
export default function SignUp() {

    return (
        <div className="bg-bkg font-sans w-full min-h-screen flex flex-col justify-center items-center space-y-12">
            <div className="text-green font-bold text-3xl leading-none pt-4 text-center">
                Link Shortener
            </div>
            <form
                action="/register"
                className="w-1/2 sm:w-2/3 flex max-h-full flex-col space-y-8 items-center justify-center space-5 p-4"
                method="post"
            >
            <p className="text-green font-semibold text-2xl text-center">
                Register
            </p>
                <input
                    type="text"
                    className="text-green w-full sm:w-2/3 md:w-1/2  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Name"
                />
                <input
                    type="email"
                    className="text-green w-full sm:w-2/3 md:w-1/2  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="text-gray w-full sm:w-2/3 md:w-1/2  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Password"
                />
                <button
                    type="submit"
                    className="w-1/3 md:w-1/6 text-white text-xs bg-green rounded-md h-8 shadow-lg"
                >
                    Register
                </button>
            </form>
            <Link
                className="text-lightgray w-full text-center text-xs"
                to="/login"
            >
                Have an Account ? Sign In
            </Link>
        </div>
    );
}
