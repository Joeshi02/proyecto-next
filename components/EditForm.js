'use client'

import { useState } from "react";
import { db, storage } from "@/app/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const updateProduct = async (id, values, file) => {
  let fileUrl = values.img;

  if (file) {
    try {
      const storageRef = ref(storage, `productos/${id}`);
      const fileSnapshot = await uploadBytes(storageRef, file);
      fileUrl = await getDownloadURL(fileSnapshot.ref);
    } catch (error) {
      console.error("Error al obtener la URL de descarga:", error);
    }
  }
  const productRef = doc(db, "productos", id);

  return setDoc(productRef, {
    name: values.name,
    description: values.description,
    category: values.category,
    stock: Number(values.stock),
    price: Number(values.price),
    img: fileUrl,
  })
    .then(() => console.log("Producto modificado correctamente"))
    .catch((error) => console.error("Error al modificar el producto:", error));
};

const EditForm = ({ item }) => {
  const { name, description, stock, price, category, img } = item;
  const [values, setValues] = useState({ name, description, stock, price, category, img });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(item.id, values, file);
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
        <label>Imagen:</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="p-2 rounded w-full border border-blue-100 block my-4"
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
          Enviar
        </button>
      </form>
    </div>
  );
};

export default EditForm;

