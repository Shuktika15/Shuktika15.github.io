import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import AboutMe from "./components/about-me/AboutMe";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Educations from "./components/educations/Educations";
import Projects from "./components/projects/Projects";
import Hobbies from "./components/hobbies/Hobbies";

function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <main>
                    <Landing/>
                    <AboutMe/>
                    <Skills/>
                    <Experiences/>
                    <Educations/>
                    <Projects/>
                    <Hobbies/>
                </main>
            </div>
            <footer></footer>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
