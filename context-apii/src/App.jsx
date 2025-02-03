import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Home from
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ThemeProvider>
    <Home/>
  </ThemeProvider>
    </>
  )
}

export default App
