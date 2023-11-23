"use client"
import { useState } from "react"


export default function Contador ({stock, initial, onAdd})  {
    const[counter, setCounter] = useState(initial)
    
    function add  () {
        if (counter < stock)
        setCounter(counter + 1)
    }
    function rest () {
        if (counter > initial)
        setCounter(counter - 1)
    }
    
    return (
        <div className="flex flex-row m-2 gap-1">
            <button className="bg-gray-400 px-4 " onClick={rest}>-</button>
            <span className="px-4">{counter}</span>
            <button className="bg-gray-400 px-4" onClick={add}>+</button>
            <button className="bg-blue-400 " onClick={() => onAdd(counter)}>Agregar al carrito</button>
        </div> 
    )
}
