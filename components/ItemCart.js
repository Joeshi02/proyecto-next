import Image from "next/image"

const ItemCart = ({item}) => {
 

 
    return (
        <>
            <div className='card mb-2 maxWdt'>
                <div className='row g-0'>
                    <div className='col-md-4'>
                    <Image
                    alt={item.name}
                    src={`/images_limit/${item.img}`}
                    width={250}
                    height={250}
                    />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 >{item.name}</h5>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio unitario: {item.price}</p>
                            <p>Precio: {item.price * item.quantity}</p>
                        </div>

                    </div>
                </div>
            </div>
               
        </>
    )
}

export default ItemCart