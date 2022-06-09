import React from 'react';
import banner from '../Images/baner.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className='row bg-light py-5 '>
                <div className='col p-5'>
                    <h1 className='big'>Hello !<br/> <span className='salmon'> I am Subrata Sarker </span> </h1>
                    <h1 className='big'>Full-Stack Web Developer. </h1>
                </div>
                <div className='col p-5'>
                    <img src={banner} className='img-fluid w-100' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Banner;