import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>

        <main>
            <div>
                <Outlet />
            </div>
        </main>
        </div>
    );
};

export default Root;
