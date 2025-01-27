import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GuessingGame from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuessingGame />
  </StrictMode>,
)
