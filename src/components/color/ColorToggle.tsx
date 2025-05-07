import { Sun, Moon } from "lucide-react"
import { useConfigContext } from "@/context/ConfigContext"
import { Button } from "../ui/button"
import type { ComponentProps } from "react"

const ColorToggle = (props: ComponentProps<typeof Button>) => {
  const { isDark, setIsDark } = useConfigContext()

  return (
    <Button
      {...props}
      onClick={e => {
        setIsDark(!isDark)
        props.onClick?.(e)
      }}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  )
}

export default ColorToggle
