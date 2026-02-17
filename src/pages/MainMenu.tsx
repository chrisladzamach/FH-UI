import { Menu } from "../components/Menu"

export const MainMenu = () => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/titles2/title.png')] bg-no-repeat bg-center bg-contain" />
      <Menu />
    </div>
  )
}
