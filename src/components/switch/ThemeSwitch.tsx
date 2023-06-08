import { type JSX } from 'preact'
import './ThemeSwitch.scss'
import { useEffect, useState } from 'preact/compat'
import { getFromLocalStorage, saveInLocalStorage } from '../../services/local-storage'
import { LOCAL_STORAGE_KEY, THEME } from '../../constant'

export default function ThemeSwitch (): JSX.Element {
  const [initialLoad, setInitialLoad] = useState<boolean>(true)
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT)

  useEffect(() => {
    if (initialLoad) {
      onLoad()
      setInitialLoad(false)
    }
  }, [])

  useEffect(() => {
    saveInLocalStorage(LOCAL_STORAGE_KEY.THEME, theme)
  }, [theme])

  function onLoad (): void {
    const savedTheme = getFromLocalStorage(LOCAL_STORAGE_KEY.THEME)

    if (savedTheme === null) {
      if (isDarkTheme()) {
        changeTheme()
      } else {
        saveInLocalStorage(LOCAL_STORAGE_KEY.THEME, THEME.LIGHT)
      }
    } else {
      if (savedTheme === THEME.DARK) {
        changeTheme()
      }
    }
  }

  function isDarkTheme (): boolean {
    console.log(window.matchMedia?.('(prefers-color-scheme: dark)').matches)
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
  }

  function changeTheme (): void {
    document.body.classList.toggle('dark-theme')

    if (theme === THEME.LIGHT) {
      setTheme(THEME.DARK)
    } else {
      setTheme(THEME.LIGHT)
    }
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
