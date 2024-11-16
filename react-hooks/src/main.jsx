import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import ToggleButton from './ToggleButton.jsx'
import TextInput from './TextInput.jsx'
import FetchPosts from './FetchPosts.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Counter /> */}
    {/* <ToggleButton /> */}
    {/* <TextInput /> */}
    {/* <FetchPosts /> */}
  </StrictMode>,
)
