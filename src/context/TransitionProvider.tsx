import { useState, type ReactNode } from "react"
import { TransitionContext } from "./TransitionContext"

type Props = {
  children: ReactNode
}

export const TransitionProvider = ({ children }: Props) => {
  const [isFading, setIsFading] = useState(false)

  const startTransition = (cb: () => void) => {
    setIsFading(true)

    setTimeout(() => {
      cb()
      setTimeout(() => {
        setIsFading(false)
      }, 300)
    }, 300)
  }

  return (
    <TransitionContext.Provider value={{ startTransition, isFading }}>
      {children}
    </TransitionContext.Provider>
  )
}
