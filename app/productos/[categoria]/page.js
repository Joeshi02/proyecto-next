import ProductsCard from "@/components/ProductsCard"
import { mockData } from "@/data/products"


export async function generateMetadata ({params}){
    return {
        title: `Limit import - ${params.categoria}`
    }
}

const productos = ({params}) => {

    const {categoria} = params
    const items = categoria === "all"
        ? mockData
        :mockData.filter(product => product.category === categoria)

    return(
        <>
        <div className="container m-auto ">
            
            <h2 className="text-3xl">Productos</h2>
            <hr className="p-3"/>
            <section className=" flex justify-center items-center gap-5 flex-wrap">
            {items.map(product => <ProductsCard key={product.id} item={product}/>) }

            </section>
        </div>
        </>
        
    )
}

export default productos