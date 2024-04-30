import { useEffect } from "react";
import Slider from "../components/Slider";

const Home = () => {
    useEffect(() => {
        document.title = 'Himaloy - Home';
    }, []);
   
    return (
        <div>
            <Slider />
        </div>
    );
};

export default Home;
