import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { AuthContext } from "../provider/AuthProviders";
import Swal from "sweetalert2";


const Register = () => {
    const { user, createUser } = useContext(AuthContext)
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
    const refreshPage = () => {
        window.location.reload();
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    useEffect(() => {
        document.title = 'Himaloy | Register';
    }, []);




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: data.name,
                    photoURL: data.PhotoUrl
                })
                console.log(user)
                // new user has been created
                // data time
                const createdAt = new Date().toISOString();
                //  user data with email
                const createdUser = { ...data, createdAt, uid: user.uid }
                fetch('https://himaloy-trip-server.vercel.app/addUser', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(createdUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user added to the database')
                        }
                    })
                // Swal('Success', 'Register successfully', 'success')
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "Register successfully",
                });
                // refreshPage();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // Swal(errorCode, errorMessage, 'error');
                Swal.fire({
                    icon: "error",
                    title: errorCode,
                    text: errorMessage,
                });
            });
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                    Register an account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-gray-500">
                    <div className="">
                        <label htmlFor="email" className="block label label-text text-sm font-medium leading-6">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("name", { required: true })}
                                id="name"
                                // name="name"
                                type="text"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.name && <span className="text-xs text-red-500">This field is required</span>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("email", { required: true })}
                                id="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.name && <span className="text-xs text-red-500">This field is required</span>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="photoUrl" className="block text-sm font-medium leading-6">
                            Photo URL
                        </label>
                        <div className="mt-2">
                            <input
                                {...register("PhotoUrl", { required: true })}
                                id="photoUrl"
                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.name && <span className="text-xs text-red-500">This field is required</span>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6">
                                Password
                            </label>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                name="password"
                                type={type}
                                value={password}
                                {...register("password",
                                    {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                                    },
                                )}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {/* {errors.password && <span className="text-xs text-red-500">This field is required</span>} */}
                            {errors.password?.type === 'maxLength' && "Password cannot exceed 20 characters"}
                            {errors.password?.type === 'required' && "Password is required"}
                            {errors.password?.type === 'minLength' && "Password must be at least 6 characters"}
                            {errors.password?.type === 'pattern' && "Password must contain at least one uppercase letter, one lowercase letter, and one number"}
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
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already Have an Account?{' '}
                    <Link
                        to={"/login"}
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Log In
                    </Link>
                </p>
                {/* login in with goole or GitBub */}
                <div className="mt-6 flex space-x-3">
                    <button
                        onClick={() => googleLogin()}
                        className="flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="google" className="w-6 h-6" />
                        {/* <span className="ml-2">Login with Google</span> */}
                    </button>

                    <button
                        onClick={() => gitHubLogin()}
                        className="flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" className="w-6 h-6" />
                        {/* <span className="ml-2">Login with GitHub</span> */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
