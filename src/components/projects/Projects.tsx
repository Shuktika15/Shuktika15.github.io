import "./Projects.scss";
import {Data, Project} from "../../data";

export default function Projects() {
    const projects: Project[] = Data.projects;

    return (
        <section id="Projects">
            <h1>Projects</h1>
            {projects.map((project) => (
                <article className="project card relative transition has-top" key={project.id}>
                    <div className="card-header">
                        <img loading="lazy" src={`/images/projects/${project.background}`} alt={project.title}/>
                        <a href={project.github}>
                            <i className="fa-brands fa-github" aria-label="GitHub Link"></i>
                        </a>
                    </div>
                    <div className="card-body">
                        <h3 className="color-accent">{project.title}</h3>
                        {project.descriptions.map((description) => (
                            <p className="content" key={description}>{description}</p>
                        ))}
                        <div className="stack">
                            {project.stack.map((item) => (
                                <div className="chip" key={item}>{item}</div>
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
}