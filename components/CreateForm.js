"use client"

import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useState } from "react"
import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "@/app/firebase/config"



const createProuct = async (values, file) => {
    const storageRef = ref(storage, values.id)
    const fileSnapshot = await uploadBytes(storageRef, file)

    const fileUrl = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.id)
    
    return setDoc(docRef, {
        ...values,
        img:fileUrl
    })
    .then(() => console.log("producto agregado"))
}
const CreateForm = () => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        stock: 0,
        price: 0,
        category: '',
        id: 0,
    })
    const [file, setFile] = useState(null)
    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault ()
        await createProuct(values, file)
    }
    return(
        <div className="max-w-sm mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Id:</label>
                    <input
                        type="text"
                        value={values.id}
                        required
                        className="w-full px-3 py-2 border rounded-lg text-black"
                        name="id"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre:</label>
                    <input
                        type="text"
                        value={values.name}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-black"
                        name="name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Precio:</label>
                    <input
                        type="number"
                        value={values.price}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-black"
                        name="price"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Imagen: </label>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="p-2 rounded w-full border border-blue-100 block my-4"
                        /> 
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
                    <input
                        type="number"
                        value={values.stock}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-black"
                        name="stock"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Categoria:</label>
                    <input
                        type="text"
                        value={values.category}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-black"
                        name="category"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
                    <textarea
                        type="text"
                        value={values.description}
                        required
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg text-black"
                        name="description"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer">
                    Enviar
                </button>
            </form>
        </div>

    )
}
export default CreateForm