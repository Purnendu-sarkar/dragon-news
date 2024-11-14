import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-5'>
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            
        </div>
    );
};

export default Header;