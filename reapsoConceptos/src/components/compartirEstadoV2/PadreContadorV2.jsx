import { useState } from 'react';
import { ContadorV2 } from './ContadorV2'

function PadreContadorV2(){
    const [ value, setValue ] = useState(0);

    const onClickButtonAddHandle = () =>{
        setValue(value + 1);
    }
    const onClickButtonResetHandle = () =>{
        setValue(0);
    }
    const onClickButtonSubstractHandle = () =>{
        if( value === 0) return;
        setValue(value - 1);
    }

    return(
        <div>
            <hr/>
            <h1>Shared State V2</h1>
            <h2>Father Component V2</h2>    
            <ContadorV2 key={1} name="hijo1V2" count={value} 
                        onClickButtonAdd={onClickButtonAddHandle}
                        onClickButtonReset={onClickButtonResetHandle}
                        onClickButtonSubstract={onClickButtonSubstractHandle}
            ></ContadorV2>
            <ContadorV2 key={2} name="hijo2V2" count={value} 
                        onClickButtonAdd={onClickButtonAddHandle}
                        onClickButtonReset={onClickButtonResetHandle}
                        onClickButtonSubstract={onClickButtonSubstractHandle}
            ></ContadorV2>
            <hr/>
        </div>
    );
}

export default PadreContadorV2;