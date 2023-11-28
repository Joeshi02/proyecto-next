import BtnVolver from "@/components/Boton";

export default function NotFound () {
    
    return(
    <>
    <main className=" flex flex-col justify-center items-center">
        <div className="text-center">
            <h1 className="text-4xl text-red-600 pt-6">Página no encontrada</h1>
            <hr className="ml-10" />
            <p className="text-2xl">Lo sentimos, pero la página que buscabas no existe.</p>
        </div>
        <div className="relative m-3">
        <div className="absolute -inset-2 rounded-lg bg-gradient-to-bl from-sky-600 via-indigo-600 to-cyan-600 opacity-50 blur-2xl"></div>
        <BtnVolver/>
        </div>
    </main>
  
</>
    )
}


