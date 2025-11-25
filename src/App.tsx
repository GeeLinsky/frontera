import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PageNotFoundPage from "./pages/PageNotFoundPage"
import { useConfigContext } from "./context/ConfigContext"
import { useEffect } from "react"
import { logPageView } from "./utils/analytics"
import { initGA } from "./utils/analytics"
import ComponentsShowcasePage from "./pages/ComponentShowcasePage"
import { ToastContainer } from "react-toastify"

const App = () => {
  const { isDark, theme } = useConfigContext()
  const location = useLocation()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    logPageView(location.pathname + location.search)
  }, [location])

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
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/component-showcase" element={<ComponentsShowcasePage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>

      <ToastContainer theme="colored" />
    </>
  )
}

export default App
