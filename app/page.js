import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="pb-2">
        <h1 className="text-4xl text-center py-2">LIMIT IMPORT</h1>
        <div className="container mx-auto flex flex-wrap items-center justify-around">
        <div className="w-full lg:w-1/2 lg:px-4">
          <Image
            src={"/images_limit/auto-portada.jpeg"}
            alt="auto principal"
            width={600}
            height={700}
          />
        </div>
        <div className="w-full lg:w-1/2 lg:px-4">
        <h3 className="text-lg lg:text-2xl py-2">En Limit Import nos dedicamos a la comercialización de repuestos y vehículos directamente traídos desde Japón y USA para acompañar a nuestros clientes en sus proyectos y sus vehículos del día a día.</h3>
        </div>
        </div>
      </main>
    </>
    
    
    
    
  )
}
