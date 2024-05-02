import { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const MyList = () => {
    const myList = useLoaderData();
    const { user, loading } = useContext(AuthContext);
    useEffect(() => {
        document.title = 'Himaloy - My List';
    }, []);

    let counter = 1;

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
            {/* my list */}
            <div className="container mx-auto">
                <div className="card bordered shadow-lg bg-base-200">
                    <div className="card-body">
                        <h2 className="card-title text-center mx-auto text-3xl font-bold">My List</h2>
                        <ul className='grid xmd:grid-cols-3 gap-5'>
                            {
                                // show only the spots that are added by the logged in user
                                myList.map((spot) => {
                                    if (spot.email === user.email) {
                                        return (
                                            <li key={spot._id} className="xcard bordered shadow-lg bg-base-200">
                                                <div className="xcard-body ">
                                                    <div className="overflow-x-auto">
                                                        <table className="table">
                                                            {/* head */}
                                                            <thead>
                                                                <tr className='text-xs'>
                                                                    <th></th>
                                                                    <th>Spot Name</th>
                                                                    <th>Location</th>
                                                                    <th>Country</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th>{counter++}</th>
                                                                    <td>{spot.touristSpotName}</td>
                                                                    <td>{spot.location}</td>
                                                                    <td>{spot.country}</td>
                                                                    <td className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2'>
                                                                        <Link to={`/spot/${spot._id}`} className='btn btn-sm btn-info'>View</Link>
                                                                        <Link to={`/editSpot/${spot._id}`} className='btn btn-sm btn-success'>Edit</Link>
                                                                        <button
                                                                            to={`/deleteSpot/${spot._id}`}
                                                                            className='btn btn-sm btn-error'
                                                                        >Delete</button>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    }
                                    else {
                                        <h2 className="card-title">No spot added yet</h2>
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyList;
