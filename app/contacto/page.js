"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const contacto = () => {
   const router = useRouter()
    return (
        <>
        <main className="container m-auto flex justify-center">
            <div>
                <Image
                src={"/images_limit/SITIO-EN-CONSTRUCCION.jpg"}
                alt="sitio en construccion"
                width={400}
                height={400}/>
                <button onClick={() => router.back()} className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">
                Volver
                </button>
            </div>
        </main>
        </>
    )
}

export default contacto