import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Educations from "./components/educations/Educations";
import AboutMe from "./components/about-me/AboutMe";

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
                <AboutMe/>
                <Skills/>
                <Experiences/>
                <Educations/>
            </main>
            <footer></footer>
        </>
    )
}