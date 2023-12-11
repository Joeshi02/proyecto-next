import BtnVolver from "@/components/Boton"

const { default: CreateForm } = require("@/components/CreateForm")

const CreatePage = async () => {
    return (
        <div className="container m-auto">
            <BtnVolver/>
            <CreateForm/>
        </div>
    )
}
export default CreatePage