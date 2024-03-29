import type IconProps from './IconProps'
import { type JSX } from 'preact'

export default function NavigateNextIcon (props: IconProps): JSX.Element {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#000000"
    style={props.style}
    className={props.className}
  >
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path
      d="M9.31 6.71c-.39.39-.39 1.02 0 1.41L13.19 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01z"/>
  </svg>
}
