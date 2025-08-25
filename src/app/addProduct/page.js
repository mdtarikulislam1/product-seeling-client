"use client";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddProductForm() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState(null);
  const formRef = useRef(null); // useRef দিয়ে ফর্ম রেফারেন্স

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const email = session?.user?.email || "";

    const data = { name, category, image, price, description, email };
    setFormData(data);
  };

  useEffect(() => {
    if (!formData) return;

    axios
      .post("https://product-selling-backend.vercel.app/addProduct", formData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Product added successfully!",
        });

        formRef.current?.reset();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add product!",
        });
        console.error(err);
      });
  }, [formData]);

  return (
    <div className="max-w-lg p-8 mx-auto my-10 bg-white shadow-lg rounded-2xl">
      <h2 className="mb-6 text-2xl font-semibold text-center">Add a Product</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          required
          className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-0"
        />

        <select
          name="category"
          required
          className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-0"
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="home">Home</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          required
          className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-0"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          required
          className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-0"
        />

        <input
          type="email"
          value={session?.user?.email || ""}
          readOnly
          className="w-full px-4 py-3 bg-gray-100 border outline-none cursor-not-allowed rounded-xl focus:ring-0"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows="4"
          required
          className="w-full px-4 py-3 border outline-none rounded-xl focus:ring-0"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 text-white bg-black rounded-xl hover:opacity-90"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
