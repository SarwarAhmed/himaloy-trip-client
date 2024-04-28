import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";

const Profile = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = 'Himaloy E - Profile';
    }, []);

    return (
        <div>
            <div className="min-h-[calc(100vh-168px)]">
                <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-coverd bg:url('https://source.unsplash.com/1L71sPT5XKc')">

                    <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">

                        <div id="profile"
                            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


                            <div className="p-4 md:p-12 text-center lg:text-left">
                                <div className={`block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-centerd bg-[url('${user.photoURL}')]`}></div>

                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.displayName || "No Name"}</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                    {user.email || ' No email'}
                                </p>
                                <p className="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

                                <div className="pt-12 pb-8">
                                    <NavLink to={'/editprofile'} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                        Update Profile
                                    </NavLink>
                                </div>
                            </div>

                        </div>

                        <div className="w-full lg:w-2/5">
                            <img src={user.photoURL} className="rounded-none  hidden lg:block" />

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Profile;
