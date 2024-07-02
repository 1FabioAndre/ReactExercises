import { useState } from "react";
import Contador from "./Contador";

export default function PadreContador(){
    const [value, setValue] = useState(0);

    function onClickButtonHandle(mode){
        if(mode === "add") setValue(value + 1);
        else if(mode === "reset") setValue(0);
        else {
            if(value === 0){
                return; 
            } 
            setValue(value - 1);
        }
    }

    return (
        <div>
            <hr/>
            <h1>Shared State</h1>
            <h2>Father Component</h2>    
            <Contador key={1} name="hijo1" count={value} onClickButton={onClickButtonHandle}></Contador>
            <Contador key={2} name="hijo2" count={value} onClickButton={onClickButtonHandle}></Contador>
            <hr/>
        </div>
    );
}