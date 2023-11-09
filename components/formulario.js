import React from "react";

const Formulario = () => {
  return (
    <form className="max-w-sm mx-auto mt-8 ">
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
        />
      </div>
      <div className="mb-4">
        <label htmlFor="direccion" className="block text-sm font-bold mb-2">
          Dirección:
        </label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Escribe tu dirección"
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
        />
      </div>
      <div className="mb-4">
        <input
          type="submit"
          value="Terminar compra"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Formulario;
