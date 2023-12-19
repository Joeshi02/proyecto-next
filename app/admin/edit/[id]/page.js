import BtnVolver from "@/components/Boton"
import EditProduct from "@/components/EditForm"


const EditPage = async ({params}) => {
    const {id} = params
    const item = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/productos/detalle/${id}`, {
        cache: 'no-store'
    }).then(res => res.json())
    
    return(
        <div className="container m-auto"> 
            <BtnVolver/>
            <EditProduct item={item}/>
        </div>
    )
}
export default EditPage