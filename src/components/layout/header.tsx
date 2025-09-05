"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  FileText, 
  Settings, 
  Sun, 
  Moon, 
  Monitor,
  Download,
  Upload,
  Cloud,
  CloudOff 
} from "lucide-react"
import { useTheme } from "next-themes"

interface HeaderProps {
  onNewDocument?: () => void
  onOpenSettings?: () => void
  onExport?: () => void
  onImport?: () => void
  syncStatus?: "synced" | "syncing" | "offline" | "error"
  customActions?: React.ReactNode
}

export function Header({ 
  onNewDocument, 
  onOpenSettings, 
  onExport, 
  onImport,
  syncStatus = "offline",
  customActions
}: HeaderProps) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : theme === "dark" ? "system" : "light")
  }

  const getSyncIcon = () => {
    switch (syncStatus) {
      case "synced":
        return <Cloud className="h-4 w-4 text-green-500" />
      case "syncing":
        return <Cloud className="h-4 w-4 text-blue-500 animate-pulse" />
      case "error":
        return <CloudOff className="h-4 w-4 text-red-500" />
      default:
        return <CloudOff className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <header className="h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full items-center px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6" />
            <span className="text-lg font-semibold">Katachi</span>
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={onNewDocument}>
            <FileText className="h-4 w-4" />
            <span className="ml-2 hidden sm:inline">New</span>
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="ghost" size="sm" onClick={onImport}>
            <Upload className="h-4 w-4" />
            <span className="ml-2 hidden sm:inline">Import</span>
          </Button>

          <Button variant="ghost" size="sm" onClick={onExport}>
            <Download className="h-4 w-4" />
            <span className="ml-2 hidden sm:inline">Export</span>
          </Button>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="ghost" size="sm">
            {getSyncIcon()}
            <span className="ml-2 hidden sm:inline capitalize">{syncStatus}</span>
          </Button>

          <Button variant="ghost" size="sm" onClick={toggleTheme}>
            {getThemeIcon()}
          </Button>

          <Button variant="ghost" size="sm" onClick={onOpenSettings}>
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
