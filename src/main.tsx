import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { TransitionProvider } from "./context/TransitionProvider"
import { FadeOverlay } from "./components/FadeOverlay"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TransitionProvider>
        <FadeOverlay />
        <App />
      </TransitionProvider>
    </BrowserRouter>
  </React.StrictMode>
)
