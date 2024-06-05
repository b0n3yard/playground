import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/landing.jsx"
import Dungeon from './pages/dungeon.jsx'
import PromptGenerator from './pages/promptGenerator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path ="/" element={<Landing/>}/>
        <Route path="dungeon" element={<Dungeon/>}/>
        <Route path= "/promptGenerator" element={<PromptGenerator/>}/>
      </Routes>
    </>
  )
}

export default App
