"use client"

import * as React from "react"
import { useState } from "react"
import { SerializedEditorState, EditorState } from "lexical"
import { LexicalComposer, InitialConfigType } from "@lexical/react/LexicalComposer"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { ListNode, ListItemNode } from "@lexical/list"
import { CodeNode, CodeHighlightNode } from "@lexical/code"
import { ParagraphNode, TextNode } from "lexical"

import { ContentEditable } from "@/components/editor/editor-ui/content-editable"
import { editorTheme } from "@/components/editor/themes/editor-theme"
import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin"
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin"
import { ActionsPlugin } from "@/components/editor/plugins/actions/actions-plugin"
import { MarkdownTogglePlugin } from "@/components/editor/plugins/actions/markdown-toggle-plugin"
import { TooltipProvider } from "@/components/ui/tooltip"

// Editor configuration
const editorConfig: InitialConfigType = {
  namespace: "KatachiEditor",
  theme: editorTheme,
  nodes: [
    HeadingNode,
    ParagraphNode,
    TextNode,
    QuoteNode,
    ListNode,
    ListItemNode,
    CodeNode,
    CodeHighlightNode,
  ],
  onError: (error: Error) => {
    console.error("Lexical Error:", error)
  },
}

interface MarkdownEditorProps {
  initialContent?: SerializedEditorState
  onContentChange?: (content: SerializedEditorState, markdown: string) => void
  placeholder?: string
  className?: string
}

export function MarkdownEditor({ 
  initialContent,
  onContentChange,
  placeholder = "Start writing your markdown...",
  className = ""
}: MarkdownEditorProps) {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  const handleEditorChange = (editorState: EditorState) => {
    const json = editorState.toJSON()
    
    // Convert to markdown (simplified for now)
    const markdown = editorState.read(() => {
      // This is a simplified conversion - we'll enhance this later
      const root = editorState._nodeMap.get("root")
      return root?.getTextContent() || ""
    })

    onContentChange?.(json, markdown)
  }

  return (
    <div className={`bg-background overflow-hidden rounded-lg border shadow ${className}`}>
      <LexicalComposer 
        initialConfig={{
          ...editorConfig,
          ...(initialContent ? { editorState: JSON.stringify(initialContent) } : {})
        }}
      >
        <TooltipProvider>
          <div className="relative">
            {/* Simplified Toolbar for now */}
            <div className="sticky top-0 z-10 flex gap-2 overflow-auto border-b p-2 bg-background/95 backdrop-blur">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Katachi Editor</span>
              </div>
            </div>

            {/* Editor Content */}
            <div className="relative">
              <RichTextPlugin
                contentEditable={
                  <div className="">
                    <div className="" ref={onRef}>
                      <ContentEditable 
                        placeholder={placeholder}
                        className="ContentEditable__root relative block min-h-96 overflow-auto px-6 py-4 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              
              {/* Editor Change Handler */}
              <OnChangePlugin 
                onChange={handleEditorChange}
                ignoreSelectionChange={true}
              />
            </div>
          </div>
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}
