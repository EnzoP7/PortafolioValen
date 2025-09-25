"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (theme === 'dark' || (!theme && systemTheme)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch checked={isDark} onCheckedChange={toggleTheme} />
      <Moon className="h-4 w-4" />
    </div>
  )
}