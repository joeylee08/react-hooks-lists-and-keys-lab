import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techMap = technologies.map(item => {
    return <span key={item.slice(3)}>{item}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techMap}
      </div>
    </div>
  );
}

export default ProjectItem;
