import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import AboutMe from "./components/about-me/AboutMe";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Educations from "./components/educations/Educations";
import Projects from "./components/projects/Projects";
import Hobbies from "./components/hobbies/Hobbies";
import InitialLoading from "./components/initial-loading/InitialLoading";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <>
            <InitialLoading/>
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
                    <Contact/>
                </main>
            </div>
            <Footer/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
