"use client"

import Link from "next/link"
import { useCartContext } from "@/components/context/CartContex"
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
                        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
                            <p className="text-xl font-bold my-4 text-black">{`Total: $${getTotal()}`}</p>
                            <button className="w-full sm:w-2/3 lg:w-1/2 h-12 bg-blue-900 text-slate-300 rounded-lg mb-4" onClick={clear}>
                                Vaciar carrito
                            </button>
                            <Link className="w-full sm:w-2/3 lg:w-1/2 h-12 bg-blue-900 text-slate-300 rounded-lg mb-4 flex items-center" href="/checkout">
                                <button className="w-full">
                                    Finalizar compra
                                </button>
                            </Link>

                        </div>




                    </div>
                )
                : (
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-center text-3xl">Tu carrito está vacío</h3>
                        <button className="relative flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1 p-2">
                            <Link href={'/productos/all'}>Volver a productos</Link>
                        </button>
                    </div>

                )
            }

        </>

    )
}
export default carrito