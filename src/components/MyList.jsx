import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MyList = () => {
    const myList = useLoaderData();
    // log the id
    console.log('myList', myList.id);

    console.log(myList);
    return (
        <div>
            {/* my list */}
            <div className="container mx-auto">
                <div className="card bordered shadow-lg bg-base-200">
                    <div className="card-body">
                        <h2 className="card-title">My List</h2>
                        <ul className='grid md:grid-cols-3 gap-5'>
                            {myList.map((spot, index) => (
                                < Link to={`/spot/${spot._id}`} key={index}>
                                    <li key={index}>
                                        <img className='' src={spot.image} alt={spot.touristSpotName} />
                                        <p>{spot.touristSpotName}</p>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyList;
