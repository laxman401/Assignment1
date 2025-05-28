import { render } from '@testing-library/react';
import React, { useState} from 'react';
function CounterAppFunction(props){
    const [qty, setQty] = useState(props.qtys);
   const  increaseQty = () =>{
        setQty(qty + 1)
     }   
   const decreaseQty = () =>{
        setQty(qty -  1);
     }
    
return (
    <div>
        <h1>Function Example</h1>
        <button onClick={()=>increaseQty()}>+</button>
        <h1>{qty}</h1>
        <button onClick={()=>decreaseQty()}>-</button>
    </div>

)
}
export default CounterAppFunction