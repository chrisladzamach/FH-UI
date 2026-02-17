import { useContext } from "react"
import { TransitionContext } from "../context/TransitionContext"

export const useTransition = () => {
  const ctx = useContext(TransitionContext)
  if (!ctx) {
    throw new Error("useTransition debe usarse dentro de TransitionContext")
  }
  return ctx
}
