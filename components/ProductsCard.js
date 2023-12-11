import Link from "next/link"

const { default: Image } = require("next/image")


const ProductsCard = ({item}) => {
    return(
        <Link href={`/productos/product/${item.id}`}>
        <article className="basis-72 border border-black rounded-xl bg-white text-black flex justify-center items-center">
            <div className="text-center">
                <Image
                alt={item.name}
                src={item.img}
                width={250}
                height={250}
                />
                <div className="px-4 border-t border-gray-500">
                    <h3 className="text-sm my-4">{item.name}</h3>
                    <p className="text-2xl font-semibold">${item.price}</p>
                </div>
            </div>
        </article>
        </Link>
        

    )
}
export default ProductsCard