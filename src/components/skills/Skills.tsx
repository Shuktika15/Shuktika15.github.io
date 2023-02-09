import "./Skills.scss";
import {Data, Skill} from "../../data";
import {useEffect, useRef} from "react";

export default function Skills() {
    const skills: Skill[] = Data.skills;
    const skillRefs = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                entry.target.classList.toggle("slide", entry.isIntersecting);

                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            }
        }, {threshold: 0.1});

        for (let i = 0; i < skillRefs.current.length; i++){
            const skill = skillRefs.current[i];
                skill.style.transitionDelay = `${i * 250}ms`;
                observer.observe(skill);
        }
    }, []);

    return (
        <section id="Skills">
            <h1>Skills</h1>
            {skills.map((skill) => (
                <article
                    className="skill relative transition no-slide"
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