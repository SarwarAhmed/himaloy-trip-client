import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyList = () => {
    const myList = useLoaderData();
    // log the id
    console.log('myList', myList.id);

    console.log(myList);

    useEffect(() => {
        document.title = 'Himaloy - My List';
    }, []);


    return (
        <div>
            {/* my list */}
            <div className="container mx-auto">
                <div className="card bordered shadow-lg bg-base-200">
                    <div className="card-body">
                        <h2 className="card-title">My List</h2>
                        <ul className='grid md:grid-cols-3 gap-5'>
                            {myList.map((spot, index) => (
                                <div key={index}>
                                    <li key={index}>
                                        <img className='' src={spot.image} alt={spot.touristSpotName} />
                                        <p>{spot.touristSpotName}</p>
                                    </li>
                                    <div className="flex justify-start space-x-4 mt-4">
                                        <Link to={`/viewSpot/${spot._id}`} className="btn btn-primary">View</Link>
                                        <Link to={`/editSpot/${spot._id}`} className="btn btn-success">Update</Link>
                                        {/* <Link to={`/deleteSpot/${spot._id}`} className="btn btn-error">Delete</Link> */}
                                        <button className="btn btn-error">Delete</button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyList;
