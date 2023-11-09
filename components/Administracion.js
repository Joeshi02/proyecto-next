"use client"
import React, { useState } from 'react';
import { mockData } from '@/data/products';

const ProductTable = () => {
  const [products, setProducts] = useState(mockData);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">${product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.stock}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-red-500 hover:text-red-700 cursor-pointer"
                  onClick={() => handleDelete(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
