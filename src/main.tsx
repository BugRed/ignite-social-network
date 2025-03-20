import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// a exclammação é para informar a garantia que o elemento existe
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
