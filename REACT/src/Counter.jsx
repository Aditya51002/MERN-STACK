import React,{useState} from "react";


function counter(){

    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
        console.log(count);
    }   

    const decriment=()=>{
        setCount(count-1);
        console.log(count);
    }
    return(
        <div>
            <h2>count:</h2>
            <button onClick= {increment}>increment</button>
            <button onClick= {decriment}>decrement</button>
        </div>

        
    )
}
export default counter;