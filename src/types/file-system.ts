import { SerializedEditorState } from "lexical"

export type CloudProvider = "google-drive" | "github" | "dropbox" | "notion"
export type SyncStatus = "local" | "synced" | "syncing" | "conflict" | "error"

export interface DocumentMetadata {
  readingTime: number // Estimated reading time in minutes
  lastCursorPosition: number // For resuming editing
  isStarred: boolean
  isArchived: boolean
  customIcon?: string
}

export interface Document {
  id: string // UUID v4
  name: string // "README.md"
  content: SerializedEditorState // Lexical state
  markdown: string // Raw markdown
  folderId?: string // Parent folder ID
  createdAt: Date
  updatedAt: Date
  wordCount: number
  characterCount: number
  syncStatus: SyncStatus
  cloudProvider?: CloudProvider
  cloudFileId?: string // Provider-specific file ID
  cloudLastModified?: Date
  tags: string[]
  metadata: DocumentMetadata
}

export interface Folder {
  id: string // UUID v4
  name: string // "My Project"
  parentId?: string // Parent folder ID
  path: string[] // ["Projects", "My Project"]
  documentIds: string[] // Document IDs in this folder
  subfolderIds: string[] // Subfolder IDs
  createdAt: Date
  syncStatus: SyncStatus
  cloudProvider?: CloudProvider
  cloudFolderId?: string
}

export interface UserPreferences {
  theme: "light" | "dark" | "system"
  editorFontSize: number
  editorLineHeight: number
  editorFontFamily: string
  autoSave: boolean
  autoSaveDelay: number // milliseconds
  showWordCount: boolean
  showReadingTime: boolean
  defaultCloudProvider?: CloudProvider
  zenMode: boolean
  focusMode: boolean
}

export interface AuthTokens {
  accessToken: string
  refreshToken?: string
  expiresAt?: Date
}

export interface AppStorage {
  documents: Record<string, Document>
  folders: Record<string, Folder>
  recentFiles: string[] // Document IDs
  preferences: UserPreferences
  cloudAuth: Record<CloudProvider, AuthTokens>
}
