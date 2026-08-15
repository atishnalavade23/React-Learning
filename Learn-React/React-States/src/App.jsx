import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React States</h1>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count+1)}>Increment</button><br></br>
      <button onClick={()=> setCount(count-1)}>Decrement</button>
    </div>
  )
}
export default App;
