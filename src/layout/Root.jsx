import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const Root = () => {
    return (
        <div>

            <Navbar />
            <main>
                <div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Root;
