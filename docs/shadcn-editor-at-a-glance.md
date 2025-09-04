# Introduction

[Next](https://shadcn-editor.vercel.app/docs/installation)

Lexical base rich text editor using shadcn/ui components.

This rich text editor is built on top of  [Lexical](https://lexical.dev/)  and uses  [shadcn/ui](https://ui.shadcn.com/)  components. Most of the code is based on the  [Lexical Playground](https://playground.lexical.dev/)  example.

It's super easy to get started with Lexical in any environment. Lexical is framework agnostic, but provides a set of bindings for React to help you get off the ground even quicker. After the initial setup, delightfully ergonomic APIs make building custom functionality straightforward and downright fun!

_Lexical is an extensible text editor framework that does things differently._

# Installation

[Previous](https://shadcn-editor.vercel.app/docs)[Next](https://shadcn-editor.vercel.app/docs/plugins)

How to install dependencies and structure your app.

First you need to initialize your project with  [shadcn/ui](https://ui.shadcn.com/docs/installation).

## Editor Initialization

Use the following command to add the editor to your project.

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add https://shadcn-editor.vercel.app/r/editor.json
```

Copy

This will add the core dependencies and the structure for the editor.

### Usage

Here is how you can use the editor in your project.

Copy`"use client"  import { useState } from "react"import { SerializedEditorState } from "lexical"  import { Editor } from "@/components/blocks/editor-00"  const initialValue = { root: { children: [ { children: [ { detail: 0, format: 0, mode: "normal", style: "", text: "Hello World 🚀", type: "text", version: 1, }, ], direction: "ltr", format: "", indent: 0, type: "paragraph", version: 1, }, ], direction: "ltr", format: "", indent: 0, type: "root", version: 1, },} as unknown as SerializedEditorState  export default function EditorDemo() { const [editorState, setEditorState] = useState<SerializedEditorState>(initialValue)  return ( <div> <Editor editorSerializedState={editorState} onSerializedChange={(value) => setEditorState(value)} /> </div> )}`

You can extend the editor with plugins. See the  [plugins](https://shadcn-editor.vercel.app/docs/plugins)  section for more information.

# Plugins

[Previous](https://shadcn-editor.vercel.app/docs/installation)[Next](https://shadcn-editor.vercel.app/docs/plugins)

Plugins for shadcn/ui.

Here are three important files to extend the functionality of shadcn/editor that would be created on initialization of the editor under  `/components/blocks/editor-00`  directory.

editor.tsx

Copy`"use client"  import { InitialConfigType, LexicalComposer,} from "@lexical/react/LexicalComposer"import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin"import { EditorState, SerializedEditorState } from "lexical"  import { editorTheme } from "@/registry/default/editor/themes/editor-theme"import { TooltipProvider } from "@/registry/default/ui/tooltip"  import { nodes } from "./nodes"import { Plugins } from "./plugins"  const editorConfig: InitialConfigType = { namespace: "Editor", theme: editorTheme, nodes, onError: (error: Error) => { console.error(error) },}  export function Editor({ editorState, editorSerializedState, onChange, onSerializedChange,}: { editorState?: EditorState editorSerializedState?: SerializedEditorState onChange?: (editorState: EditorState) => void onSerializedChange?: (editorSerializedState: SerializedEditorState) => void}) { return ( <div className="bg-background overflow-hidden rounded-lg border shadow"> <LexicalComposer initialConfig={{ ...editorConfig, ...(editorState ? { editorState } : {}), ...(editorSerializedState ? { editorState: JSON.stringify(editorSerializedState) } : {}), }} > <TooltipProvider> <Plugins />  <OnChangePlugin ignoreSelectionChange={true} onChange={(editorState) => { onChange?.(editorState) onSerializedChange?.(editorState.toJSON()) }} /> </TooltipProvider> </LexicalComposer> </div> )}`

nodes.tsx

Copy`import { Klass, LexicalNode, LexicalNodeReplacement } from "lexical"  export const nodes: ReadonlyArray<Klass<LexicalNode> | LexicalNodeReplacement> = []`

plugins.tsx

Copy`import { useState } from "react"import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"  import { ContentEditable } from "@/registry/default/editor/editor-ui/content-editable"  export function Plugins() { const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null)  const onRef = (_floatingAnchorElem: HTMLDivElement) => { if (_floatingAnchorElem !== null) { setFloatingAnchorElem(_floatingAnchorElem) } }  return ( <div className="relative"> {/* toolbar plugins */} <div className="relative"> <RichTextPlugin contentEditable={ <div className=""> <div className="" ref={onRef}> <ContentEditable placeholder={"Start typing ..."} /> </div> </div> } ErrorBoundary={LexicalErrorBoundary} /> {/* editor plugins */} </div> {/* actions plugins */} </div> )}`

To extend the functionality with plugins, you can add the plugins to the  `plugins.tsx`  file and add the nodes to the  `nodes.tsx`  file (if needed).

If you want different type of editors (notion-like, google docs-like, markdown-editor etc), you would require to create these three files for each editor.

# Rich Text Editor

[Previous](https://shadcn-editor.vercel.app/docs/plugins/poll)[Next](https://shadcn-editor.vercel.app/docs/plugins/tab-focus)

A content editable component for the Lexical editor that provides rich text editing capabilities.

"use client"

import { useState } from "react"
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { ParagraphNode, TextNode } from "lexical"

import { ContentEditable } from "@/registry/new-york-v4/editor/editor-ui/content-editable"
import { editorTheme } from "@/registry/new-york-v4/editor/themes/editor-theme"
import { TooltipProvider } from "@/components/ui/tooltip"

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [HeadingNode, ParagraphNode, TextNode, QuoteNode],
  onError: (error: Error) => {
    console.error(error)
  },
}

export function RichTextEditorDemo() {
  return (
    <div className="bg-background w-full overflow-hidden rounded-lg border">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
        }}
      >
        <TooltipProvider>
          <Plugins />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}

const placeholder = "Start typing..."

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      {/* toolbar plugins */}
      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-72 min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        {/* rest of the plugins */}
      </div>
    </div>
  )
}


## Installation

CLIManual

pnpmnpmyarnbun

```
pnpm dlx shadcn@latest add https://shadcn-editor.vercel.app/r/rich-text-editor-plugin.json
```

# Tab Focus

[Previous](https://shadcn-editor.vercel.app/docs/plugins/rich-text-editor)[Next](https://shadcn-editor.vercel.app/docs/plugins/table)

A plugin that manages tab focus behavior within the editor.

"use client"

import { useState } from "react"
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"

import { ContentEditable } from "@/registry/new-york-v4/editor/editor-ui/content-editable"
import { TabFocusPlugin } from "@/registry/new-york-v4/editor/plugins/tab-focus-plugin"
import { editorTheme } from "@/registry/new-york-v4/editor/themes/editor-theme"
import { TooltipProvider } from "@/components/ui/tooltip"

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [],
  onError: (error: Error) => {
    console.error(error)
  },
}

export function RichTextEditorDemo() {
  return (
    <div className="bg-background w-full overflow-hidden rounded-lg border">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
        }}
      >
        <TooltipProvider>
          <Plugins />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}

