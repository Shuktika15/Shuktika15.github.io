import './NavButton.scss'
import { useEffect, useRef } from 'preact/compat'
import { type JSX } from 'preact'

export interface NavButtonProps {
  open: boolean
  onClick: () => void
}

export default function NavButton (props: NavButtonProps): JSX.Element {
  const firstLine = useRef<HTMLDivElement | null>(null)
  const lastLine = useRef<HTMLDivElement | null>(null)

  function forwardKeyframes (flag: boolean): Keyframe[] {
    return [
      {
        top: `${flag ? '0.25rem' : 'initial'}`,
        bottom: `${flag ? 'initial' : '0.25rem'}`,
        transform: `rotate(${45 * (flag ? 1 : -1)}deg)`
      },
      {
        top: `${flag ? '0.25rem' : 'initial'}`,
        bottom: `${flag ? 'initial' : '0.25rem'}`,
        transform: 'rotate(0)'
      },
      {
        top: `${flag ? 0 : 'initial'}`,
        bottom: `${flag ? 'initial' : 0}`,
        transform: 'rotate(0)'
      }
    ]
  }

  function reverseKeyframes (flag: boolean): Keyframe[] {
    return [
      {
        top: `${flag ? 0 : 'initial'}`,
        bottom: `${flag ? 'initial' : 0}`,
        transform: 'rotate(0)'
      },
      {
        top: `${flag ? '0.25rem' : 'initial'}`,
        bottom: `${flag ? 'initial' : '0.25rem'}`,
        transform: 'rotate(0)'
      },
      {
        top: `${flag ? '0.25rem' : 'initial'}`,
        bottom: `${flag ? 'initial' : '0.25rem'}`,
        transform: `rotate(${45 * (flag ? 1 : -1)}deg)`
      }
    ]
  }

  const options: KeyframeAnimationOptions = {
    fill: 'forwards',
    duration: 200
  }

  useEffect(() => {
    if (firstLine.current === null || lastLine.current === null) return

    if (props.open) {
      firstLine.current.animate(
        reverseKeyframes(true),
        options
      )
      lastLine.current.animate(
        reverseKeyframes(false),
        options
      )
    } else {
      firstLine.current.animate(
        forwardKeyframes(true),
        options
      )
      lastLine.current.animate(
        forwardKeyframes(false),
        options
      )
    }
  }, [props.open])

  return (
    <button id="NavButton" onClick={props.onClick} aria-label="nav">
      <div ref={firstLine}></div>
      <div ref={lastLine}></div>
    </button>
  )
}
