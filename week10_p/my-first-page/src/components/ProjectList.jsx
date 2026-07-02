import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      <h2>프로젝트</h2>
      <ProjectCard project={projects[0]} />
      <ProjectCard project={projects[1]} />
    </section>
  );
}

export default ProjectList;