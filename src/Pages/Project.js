import React from "react";

const Project = (props) => {
  const project = props.project;
  const { projectName, img, liveLink, description } = project;

  return (
    <div className="col">
      <div className="card p-4 border-rounded ">
        <img src={img} alt="" />
        <div class="card-body">
          <h5 class="card-title">{projectName}</h5>
          <p class="card-text">{description}</p>
          <a target="_blank" href={liveLink} className="white">
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
