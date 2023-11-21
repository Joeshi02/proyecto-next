import ProductsCard from "@/components/ProductsCard"



export async function generateMetadata({ params }) {
    return {
        title: `Limit import - ${params.categoria}`
    }
}

const productos = async ({ params }) => {
    const {categoria} = params
    const items = await fetch(`http://localhost:3000/api/productos/${categoria}`,
        { cache: 'no-cache' }
    ).then(r => r.json())


    return (
        <>
            <div className="container m-auto ">

                <h2 className="text-3xl">Productos</h2>
                <hr className="p-3" />
                <section className=" flex justify-center items-center gap-5 flex-wrap">
                    {items.map(product => <ProductsCard key={product.id} item={product} />)}

                </section>
            </div>
        </>

    )
}

export default productos