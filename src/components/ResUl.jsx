import close from '/images/close.png'
import PropTypes from 'prop-types'

export default function ResNav({closebtn}) {
    return (
        <>
            <ul
                className="w-1/3 absolute top-0 right-0 min-h-max text-green font-semibold flex flex-col justify-center gap-2 py-4 rounded-md bg-white px-4"
                id="navbar"
            >   <div className="flex justify-end pr-2"><img src={close} alt="" className="w-4 cursor-pointer" onClick={()=>{console.log(closebtn)}}/></div>
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

ResNav.propTypes = {
    closebtn: PropTypes.func
}
