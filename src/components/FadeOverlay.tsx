import { useTransition } from "../hooks/useTransition"

export const FadeOverlay = () => {
  const { isFading } = useTransition()

  return (
    <div
      className={`pointer-events-none fixed inset-0 bg-black transition-opacity duration-300
        ${isFading ? "opacity-100" : "opacity-0"}
      `}
    />
  )
}
