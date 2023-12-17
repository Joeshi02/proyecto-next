import BtnVolver from "@/components/Boton"
import EditForm from "@/components/EditForm"


const EditPage = async ({params}) => {
    const {id} = params
    const item = await fetch(`http:${process.env.NEXT_PUBLIC_URL}/api/productos/detalle/${id}`, {
        cache: 'no-store'
    }).then(res => res.json())
    
    return(
        <div className="container m-auto"> 
            <BtnVolver/>
            <EditForm item={item}/>
        </div>
    )
}
export default EditPage