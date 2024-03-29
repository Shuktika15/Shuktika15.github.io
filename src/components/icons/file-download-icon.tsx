import type IconProps from './IconProps'
import { type JSX } from 'preact'

export default function FileDownloadIcon (props: IconProps): JSX.Element {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#000000"
    style={props.style}
    className={props.className}
  >
    <g>
      <rect fill="none" height="24" width="24"/>
    </g>
    <g>
      <path
        d="M16.59,9H15V4c0-0.55-0.45-1-1-1h-4C9.45,3,9,3.45,9,4v5H7.41c-0.89,0-1.34,1.08-0.71,1.71l4.59,4.59 c0.39,0.39,1.02,0.39,1.41,0l4.59-4.59C17.92,10.08,17.48,9,16.59,9z M5,19c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1s-0.45-1-1-1H6 C5.45,18,5,18.45,5,19z"/>
    </g>
  </svg>
}
