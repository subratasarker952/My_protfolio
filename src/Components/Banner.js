import React from 'react';
import banner from '../Images/baner.png'

const Banner = () => {
    return (
        <div className='container mt-5' >
            <div className='row'>
                <div className='col-md-6 '>
                    <div className='p-5'>
                        <h1 className='big'>Hello !<br /> I am  <span className='salmon'>Subrata Sarker </span> </h1>
                        <h1 className='big'>Full-Stack Web Developer. </h1>
                    </div>
                </div>
                <div className='col-md-6 '>
                    <div className='p-5'>
                        <img src={banner} className='img-fluid w-100' alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;