import Image from 'next/image';
import Link from 'next/link';

const ProductTable = async () => {
  const items = await fetch(`http:${process.env.NEXT_PUBLIC_URL}/api/productos/all`, {
    cache: 'no-store',
  }).then(r => r.json());


  return (
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
        <th className="py-2 px-4 border-b">Acciones</th>
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
          <td className="py-2 px-4">
            <Link href={`/admin/edit/${product.id}`}>
              <Image 
                src={'/images_limit/edit.png'}
                alt='png edit'
                width={25}
                height={25}
              />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ProductTable;
