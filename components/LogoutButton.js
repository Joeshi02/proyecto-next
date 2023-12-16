'use client'
import { useAuthContext } from "./context/AuthContext";

const LogoutButton = () => {
    const {logout} = useAuthContext()
    return(
        <button onClick={logout} className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-red-500 text-slate-300 m-1 text-center"
        >Cerrar sesion</button>
    )
}
export default LogoutButton