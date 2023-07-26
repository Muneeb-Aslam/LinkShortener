import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Main from "../components/main";

export default function Dashboard(){
    return(
        <div className="bg-bkg w-full h-screen flex flex-col justify-between">
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}