import { useLoaderData } from "react-router-dom";

const Spot = () => {
    const trip = useLoaderData();
    const { image, touristSpotName, country,
        location, shortDescription, cost, seasonality,
        travelTime, totalVisitorsPerYear, username, email } = trip;

    return (
        <div>
            <div className="container mx-auto">
                <div className="card bordered shadow-lg bg-base-200">
                    <div className="card-body">
                        <figure>
                            <img src={image} alt={touristSpotName} />
                        </figure>
                        <h2 className="card-title">{touristSpotName}</h2>
                        <p>Country: {country}</p>
                        <p>Location: {location}</p>
                        <p>Short Description: {shortDescription}</p>
                        <p>Cost: {cost}</p>
                        <p>Seasonality: {seasonality}</p>
                        <p>Travel Time: {travelTime}</p>
                        <p>Total Visitors Per Year: {totalVisitorsPerYear}</p>
                        <p>Username: {username}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spot;
