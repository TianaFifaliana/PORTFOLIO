import { createContext } from 'react'

export type Theme = 'light' | 'dark'

export type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

export const STORAGE_KEY = 'portfolio-theme'
export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function readStoredTheme(): Theme | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'light' || saved === 'dark' ? saved : null
  } catch {
    return null
  }
}

export function readInitialTheme(): Theme {
  const saved = readStoredTheme()
  if (saved) return saved
  if (document.documentElement.dataset.theme === 'light') return 'light'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}
