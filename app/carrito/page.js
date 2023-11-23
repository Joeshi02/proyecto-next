"use client"
import ItemCart from "@/components/ItemCarrito"
import { CartContext } from "@/components/context/CartContext"
import Formulario from "@/components/formulario"
import Link from "next/link"
import { useContext } from "react"


const Carrito = () => {
    const { cartList, clear, getTotal } = useContext(CartContext);

    return (
        <>
            {cartList.length !== 0 ? (
                <div className="container m-auto">
                    <h2 className="text-4xl">Tu carrito</h2>
                    {cartList.map((e) => <ItemCart key={e.id} product={e} />)}
                    <div>
                        <p>{`Total: $ ${getTotal()}`}</p>
                        <button onClick={clear}>Vaciar carrito</button>
                    </div>
                    <Formulario />
                </div>
            ) : (
                <div className="container m-auto">
                    <h3>El carrito está vacío</h3>
                </div>
            )}

            <div className="justify-items-start container m-auto">
                <button className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">
                    <Link href={'/'}>Volver a inicio</Link>
                </button>
            </div>
        </>
    );
};

export default Carrito;
