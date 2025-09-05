"use client"

import * as React from "react"
import { Document, Folder } from "@/types/file-system"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { 
  Edit, 
  Trash2, 
  Copy, 
  Star, 
  Archive, 
  FolderPlus,
  FileText,
  Download
} from "lucide-react"

interface FileContextMenuProps {
  children: React.ReactNode
  item: Document | Folder
  itemType: "document" | "folder"
  onRename?: (item: Document | Folder) => void
  onDelete?: (item: Document | Folder) => void
  onDuplicate?: (item: Document) => void
  onStar?: (item: Document) => void
  onArchive?: (item: Document) => void
  onCreateFolder?: (parentId?: string) => void
  onExport?: (item: Document) => void
}

export function FileContextMenu({
  children,
  item,
  itemType,
  onRename,
  onDelete,
  onDuplicate,
  onStar,
  onArchive,
  onCreateFolder,
  onExport
}: FileContextMenuProps) {
  
  const handleRename = () => {
    const currentName = item.name
    const newName = prompt(`Rename ${itemType}:`, currentName)
    if (newName && newName !== currentName) {
      onRename?.(item)
    }
  }

  const handleDelete = () => {
    const confirmMessage = `Are you sure you want to delete "${item.name}"?`
    if (itemType === "folder") {
      // Add warning for folder deletion
    }
    if (confirm(confirmMessage)) {
      onDelete?.(item)
    }
  }

  const handleDuplicate = () => {
    if (itemType === "document") {
      onDuplicate?.(item as Document)
    }
  }

  const handleStar = () => {
    if (itemType === "document") {
      onStar?.(item as Document)
    }
  }

  const handleArchive = () => {
    if (itemType === "document") {
      onArchive?.(item as Document)
    }
  }

  const handleCreateFolder = () => {
    if (itemType === "folder") {
      onCreateFolder?.((item as Folder).id)
    }
  }

  const handleExport = () => {
    if (itemType === "document") {
      onExport?.(item as Document)
    }
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem onClick={handleRename}>
          <Edit className="mr-2 h-4 w-4" />
          Rename
        </ContextMenuItem>
        
        {itemType === "document" && (
          <>
            <ContextMenuItem onClick={handleDuplicate}>
              <Copy className="mr-2 h-4 w-4" />
              Duplicate
            </ContextMenuItem>
            
            <ContextMenuItem onClick={handleStar}>
              <Star className="mr-2 h-4 w-4" />
              {(item as Document).metadata.isStarred ? "Unstar" : "Star"}
            </ContextMenuItem>
            
            <ContextMenuItem onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </ContextMenuItem>
            
            <ContextMenuSeparator />
            
            <ContextMenuItem onClick={handleArchive}>
              <Archive className="mr-2 h-4 w-4" />
              {(item as Document).metadata.isArchived ? "Unarchive" : "Archive"}
            </ContextMenuItem>
          </>
        )}
        
        {itemType === "folder" && (
          <>
            <ContextMenuItem onClick={handleCreateFolder}>
              <FolderPlus className="mr-2 h-4 w-4" />
              New Folder
            </ContextMenuItem>
            
            <ContextMenuItem onClick={() => onCreateFolder?.((item as Folder).id)}>
              <FileText className="mr-2 h-4 w-4" />
              New Document
            </ContextMenuItem>
          </>
        )}
        
        <ContextMenuSeparator />
        
        <ContextMenuItem onClick={handleDelete} className="text-red-600 focus:text-red-600">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
