import ReactGA from "react-ga4"
import env from "./env"

export const initGA = () => {
  if (env.googleAnalyticsId) {
    ReactGA.initialize(env.googleAnalyticsId)
  }
}

export const logPageView = (path: string) => {
  if (env.googleAnalyticsId) {
    ReactGA.send({ hitType: "pageview", page: path })
  }
}
