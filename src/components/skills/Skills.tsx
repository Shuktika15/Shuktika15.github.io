import "./Skills.scss";
import {Data, Skill} from "../../data";
import {useEffect, useRef} from "react";
import userObserver from "../../services/observer";

export default function Skills() {
    const skills: Skill[] = Data.skills;
    const skillRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        userObserver<HTMLElement>(
            skillRefs.current,
            (entry, observer) => {
                entry.target.classList.toggle("slide", entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.5
            },
            (element, index) => {
                element.style.transitionDelay = `${index * 250}ms`;
            }
        );
    }, []);

    return (
        <section id="Skills">
            <h1>Skills</h1>
            {skills.map((skill) => (
                <article
                    className="card skill relative transition no-slide"
                    key={skill.id}
                    ref={(ref) => skillRefs.current!.push(ref as HTMLElement)}
                >
                    <div className="logo">
                        <img loading="lazy" src={`/icons/skills/${skill.logo}-light.svg`} alt={skill.logo}/>
                    </div>
                    <h3>{skill.title}</h3>
                    {skill.descriptions.map((description) => (
                        <p className="content" key={description}>{description}</p>
                    ))}
                </article>
            ))}
        </section>
    );
}