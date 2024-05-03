import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProviders";

const AddSpost = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleAddSpotForm = (event) => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const touristSpotName = form.touristSpotName.value;
        // const country = form.country.value;
        const country = form.country.options[form.country.selectedIndex].value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        // signed in user name
        const username = form.username.value;
        // signed in user email
        const email = form.email.value;

        const newSpot = { image, touristSpotName, country, location, shortDescription, cost, seasonality, travelTime, totalVisitorsPerYear, username, email };

        console.log(newSpot);

        fetch('https://himaloy-trip-server.vercel.app/touristSpot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Tourist Spot Added Successfully',

                })
                form.reset();
            });
    };

    useEffect(() => {
        document.title = 'Himaloy - Add Spot';
    }, []);

    return (
        <div>
            <div className="hero py-10 xmin-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <h2 className="text-center mt-5 text-xl font-bold">Add a Tourist Spot</h2>
                    <form onSubmit={handleAddSpotForm} className="card-body grid md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="image URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" name="touristSpotName" placeholder="Tourist Spot Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            {/* <input type="text" name="country" placeholder="Country" className="input input-bordered" required /> */}
                            <select className="select select-bordered w-full max-w-xs" value="country">
                                <option disabled selected>Select Country</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Mayanmar">Mayanmar</option>
                                <option value="Japan">Japan</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Combodia">Combodia</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea name="shortDescription" className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="travelTime" placeholder="Travel Time" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" name="totalVisitorsPerYear" placeholder="Total visitors per year" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text"
                            defaultValue={user.displayName}
                            name="username" placeholder="User Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="email"
                            defaultValue={user.email}
                             name="email" placeholder="User Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6 col-span-2">
                            <input type="submit" className="btn btn-primary" value="Add Spot" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddSpost;
