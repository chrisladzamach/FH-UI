import { Routes, Route } from "react-router-dom"
import { MainMenu } from "./pages/MainMenu"
import { NewGame } from "./pages/NewGame"
import { Continue } from "./pages/Continue"
import { Game1 } from "./pages/Game1"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/new-game" element={<NewGame />} />
      <Route path="/continue" element={<Continue />} />
      <Route path="/game1" element={<Game1 />} />
    </Routes>
  )
}
