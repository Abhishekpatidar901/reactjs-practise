import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, incrementByAmount } from './redux/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  //const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button> 
    </div>

  )
}

export default App;
