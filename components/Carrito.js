"use client"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "./context/CartContext"



const Carrito = () => {
    const {getQty} = useContext(CartContext)
    return(
        <>
        <Link href={"/carrito"}>
        <div>
            <button className="pt-1">
                <Image
                src={"/images_limit/carrito-de-compras.png"}
                alt="carrito"
                width={28}
                height={28}
                className="invert"/>
            </button>
            {getQty() > 0 && <button>{getQty()}</button>}
        </div>
        </Link>
        </>
        
    )
}
export default Carrito