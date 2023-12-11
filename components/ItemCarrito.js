
import Image from "next/image";
import { useCartContext } from "./context/CartContex";

const ItemCart = ({ item }) => {
  const { removeItem } = useCartContext()
  const handleRemove = () => {
    removeItem(item.id)
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-2 max-w-full">
      <div className="flex items-center">
        <div className="w-1/3">
          <Image
            src={item.img}
            alt={item.name}
            width={500}
            height={500} />
        </div>
        <div className="w-2/3 ml-4">
          <div className="flex flex-col text-black">
            <h5 className="text-xl mb-2">{item.name}</h5>
            <p className="mb-2">Cantidad: {item.quantity}</p>
            <p className="mb-2">Precio unitario: ${item.price}</p>
            <p className="mb-2">Precio total: ${item.price * item.quantity}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
              onClick={() => handleRemove(item.id)}>
              Eliminar producto
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ItemCart;
