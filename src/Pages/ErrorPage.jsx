import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Page Not Found !</h1>
                        <button className="btn btn-primary mt-5">
                            <Link to="/">Go back to Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
