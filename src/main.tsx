import { type JSX, render } from 'preact'
import './styles/main.scss'
import Header from './sections/header/Header'
import Landing from './sections/landing/Landing'
import AboutMe from './sections/about-me/AboutMe'
import Skills from './sections/skills/Skills'
import Experiences from './sections/experiences/Experiences'
import Educations from './sections/educations/Educations'
import Projects from './sections/projects/Projects'
import Hobbies from './sections/hobbies/Hobbies'
import InitialLoading from './sections/initial-loading/InitialLoading'
import Footer from './sections/footer/Footer'
import Contact from './sections/contact/Contact'

function App (): JSX.Element {
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

render(<App/>, document.getElementById('app') as HTMLElement)
