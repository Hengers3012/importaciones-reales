"use client";

import { Image, set } from "sanity";
import { useState } from "react";
import { useForm } from "react-hook-form";
import  addProduct  from "@/sanity/lib/addProduct";

interface InventoryProduct {
  id: string;
  name: string;
  image: string;
  images: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  currency: string;
  description: string;
  sku: string;
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string;
  _createdAt: Date;
  slug: string;
  images: Image[];
}

export default function InventoryAddPage() {
  //const [createProduct, setCreateProduct] = useState<InventoryProduct>();
  const [formData, setFormData] = useState<InventoryProduct>({
    id: "",
    name: "",
    image: "",
    images: [],
    categories: [],
    sizes: [],
    colors: [],
    price: 0,
    currency: "",
    description: "",
    sku: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const jsonData = JSON.stringify(formData);

    await addProduct(jsonData);

    console.log(jsonData);
  };

  return (
    <main className="overflow-hidden w-full mt-2 text-center ">
      <h1 className="text-6xl">Crea un Producto!</h1>
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col items-start mx-auto rounded-2xl p-4 space-y-6 w-1/3 border"
      >
        <label className="w-full flex">
          Id:
          <input
            type="text"
            name="id"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Identificador ..."
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          />
        </label>
        <label className="w-full flex">
          Nombre:
          <input
            type="text"
            name="name"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Nombre ..."
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </label>
        <label className="w-full flex">
          SKU:
          <input
            type="text"
            name="sku"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Código SKU ..."
            value={formData.sku}
            onChange={(e) => {
              setFormData({ ...formData, sku: e.target.value });
            }}
          />
        </label>
        <label className="w-full flex">
          Descripción:
          <input
            type="text"
            name="description"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Breve descripción ..."
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
        </label>
        <div className="flex">
          <label className="w-full flex">
            Precio:
            <input
              type="number"
              name="price"
              className="ml-2 mr-6 px-1 text-center text-black w-full rounded-lg"
              placeholder="Costo ..."
              value={formData.price}
              onChange={(e) => {
                setFormData({ ...formData, price: Number(e.target.value) });
              }}
            />
          </label>
          <label className="w-full flex">
            Moneda:
            <select
              className="ml-2 px-1 text-center text-black w-full rounded-lg"
              name="currency"
              value={formData.currency}
              onChange={(e) => {
                setFormData({ ...formData, currency: e.target.value });
              }}
            >
              <option value="DOP" defaultChecked>
                USD
              </option>
              <option value="USD">DOP</option>
              <option value="EUR">EUR</option>
            </select>
          </label>
        </div>
        <label className="w-full flex">
          Sizes:
          <input
            type="text"
            name="sizes"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Separar por coma ..."
            value={formData.sizes}
            onChange={(e) => {
              setFormData({ ...formData, sizes: e.target.value.split(",") });
            }}
          />
        </label>
        <label className="w-full flex">
          Categorías:
          <input
            type="text"
            name="categories"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Separar por coma ..."
            value={formData.categories}
            onChange={(e) => {
              setFormData({
                ...formData,
                categories: e.target.value.split(","),
              });
            }}
          />
        </label>
        <label className="w-full flex">
          Colores:
          <input
            type="text"
            name="colors"
            className="ml-2 px-1 text-center text-black w-full rounded-lg"
            placeholder="Separar por coma ..."
            value={formData.colors}
            onChange={(e) => {
              setFormData({ ...formData, colors: e.target.value.split(",") });
            }}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 py-1 px-4 rounded-2xl mx-auto"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
