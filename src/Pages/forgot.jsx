export default function Forgot(){
    return(
            <form
                action="/forgot"
                className="bg-bkg w-full min-h-screen flex flex-col space-y-8 items-center justify-center space-5 p-4"
                method="post"
            >
            <p className="text-green font-bold text-3xl text-center">
                Forgot Password ?
            </p>
            <p className="text-green font-semibold text-sm text-center">
                Enter your email to reset your password
            </p>
                <input
                    type="email"
                    className="text-green w-1/2 md:w-1/4  text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    placeholder="Email"
                />
                <button
                    type="submit"
                    className="w-fit text-white text-xs bg-green rounded-md h-8 shadow-lg px-4"
                >
                    Submit
                </button>
            </form>
    )
}