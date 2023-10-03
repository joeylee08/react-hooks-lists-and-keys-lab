import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const mapped = projects.map(proj => {
  return <ProjectItem name={proj.name} about={proj.about} technologies={proj.technologies} key={proj.name.slice(3)} />
})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{mapped}</div>
    </div>
  );
}

export default ProjectList;
