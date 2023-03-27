import './Footer.scss'
import { type JSX } from 'preact'

export default function Footer (): JSX.Element {
  return (
    <div id="Footer">
      <div className="container">
        <footer>
          <p>Copyright &#169; {new Date().getFullYear()} Shuktika</p>
        </footer>
      </div>
    </div>
  )
}
