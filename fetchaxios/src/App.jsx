import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom';
import './App.css'
import Axiosfetcher from '../components/Axiosfetcher';
import Fetchfetcher from '../components/Fetchfetcher';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
<nav>
  <ul>

    <li className='list-none p-4 bg-gray-100'>
      <Link to="/axios">Axios</Link>
    </li>
    <li>
    <Link to="/fetch">Axios</Link>
    </li>
  </ul>
</nav>
<Routes>
  <Route path="/axios" element={<Axiosfetcher/>} />
  <Route path="/fetch"element={<Fetchfetcher/>}/>
</Routes>
      </Router>

      
  );
};

export default App
