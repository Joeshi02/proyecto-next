import Image from "next/image"
import { mockData } from "@/data/products";
import Contador from "./Contador";
import Link from "next/link";

const CarritoList = ({open, setOpen}) => {
    
    return(
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/20 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-48' : ''}transition-all w-56 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 flex flex-col items-center`}>
                <div className="flex justify-center m-2 py-7">
                    <button onClick={() => setOpen(false)}>
                      <Image
                    src={"/images_limit/marca-x.png"}
                    alt="icono de cierre"
                    width={20}
                    height={20}
                    className="invert pt-0.5"/> 
                    </button>
                </div>
                <hr/>
                <h3 className="text-center text-2xl">TU CARRITO</h3>
                <hr/>
                <p className="text-center m-5">Tu carrito esta vacio</p>

                <button onClick={() => setOpen(false)} className="relative flex w-full items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">
                    <Link href={'/carrito'}>Ingresar al carrito</Link>
                    </button>
            </aside>
        </div>
    )
}
export default CarritoList