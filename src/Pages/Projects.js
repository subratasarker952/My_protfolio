import useProject from "../Components/useProject";
import Project from "./Project";

const Projects = () => {
  const [projects] = useProject();
  return (
    <div className="container py-5 pb-5" id="projects">
      <h2 className="big py-3 salmon">My Projects</h2>
      <div className="row md:row-cols-3 pb-5">
        {projects.map((project) => (
          <Project project={project} key={project.id}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
