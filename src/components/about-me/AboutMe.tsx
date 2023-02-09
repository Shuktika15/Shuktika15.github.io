import "./AboutMe.scss";

export default function AboutMe() {
    return (
        <section id="AboutMe">
            <h1>About Me</h1>
            <article className="about-me">
                <h3>I am a Web Developer</h3>
                <p>
                    My name is Hevin. I have been studying UI UX Design since October 2020.
                    I like creating a cool design project.
                </p>
                <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Hic, dolores dolore culpa, illum eos ipsum reiciendis non expedita,
                    perspiciatis nostrum inventore? Labore, architecto.
                    Molestias sunt quidem hic commodi, quas reprehenderit accusamus natus modi
                    consectetur et quae quod explicabo iusto alias obcaecati aliquam
                    impedit fugit perspiciatis laudantium voluptates deleniti eius pariatur?
                </p>
            </article>
            <article className="bio">
                <div className="tile">
                    <p>Lives In</p>
                    <h3>Narendrapur, Kolkata</h3>
                </div>
                <div className="tile">
                    <p>Born On</p>
                    <h3>15th, Feb, 1998</h3>
                </div>
                <div className="tile">
                    <p>Speaks</p>
                    <h3>Bengali, English, Hindi</h3>
                </div>
            </article>
        </section>
    )
}