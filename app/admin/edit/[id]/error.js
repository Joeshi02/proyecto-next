'use client'

import { useEffect } from "react"

export default function Error ({error, reset}) {
    useEffect(() => {
        console.log(error);
    }, [error])
    
    return (
        <div className="container m-auto">
            <h2 className=" text-center text-2xl">Tuvimos un error, intente nuevamente</h2>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer" onClick={reset}>Internar otra vez</button>
        </div>
    )
}