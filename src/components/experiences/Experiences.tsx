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
                <>
                    <div className="experience">
                        <h3>{experience.company}</h3>
                        <p><i>{timeline(experience)}</i></p>
                        <p className="content">{experience.description}</p>
                    </div>
                    {index != experiences.length - 1 ? <hr/> : <></>}
                </>
            ))}
        </section>
    )
}