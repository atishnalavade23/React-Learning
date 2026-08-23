// import { useState } from "react";

// function App(){
//   const [count, setCount]=useState(0);

//   return(
//     <div className="counter">
//       <p className="counter">{count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment the Value</button>
//       <button onClick={()=>setCount(count-1)}>Decrement the Value</button>
//       <button onClick={()=> setCount(0)}>Reset</button>
//     </div>
//   )

// }
// export default App;

// import { useState } from "react";
// function App() {

//   const [color, setColor] = useState("pink")

//   return (
//     <div>
//       <div style={{ width: 200, height: 200, backgroundColor: color, margin: 10 }}></div>

//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("green")}>Green</button>
//       <button onClick={() => setColor("orange")}>Orange</button>


//     </div>
//   )
// }

// export default App


// import { useState } from "react";

// function App(){

//   const[isOn, setisOn]=useState(false);

//   return(
//     <button onClick={() => setisOn(!isOn)}>
//       {isOn ? "On": "Off"}
//     </button>
//   )
// }
// export default App

// import { useState } from "react";

// function App(){
// const[name,setName]=useState("")

// return(
//   <div>
//     <input type="text"
//     value={name}
//     onChange={(e)=>setName(e.target.value)}
//     placeholder="Enter Your Name"/>

//     <p>Hello {name}</p>
//   </div>
// )
// }
// 




import { useState } from "react";

function App(){
  const[text, setText]=useState("");

  return(
    <div>
      <input type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Enter Text for count Length" />
      <p>Count of Text:{text.length}</p>
    </div>
  )

}
export default App