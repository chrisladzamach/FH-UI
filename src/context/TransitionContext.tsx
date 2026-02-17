import { createContext } from "react"

export type TransitionContextType = {
  startTransition: (cb: () => void) => void
  isFading: boolean
}

export const TransitionContext =
  createContext<TransitionContextType | null>(null)
