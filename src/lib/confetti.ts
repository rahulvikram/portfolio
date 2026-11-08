import confetti from "canvas-confetti"

/** Fires the shared confetti burst from a point in viewport pixels. */
export function confettiBurst(x: number, y: number) {
  confetti({
    particleCount: 30,
    spread: 50,
    startVelocity: 25,
    origin: {
      x: x / window.innerWidth,
      y: y / window.innerHeight,
    },
    disableForReducedMotion: true,
  })
}

/** Hover handler: burst from the center of the hovered element. */
export function handleHover(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  confettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2)
}
