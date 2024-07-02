import { useState } from "react";

const ContadorConMemoria = () =>{
    const [contador, setContador] = useState(0);
    return (
        <div>
            <h1>Whith memory component</h1>
            <p>count: {contador}</p>
            <button 
                className="btn btn-primary"
                onClick={() => {
                    setContador(contador + 1);
                }}
                >
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setContador(0);
                }}
            >
                reset
            </button>
            <button
                className="btn btn-primary"
                onClick={
                    () => {
                        if(contador == 0){
                            return 
                        }
                        setContador(contador - 1);
                    }
                }
            >
                -1
            </button>
        </div>
    );
}

export default ContadorConMemoria;