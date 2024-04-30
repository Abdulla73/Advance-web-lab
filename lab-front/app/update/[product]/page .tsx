"use client"
import axios from "axios";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";

export default function Update({
  params,
}: {
  params: { productID: string };
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/${params.productID}`
      );
      const data = response.data;
      setTitle(data.Product_name);
      setDescription(data.Product_description);
      setImage(data.Product_image);
      setPrice(data.Price);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    }
  }

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!title || !description || !image || !price) {
      setError("All fields are required");
    } else {
      try {
        await updateData();
        setError("Product updated successfully");
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  async function updateData() {
    try {
      const updatedProduct = {
        Product_name: title,
        Product_description: description,
        Product_image: image,
        Price: parseFloat(price),
      };

      await axios.put(
        `http://localhost:3000/products/${params.productID}`,
        updatedProduct
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="py-40 px-40">
      <h3 className="mb-10">Update Product</h3>
      <form onSubmit={handleSubmit}>
        <label className="block mb-3" htmlFor="title">
          Product Title
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <label className="block mb-3" htmlFor="description">
          Product Description
        </label>
        <textarea
          className="py-2 px-3 mb-5 w-1/2 text-black"
          name="description"
          id="description"
          value={description}
          onChange={handleDescription}
        />
        <label className="block mb-3" htmlFor="price">
          Product Price
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          name="price"
          id="price"
          value={price}
          onChange={handlePrice}
        />
        <label className="block mb-3" htmlFor="image">
          Image Url
        </label>
        <input
          className="py-2 px-3 mb-5 w-1/2 text-black"
          type="text"
          name="image"
          id="image"
          value={image}
          onChange={handleImage}
        />

        {error && <p>{error}</p>}
        <button
          className="block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
}
