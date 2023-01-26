import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Educations from "./components/educations/Educations";
import AboutMe from "./components/about-me/AboutMe";
import Landing from "./components/landing/Landing";
import Header from "./components/header/Header";

export default function App() {
    return (
        <>
            <Header/>
            <main>
                <Landing/>
                <AboutMe/>
                <Skills/>
                <Experiences/>
                <Educations/>
            </main>
            <footer></footer>
        </>
    )
}