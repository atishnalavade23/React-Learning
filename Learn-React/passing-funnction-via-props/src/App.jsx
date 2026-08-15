function App(){

 function handleClick() {
    alert('Button clicked!')

    }

    return (
        <div>
            <h1>Passing Function via Props</h1>
            <button onClick={handleClick}>  Click Here</button>
        </div>
    )


} 
export default App;