const placeholder = "Start typing..."

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      {/* toolbar plugins */}

      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-72 min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <TabFocusPlugin />
        {/* rest of the plugins */}
      </div>
    </div>
  )
}

pnpm dlx shadcn@latest add https://shadcn-editor.vercel.app/r/tab-focus-plugin.json

# Table

[Previous](https://shadcn-editor.vercel.app/docs/plugins/tab-focus)[Next](https://shadcn-editor.vercel.app/docs/plugins/toolbar)

A plugin that provides table creation, editing, resizing, and markdown table support.

"use client"

import { useState } from "react"
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { TablePlugin } from "@lexical/react/LexicalTablePlugin"
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table"
import { ParagraphNode, TextNode } from "lexical"

import { ContentEditable } from "@/registry/new-york-v4/editor/editor-ui/content-editable"
import { TableActionMenuPlugin } from "@/registry/new-york-v4/editor/plugins/table-action-menu-plugin"
import { TableCellResizerPlugin } from "@/registry/new-york-v4/editor/plugins/table-cell-resizer-plugin"
import { TableHoverActionsPlugin } from "@/registry/new-york-v4/editor/plugins/table-hover-actions-plugin"
import { BlockInsertPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert-plugin"
import { InsertTable } from "@/registry/new-york-v4/editor/plugins/toolbar/block-insert/insert-table"
import { ToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/toolbar-plugin"
import { editorTheme } from "@/registry/new-york-v4/editor/themes/editor-theme"
import { TooltipProvider } from "@/components/ui/tooltip"

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [
    HeadingNode,
    ParagraphNode,
    TextNode,
    QuoteNode,
    TableNode,
    TableRowNode,
    TableCellNode,
  ],
  onError: (error: Error) => {
    console.error(error)
  },
}

export function RichTextEditorDemo() {
  return (
    <div className="bg-background w-full overflow-hidden rounded-lg border">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
        }}
      >
        <TooltipProvider>
          <Plugins />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}

const placeholder = "Start typing..."

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      {/* toolbar plugins */}
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
            <BlockInsertPlugin>
              <InsertTable />
            </BlockInsertPlugin>
          </div>
        )}
      </ToolbarPlugin>

      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-72 min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <TablePlugin />
        <TableActionMenuPlugin anchorElem={floatingAnchorElem} />
        <TableCellResizerPlugin />
        <TableHoverActionsPlugin anchorElem={floatingAnchorElem} />
        {/* rest of the plugins */}
      </div>
    </div>
  )
}


