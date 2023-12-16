'use client'

import { db } from "@/app/firebase/config";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { useCartContext } from "./context/CartContex";
import { useState } from "react";
import Link from "next/link";


const createOrder = async (values, items, setOrderId) => {
  const order = {
    client: values,
    items: items.map((item) => ({
      name: item.name,
      price: item.price,
      id: item.id,
      quantity: item.quantity,
    })),
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();
  const orderRef = doc(db, "ordenes", String(docId));
  await setDoc(orderRef, order);

  setOrderId(docId);
};

const FormCheckout = () => {
  const { cartList, clear } = useCartContext();
  const [values, setValues] = useState({
    email: "",
    direccion: "",
    nombre: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder(values, cartList, setOrderId);
  };

  if (orderId) {
    return (
      <div className="check min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center mb-4">
          Gracias por su compra, el ID de tu compra es:
        </h2>
        <span className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4">
          {orderId}
        </span>
        <Link href="/">
          <button
            onClick={clear}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Volver a la tienda
          </button>
        </Link>
      </div>
    );
  }


  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8 ">
      <div className="mb-4">
        <input
          type="nombre"
          required
          name="nombre"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="direccion"
          required
          name="direccion"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Escribe tu dirección"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          required
          name="email"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Escribe tu email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <button type="submit" className="relative w-32 h-10 flex items-center justify-center border border-zinc-700 rounded-lg bg-blue-900 text-slate-300 m-1">
          Terminar mi compra</button>
      </div>
    </form>
  );
};

export default FormCheckout;
