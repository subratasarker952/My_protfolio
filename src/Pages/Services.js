import React, { useEffect, useState } from 'react';
import ServiceCard from '../Components/HomeComponent/ServiceCard';

const Services = () => {
const [services, setServices]=useState([])

useEffect(()=>{
    fetch('services.json')
    .then((res)=>res.json())
    .then((data)=>setServices(data))
},[services])

    return (
        <div className='container py-5 pb-5'>
            <h2 className='big py-3 salmon'>My Services</h2>
            <div className='row md:row-cols-3 pb-5'>
                   {
                    services.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                   }              
            </div>
        </div>
    );
};

export default Services;