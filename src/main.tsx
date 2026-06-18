import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Note: Wrapping with StrictMode in development helps identify potential issues
// It causes components to render twice intentionally to detect side effects
// This is normal development behavior and gets removed in production builds
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
