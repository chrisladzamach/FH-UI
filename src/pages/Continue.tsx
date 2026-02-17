import { useEscBack } from "../hooks/useEscBack"

export const Continue = () => {
  useEscBack()

  return (
    <div className="h-screen w-screen grid place-content-center bg-blue-900 text-white text-3xl">
      CONTINUAR PARTIDA
    </div>
  )
}
