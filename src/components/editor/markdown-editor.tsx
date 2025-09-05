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
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table"
import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode"
import { LinkNode } from "@lexical/link"
import { ParagraphNode, TextNode } from "lexical"
import { ImageNode } from "@/components/editor/nodes/image-node"
import { EquationNode } from "@/components/editor/nodes/equation-node"
import { EmojiNode } from "@/components/editor/nodes/emoji-node"

import { ContentEditable } from "@/components/editor/editor-ui/content-editable"
import { editorTheme } from "@/components/editor/themes/editor-theme"
import { ToolbarPlugin } from "@/components/editor/plugins/toolbar/toolbar-plugin"
import { BlockFormatDropDown } from "@/components/editor/plugins/toolbar/block-format-toolbar-plugin"
import { FormatParagraph } from "@/components/editor/plugins/toolbar/block-format/format-paragraph"
import { FormatHeading } from "@/components/editor/plugins/toolbar/block-format/format-heading"
import { FormatBulletedList } from "@/components/editor/plugins/toolbar/block-format/format-bulleted-list"
import { FormatNumberedList } from "@/components/editor/plugins/toolbar/block-format/format-numbered-list"
import { FormatCheckList } from "@/components/editor/plugins/toolbar/block-format/format-check-list"
import { FormatQuote } from "@/components/editor/plugins/toolbar/block-format/format-quote"
import { BlockInsertPlugin } from "@/components/editor/plugins/toolbar/block-insert-plugin"
import { InsertTable } from "@/components/editor/plugins/toolbar/block-insert/insert-table"
import { InsertImage } from "@/components/editor/plugins/toolbar/block-insert/insert-image"
import { InsertHorizontalRule } from "@/components/editor/plugins/toolbar/block-insert/insert-horizontal-rule"
import { InsertEquation } from "@/components/editor/plugins/toolbar/block-insert/insert-equation"
import { ActionsPlugin } from "@/components/editor/plugins/actions/actions-plugin"
import { MarkdownTogglePlugin } from "@/components/editor/plugins/actions/markdown-toggle-plugin"
import { CounterCharacterPlugin } from "@/components/editor/plugins/actions/counter-character-plugin"
import { TablePlugin } from "@/components/editor/plugins/table-plugin"
import { LinkPlugin } from "@/components/editor/plugins/link-plugin"
import { CodeHighlightPlugin } from "@/components/editor/plugins/code-highlight-plugin"
import { FloatingTextFormatToolbarPlugin } from "@/components/editor/plugins/floating-text-format-plugin"
import { HistoryToolbarPlugin } from "@/components/editor/plugins/toolbar/history-toolbar-plugin"
import { FontFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/font-format-toolbar-plugin"
import { FontColorToolbarPlugin } from "@/components/editor/plugins/toolbar/font-color-toolbar-plugin"
import { FontSizeToolbarPlugin } from "@/components/editor/plugins/toolbar/font-size-toolbar-plugin"
import { FontFamilyToolbarPlugin } from "@/components/editor/plugins/toolbar/font-family-toolbar-plugin"
import { ElementFormatToolbarPlugin } from "@/components/editor/plugins/toolbar/element-format-toolbar-plugin"
import { ClearFormattingToolbarPlugin } from "@/components/editor/plugins/toolbar/clear-formatting-toolbar-plugin"
import { SubSuperToolbarPlugin } from "@/components/editor/plugins/toolbar/subsuper-toolbar-plugin"
import { EquationsPlugin } from "@/components/editor/plugins/equations-plugin"
import { EmojisPlugin } from "@/components/editor/plugins/emojis-plugin"
import { DragDropPastePlugin } from "@/components/editor/plugins/drag-drop-paste-plugin"
import { ComponentPickerMenuPlugin } from "@/components/editor/plugins/component-picker-menu-plugin"
import { TablePlugin as LexicalTablePlugin } from "@lexical/react/LexicalTablePlugin"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useKeyboardShortcuts } from "@/hooks/use-shortcuts"

// Keyboard shortcuts component wrapper
function KeyboardShortcuts() {
  useKeyboardShortcuts()
  return null
}

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
    TableNode,
    TableCellNode,
    TableRowNode,
    HorizontalRuleNode,
    LinkNode,
    ImageNode,
    EquationNode,
    EmojiNode,
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
    
    // Enhanced markdown conversion
    const markdown = editorState.read(() => {
      // Get text content from editor state
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
            {/* Complete Professional Toolbar */}
            <ToolbarPlugin>
              {({ blockType }) => (
                <div className="sticky top-0 z-10 border-b p-2 bg-background/95 backdrop-blur">
                  <div className="flex gap-2 overflow-auto flex-wrap items-center">
                    {/* History Controls */}
                    <HistoryToolbarPlugin />
                    
                    <div className="h-6 w-px bg-border" />
                    
                    {/* Block Format Dropdown */}
                    <BlockFormatDropDown>
                      <FormatParagraph />
                      <FormatHeading levels={["h1", "h2", "h3"]} />
                      <FormatBulletedList />
                      <FormatNumberedList />
                      <FormatCheckList />
                      <FormatQuote />
                    </BlockFormatDropDown>
                    
                    <div className="h-6 w-px bg-border" />
                    
                    {/* Text Formatting Controls */}
                    <FontFormatToolbarPlugin />
                    <FontSizeToolbarPlugin />
                    <FontFamilyToolbarPlugin />
                    <FontColorToolbarPlugin />
                    
                    <div className="h-6 w-px bg-border" />
                    
                    {/* Element Format */}
                    <ElementFormatToolbarPlugin />
                    <SubSuperToolbarPlugin />
                    <ClearFormattingToolbarPlugin />
                    
                    <div className="h-6 w-px bg-border" />
                    
                    {/* Insert Menu */}
                    <BlockInsertPlugin>
                      <InsertTable />
                      <InsertImage />
                      <InsertEquation />
                      <InsertHorizontalRule />
                    </BlockInsertPlugin>
                    
                    {/* Character Counter */}
                    <div className="ml-auto text-xs text-muted-foreground">
                      <CounterCharacterPlugin />
                    </div>
                  </div>
                </div>
              )}
            </ToolbarPlugin>

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
              
              {/* Essential Editor Plugins */}
              <LexicalTablePlugin 
                hasCellMerge={true}
                hasCellBackgroundColor={true}
              />
              <LinkPlugin />
              <CodeHighlightPlugin />
              <KeyboardShortcuts />
              
              {/* Advanced Feature Plugins */}
              <EquationsPlugin />
              <EmojisPlugin />
              <DragDropPastePlugin />
              <ComponentPickerMenuPlugin />
              
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
