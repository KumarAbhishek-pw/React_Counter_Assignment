import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='container'>
      <h2 id='counter'>{count}</h2>
      <div>
        <button onClick={()=> {setCount(count+1)}}>Increment</button>
        <button onClick={()=> {setCount(count-1)}}>Decrement</button>
      </div>

    </div>
  );
}

export default App;
