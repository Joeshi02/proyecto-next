import BtnVolver from "@/components/Boton"
import EditForm from "@/components/EditForm"


const EditPage = async ({params}) => {
    const {id} = params
    const item = await fetch(`http://localhost:3000/api/productos/detalle/${id}`, {
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