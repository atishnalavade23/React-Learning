function App(){

 function handleClick() {
    alert('Button clicked!')

    }

    return (
        <div>
            <h1>Passing Function via Props</h1>
            <Button onClick={handleClick} />
        </div>
    )


} 