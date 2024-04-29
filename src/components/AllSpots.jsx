import { useEffect } from "react";

const AllSpots = () => {
    useEffect(() => {
        document.title = 'Himaloy - All Spots';
    }, []);
    return (
        <div>
            <h2>All sposts</h2>
        </div>
    );
};

export default AllSpots;
