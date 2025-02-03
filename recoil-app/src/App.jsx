import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot} from "recoil";
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
<RecoilRoot>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
  </Routes>
</Router>
</RecoilRoot>
  )
}

export default App
