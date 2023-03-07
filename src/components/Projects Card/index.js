import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectsCard(props) {
  return (
<div className="row">
<div className="col-lg-4 col-sm-12">
    <h3>{props.title}</h3>
    <div>
      <p className="mb-4">{props.description}</p>
    </div>
    <a
      rel="noreferrer"
      target="_blank"
      className="btn btn-outline-primary"
      href={props.live}
    >
      See Live
    </a>
    <a
      rel="noreferrer"
      target="_blank"
      className="btn btn-outline-success"
      href={props.github}
    >
      Source Code
    </a>
</div>
<div className="col-lg-8 col-sm-12">
    <a rel="noreferrer" href={props.live} target="_blank">
        <img
          alt= {props.title}
          className="img-fluid"
          src= {props.image}
        />
    </a>
  </div>
</div>
  );
}

export default ProjectsCard;
