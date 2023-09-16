"use client";

import { Image } from "sanity";
import { useState } from "react";
import { useForm } from "react-hook-form";

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
	return (
		<main className="overflow-hidden w-full mt-2 text-center ">
			<h1 className="text-6xl">Crea un Producto!</h1>
			<form
				onSubmit={handleSubmit(createProduct)}
				className="mt-6 flex flex-col items-start mx-auto rounded-2xl p-4 space-y-6 w-1/3 border"
			>
				<label className="w-full flex">
					Id:
					<input
						type="text"
						name="id"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Identificador ..."
					/>
				</label>
				<label className="w-full flex">
					Nombre:
					<input
						type="text"
						name="name"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Nombre ..."
					/>
				</label>
				<label className="w-full flex">
					SKU:
					<input
						type="text"
						name="sku"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Código SKU ..."
					/>
				</label>
				<label className="w-full flex">
					Descripción:
					<input
						type="text"
						name="description"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Breve descripción ..."
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
						/>
					</label>
					<label className="w-full flex">
						Moneda:
						<select
							className="ml-2 px-1 text-center text-black w-full rounded-lg"
							name="currency"
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
					/>
				</label>
				<label className="w-full flex">
					Categorías:
					<input
						type="text"
						name="categories"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Separar por coma ..."
					/>
				</label>
				<label className="w-full flex">
					Colores:
					<input
						type="text"
						name="colors"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Separar por coma ..."
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
