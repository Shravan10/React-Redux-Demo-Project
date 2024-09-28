import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increaseBy1,decreasedBy1,increaseBy10,decreasedBy10} from '../counterSlice/index'
const Counter = () =>{
    const count = useSelector((state)=>state.counterShravan);
    const dispatch= useDispatch();
return(
    <div>
        <h1>React Redux Demo Project</h1>
   <h1>{count}</h1>
   <button onClick={()=>{dispatch(increaseBy1())}}>Increased by 1</button>
   <button onClick={()=>{dispatch(increaseBy10())}}>Increased by 10</button>
   <button onClick={()=>{dispatch(decreasedBy1())}}> Decresased by 1</button>
   <button onClick={()=>{dispatch(decreasedBy10())}}>Decreased by 10</button>

    </div>
)
}

export default Counter;