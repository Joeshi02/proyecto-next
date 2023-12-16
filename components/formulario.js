'use client'

import { db } from "@/app/firebase/config";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";

const createConsulta = async (values, setConsultaId) => {
  const consulta = {
    nombre: values.nombre,
    email: values.email,
    consulta: values.consulta,
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();
  const consultaRef = doc(db, "consultas", String(docId));
  await setDoc(consultaRef, consulta);

  setConsultaId(docId);
};

const Formulario = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    consulta: "",
  });
  const [consultaId, setConsultaId] = useState(null);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createConsulta(values, setConsultaId);
  };

  if (consultaId) {
    return (
      <div className="container m-auto check min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center mb-4">
          Gracias por tu consulta, el ID de tu consulta es:
        </h2>
        <span className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4">
          {consultaId}
        </span>
        <Link href="/">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Volver a inicio
          </button>
        </Link>
      </div>
    );
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-bold mb-2">
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Escribe tu email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="consulta" className="block text-sm font-bold mb-2">
          Consulta:
        </label>
        <input
          type="text"
          id="consulta"
          name="consulta"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Realiza tu consulta"
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="submit"
          value="Realizar consulta"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Formulario;
