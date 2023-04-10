import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <div className='container py-5'>
            <h1 className='big salmon'>Comming Soon</h1>
        {projects.length}
        </div>
    );
};

export default Blog;