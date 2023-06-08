import { type JSX } from 'preact'
import './ThemeSwitch.scss'

export default function ThemeSwitch (): JSX.Element {
  function changeTheme (): void {
    document.body.classList.toggle('dark-theme')
  }

  return (
    <div id="ThemeSwitch">
      <button onClick={changeTheme}>Switch</button>
    </div>
  )
}
