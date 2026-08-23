import {useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count , setCount]=useState(0);

  useEffect(()=>{
    alert("Count Changed")
  },[count]);

  return(
    <div>
      <h1>Counnt: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )


}

export default App
