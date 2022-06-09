import React from 'react';

const Project = () => {
    return (
        <div className='container py-5'>
            <h2 className='big py-3 salmon'>My project</h2>
            <div className='row md:row-cols-3'>
                <div className='col '>
                    <div className='card p-4 border-rounded '>
                        <h3 className='mt-3 salmon'> Doctor-service</h3>
                        <ul>
                            <li> Doctor provided service</li>
                            <li> Booking service</li>
                            <li>Login and redirect </li>
                        </ul>
                    </div>
                </div>
                <div className='col '>
                    <div className='card p-4 border-rounded'>
                        <h3 className='mt-3 salmon'> Smart-Phone inventory</h3>
                        <ul>
                            <li>stack management</li>
                            <li> Delivery and Add product</li>
                            <li>Update Quantity. </li>
                        </ul>
                    </div>
                </div>
                <div className='col '>
                    <div className='card p-4 border-rounded'>
                        <h3 className='mt-3 salmon'>Essential-tools</h3>
                        <ul>
                            <li>  Manage tools.</li>
                            <li> Admin and user role </li>
                            <li> Order placement </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Project;