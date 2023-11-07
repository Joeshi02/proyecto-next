"use client"
import { useState } from "react"
import Image from "next/image"



const Carrito = () => {
    
    const [open, setOpen] = useState(false)

    const handleCart = () =>{
    console.log(open);
    setOpen (!open)
}
    
    return(
        <div>
            <button className="pt-1" onClick={handleCart}>
                <Image
                src={"/images_limit/carrito-de-compras.png"}
                alt="carrito"
                width={28}
                height={28}
                className="invert"/>
            </button>
        </div>
    )
}
export default Carrito