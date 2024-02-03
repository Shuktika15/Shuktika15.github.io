import { Data, type Experience } from '../../data'
import './Experiences.scss'
import DateRageIcon from '../../components/icons/date-range-icon'
import { type JSX } from 'preact'

export default function Experiences (): JSX.Element {
  const experiences: Experience[] = Data.experiences

  function timeline (experience: Experience): string {
    const start = `${experience.startMonth}, ${experience.startYear} to `
    const end = experience.current ? 'Present' : `${experience.endMonth ?? ''}, ${experience.endYear ?? ''}`
    return start + end
  }

  return (
    <section id="Experiences">
      <h1>Experiences</h1>
      {experiences.map((experience, index) => (
        <article className="experience" key={experience.id}>
          <h3>{experience.company} [{experience.designation}]</h3>
          <p className="timeline">
            <DateRageIcon/>
            <span>{timeline(experience)}</span>
          </p>
          {experience.descriptions.map((description) => (
            <p className="content" key={description}>{description}</p>
          ))}
          {index !== experiences.length - 1 ? <hr/> : <></>}
        </article>
      ))}
    </section>
  )
}
