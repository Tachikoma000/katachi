"use client"

import * as React from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { 
  $getSelection, 
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND
} from "lexical"

export function useKeyboardShortcuts() {
  const [editor] = useLexicalComposerContext()

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const isCtrlCmd = isMac ? event.metaKey : event.ctrlKey

      if (!isCtrlCmd) return

      switch (event.key.toLowerCase()) {
        case 'b':
          event.preventDefault()
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')
          break
        case 'i':
          event.preventDefault() 
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')
          break
        case 'u':
          event.preventDefault()
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')
          break
        case 'd':
          event.preventDefault()
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')
          break
        case '`':
          event.preventDefault()
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'code')
          break
        case 'z':
          if (event.shiftKey) {
            event.preventDefault()
            editor.dispatchCommand(REDO_COMMAND, undefined)
          } else {
            event.preventDefault()
            editor.dispatchCommand(UNDO_COMMAND, undefined)
          }
          break
        case 'y':
          if (!event.shiftKey) {
            event.preventDefault()
            editor.dispatchCommand(REDO_COMMAND, undefined)
          }
          break
      }
    }

    const editorElement = editor.getRootElement()
    if (editorElement) {
      editorElement.addEventListener('keydown', handleKeyDown)
      return () => editorElement.removeEventListener('keydown', handleKeyDown)
    }
  }, [editor])

  return null
}
