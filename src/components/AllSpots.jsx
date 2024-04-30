import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const allSpots = useLoaderData();

    useEffect(() => {
        document.title = 'Himaloy - All Spots';
    }, []);
    return (
        <div>
            <h2>All Sposts : {allSpots.length}</h2>
        </div>
    );
};

export default AllSpots;
