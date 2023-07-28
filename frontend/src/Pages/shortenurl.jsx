import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ShorterURLMain from "../components/shorterurlmain";


export default function ShorterURL(){
    return(
        <div className="bg-bkg w-full h-screen flex flex-col justify-between">
            <Navbar />
            <ShorterURLMain />
            <Footer />
        </div>
    )
}