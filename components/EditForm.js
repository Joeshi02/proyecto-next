'use client'

import { useState } from "react";
import { db } from "@/app/firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const updateProduct = async (id, values) => {
  const docRef = doc(db, "productos", id);

  return updateDoc(docRef, {
    name: values.name,
    description: values.description,
    stock: Number(values.stock),
    price: Number(values.price),
    category: values.category,
  }).then(() => console.log("Producto actualizado correctamente"));
};

const EditProduct = ({ item }) => {
  const { name, description, stock, price, category, img } = item;
  const [values, setValues] = useState({
    name,
    description,
    stock,
    price,
    category,
    img,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(item.id, values);
  };

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Nombre: </label>
        <input
          type="name"
          value={values.name}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="name"
          onChange={handleChange}
        />
        <label>Precio: </label>
        <input
          type="price"
          value={values.price}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="price"
          onChange={handleChange}
        />
        <label>Stock: </label>
        <input
          type="stock"
          value={values.stock}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="stock"
          onChange={handleChange}
        />
        <label>Categoria: </label>
        <input
          type="category"
          value={values.category}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="category"
          onChange={handleChange}
        />
        <label>Descripción: </label>
        <textarea
          value={values.description}
          className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
          name="description"
          onChange={handleChange}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer"
          type="submit"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
