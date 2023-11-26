"use client"

import { useState } from "react"
import { useCartContext } from "./context/CartContex"
import Link from "next/link"
import Contador from "./Contador"

const Cantidad = ({ item }) => {
    const { addItem, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addItem({
            ...item,
            quantity
        })
    }
    return (
        <div className="flex justify-center">
            {isInCart(item.id) ?
                <Link className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1" href={'/carrito'}>
                    finalizar compra
                </Link>
                :
                <>
                    <Contador stock={item.stock} counter={quantity} setCounter={setQuantity} />
                    <button className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1" onClick={handleAdd}>Agregar al carrito</button>
                </>
            }
        </div>

    )
}
export default Cantidad