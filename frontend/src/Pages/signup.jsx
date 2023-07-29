import { Link } from "react-router-dom";
import React from "react";

export default function SignUp() {
    const [formData, setformData] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const [formError, setformError] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    function handleChange(event) {
        return setformData((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value };
        });
    }
    function handleClick(e) {
        e.preventDefault()
    }
    function Validation(e) {
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!formData[e.target.name]) {
            return setformError((preValue) => {
                return { ...preValue, [e.target.name]: "Required" }
            })
        } else {
            let input;
            [e.target.name] == "name" ? input = nameRegex : [e.target.name] == "email" ? input = emailRegex : input = passwordRegex
            !input.test(formData[e.target.name]) ? setformError((preValue) => {
                return [e.target.name] == "name" ? { ...preValue, name: "Enter Name" } : [e.target.name] == "email" ? { ...preValue, email: "Enter Valid Email" } : { ...preValue, password: "Atleast 8 characters, Minimum one Upper, Lower Case and Specail Character" }
            }) :
                setformError({
                    name: "",
                    email: "",
                    password: "",
                })
        }
    }
    return (
        <div className="bg-bkg font-sans w-full min-h-screen flex flex-col justify-center items-center space-y-8">
            <div className="text-green font-bold text-3xl leading-none pt-4 text-center">
                Link Shortener
            </div>
            <form
                action="/register"
                className="w-2/3 lg:w-1/2 flex max-h-full flex-col space-y-4 items-center justify-center space-5 p-4 relative"
                method="post"
            >
                <p className="text-green font-semibold text-2xl text-center">
                    Register
                </p>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={Validation}
                    className="text-green w-full sm:w-2/3 md:w-1/2  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Name"
                />
                <div className="text-red text-xs px-2 text-start w-full sm:w-2/3 md:w-1/2">{formError.name}</div>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={Validation}
                    className="text-green w-full sm:w-2/3 md:w-1/2  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Email"
                />
                <div className="text-red text-xs px-2 text-start w-full sm:w-2/3 md:w-1/2">{formError.email}</div>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={Validation}
                    className="text-gray w-full sm:w-2/3 md:w-1/2  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Password"
                />
                <div className="text-red text-xs px-2 text-start w-full sm:w-2/3 md:w-1/2">{formError.password}</div>
                <button
                    type="submit"
                    className="w-1/3 md:w-1/6 text-white text-xs bg-green rounded-md h-8 shadow-lg"
                    onClick={handleClick}
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
