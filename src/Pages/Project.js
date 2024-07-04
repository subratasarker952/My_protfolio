import React from "react";

const Project = (props) => {
  const project = props.project;
  const { projectName, img, liveLink, description } = project;

  return (
    <div className="col">
      <div className="card p-4 border-rounded ">
        <img src={img}
        style={{ height: "200px", width: "300px", margin: "auto" }}
        alt={projectName} />
        <div className="card-body">
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">{description}</p>
          <a target="_blank" rel="noreferrer" href={liveLink} className="py-2 px-4 btn-primary">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
