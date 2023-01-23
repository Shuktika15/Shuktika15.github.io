import Skills from "./components/skills/Skills";

export default function App() {
    return (
        <>
            <header>
                <h1>Shuktika<span>.</span></h1>
            </header>
            <main>
                <div className="portrait"></div>
                <div className="myself">
                    <h1>Hey I'm</h1>
                    <h1>Shuktika</h1>
                    <p>
                        <b>
                            I’m a Web developer & I’m very passionate and dedicated to my work.
                            I have acquired the skills and knowledge necessary to make your project
                            a success.
                        </b>
                    </p>
                </div>
                <button className="btn">About Me</button>
                <section className="my-works">
                    <h3>
                        <span>My Works</span>
                        <i className="fa-solid fa-chevron-right"></i>
                    </h3>
                    <article>
                        <h4>Born In</h4>
                        <h2>Norway</h2>
                    </article>
                    <article>
                        <h4>Experience</h4>
                        <h2>Norway</h2>
                    </article>
                    <article>
                        <h4>Date of Birth</h4>
                        <h2>15 February, 1998</h2>
                    </article>
                </section>
                <section className="about-me">
                    <h1>About Me</h1>
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
                </section>
                <Skills/>
            </main>
            <footer></footer>
        </>
    )
}