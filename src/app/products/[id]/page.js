// import React, {  useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";

// import axios from "axios";

export default async function ProductDetails({params}) {
 const {id}=await params
 console.log(id)

  const data = await fetch(`http://localhost:5000/products/${id}`)

  const product = await data.json()
  console.log(product)
 
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/products/${id}`)
  //     .then(res => setProduct(res.data))
  //     .catch(err => console.error(err));
  // }, [id]); 

  // if (!product) return <p className="mt-10 text-center">Loading...</p>;

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
