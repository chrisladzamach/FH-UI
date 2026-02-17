import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTransition } from "../hooks/useTransition"

const options = [
  { label: "Nueva partida", path: "/new-game" },
  { label: "Continuar", path: "/continue" }
]

export const Menu = () => {
  const [selected, setSelected] = useState(0)
  const navigate = useNavigate()
  const { startTransition } = useTransition()

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        setSelected((prev) => (prev + 1) % options.length)
      }

      if (e.key === "ArrowUp") {
        setSelected((prev) =>
          prev === 0 ? options.length - 1 : prev - 1
        )
      }

      if (e.key === "Enter") {
        startTransition(() => {
          navigate(options[selected].path)
        })
      }

    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selected, navigate, startTransition])

  return (
    <div className="bg-black/50 px-2 py-2 rounded-sm absolute bottom-50 left-200 border-1-border-gray-400">
      <ul className="flex flex-col gap-2">
        {options.map((opt, i) => (
          <li
            key={opt.label}
            className={`h-10 w-50 text-xl rounded-sm cursor-pointer grid place-content-center
          ${i === selected
                ? "bg-red-500/10 text-white border-1 border-gray-400"
                : " text-gray-400 text-shadow-xs text-shadow-amber-50"
              }`}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  )
}