import {Data, Education} from "../../data";
import "./Educations.scss";

export default function Educations() {
    const educations: Education[] = Data.educations;

    function grade(education: Education): string {
        switch (education.gradeType) {
            case "percentage":
                return `${education.grade}%`;
            case "cgpa":
                return `${education.grade} cgpa`;
        }
    }

    function timeline(education: Education): string {
        return `${education.startYear} to ${education.endYear}`
    }

    return (
        <section id="Educations">
            <h1>Educations</h1>
            {educations.map((education, index) => (
                <div className="education" key={education.id}>
                    <h3>{education.institution}</h3>
                    <p>{education.educationType}</p>
                    <div className="flex">
                        <span className="content">{grade(education)}</span>
                        <span className="content">{timeline(education)}</span>
                    </div>
                    {index != educations.length - 1 ? <hr/> : <></>}
                </div>
            ))}
        </section>
    )
}