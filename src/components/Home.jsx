import { useEffect } from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    let allSpots = useLoaderData();
    // filter only six spots
    allSpots = allSpots.slice(0, 6);

    useEffect(() => {
        document.title = 'Himaloy - Home';
    }, []);

    return (
        <div>
            <Slider />
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
            {/* Frequntry Asked Quention section */}
            <div className="container mx-auto mt-10">
                <div className="card bordered shadow-lg bg-base-200">
                    <div className="card-body">
                        <h2 className="card-title">Frequently Asked Questions</h2>
                        <details>
                            <summary className="text-base font-bold">What is Himaloy Trip?</summary>
                            <p>Himaloy Trip is a tourist guide in South Asian Countries.</p>
                        </details>
                        <details>
                            <summary className="text-base font-bold">How can I visit Himaloy Trip?</summary>
                            <p>You can visit Himaloy by bus, Car, Train or Air.</p>
                        </details>
                        <details>
                            <summary className="text-base font-bold">What is the best time to visit Himaloy?</summary>
                            <p>The best time to visit Himaloy is in winter.</p>
                        </details>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
