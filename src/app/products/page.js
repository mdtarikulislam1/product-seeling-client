'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../component/ProductCard";

export default function Products() {

const [data,setData]=useState([])

useEffect(()=>{
  axios.get('http://localhost:5000/products')
  .then(res=>{
  setData(res?.data)
  })
},[])
console.log(data)
  return (
    <div className="mx-auto my-10 max-w-11/12">
      <h1 className="my-10 text-3xl font-bold text-center">Chose and Buy</h1>
     <div className="flex flex-wrap items-center justify-center gap-2">
      {
        data.map((d,index)=> <ProductCard key={index} d={d}></ProductCard>)
      }
     </div>
    </div>
  );
}
