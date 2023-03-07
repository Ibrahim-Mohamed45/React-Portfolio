import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectsCard() {
  return (
<div className="row">
<div className="col-lg-4 col-sm-12">
    <h3>Project Title</h3>
    <div>
      <p className="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Senectus et netus et malesuada fames ac turpis egestas sed. 
      </p>
    </div>
    <a
      rel="noreferrer"
      target="_blank"
      className="btn btn-outline-primary"
      href="#"
    >
      See Live
    </a>
    <a
      rel="noreferrer"
      target="_blank"
      className="btn btn-outline-success"
      href="#"
    >
      Source Code
    </a>
</div>
<div className="col-lg-8 col-sm-12">
    <a rel="noreferrer" href="#!" target="_blank">
        <img
          alt="Project Image"
          className="img-fluid"
          src="assets/project.jpg"
        />
    </a>
  </div>
</div>
  );
}

export default ProjectsCard;
