import "./Skills.scss";
import {Data, Skill} from "../../data";

export default function Skills() {
    const skills: Skill[] = Data.skills;

    return (
        <section id="Skills">
            <h1>Skills</h1>
            {skills.map((skill) => (
                <article className="skill" key={skill.id}>
                    <div className="logo"></div>
                    <h3>{skill.title}</h3>
                    {skill.descriptions.map((description) => (
                        <div className="content" key={description}>{description}</div>
                    ))}
                </article>
            ))}
        </section>
    );
}