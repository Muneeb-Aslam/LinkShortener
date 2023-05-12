export default function Navbar(){
    return (
        <nav className="w-full flex justify-between items-center p-4">
            <div>Link Shortener</div>
            <ul>
                <li><a href="/myurls">My URLs</a></li>
                <li><a href="/login">Sign Up</a></li>
                <li><a href="/register">Sign In</a></li>
            </ul>
        </nav>
    )
}