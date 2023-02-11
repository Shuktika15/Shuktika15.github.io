import "./Projects.scss";
import {Data, Project} from "../../data";
import {useEffect, useRef} from "react";
import userObserver from "../../services/observer";
import useTilt from "../../services/tilt";

export default function Projects() {
    const projects: Project[] = Data.projects;
    const projectRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        userObserver(
            projectRefs.current,
            (entry, observer) => {
                entry.target.classList.toggle("slide", entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1
            }
        );
        projectRefs.current.forEach(project => useTilt(project, {
            perspective: 1000,
            tilt: 5,
            transitionDuration: 100
        }));
    }, []);

    return (
        <section id="Projects">
            <h1>Projects</h1>
            {projects.map((project) => (
                <article
                    className="project card relative transition no-slide"
                    key={project.id}
                    ref={(ref) => projectRefs.current.push(ref as HTMLElement)}
                >
                    <div className="card-header">
                        <img
                            src={`/images/projects/${project.background}`}
                            alt={project.title}
                            className="transition"
                            loading="lazy"
                        />
                        <a href={project.github} className="github">
                            <span className="material-icons-round">code</span>
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