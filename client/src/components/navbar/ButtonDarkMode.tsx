import { useTheme } from "@/hooks/useTheme"
import { Moon, Sun, MonitorCog } from "lucide-react"
import { Button } from "../ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

function ButtonDarkMode() {
    const {setTheme} = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("light")}>
          <Sun className="h-4 w-4 "/> <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("dark")}>
          <Moon className="h-4 w-4 "/> <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={() => setTheme("system")}>
          <MonitorCog className="h-4 w-4 "/> <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ButtonDarkMode