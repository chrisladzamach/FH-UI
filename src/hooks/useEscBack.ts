import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useTransition } from "./useTransition"

export const useEscBack = () => {
  const navigate = useNavigate()
  const { startTransition } = useTransition()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        startTransition(() => navigate(-1))
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [navigate, startTransition])
}
