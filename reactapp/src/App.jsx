import React, {useState} from 'react';

// import './counter.css';
import ChildComponent from '../components/child';
function Counter(){
  const [count, setCount] = useState(0);
  const increment =()=>{
    setCount(count+1);

  };
  const decrement =()=>{
    setCount(count-1);
  }

  return (
    <div className='counter'>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <ChildComponent message="Hello from Parent!" />;
    </div>
  );
}
export default Counter;