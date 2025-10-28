import { useEffect } from 'react'
import { useThemeStore } from '@/lib/store'

export function useTheme() {
  const { theme, setTheme, resolvedTheme, updateResolvedTheme } = useThemeStore()

  useEffect(() => {
    // Update resolved theme on mount
    updateResolvedTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'system') {
        updateResolvedTheme()
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, updateResolvedTheme])

  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  return { theme, setTheme, resolvedTheme }
}
