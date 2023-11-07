export async function generateMetadata ({params}){
    return {
        title: `Limit import - ${params.categoria}`
    }
}

const productos = ({params}) => {
    return(
        <div className="container m-auto">
            estas viendo {params.categoria}
        </div>
    )
}

export default productos