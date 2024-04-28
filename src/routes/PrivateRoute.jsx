import { useContext } from 'react';
import propTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProviders';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='h-4xl w-full mt-20 mx-auto flex justify-center text-gray-900'>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate
                state={location.pathname}
                to="/login" />
            {/* <Navigate to="/login" /> */}
        </div>
    )
};

PrivateRoute.propTypes = {
    children: propTypes.node.isRequired
};

export default PrivateRoute;
