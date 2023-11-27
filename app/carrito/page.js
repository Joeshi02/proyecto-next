"use client"
import Formulario from "@/components/formulario"
import Link from "next/link"
import { CartProvider, useCartContext } from "@/components/context/CartContex"
import ItemCart from "@/components/ItemCarrito"


const carrito = () => {
    const { cartList, clear, getTotal } = useCartContext()
    return (
        <>
            {cartList.length !== 0 ?
                (
                    <div className="container m-auto">
                        <h2 className="text-4xl">Tu compra</h2>
                        <hr />
                        {cartList.map((item) => <ItemCart item={item} key={item.id} />)
                        }
                        <div>
                            <p>{`Total: $${getTotal()}`}</p>
                            <button className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1" onClick={clear}>Vaciar carrito</button>
                        </div>
                        <div className=" justify-items-start">
                            <Formulario />
                        </div>
                    </div>
                )
                : (
                    <div className="flex justify-center ">
                        <h3 className="text-center text-3xl">Tu carrito esta vacio</h3>
                        <button className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">
                            <Link href={'/'}>Volver a inicio</Link>
                        </button>
                    </div>
                )
            }

        </>

    )
}
export default carrito