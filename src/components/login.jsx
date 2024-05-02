import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProviders";


const Login = () => {
    const { user, signIn, googleLogin, gitHubLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    useEffect(() => {
        document.title = 'Himaloy | Login';
    }, []);



    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/')
                // swal('Success', 'Login successfully', 'success')
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login successfully',
                });
            })
            .catch(error => {
                console.error(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // swal(errorCode, errorMessage, 'error');
                Swal.fire({
                    icon: 'error',
                    title: errorCode,
                    text: errorMessage,
                });
            });
    }

    // logged in user redirect to home page
    useEffect(() => {
        if (user) {
            if (location?.state) {
                navigate(location.state);
            } else {
                navigate('/');
            }
        }
    }, [user, navigate, location?.state]);

    return (
        <div className="min-h-[calc(100vh-168px)] flex xmin-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                    Log in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    onSubmit={handleLogin}
                    className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 ">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 ">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                id="password"
                                name="password"
                                type={type}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                                className="xblock relative w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <span className="absolute mt-1 mr-8 top-0 right-0" onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={25} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link
                        to={'/register'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Register
                    </Link>
                </p>
                {/* login in with goole or GitBub */}
                <div className="mt-6 flex space-x-3">
                    <button
                        onClick={() => googleLogin()}
                        className="flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold leading-6  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="google" className="w-6 h-6" />
                        {/* <span className="ml-2">Login with Google</span> */}
                        <span className="text-xl text-gray-700 font-bold ml-4">Sign with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
