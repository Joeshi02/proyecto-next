import Image from "next/image"
import Cantidad from "@/components/Cantidad"
import BtnVolver from "@/components/Boton"

const Detail = async ({ params }) => {

 
  const { id } = params
  const product = await fetch (`${process.env.NEXT_PUBLIC_URL}/api/productos/detalle/${id}`,
    { cache: 'no-store' }
  ).then(r => r.json());

  return (
    <div className="container m-auto">
      <BtnVolver/>
      <article className="flex flex-wrap justify-center items-center bg-white h-full">
        <div className="w-full sm:w-1/2 p-2">
          <div className="relative" style={{ paddingTop: '100%' }}>
            <Image
              src={product.img}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-2">
          <div className="flex flex-col m-2 text-black border border-gray-600 h-full items-center">
            <h2 className="p-1 text-xl">{product.name}</h2>
            <h3 className="p-1">{product.description}</h3>
            <p className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">Stock: {product.stock}</p>
            <p className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">${product.price}</p>
            <Cantidad item={product} />
          </div>
        </div>
      </article>
    </div>


  )
}

export default Detail