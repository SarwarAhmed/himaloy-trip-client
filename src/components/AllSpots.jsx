import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const AllSpots = () => {
    const allSpots = useLoaderData();

    useEffect(() => {
        document.title = 'Himaloy - All Spots';
    }, []);
    return (
        <div>
            <div>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allSpots.map((spot) => (
                        <div key={spot._id} className="card bordered shadow-lg bg-base-200">
                            <div className="card-body">
                                <figure>
                                    <img src={spot.image} alt={spot.touristSpotName} />
                                </figure>
                                <h2 className="card-title">{spot.touristSpotName}</h2>
                                <p>{spot.shortDescription}</p>
                                <a href={`/spot/${spot._id}`} className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllSpots;
