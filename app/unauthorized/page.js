import BtnVolver from "@/components/Boton"

const unauthorized = () => {
    return (
        <div className="container m-auto">
            <BtnVolver/>
            <h2 className="text-center text-3xl">Usuario no autorizado</h2>
        </div>
    )
}
export default unauthorized