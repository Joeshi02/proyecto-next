"use client"
import Formulario from "@/components/formulario"
import Link from "next/link"


const carrito = () => {
    return(
        <>
        <div className="container m-auto">
            <h2 className="text-4xl">Tu compra</h2>
            <hr/>
            <h4>Tu carrito esta vacio por ahora</h4>
        </div>
        <div className=" justify-items-start">
            <Formulario/>
            <button className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">
                    <Link href={'/'}>Volver a inicio</Link>
                    </button>
        </div>
        </>
        
    )
}
export default carrito