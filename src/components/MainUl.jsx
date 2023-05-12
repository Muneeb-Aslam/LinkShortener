export default function MainNav() {
    return (
        <>
            <ul
                className=" hidden text-green font-semibold md:flex items-center space-x-12 mr-16 lg:mr-32 bg-gray px-4 h-full rounded-md"
                id="navbar"
            >
                <li>
                    <a href="/myurls" className="">
                        My URLs
                    </a>
                </li>
                <li>
                    <a href="/login" className="">
                        Sign Up
                    </a>
                </li>
                <li>
                    <a href="/register" className="">
                        Sign In
                    </a>
                </li>
            </ul>
        </>
    );
}
