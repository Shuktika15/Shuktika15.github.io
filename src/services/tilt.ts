export interface TiltSettings {
  perspective: number
  tilt: number
  transitionDuration: number
}

function isTouchDevice (): boolean {
  return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
}

export default function useTilt (element: HTMLElement, tiltSettings: TiltSettings): void {
  if (isTouchDevice()) {
    return
  }

  element.addEventListener('mouseenter', () => {
    element.style.transitionDuration = `${tiltSettings.transitionDuration}ms`
  })

  element.addEventListener('mousemove', (event) => {
    const width = element.offsetWidth
    const height = element.offsetHeight
    const box = element.getBoundingClientRect()
    const centerX = (box.left + box.right) / 2
    const centerY = (box.top + box.bottom) / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY
    const rotateX = tiltSettings.tilt * mouseY / (height / 2)
    const rotateY = -1 * tiltSettings.tilt * mouseX / (width / 2)
    element.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  })

  element.addEventListener('mouseleave', () => {
    element.style.transform = `perspective(${tiltSettings.perspective}px) rotateX(0deg) rotateY(0deg)`
  })
}
