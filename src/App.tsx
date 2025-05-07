import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PageNotFoundPage from "./pages/PageNotFoundPage"
import { useConfigContext } from "./context/ConfigContext"
import { useEffect } from "react"

const App = () => {
  const { isDark, theme } = useConfigContext()

  useEffect(() => {
    const root = window.document.documentElement

    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("color", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("color", "light")
    }
  }, [isDark])

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme")
    if (prevTheme) document.body.classList.remove(prevTheme)

    document.body.classList.add(`${theme}`)
    localStorage.setItem("theme", `${theme}`)
  }, [theme])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  )
}

export default App
