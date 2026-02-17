import { useEscBack } from "../hooks/useEscBack"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTransition } from "../hooks/useTransition"


const options = [
  { label: "Mercenario", description: "Mercenario, ladrón, asesino... Cualquier cosa que le de ganancias de plata. El mercenario es conocido por sus tácticas sucias en la batalla y sus astutas formas de obtener ventaja.", path: "/game1" },
  { label: "Caballero", description: "Un caballero con una senda pura y justa de guerrero. Ha sido entrenada para el combate desde niña, lo que  le permite destacar en el combate cuerpo a cuerpo con diferentes tipos de aramas.", path: "/game2" },
  { label: "Sacerdote Oscuro", description: "Sin preocuparse por cuestiones de moralidad o ética, el sacerdote oscuro obtiene ventaja con su mágia de sangre. Sin embargo, entregarse por completo a la magia ha debilitado su cuerpo físico.", path: "/game3" },
  { label: "Forastero", description: "Forjado en los vientos helados del norte, el forastero es el epítome de la supervivencia. Conoce todos los trucos para mantenerse con vida incluso en las situaciones más difíciles o imposibles.", path: "/game4" }
]

export const NewGame = () => {
  const [selected, setSelected] = useState(0)
  const navigate = useNavigate()
  useEscBack()
  const { startTransition } = useTransition()


  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setSelected((prev) => (prev + 1) % options.length)
      }

      if (e.key === "ArrowLeft") {
        setSelected((prev) =>
          prev === 0 ? options.length - 1 : prev - 1
        )
      }

      if (e.key === "Enter") {
        navigate(options[selected].path)
        startTransition(() => navigate(options[selected].path))
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [selected, navigate, startTransition])

  return (
    <div className="bg-black absolute inset-0 bg-[url('/img/pictures/character_select_bg.png')] bg-no-repeat bg-center bg-contain">

      <div className="relative top-20 left-100 w-fit bg-no-repeat bg-center bg-contain">
        <ul className="flex h-150 w-250 justify-between items-center px-4">
          {options.map((opt, i) => (
            <li
              key={opt.label}
              className="relative h-100 w-40 grid place-content-center"
            >
              <div
                className={`absolute z-1 scale-170 h-100 inset-0 bg-[url('/img/pictures/border_character.png')] bg-no-repeat bg-center bg-contain
                  ${i === selected ? "opacity-100" : "opacity-0"}
                `}
              />
              <img
                src={`/img/pictures/Actor1_${i === 0 ? 1 : i === 1 ? 3 : i === 2 ? 7 : 8}.png`}
                alt={opt.label}
                className={`relative z-0 scale-170
                  ${i === selected ? "scale-100" : "scale-100"}
                `}
              />
            </li>
          ))}
        </ul>
        <div className="bg-zinc-800 w-250 mt-10 border-1 border-gray-400 p-2 text-center text-3xl">
          <p className="text-white">{options[selected].description}</p>
        </div>
      </div>
    </div>
  )
}
