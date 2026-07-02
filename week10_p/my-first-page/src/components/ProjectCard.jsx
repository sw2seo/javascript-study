function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer">
        프로젝트 보기
      </a>
    </div>
  );
}

export default ProjectCard;