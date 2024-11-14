import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-gray-200 p-2 flex gap-3 items-center'>
            <p className='bg-[#D72051] text-base-100 px-4 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={80} className='space-x-12'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque nemo laudantium ratione ipsam odit reprehenderit blanditiis aut velit error?
                </Link>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;