import { useContext, useEffect } from "react";
import Slider from "../components/Slider";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";

const Home = () => {
    let allSpots = useLoaderData();
    allSpots = allSpots.slice(0, 6);

    const { loading } = useContext(AuthContext);


    let filteredContries = allSpots;

    const filterByCountries = (e) => {
        console.log(e.target.value);
        if (e.target.value) {
            filteredContries = allSpots.filter((spot) => spot.country === e.target.value);
            console.log(allSpots);
        } else {
            filteredContries = allSpots.slice(0, 6);
        }
    };


    useEffect(() => {
        document.title = 'Himaloy - Home';
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
            <Slider />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allSpots.map((spot) => (
                    <div key={spot._id} className="card bordered shadow-lg bg-base-200">
                        <div className="card-body">
                            <figure>
                                <img src={spot.image} alt={spot.touristSpotName} />
                            </figure>
                            <h2 className="card-title">{spot.touristSpotName}</h2>
                            {
                                spot.shortDescription.length > 100 ? <p>{spot.shortDescription.slice(0, 100)}...</p> : <p>{spot.shortDescription}</p>
                            }
                            <Link to={`/spot/${spot._id}`} className="btn btn-primary">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* filterd by countries */}
            <div className="container mx-auto mt-10">
                <div className="card bordered shadow-lg bg-base-200">
                    <div className="card-body">
                        <h2 className="card-title">Filterd by Countries.</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <form onChange={filterByCountries}>
                                <select className="select select-bordered">
                                    <option value="">All Countries</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="India">India</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Maldives">Maldives</option>
                                </select>

                            </form>
                        </div>
                        <div>
                            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredContries.map((spot) => (
                                    <div key={spot._id} className="card bordered shadow-lg bg-base-200">
                                        <div className="card-body">
                                            <figure>
                                                <img src={spot.image} alt={spot.touristSpotName} />
                                            </figure>
                                            <h2 className="card-title">{spot.touristSpotName}</h2>
                                            {/* <p>{spot.shortDescription}</p> */}
                                            {
                                                spot.shortDescription.length > 100 ? <p>{spot.shortDescription.slice(0, 100)}...</p> : <p>{spot.shortDescription}</p>
                                            }
                                            <Link to={`/spot/${spot._id}`} className="btn btn-primary">Read More</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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

            {/* Contact form  */}
            <div>
                <div className="container mx-auto mt-10">
                    <div className="card bordered shadow-lg bg-base-200">
                        <div className="card-body">
                            <h2 className="card-title">Contact Us</h2>
                            <form className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea placeholder="Message" className="textarea textarea-bordered" required></textarea>
                                <button type="submit" className="btn btn-primary mt-5">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
