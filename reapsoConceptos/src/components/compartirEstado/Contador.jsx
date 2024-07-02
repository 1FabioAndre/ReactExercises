const Contador = ({name, count, onClickButton}) => {
    return (
    <div style={{display: "inline-block"}}>
        <h1>{name}</h1>
        <p>{count}</p>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={ () => { onClickButton("add") } }
        >
            +1
        </button>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={ () => { onClickButton("reset") } }
        >
            reset
        </button>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={ () => { onClickButton("substract") } }
        >
            -1
        </button>
    </div>
    );
}

export default Contador;