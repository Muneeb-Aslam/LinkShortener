import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UrlMain from "../components/urlsmain";


export default function Urls(){
    return(
        <div className="bg-bkg w-full h-screen flex flex-col justify-between">
            <Navbar />
            <UrlMain />
            <Footer />
        </div>
    )
}