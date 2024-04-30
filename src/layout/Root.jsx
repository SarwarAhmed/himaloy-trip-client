import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../components/Footer";

const Root = () => {

    return (
        <div className="">
            <Navbar />
            <main className="min-h-[calc(100vh-172px)]">
                <div>
                    <Outlet />
                </div>
            </main>
           <Footer />
        </div>
    );
};

export default Root;
