import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";

const AllSpots = () => {
    const allSpots = useLoaderData();
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        document.title = 'Himaloy - All Spots';
    }, []);

    if (loading) {
        return <div className='h-4xl w-full mt-20 mx-auto flex justify-center text-gray-900'>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

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
