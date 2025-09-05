"use client"

import * as React from "react"
import { useState } from "react"
import { useAtom } from "jotai"
import { documentsAtom, foldersAtom } from "@/lib/storage"
import { FileSystemManager } from "@/lib/file-system"
import { Document, Folder } from "@/types/file-system"
import { Header } from "@/components/layout/header"
import { FileExplorer } from "@/components/file-system/file-explorer"
import { MarkdownEditor } from "@/components/editor/markdown-editor"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { useAutoSave } from "@/hooks/use-auto-save"
import { ExportDialog } from "@/components/export/export-dialog"
import { ImportDialog } from "@/components/export/import-dialog"

export default function HomePage() {
  const [documents, setDocuments] = useAtom(documentsAtom)
  const [folders, setFolders] = useAtom(foldersAtom)
  const [activeDocument, setActiveDocument] = useState<Document | null>(null)
  
  // Auto-save functionality
  const { isSaving, lastSaved, saveNow } = useAutoSave(activeDocument, {
    delay: 500,
    enabled: true
  })

  const handleCreateDocument = () => {
    const name = prompt("Document name:")
    if (!name) return

    const newDocument = FileSystemManager.createDocument(name)
    setDocuments(prev => ({ ...prev, [newDocument.id]: newDocument }))
    setActiveDocument(newDocument)
  }

  const handleCreateFolder = () => {
    const name = prompt("Folder name:")
    if (!name) return

    const newFolder = FileSystemManager.createFolder(name)
    setFolders(prev => ({ ...prev, [newFolder.id]: newFolder }))
  }

  const handleDocumentSelect = (document: Document) => {
    setActiveDocument(document)
  }

  const handleContentChange = (content: any, markdown: string) => {
    if (!activeDocument) return

    const updatedDocument = FileSystemManager.updateDocument(activeDocument, {
      content,
      markdown,
    })

    setDocuments(prev => ({ ...prev, [updatedDocument.id]: updatedDocument }))
    setActiveDocument(updatedDocument)
  }

  const handleImport = (importedDocuments: Document[]) => {
    // Add imported documents to state
    const newDocuments: Record<string, Document> = {}
    importedDocuments.forEach(doc => {
      newDocuments[doc.id] = doc
    })
    
    setDocuments(prev => ({ ...prev, ...newDocuments }))
    
    // Select the first imported document
    if (importedDocuments.length > 0) {
      setActiveDocument(importedDocuments[0])
    }
  }

  // File management operations
  const handleRenameDocument = (document: Document, newName: string) => {
    const renamed = FileSystemManager.renameDocument(document, newName)
    setDocuments(prev => ({ ...prev, [renamed.id]: renamed }))
    if (activeDocument?.id === document.id) {
      setActiveDocument(renamed)
    }
  }

  const handleDeleteDocument = (document: Document) => {
    const { documents: updatedDocuments, folders: updatedFolders } = 
      FileSystemManager.deleteDocument(document.id, documents, folders)
    setDocuments(updatedDocuments)
    setFolders(updatedFolders)
    if (activeDocument?.id === document.id) {
      setActiveDocument(null)
    }
  }

  const handleDuplicateDocument = (document: Document) => {
    const duplicate = FileSystemManager.duplicateDocument(document)
    setDocuments(prev => ({ ...prev, [duplicate.id]: duplicate }))
    setActiveDocument(duplicate)
  }

  const handleStarDocument = (document: Document) => {
    const starred = FileSystemManager.starDocument(document)
    setDocuments(prev => ({ ...prev, [starred.id]: starred }))
    if (activeDocument?.id === document.id) {
      setActiveDocument(starred)
    }
  }

  const handleArchiveDocument = (document: Document) => {
    const archived = FileSystemManager.archiveDocument(document)
    setDocuments(prev => ({ ...prev, [archived.id]: archived }))
    if (activeDocument?.id === document.id) {
      setActiveDocument(archived)
    }
  }

  const handleRenameFolder = (folder: Folder, newName: string) => {
    const renamed = FileSystemManager.renameFolder(folder, newName)
    setFolders(prev => ({ ...prev, [renamed.id]: renamed }))
  }

  const handleDeleteFolder = (folder: Folder) => {
    const updatedFolders = FileSystemManager.deleteFolder(folder.id, folders)
    setFolders(updatedFolders)
  }

  return (
    <div className="h-screen flex flex-col">
      <Header 
        onNewDocument={handleCreateDocument}
        onOpenSettings={() => console.log("Settings")}
        onExport={() => {}}  // We'll use separate dialogs
        onImport={() => {}}  // We'll use separate dialogs
        syncStatus="offline"
      />


      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          {/* File Explorer Sidebar */}
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
            <FileExplorer
              activeDocumentId={activeDocument?.id}
              onDocumentSelect={handleDocumentSelect}
              onCreateDocument={handleCreateDocument}
              onCreateFolder={handleCreateFolder}
              onRenameDocument={handleRenameDocument}
              onDeleteDocument={handleDeleteDocument}
              onDuplicateDocument={handleDuplicateDocument}
              onStarDocument={handleStarDocument}
              onArchiveDocument={handleArchiveDocument}
              onRenameFolder={handleRenameFolder}
              onDeleteFolder={handleDeleteFolder}
              onExportDocument={(doc) => console.log("Export from context menu:", doc.name)}
            />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Main Editor Area */}
          <ResizablePanel defaultSize={75}>
            <div className="h-full flex flex-col">
              {activeDocument ? (
                <>
                  {/* Document Header */}
                  <div className="border-b p-4 bg-background">
                    <div className="flex items-center justify-between">
                      <h1 className="text-xl font-semibold">{activeDocument.name}</h1>
                      <div className="flex items-center space-x-2">
                        <ImportDialog onImport={handleImport} />
                        <ExportDialog document={activeDocument} />
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span>{activeDocument.wordCount} words</span>
                      <span>{activeDocument.characterCount} characters</span>
                      <span>{activeDocument.metadata.readingTime}min read</span>
                      <span>
                        {isSaving ? (
                          "Saving..."
                        ) : lastSaved ? (
                          `Saved at ${lastSaved.toLocaleTimeString()}`
                        ) : (
                          `Last saved: ${new Date(activeDocument.updatedAt).toLocaleTimeString()}`
                        )}
                      </span>
                      {isSaving && <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />}
                    </div>
                  </div>

                  {/* Editor */}
                  <div className="flex-1 p-4">
                    <MarkdownEditor
                      initialContent={activeDocument.content}
                      onContentChange={handleContentChange}
                      placeholder={`Start writing in ${activeDocument.name}...`}
                      className="h-full border-0 shadow-none"
                    />
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center text-center text-muted-foreground">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Welcome to Katachi</h2>
                    <p className="text-lg mb-6">A beautiful markdown editor</p>
                    <div className="space-y-2">
                      <p>Create your first document to get started</p>
                      <button 
                        onClick={handleCreateDocument}
                        className="text-blue-500 hover:underline"
                      >
                        Create New Document
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}
