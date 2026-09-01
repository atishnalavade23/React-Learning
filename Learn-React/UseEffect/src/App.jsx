import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



// function App(){
//   const[text, setText]=useState("")

//   useEffect(()=>{
//     console.log("Text Typed")
//   },[text]);

//   return(
//     <div>
//       <input type="text
//       value={text}"
//       onChange={(e)=>setText(e.target.value)}
//       placeholder='Type Something' />
//       <button>Submit</button>

//     </div>
//   )
// }
// export default App  




// function App() {
//   const [color, setColor] = useState("green");

//   useEffect(() => {
//     document.body.style.backgroundColor = color;
//     document.body.style.color = "black";
//   }, [color]);

//   return (
//     <div>
//       {/* Use onClick and call setColor("black") as a function */}
//       <button onClick={() => setColor("black")}>Change Background</button>
//     </div>
//   );
// }

// export default App;



// function App(){

//   useEffect(()=>{
//     console.log("Hello");
//   },[])


//   return(
//     <h1>Check Console</h1>
//   )
// }

// export default App;


// function App(){
//   const [text, setText]=useState("")


//   useEffect(()=>{
//     console.log("Characters Count :", text.length);
//   },[text])

//   return(
//     <div>
//       <input type="text
//       value={text}"
//       onChange={(e)=>setText(e.target.value)} 
//       placeholder='Type Something Here'/>
//     </div>
//   )

// }
// export default App;



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;

  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
     <div>
       <button onClick={() => setCount(count + 1)}>Incremennt +</button>
      <button onClick={() => setCount(count - 1)}>Decrement -</button>
     </div>
    </div>
  )

}

export default App;