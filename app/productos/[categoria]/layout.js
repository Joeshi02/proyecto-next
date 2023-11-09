import Link from "next/link"



const layoutProducts = ({ children }) => {
    return (
      <div className="container mx-auto">
        <nav className="flex flex-col md:flex-row gap-2 py-2">
          <button className="rounded bg-blue-900 p-2"><Link href="/productos/all">Todos</Link> </button>
          <button className="rounded bg-blue-900 p-2"><Link href="/productos/motores">Motores</Link> </button>
          <button className="rounded bg-blue-900 p-2"><Link href="/productos/suspenciones">Suspensiones</Link> </button>
          <button className="rounded bg-blue-900 p-2"><Link href="/productos/volantes">Volantes</Link> </button>
        </nav>
  
        {children}
      </div>
    );
  };
  
  export default layoutProducts;
  