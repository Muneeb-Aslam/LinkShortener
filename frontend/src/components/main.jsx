export default function Main() {
    return (
        <div className="bg-bkg  flex flex-col justify-between items-center p-4">
            <p className="text-green font-bold text-3xl text-center">
                Welcome to Link Shortener
            </p>
            <form
                action="/shortURL"
                className="bg-bkg w-full flex flex-col space-y-8 items-center  space-5 p-4"
                method="post"
            >   
                <div className="w-1/2 md:w-1/4 flex flex-col justify-between items-start space-y-4">
                <label htmlFor="link" className="text-green font-semibold px-2">Enter your long URL</label>
                <input
                    type="text"
                    name="link"
                    className="text-green w-full text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                />
                </div>
                <div className="w-1/2 md:w-1/4 flex flex-col justify-between items-start space-y-4">
                <label htmlFor="url" className="text-green font-semibold px-2">Short URL</label>
                <input
                    type="text"
                    name="url"
                    className="text-green w-full text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                    value="muneeb.com"
                    disabled
                />
                </div>
                <div className="w-1/2 md:w-1/4 flex flex-col justify-between items-start space-y-4">
                <label htmlFor="alias" className="text-green font-semibold px-2">Alias</label>
                <input
                    type="text"
                    name="alias"
                    className="text-green w-full text-sm font-semibold px-4 h-12 outline-0 rounded-lg shadow-lg"
                />
                </div>
                <button
                    type="submit"
                    className="w-fit text-white text-md bg-green rounded-md h-8 shadow-lg px-4"
                >
                    Shorten
                </button>
            </form>
        </div>
    );
}
