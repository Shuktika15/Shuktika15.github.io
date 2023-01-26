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
                <AboutMe/>
                <Skills/>
                <Experiences/>
                <Educations/>
            </main>
            <footer></footer>
        </>
    )
}