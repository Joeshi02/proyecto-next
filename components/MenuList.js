"use client"
import Image from "next/image"
import Link from "next/link"

const links = [
    {
        label:"Inicio",
        href: "/"
    },
    {
        label:"Productos",
        href: "/productos/all"
    },
    {
        label:"Contacto",
        href:"/contacto"
    }
]

const MenuList = ({open, setOpen}) =>{
    return(
        <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/20 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-48' : ''}transition-all w-56 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900`}>
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
                <nav onClick={() => setOpen(false)} className="flex flex-col m-4 font-medium flex items-center letrasLimit">
                    {
                        links.map(link =>{
                            return <Link 
                            key = {link.label}
                            href = {link.href}
                            className={'text-base text-salte-100 p-3'}
                            >
                                {link.label}
                            </Link>
                        })
                    }
                </nav>
            </aside>
            
        </div>
    )
}
export default MenuList