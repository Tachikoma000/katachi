import { v4 as uuidv4 } from "uuid"
import { Document, Folder, DocumentMetadata } from "@/types/file-system"
import { SerializedEditorState } from "lexical"

export class FileSystemManager {
  // Document operations
  static createDocument(name: string, folderId?: string): Document {
    const now = new Date()
    const initialContent = {
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "paragraph",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "root",
        version: 1,
      },
    } as unknown as SerializedEditorState

    const metadata: DocumentMetadata = {
      readingTime: 0,
      lastCursorPosition: 0,
      isStarred: false,
      isArchived: false,
    }

    return {
      id: uuidv4(),
      name: name.endsWith('.md') ? name : `${name}.md`,
      content: initialContent,
      markdown: "",
      folderId,
      createdAt: now,
      updatedAt: now,
      wordCount: 0,
      characterCount: 0,
      syncStatus: "local",
      tags: [],
      metadata,
    }
  }

  static updateDocument(document: Document, updates: Partial<Document>): Document {
    const updatedDoc = {
      ...document,
      ...updates,
      updatedAt: new Date(),
    }

    // Recalculate stats if content changed
    if (updates.markdown !== undefined) {
      updatedDoc.wordCount = this.countWords(updates.markdown)
      updatedDoc.characterCount = updates.markdown.length
      updatedDoc.metadata.readingTime = this.calculateReadingTime(updates.markdown)
    }

    return updatedDoc
  }

  static deleteDocument(documentId: string, documents: Record<string, Document>, folders: Record<string, Folder>): {
    documents: Record<string, Document>
    folders: Record<string, Folder>
  } {
    const updatedDocuments = { ...documents }
    const updatedFolders = { ...folders }
    
    const document = updatedDocuments[documentId]
    if (document && document.folderId) {
      const folder = updatedFolders[document.folderId]
      if (folder) {
        updatedFolders[document.folderId] = {
          ...folder,
          documentIds: folder.documentIds.filter(id => id !== documentId)
        }
      }
    }
    
    delete updatedDocuments[documentId]
    
    return { documents: updatedDocuments, folders: updatedFolders }
  }

  // Folder operations
  static createFolder(name: string, parentId?: string): Folder {
    const now = new Date()
    
    return {
      id: uuidv4(),
      name,
      parentId,
      path: [], // Will be calculated when needed
      documentIds: [],
      subfolderIds: [],
      createdAt: now,
      syncStatus: "local",
    }
  }

  static updateFolder(folder: Folder, updates: Partial<Folder>): Folder {
    return {
      ...folder,
      ...updates,
    }
  }

  static deleteFolder(folderId: string, folders: Record<string, Folder>): Record<string, Folder> {
    const updatedFolders = { ...folders }
    
    // Remove from parent folder
    const folder = updatedFolders[folderId]
    if (folder && folder.parentId) {
      const parentFolder = updatedFolders[folder.parentId]
      if (parentFolder) {
        updatedFolders[folder.parentId] = {
          ...parentFolder,
          subfolderIds: parentFolder.subfolderIds.filter(id => id !== folderId)
        }
      }
    }
    
    delete updatedFolders[folderId]
    
    return updatedFolders
  }

  static renameDocument(document: Document, newName: string): Document {
    return this.updateDocument(document, { 
      name: newName.endsWith('.md') ? newName : `${newName}.md`
    })
  }

  static renameFolder(folder: Folder, newName: string): Folder {
    return this.updateFolder(folder, { name: newName })
  }

  static duplicateDocument(document: Document): Document {
    const now = new Date()
    const baseName = document.name.replace('.md', '')
    const duplicateName = `${baseName} - Copy.md`
    
    return {
      ...document,
      id: this.generateId(),
      name: duplicateName,
      createdAt: now,
      updatedAt: now,
      syncStatus: "local",
      cloudFileId: undefined,
      cloudLastModified: undefined,
    }
  }

  static starDocument(document: Document): Document {
    return this.updateDocument(document, {
      metadata: {
        ...document.metadata,
        isStarred: !document.metadata.isStarred
      }
    })
  }

  static archiveDocument(document: Document): Document {
    return this.updateDocument(document, {
      metadata: {
        ...document.metadata,
        isArchived: !document.metadata.isArchived
      }
    })
  }

  static moveDocumentToFolder(document: Document, targetFolderId?: string): Document {
    return this.updateDocument(document, { folderId: targetFolderId })
  }

  static moveFolderToFolder(folder: Folder, targetFolderId?: string): Folder {
    return this.updateFolder(folder, { parentId: targetFolderId })
  }

  // Helper function to generate UUIDs (simplified version)
  private static generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }

  // Utility functions
  static countWords(text: string): number {
    if (!text.trim()) return 0
    return text.trim().split(/\s+/).length
  }

  static calculateReadingTime(text: string): number {
    const wordsPerMinute = 200
    const wordCount = this.countWords(text)
    return Math.ceil(wordCount / wordsPerMinute)
  }

  static generatePath(folderId: string, folders: Record<string, Folder>): string[] {
    const path: string[] = []
    let currentId = folderId
    
    while (currentId) {
      const folder = folders[currentId]
      if (!folder) break
      
      path.unshift(folder.name)
      currentId = folder.parentId || ""
    }
    
    return path
  }

  static searchDocuments(query: string, documents: Record<string, Document>): Document[] {
    const searchTerm = query.toLowerCase()
    
    return Object.values(documents).filter(doc => 
      doc.name.toLowerCase().includes(searchTerm) ||
      doc.markdown.toLowerCase().includes(searchTerm) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    )
  }

  static getFolderTree(folders: Record<string, Folder>): Folder[] {
    const rootFolders = Object.values(folders).filter(folder => !folder.parentId)
    
    function buildTree(folder: Folder): Folder {
      const children = Object.values(folders).filter(f => f.parentId === folder.id)
      return {
        ...folder,
        subfolderIds: children.map(child => buildTree(child).id)
      }
    }
    
    return rootFolders.map(buildTree)
  }
}
