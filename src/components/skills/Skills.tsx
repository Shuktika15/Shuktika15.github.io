import "./Skills.scss";
import {Data, Skill} from "../../data";

export default function Skills() {
    const skills: Skill[] = Data.skills;

    function getLightImage(logoName: string): string {
        return new URL(`/public/icons/${logoName}-light.svg`, import.meta.url).href;
    }

    return (
        <section id="Skills">
            <h1>Skills</h1>
            {skills.map((skill) => (
                <article className="skill relative transition has-top" key={skill.id}>
                    <div className="logo">
                        <img src={getLightImage(skill.logo)} alt={skill.logo}/>
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