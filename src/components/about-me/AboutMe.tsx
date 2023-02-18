import "./AboutMe.scss";

export default function AboutMe() {
    return (
        <section id="AboutMe">
            <h1>About Me</h1>
            <article className="about-me">
                <h3>I am a Full Stack Developer</h3>
                <p>
                    I have been studying Java, Spring boot, React since October 2020.
                    I like creating cool design projects.
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
                    <h3>Narendrapur, Kolkata</h3>
                </div>
                <div className="tile">
                    <p>Born On</p>
                    <h3>15th Feb, 1998</h3>
                </div>
                <div className="tile">
                    <p>Speaks</p>
                    <h3>Bengali, English, Hindi</h3>
                </div>
            </article>
        </section>
    )
}