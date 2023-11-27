"use client"
import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "./context/CartContex"



const Carrito = () => {
    const {totalQty} = useCartContext()
    return(
        <>
        <Link href={"/carrito"}>
                <Image
                src={"/images_limit/carrito-de-compras.png"}
                alt="carrito"
                width={28}
                height={28}
                className="invert"/>
                <span>{totalQty}</span>
        </Link>
        <span className="p-1">{totalQty()}</span>
        </>
        
    )
}
export default Carrito