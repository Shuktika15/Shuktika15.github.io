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

function App() {
    return (
        <>
            <InitialLoading/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)
