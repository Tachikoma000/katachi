"use client"

import * as React from "react"
import { useAtom } from "jotai"
import { documentsAtom } from "@/lib/storage"
import { StorageManager } from "@/lib/storage"
import { Document } from "@/types/file-system"

interface UseAutoSaveOptions {
  delay?: number // milliseconds
  enabled?: boolean
}

export function useAutoSave(
  document: Document | null,
  options: UseAutoSaveOptions = {}
) {
  const { delay = 500, enabled = true } = options
  const [documents, setDocuments] = useAtom(documentsAtom)
  const [isSaving, setIsSaving] = React.useState(false)
  const [lastSaved, setLastSaved] = React.useState<Date | null>(null)
  
  // Debounced save function
  const debouncedSave = React.useMemo(
    () => {
      let timeoutId: NodeJS.Timeout
      
      return (updatedDocument: Document) => {
        if (!enabled || !updatedDocument) return
        
        clearTimeout(timeoutId)
        setIsSaving(true)
        
        timeoutId = setTimeout(() => {
          try {
            // Update in Jotai state
            setDocuments(prev => ({
              ...prev,
              [updatedDocument.id]: updatedDocument
            }))
            
            // Save to localStorage
            StorageManager.saveDocument(updatedDocument)
            
            setLastSaved(new Date())
            setIsSaving(false)
            
            console.log(`Auto-saved: ${updatedDocument.name}`)
          } catch (error) {
            console.error("Auto-save failed:", error)
            setIsSaving(false)
          }
        }, delay)
      }
    },
    [delay, enabled, setDocuments]
  )

  // Save function for manual saves
  const saveNow = React.useCallback(
    (updatedDocument: Document) => {
      if (!updatedDocument) return
      
      try {
        setIsSaving(true)
        
        setDocuments(prev => ({
          ...prev,
          [updatedDocument.id]: updatedDocument
        }))
        
        StorageManager.saveDocument(updatedDocument)
        setLastSaved(new Date())
        setIsSaving(false)
        
        console.log(`Manually saved: ${updatedDocument.name}`)
      } catch (error) {
        console.error("Manual save failed:", error)
        setIsSaving(false)
      }
    },
    [setDocuments]
  )

  // Auto-save when document changes
  React.useEffect(() => {
    if (document && enabled) {
      debouncedSave(document)
    }
  }, [document, debouncedSave, enabled])

  // Keyboard shortcut for manual save (Cmd+S)
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 's') {
        event.preventDefault()
        if (document) {
          saveNow(document)
        }
      }
    }

    window.document.addEventListener('keydown', handleKeyDown)
    return () => window.document.removeEventListener('keydown', handleKeyDown)
  }, [document, saveNow])

  return {
    isSaving,
    lastSaved,
    saveNow: () => document && saveNow(document),
    autoSave: debouncedSave,
  }
}
