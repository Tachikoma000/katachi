"use client"

import * as React from "react"
import { useAtom } from "jotai"
import { documentsAtom, foldersAtom } from "@/lib/storage"
import { FileSystemManager } from "@/lib/file-system"
import { Document, Folder } from "@/types/file-system"
import { FileContextMenu } from "./file-context-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { 
  File, 
  Folder as FolderIcon, 
  FolderOpen,
  Plus,
  Search,
  MoreHorizontal,
  FileText,
  Star
} from "lucide-react"

interface FileExplorerProps {
  activeDocumentId?: string
  onDocumentSelect: (document: Document) => void
  onCreateDocument: () => void
  onCreateFolder: () => void
  onRenameDocument?: (document: Document, newName: string) => void
  onDeleteDocument?: (document: Document) => void
  onDuplicateDocument?: (document: Document) => void
  onStarDocument?: (document: Document) => void
  onArchiveDocument?: (document: Document) => void
  onRenameFolder?: (folder: Folder, newName: string) => void
  onDeleteFolder?: (folder: Folder) => void
  onExportDocument?: (document: Document) => void
}

export function FileExplorer({ 
  activeDocumentId, 
  onDocumentSelect, 
  onCreateDocument,
  onCreateFolder,
  onRenameDocument,
  onDeleteDocument,
  onDuplicateDocument,
  onStarDocument,
  onArchiveDocument,
  onRenameFolder,
  onDeleteFolder,
  onExportDocument
}: FileExplorerProps) {
  const [documents] = useAtom(documentsAtom)
  const [folders] = useAtom(foldersAtom)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [expandedFolders, setExpandedFolders] = React.useState<Set<string>>(new Set())

  const filteredDocuments = React.useMemo(() => {
    if (!searchQuery) return Object.values(documents)
    return FileSystemManager.searchDocuments(searchQuery, documents)
  }, [documents, searchQuery])

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const renderDocument = (doc: Document) => (
    <FileContextMenu
      key={doc.id}
      item={doc}
      itemType="document"
      onRename={(item) => {
        const newName = prompt("Document name:", item.name.replace('.md', ''))
        if (newName) onRenameDocument?.(item as Document, newName)
      }}
      onDelete={(item) => onDeleteDocument?.(item as Document)}
      onDuplicate={(item) => onDuplicateDocument?.(item)}
      onStar={(item) => onStarDocument?.(item)}
      onArchive={(item) => onArchiveDocument?.(item)}
      onExport={(item) => onExportDocument?.(item)}
    >
      <div
        className={`flex items-center space-x-2 rounded-md px-2 py-1 text-sm cursor-pointer hover:bg-accent group ${
          activeDocumentId === doc.id ? "bg-accent" : ""
        }`}
        onClick={() => onDocumentSelect(doc)}
      >
        <div className="flex items-center space-x-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          {doc.metadata.isStarred && <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />}
        </div>
        <span className="flex-1 truncate">{doc.name}</span>
        <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
          <MoreHorizontal className="h-3 w-3" />
        </Button>
      </div>
    </FileContextMenu>
  )

  const renderFolder = (folder: Folder, level = 0) => {
    const isExpanded = expandedFolders.has(folder.id)
    const folderDocuments = Object.values(documents).filter(doc => doc.folderId === folder.id)
    const subfolders = Object.values(folders).filter(f => f.parentId === folder.id)

    return (
      <div key={folder.id} style={{ marginLeft: `${level * 12}px` }}>
        <FileContextMenu
          item={folder}
          itemType="folder"
          onRename={(item) => {
            const newName = prompt("Folder name:", item.name)
            if (newName) onRenameFolder?.(item as Folder, newName)
          }}
          onDelete={(item) => onDeleteFolder?.(item as Folder)}
          onCreateFolder={(parentId) => onCreateFolder()}
        >
          <div
            className="flex items-center space-x-2 rounded-md px-2 py-1 text-sm cursor-pointer hover:bg-accent group"
            onClick={() => toggleFolder(folder.id)}
          >
            {isExpanded ? (
              <FolderOpen className="h-4 w-4 text-muted-foreground" />
            ) : (
              <FolderIcon className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="flex-1 truncate">{folder.name}</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        </FileContextMenu>
        
        {isExpanded && (
          <div className="ml-4">
            {subfolders.map(subfolder => renderFolder(subfolder, level + 1))}
            {folderDocuments.map(renderDocument)}
          </div>
        )}
      </div>
    )
  }

  const rootFolders = Object.values(folders).filter(folder => !folder.parentId)
  const rootDocuments = Object.values(documents).filter(doc => !doc.folderId)

  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center justify-between p-4 pb-2">
        <h2 className="text-lg font-semibold">Files</h2>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" onClick={onCreateDocument}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={onCreateFolder}>
            <FolderIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="px-4 pb-2">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <Separator />

      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 p-2">
          {searchQuery ? (
            <>
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map(renderDocument)
              ) : (
                <div className="text-center py-4 text-muted-foreground text-sm">
                  No files found
                </div>
              )}
            </>
          ) : (
            <>
              {rootFolders.map(folder => renderFolder(folder))}
              {rootDocuments.map(renderDocument)}
              {rootFolders.length === 0 && rootDocuments.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No files yet</p>
                  <p className="text-xs">Create your first document</p>
                </div>
              )}
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
