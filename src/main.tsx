import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export function Root() {
  return (
    <StrictMode>
      <div className="min-h-screen">
        <App />
      </div>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')!).render(<Root />)
