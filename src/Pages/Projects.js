import useProject from '../Components/useProject';
import Project from './Project';

const Projects = () => {
   const [projects]=useProject()
    return (
        <div className='container'>
            <h1 className='salmon py-5 big'> My Projects</h1>
            <div className='cardGrid'>
                {projects.map(project => <Project project={project} key={project.id}></Project>)}
            </div>
        </div>
    );
};

export default Projects;