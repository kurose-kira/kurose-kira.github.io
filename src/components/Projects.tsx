import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      url: "https://github.com/kurose-kira/project-1",
    },
    {
      title: "Project 2",
      description: "Description 2",
      url: "https://github.com/kurose-kira/project-2",
    },
  ];

  return (
    <section className="glass-panel">
      <h2>Projects</h2>

      <div className="projects-list">
        {projects.map((project) => (
          <a href={project.url}>
            <article key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
