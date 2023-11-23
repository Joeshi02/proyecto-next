import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Image from "next/image";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-2 max-w-full">
      <div className="flex items-center">
        <div className="w-1/3">
          <Image 
          src={`/images_limit/${product.img}`} 
          alt={product.name} 
          width={500} 
          height={500} />
        </div>
        <div className="w-2/3 ml-4">
          <div className="flex flex-col text-black">
            <h5 className="text-xl mb-2">{product.name}</h5>
            <p className="mb-2">Cantidad: {product.quantity}</p>
            <p className="mb-2">Precio unitario: {product.price}</p>
            <p className="mb-2">Precio: {product.price * product.quantity}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md"
              onClick={() => removeItem(product.id)}
            >
              Eliminar Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
