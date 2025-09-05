"use client"

import * as React from "react"
import { Document } from "@/types/file-system"
import { FileSystemManager } from "@/lib/file-system"
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
import { Input } from "@/components/ui/input"
import { Upload, FileText, AlertCircle } from "lucide-react"

interface ImportDialogProps {
  onImport: (documents: Document[]) => void
  trigger?: React.ReactNode
}

export function ImportDialog({ onImport, trigger }: ImportDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [isImporting, setIsImporting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const handleFileSelect = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setIsImporting(true)
    setError(null)

    try {
      const documents: Document[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        
        // Check file type
        if (!file.name.endsWith('.md') && !file.name.endsWith('.txt')) {
          setError(`File "${file.name}" is not a supported format. Please use .md or .txt files.`)
          continue
        }

        // Read file content
        const content = await file.text()
        
        // Create document
        const document = FileSystemManager.createDocument(file.name)
        const updatedDocument = FileSystemManager.updateDocument(document, {
          markdown: content,
        })
        
        documents.push(updatedDocument)
      }

      if (documents.length > 0) {
        onImport(documents)
        setOpen(false)
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
      }
    } catch (err) {
      setError("Failed to import files. Please try again.")
      console.error("Import error:", err)
    } finally {
      setIsImporting(false)
    }
  }

  const handleDrop = React.useCallback((e: React.DragEvent) => {
    e.preventDefault()
    handleFileSelect(e.dataTransfer.files)
  }, [])

  const handleDragOver = React.useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4" />
            <span className="ml-2">Import</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Import Documents</DialogTitle>
          <DialogDescription>
            Import markdown (.md) or text (.txt) files into your workspace.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="file-input">Select Files</Label>
            <Input
              id="file-input"
              ref={fileInputRef}
              type="file"
              multiple
              accept=".md,.txt"
              onChange={(e) => handleFileSelect(e.target.files)}
              disabled={isImporting}
            />
          </div>

          {/* Drag and Drop Area */}
          <div
            className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Drag and drop your markdown files here
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports .md and .txt files
            </p>
          </div>

          {error && (
            <div className="flex items-center space-x-2 text-sm text-red-600 bg-red-50 p-2 rounded-md">
              <AlertCircle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={isImporting}>
            Cancel
          </Button>
          <Button 
            onClick={() => fileInputRef.current?.click()} 
            disabled={isImporting}
          >
            <Upload className="h-4 w-4" />
            <span className="ml-2">{isImporting ? "Importing..." : "Select Files"}</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
