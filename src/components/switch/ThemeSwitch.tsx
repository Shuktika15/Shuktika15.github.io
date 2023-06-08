import { type JSX } from 'preact'
import './ThemeSwitch.scss'

export default function ThemeSwitch (): JSX.Element {
  function changeTheme (): void {
    document.body.classList.toggle('dark-theme')
  }

  return (
    <button id="ThemeSwitch" onClick={changeTheme}>
      <div className="sun">
        <div className="hole"></div>
      </div>
      <div className="corona"></div>
      <div className="corona"></div>
      <div className="corona"></div>
      <div className="corona"></div>
    </button>
  )
}
