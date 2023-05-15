import close from '/images/close.png'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function ResNav({closebtn}) {
    return (
        <>
            <ul
                className="w-1/3 absolute top-0 right-0 min-h-max text-green font-semibold flex flex-col justify-center gap-2 py-4 rounded-md bg-white px-4"
                id="navbar"
            >   <div className="flex justify-end pr-2"><img src={close} alt="" className="w-4 cursor-pointer" onClick={()=>{console.log(closebtn)}}/></div>
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

ResNav.propTypes = {
    closebtn: PropTypes.func
}
