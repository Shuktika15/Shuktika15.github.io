import './AboutMe.scss'
import {type JSX} from 'preact'

export default function AboutMe(): JSX.Element {
    return (
        <section id="AboutMe">
            <h1>About Me</h1>
            <article className="about-me">
                <h3>I am a Full Stack Developer</h3>
                <p>
                    I have been working on vanilla javascript lately.
                    Before that I have worked with Java, Spring boot, React. I like creating cool design
                    projects.
                </p>
                <p className="content">
                    I am a dedicated full stack developer with a passion for coding, striving to excel every day with
                    every project that I work on. My broad range of expertise and experience with Java, Spring Boot and
                    React enable me to efficiently deliver high-quality projects that meet the desired specifications.
                    I have been coding since 2015 and have worked in the IT industry for over two years,
                    building my skills and knowledge through real-world experience.
                </p>
            </article>
            <article className="bio">
                <div className="tile">
                    <p>Lives In</p>
                    <h3>Kolkata, West Bengal</h3>
                </div>
                <div className="tile">
                    <p>Born On</p>
                    <h3>Feb, 1998</h3>
                </div>
                <div className="tile">
                    <p>Speaks</p>
                    <h3>English, Bengali, Hindi</h3>
                </div>
            </article>
        </section>
    )
}
