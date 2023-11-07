"use client"
import { useState } from "react"


const Contador = () => {
    const[counter, setCounter] = useState(1)
    
    function add  () {
        if (counter < 10)
        setCounter(counter + 1)
    }
    function rest () {
        if (counter > 1)
        setCounter(counter - 1)
    }
    
    return (
        <div className="flex flex-row m-1 ">
            <button className="bg-gray-400 px-4 " onClick={rest}>-</button>
            <span className="px-4">{counter}</span>
            <button className="bg-gray-400 px-4" onClick={add}>+</button>
        </div> 
    )
}
export default Contador