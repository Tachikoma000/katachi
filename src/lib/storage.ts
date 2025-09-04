import { atomWithStorage } from "jotai/utils"
import { Document, Folder, UserPreferences, CloudProvider, AuthTokens } from "@/types/file-system"

// Default preferences
const defaultPreferences: UserPreferences = {
  theme: "system",
  editorFontSize: 16,
  editorLineHeight: 1.6,
  editorFontFamily: "Inter",
  autoSave: true,
  autoSaveDelay: 500,
  showWordCount: true,
  showReadingTime: true,
  zenMode: false,
  focusMode: false,
}

// Jotai atoms for state management
export const documentsAtom = atomWithStorage<Record<string, Document>>("katachi:documents", {})
export const foldersAtom = atomWithStorage<Record<string, Folder>>("katachi:folders", {})
export const recentFilesAtom = atomWithStorage<string[]>("katachi:recent", [])
export const preferencesAtom = atomWithStorage<UserPreferences>("katachi:preferences", defaultPreferences)
export const cloudAuthAtom = atomWithStorage<Partial<Record<CloudProvider, AuthTokens>>>("katachi:auth", {})

// Storage utilities
export class StorageManager {
  static saveDocument(document: Document): void {
    const documents = JSON.parse(localStorage.getItem("katachi:documents") || "{}")
    documents[document.id] = document
    localStorage.setItem("katachi:documents", JSON.stringify(documents))
  }

  static getDocument(id: string): Document | null {
    const documents = JSON.parse(localStorage.getItem("katachi:documents") || "{}")
    return documents[id] || null
  }

  static saveFolder(folder: Folder): void {
    const folders = JSON.parse(localStorage.getItem("katachi:folders") || "{}")
    folders[folder.id] = folder
    localStorage.setItem("katachi:folders", JSON.stringify(folders))
  }

  static getFolder(id: string): Folder | null {
    const folders = JSON.parse(localStorage.getItem("katachi:folders") || "{}")
    return folders[id] || null
  }

  static addToRecent(documentId: string): void {
    const recent = JSON.parse(localStorage.getItem("katachi:recent") || "[]")
    const filtered = recent.filter((id: string) => id !== documentId)
    const updated = [documentId, ...filtered].slice(0, 10)
    localStorage.setItem("katachi:recent", JSON.stringify(updated))
  }

  static clearStorage(): void {
    const keys = Object.keys(localStorage).filter(key => key.startsWith("katachi:"))
    keys.forEach(key => localStorage.removeItem(key))
  }

  static exportData(): string {
    const data = {
      documents: JSON.parse(localStorage.getItem("katachi:documents") || "{}"),
      folders: JSON.parse(localStorage.getItem("katachi:folders") || "{}"),
      preferences: JSON.parse(localStorage.getItem("katachi:preferences") || "{}"),
    }
    return JSON.stringify(data, null, 2)
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData)
      if (data.documents) localStorage.setItem("katachi:documents", JSON.stringify(data.documents))
      if (data.folders) localStorage.setItem("katachi:folders", JSON.stringify(data.folders))
      if (data.preferences) localStorage.setItem("katachi:preferences", JSON.stringify(data.preferences))
      return true
    } catch (error) {
      console.error("Failed to import data:", error)
      return false
    }
  }
}
