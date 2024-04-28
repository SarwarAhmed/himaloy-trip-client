const AddSpost = () => {

    return (
        <div>
            <div className="hero pt-10 xmin-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                   <h2 className="text-center mt-5 text-xl font-bold">Add a Tourist Spot</h2>
                    <form className="card-body grid md:grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" placeholder="image URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>Select Country</option>
                                <option>Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Japan">Japan</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Combodia">Combodia</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Location" className="input input-bordered" required />
                        </div>

                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <input type="text" placeholder="Average Cost" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <input type="text" placeholder="Seasonality" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" placeholder="Travel Time" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" placeholder="Total visitors per year" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <input type="text" placeholder="Total visitors per year" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="User Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" placeholder="User Email" className="input input-bordered" required />
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
