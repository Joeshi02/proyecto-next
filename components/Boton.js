"use client";
import { useCartContext } from "./context/CartContex";


const BtnEliminar = (item) => {
  const removeItem = useCartContext()

  return (
    <button onClick={() => removeItem(item.id)}>
      Eliminar producto
    </button>
  );
};

export default BtnEliminar;
