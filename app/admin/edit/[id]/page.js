import EditForm from "@/components/EditForm"


const EditPage = async ({params}) => {
    const {id} = params
    const item = await fetch(`http://localhost:3000/api/productos/detalle/${id}`, {
        cache: 'no-store'
    }).then(res => res.json())
    
    return(
        <div>
            <EditForm item={item}/>
        </div>
    )
}
export default EditPage