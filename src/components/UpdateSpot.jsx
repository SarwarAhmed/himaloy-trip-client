import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const { user } = useContext(AuthContext);

    const currentSpot = useLoaderData();
    const { _id, image, touristSpotName, country, location, shortDescription, cost,
        seasonality, travelTime, totalVisitorsPerYear, username, email } = currentSpot;

    if (user.email !== email) {
        Swal.fire({
            icon: 'error',
            title: 'Unauthorized',
            text: 'You are not authorized to update this spot',
            confirmButtonAriaLabel: 'Ok',
        })
        window.location.href = '/';
    }


    const handleUpdateSpotForm = (e) => {
        e.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const touristSpotName = form.touristSpotName.value;
        const country = form.country.options[form.country.selectedIndex].value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const username = form.username.value;
        const email = form.email.value;

        const updateSpot = {
            image, touristSpotName, country, location, shortDescription,
            cost, seasonality, travelTime, totalVisitorsPerYear, username, email
        };

        console.log(updateSpot);


        // sent data to the server
        fetch(`http://127.0.0.1:5000/updateSpot/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Tourist Spot Updated Successfully',
                        confirmButtonAriaLabel: 'Ok'
                    })
                }
            })
    }


    return (
        <div>
            <div className="hero pt-10 xmin-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <h2 className="text-center mt-5 text-xl font-bold">Add a Tourist Spot</h2>
                    <form onSubmit={handleUpdateSpotForm} className="card-body grid md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" defaultValue={image} name="image" placeholder="image URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" defaultValue={touristSpotName} name="touristSpotName" placeholder="Tourist Spot Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            {/* <input type="text" name="country" placeholder="Country" className="input input-bordered" required /> */}
                            <select className="select select-bordered w-full max-w-xs" name="country">
                                {/* <option disabled selected>Select Country</option> */}
                                <option disabled>Select Country</option>
                                <option value={country === "Bangladesh" ? "selected" : ""}>Bangladesh</option>
                                <option value={country === "Thailand" ? "selected" : ""}>Thailand</option>
                                <option value={country === "India" ? "selected" : ""}>India</option>
                                <option value={country === "Indonesia" ? "selected" : ""}>Indonesia</option>
                                <option value={country === "Malaysia" ? "selected" : ""}>Malaysia</option>
                                <option value={country === "Japan" ? "selected" : ""}>Japan</option>
                                <option value={country === "Vietnam" ? "selected" : ""}>Vietnam</option>
                                <option value={country === "Combodia" ? "selected" : ""}>Combodia</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" defaultValue={location} name="location" placeholder="Location" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea name="shortDescription" defaultValue={shortDescription} className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" name="cost" defaultValue={cost} placeholder="Average Cost" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" name="travelTime" value={travelTime} placeholder="Travel Time" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear} placeholder="Total visitors per year" className="input input-bordered" required />
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
                            <input type="submit" className="btn btn-primary" value="Update Spot" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateSpot;
