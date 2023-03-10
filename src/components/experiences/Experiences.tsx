import {Data, Experience} from "../../data";
import './Experiences.scss';

export default function Experiences() {
    const experiences: Experience[] = Data.experiences;

    function timeline(experience: Experience): string {
        const start = `${experience.startMonth}, ${experience.startYear} to `;
        const end = experience.current ? 'Present' : `${experience.endMonth}, ${experience.endYear}`
        return start + end;
    }

    return (
        <section id="Experiences">
            <h1>Experiences</h1>
            {experiences.map((experience, index) => (
                <article className="experience" key={experience.id}>
                    <h3>{experience.company}</h3>
                    <p className="timeline"><span className="material-icons-round"> date_range</span> {timeline(experience)}</p>
                    {experience.descriptions.map((description) => (
                        <p className="content" key={description}>{description}</p>
                    ))}
                    {index != experiences.length - 1 ? <hr/> : <></>}
                </article>
            ))}
        </section>
    )
}