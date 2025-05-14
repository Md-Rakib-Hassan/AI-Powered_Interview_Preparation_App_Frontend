import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const ProfileInfo = () => {
    const { user, clearUser } = useContext(UserContext);
    const [dropdown, setDropDown] = useState(false);
    const navigate = useNavigate();
    console.log(user);

    const toggleDropDown = () => {
        setDropDown(pre => !pre);
        console.log(dropdown);
    }

    const handelLogout=()=> {
        localStorage.clear();
        clearUser();
        navigate("/");
    }
    return (
        <div className='relative'>
            <div className='flex items-center' onClick={toggleDropDown}>
            <img src={user.profileImageUrl} alt="" className='w-11 h-11 bg-gray-300 rounded-full mr-3' />
            <div>
                {user?user.name: ""}
            </div>

                <div className='absolute top-12 bg-gray-100 px-6 left-2 '>
                    <button className='btn-secondary'>Dashboard</button>
                    <button className='btn-secondary'>LogOut</button>
                </div>
        </div>


        </div>
    );
};

export default ProfileInfo;