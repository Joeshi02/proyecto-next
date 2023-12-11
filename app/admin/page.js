import ProductTable from "@/components/Administracion"
import Link from "next/link"


const admin = () => {
    return(
        <div className="container m-auto">
            <h1 className="text-4xl text-center">Esta es la pagina de administracion</h1>
            <Link href={'/admin/create'} className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1 text-center "> Ingresar producto </Link>
            <ProductTable/>
        </div>
    )
}
export default admin