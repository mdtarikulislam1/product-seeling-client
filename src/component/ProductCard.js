import React from "react";
import { Heart, Eye, ShoppingCart,  } from "lucide-react";
import { HatGlasses } from 'lucide-react';

export default function ProductCard({ d}) {
  const { name, price, image,_id } = d;

  console.log(_id)
  return (
    <div className="p-4 bg-gray-100 w-70">
        <div>
            <img className="mx-auto w-50 h-50" src={image}></img>
            <div>
               <div className="flex items-center justify-between my-4">
                 <p className="text-lg font-semibold text-gray-800">{name}</p>
                 <p className="text-gray-700">$ {price}</p>
               </div>
               <div className="flex items-center justify-between">
                <button className="px-4 py-2 bg-white rounded-sm"><a href={`/products/${_id}`}>Details</a></button>
                <button className="px-4 py-2 bg-white rounded-sm"><span className="flex items-center justify-center cursor-pointer"><HatGlasses  size={20}/> Buy Now</span></button>
               </div>
            </div>
        </div>
    </div>
  );
}
