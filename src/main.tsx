import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export function Root() {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'system')

  useEffect(() => {
    const root = document.documentElement
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = theme === 'dark' || (theme === 'system' && systemPrefersDark)
    root.classList.toggle('dark', shouldDark)
  }, [theme])

  useEffect(() => {
    if (theme) localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <StrictMode>
      <div className="min-h-screen">
        <div className="fixed top-3 right-3 z-50">
          <select
            aria-label="Theme"
            className="px-3 py-2 rounded-md border border-gray-200 bg-white text-sm shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>
        <App />
      </div>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)
