"use client"
import { useState } from "react"


const Contador = ({counter, setCounter, stock}) => {
    
    const add = () => 
    counter < stock && setCounter (counter + 1)
    const rest = () =>
    counter > 1 && setCounter(counter-1)
    
    return (
        <div className="flex flex-row m-2 gap-1">
            <button className="bg-gray-400 px-4 " onClick={rest}>-</button>
            <span className="px-4 text-black">{counter}</span>
            <button className="bg-gray-400 px-4" onClick={add}>+</button>
        </div> 
    )
}
export default Contador