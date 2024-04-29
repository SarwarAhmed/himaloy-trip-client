import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        document.title = 'Himaloy - Home';
    }, []);
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
