
export default async function ProductDetails({params}) {
 const {id}=await params
 console.log(id)

  const data = await fetch(`https://product-selling-backend.vercel.app/products/${id}`)

  const product = await data.json()
  console.log(product)
 
// ghzxdc

  return (
    <div className="max-w-3xl p-6 mx-auto">
      <img className="object-cover w-full rounded-lg h-96" src={product.image} alt={product.name} />
      <h1 className="my-4 text-3xl font-bold">{product.name}</h1>
      <p className="mb-2 text-lg text-gray-700">Price: ${product.price}</p>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
}
