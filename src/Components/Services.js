import React from 'react';
import web from '../Images/web.jpg';
import bug from '../Images/bug.jpg';
import dev from '../Images/dev.jpg';


const Services = () => {
    return (
        <div className='container py-5'>
            <h2 className='big py-3 salmon'>My Services</h2>
            <div className='row md:row-cols-3'>
                <div className='col '>
                    <div className='card p-4 border-rounded '>
                        <img style={{height:"200px", width:"300px",margin:"auto"}} src={web} alt=''/>
                        <h3 className='mt-3 salmon'> Create website</h3>
                        <p>I can make interactive responsive website If you Need any kind of website contact me</p>
                    </div>
                </div>                
                <div className='col '>
                    <div className='card p-4 border-rounded'>
                        <img style={{height:"200px", width:"300px",margin:"auto"}} src={bug} alt=''/>
                        <h3 className='mt-3 salmon'> Debugging</h3>
                        <p>Your website have some porblem or error i can fix this porblem</p>
                    </div>
                </div>                
                <div className='col '>
                    <div className='card p-3 border-rounded'>
                        <img style={{height:"200px", width:"300px",margin:"auto"}} src={dev} alt='' />
                        <h3 className='mt-3 salmon'>Website Develop</h3>
                        <p>If you Need new feature in your website or modify some feature i can do it.</p>
                    </div>
                </div>                
            </div>

            
        </div>
    );
};

export default Services;