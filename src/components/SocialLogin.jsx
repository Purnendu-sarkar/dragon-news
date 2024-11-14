import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-3'>
                <button className='btn'>
                <FaGoogle /> Login with Google
                </button>
                <button className='btn'>
                    <FaFacebook></FaFacebook> Login With Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;