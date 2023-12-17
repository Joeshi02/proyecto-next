'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductTable = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/productos/all`, {
          cache: 'no-store',
        });

        if (response.ok) {
          const data = await response.json();
          setItems(data);
        } else {
          console.error('Error fetching data from API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="py-2 px-4 border-b">Id</th>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Categoría</th>
              <th className="py-2 px-4 border-b">Stock</th>
              <th className="py-2 px-4 border-b">Img</th>
              <th className="py-2 px-4 border-b">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">{product.id}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.price}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.stock}</td>
                <td className="py-2 px-4">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={180}
                    height={180}
                    className='bg-white'
                  />
                </td>
                <td className="py-2 px-4">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
