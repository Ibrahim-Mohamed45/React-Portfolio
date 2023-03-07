import React from "react";
import ProjectsCard from "../Projects Card";
import projectList from "../../projects.json";

function Projects() {
  return (
    <section>
      <h1>Projects page</h1>
      {projectList.map((p) => (
        <ProjectsCard
          key={p.id}
          title={p.title}
          description={p.description}
          live={p.live}
          github={p.github}
          image={p.image}
        />
      ))}
    </section>
  );
}

export default Projects;
