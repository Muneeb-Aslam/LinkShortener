import { Link } from "react-router-dom";
export default function MainNav() {
    return (
        <>
            <ul
                className=" hidden text-green font-semibold md:flex items-center space-x-12 mr-16 lg:mr-32 bg-gray px-4 h-full rounded-md"
                id="navbar"
            >
                <li>
                    <Link href="/myurls" className="">
                        My URLs
                    </Link>
                </li>
                <li>
                    <Link href="/login" className="">
                        Sign Up
                    </Link>
                </li>
                <li>
                    <Link href="/register" className="">
                        Sign In
                    </Link>
                </li>
            </ul>
        </>
    );
}