pnpm dlx shadcn@latest add https://shadcn-editor.vercel.app/r/table-plugin.json

# Toolbar

[Previous](https://shadcn-editor.vercel.app/docs/plugins/table)[Next](https://shadcn-editor.vercel.app/docs/plugins/typing-pref)

A toolbar plugin that provides formatting controls and context management for the rich text editor.

"use client"

import { useState } from "react"
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { ParagraphNode, TextNode } from "lexical"
import { Plus } from "lucide-react"

import { ContentEditable } from "@/registry/new-york-v4/editor/editor-ui/content-editable"
import { ToolbarPlugin } from "@/registry/new-york-v4/editor/plugins/toolbar/toolbar-plugin"
import { editorTheme } from "@/registry/new-york-v4/editor/themes/editor-theme"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes: [HeadingNode, ParagraphNode, TextNode, QuoteNode],
  onError: (error: Error) => {
    console.error(error)
  },
}

export function RichTextEditorDemo() {
  return (
    <div className="bg-background w-full overflow-hidden rounded-lg border">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
        }}
      >
        <TooltipProvider>
          <Plugins />
        </TooltipProvider>
      </LexicalComposer>
    </div>
  )
}

const placeholder = "Start typing..."

export function Plugins() {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null)

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem)
    }
  }

  return (
    <div className="relative">
      {/* toolbar plugins */}
      <ToolbarPlugin>
        {({ blockType }) => (
          <div className="vertical-align-middle sticky top-0 z-10 flex gap-2 overflow-auto border-b p-1">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <Plus />
            </Button>
          </div>
        )}
      </ToolbarPlugin>

      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <div className="">
              <div className="" ref={onRef}>
                <ContentEditable
                  placeholder={placeholder}
                  className="ContentEditable__root relative block h-72 min-h-72 min-h-full overflow-auto px-8 py-4 focus:outline-none"
                />
              </div>
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        {/* rest of the plugins */}
      </div>
    </div>
  )
}

pnpm dlx shadcn@latest add https://shadcn-editor.vercel.app/r/toolbar-plugin.json


