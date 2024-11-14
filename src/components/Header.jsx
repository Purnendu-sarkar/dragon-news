import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-5'>
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
            
        </div>
    );
};

export default Header;