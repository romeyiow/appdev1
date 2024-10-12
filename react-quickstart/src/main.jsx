import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyButton from './MyButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyButton />
    {/* <App /> */}
  </StrictMode>,
)
