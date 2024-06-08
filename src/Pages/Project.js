import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';


const Project = (props) => {
    const project = props.project
    const { name, img1, description } = project;
    const navigate = useNavigate()
    const handleMore = (p) => {
        navigate('/moreInfo')
        ProjectDetails(p)
    }

    return (
        <div className='card p-2'>
            <img src={img1} alt=''/>
            {/*  <h2>{name}</h2>
            <p>{description}</p> */}
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{description}</p>
                <Button onClick={() => handleMore(project)}>Details</Button>
            </div>

        </div>
    );
};

export default Project;