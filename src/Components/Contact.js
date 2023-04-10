import React from 'react';
import contact from '../Images/contact1.jpg'

const Contact = () => {
    const handleSubmit = e =>{
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
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea placeholder='Write your message' />
                        <input type="submit" className='btn btn-info py-3 text-light' value="Send" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;