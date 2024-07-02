export const ContadorV2 = (props) =>{
    return(
        <div style={{display: "inline-block"}}>
        <h1>{props.name}</h1>
        <p>{props.count}</p>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={props.onClickButtonAdd}
        >
            +1
        </button>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={props.onClickButtonReset}
        >
            reset
        </button>
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={props.onClickButtonSubstract}
        >
            -1
        </button>
    </div>
    );
}
