"use client"

import * as React from "react"
import { Document } from "@/types/file-system"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Download, FileText, Code, Globe, Printer } from "lucide-react"

interface ExportDialogProps {
  document: Document
  trigger?: React.ReactNode
}

export function ExportDialog({ document, trigger }: ExportDialogProps) {
  const [format, setFormat] = React.useState<string>("markdown")
  const [open, setOpen] = React.useState(false)

  const exportFormats = {
    markdown: {
      name: "Markdown",
      extension: ".md",
      icon: <FileText className="h-4 w-4" />,
      description: "Standard markdown format"
    },
    text: {
      name: "Plain Text",
      extension: ".txt",
      icon: <FileText className="h-4 w-4" />,
      description: "Raw text without formatting"
    },
    html: {
      name: "HTML",
      extension: ".html",
      icon: <Globe className="h-4 w-4" />,
      description: "HTML with CSS styling"
    },
    json: {
      name: "Lexical JSON",
      extension: ".json",
      icon: <Code className="h-4 w-4" />,
      description: "Editor state for backup"
    }
  }

  const handleExport = () => {
    let content = ""
    let filename = ""
    let mimeType = ""

    switch (format) {
      case "markdown":
        content = document.markdown
        filename = document.name
        mimeType = "text/markdown"
        break
      case "text":
        content = document.markdown // Strip markdown formatting if needed
        filename = document.name.replace('.md', '.txt')
        mimeType = "text/plain"
        break
      case "html":
        // Simple HTML conversion - can be enhanced later
        content = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${document.name}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; line-height: 1.6; }
    pre { background: #f5f5f5; padding: 1rem; border-radius: 4px; overflow-x: auto; }
    code { background: #f5f5f5; padding: 0.2rem 0.4rem; border-radius: 2px; }
    blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 1rem; color: #666; }
  </style>
</head>
<body>
${document.markdown.split('\n').map(line => {
  if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`
  if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`
  if (line.startsWith('### ')) return `<h3>${line.substring(4)}</h3>`
  if (line.startsWith('> ')) return `<blockquote>${line.substring(2)}</blockquote>`
  if (line.trim() === '') return '<br>'
  return `<p>${line}</p>`
}).join('\n')}
</body>
</html>`
        filename = document.name.replace('.md', '.html')
        mimeType = "text/html"
        break
      case "json":
        content = JSON.stringify(document, null, 2)
        filename = document.name.replace('.md', '.json')
        mimeType = "application/json"
        break
    }

    // Create and trigger download
    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)
    const link = window.document.createElement('a')
    link.href = url
    link.download = filename
    window.document.body.appendChild(link)
    link.click()
    window.document.body.removeChild(link)
    URL.revokeObjectURL(url)

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" />
            <span className="ml-2">Export</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Document</DialogTitle>
          <DialogDescription>
            Export "{document.name}" to your preferred format.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="format">Export Format</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger id="format">
                <SelectValue placeholder="Choose format" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(exportFormats).map(([key, fmt]) => (
                  <SelectItem key={key} value={key}>
                    <div className="flex items-center space-x-2">
                      {fmt.icon}
                      <div>
                        <div className="font-medium">{fmt.name} ({fmt.extension})</div>
                        <div className="text-xs text-muted-foreground">{fmt.description}</div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleExport}>
            <Download className="h-4 w-4" />
            <span className="ml-2">Export</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
