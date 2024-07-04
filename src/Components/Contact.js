import React from 'react';
import contact from '../Images/contact1.jpg'
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div className='container py-5'>
            <h2 className='big py-3 salmon'>Contact Me</h2>
            <div className='row '>
                <div className='col-md-6 '>
                    <img src={contact} className="img-fluid" alt='' />
                </div>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit}>
                        <div className='d-flex'>
                            <div className='m-2'>
                                <h2 className='text-info'><FaPhone /></h2>
                                <p>+8801521335328</p>
                            </div>
                            <div className='m-2'>
                                <h2 className='text-info'><FaEnvelope /></h2>
                                <p>subratasarker952@gmail.com</p>
                            </div>
                        </div>
                        <input type="text" required placeholder='Name' />
                        <input type="email" required placeholder='Email' />
                        <textarea required maxLength={50} placeholder='Write your message' />
                        <input type="submit" className='btn btn-info py-3 text-light' value="Send" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;