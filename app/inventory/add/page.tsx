/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import uploadProduct from "@/sanity/lib/uploadProduct";

interface ImageFile {
	file: File;
	url: string;
}

export interface InventoryProduct {
	_id: string;
	name: string;
	categories: string[];
	sizes: string[];
	colors: string[];
	price: number;
	currency: string;
	description: string;
	sku: string;
	images: ImageFile[];
}

export default function InventoryAddPage() {
	const [productDetails, setProductDetails] = useState<InventoryProduct>({
		_id: "",
		name: "",
		categories: [],
		sizes: [],
		colors: [],
		price: 0,
		currency: "",
		description: "",
		sku: "",
		images: [],
	});

	const [imgDelButton, setImgDelButton] = useState(false);

	useEffect(() => {
		console.log(productDetails);
	}, [productDetails]);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		if (!event.target.files) return;

		Array.from(event.target.files).forEach((file) => {
			setProductDetails({
				...productDetails,
				images: [
					...productDetails.images,
					{ file, url: URL.createObjectURL(file) },
				],
			});
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		await uploadProduct(productDetails);
	};

	return (
		<main className="overflow-y-auto w-full mt-2 text-center h-[calc(100vh-64px)]">
			<h1 className="text-6xl">Crea un Producto!</h1>
			<form
				onSubmit={handleSubmit}
				className="mt-6 flex flex-col items-start mx-auto rounded-2xl p-4 space-y-6 w-[50%] border"
			>
				<label className="w-full flex">
					Id:
					<input
						type="text"
						name="id"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Identificador ..."
						value={productDetails._id}
						onChange={(e) =>
							setProductDetails({
								...productDetails,
								_id: e.target.value,
							})
						}
					/>
				</label>
				<label className="w-full flex">
					Nombre:
					<input
						type="text"
						name="name"
						className="ml-2 px-1 text-center text-black w-full rounded-lg"
						placeholder="Nombre ..."
						value={productDetails.name}
						onChange={(e) => {
							setProductDetails({
								...productDetails,
								name: e.target.value,
							});
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
						value={productDetails.sku}
						onChange={(e) => {
							setProductDetails({
								...productDetails,
								sku: e.target.value,
							});
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
						value={productDetails.description}
						onChange={(e) => {
							setProductDetails({
								...productDetails,
								description: e.target.value,
							});
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
							value={productDetails.price}
							onChange={(e) => {
								setProductDetails({
									...productDetails,
									price: Number(e.target.value),
								});
							}}
						/>
					</label>
					<label className="w-full flex">
						Moneda:
						<select
							className="ml-2 px-1 text-center text-black w-full rounded-lg"
							name="currency"
							value={
								productDetails.currency !== ""
									? productDetails.currency
									: ""
							}
							onChange={(e) => {
								setProductDetails({
									...productDetails,
									currency: e.target.value,
								});
							}}
						>
							<option value="" disabled hidden>
								Seleccionar...
							</option>
							<option value="DOP">DOP</option>
							<option value="USD">USD</option>
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
						value={productDetails.sizes}
						onChange={(e) => {
							setProductDetails({
								...productDetails,
								sizes: e.target.value.split(","),
							});
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
						value={productDetails.categories}
						onChange={(e) => {
							setProductDetails({
								...productDetails,
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
						value={productDetails.colors}
						onChange={(e) => {
							setProductDetails({
								...productDetails,
								colors: e.target.value.split(","),
							});
						}}
					/>
				</label>

				<div className="input-wrapper flex flex-col border rounded p-2 mx-auto w-full">
					<label className="mb-1">Imagen:</label>

					{productDetails.images && (
						<div className="image-preview m-4">
							<Carousel>
								{productDetails.images.map((image, index) => (
									<div
										key={index}
										className="relative"
										onMouseEnter={() =>
											setImgDelButton(true)
										}
										onMouseLeave={() =>
											setImgDelButton(false)
										}
									>
										<input
											id={`delImgBtn-${index}`}
											className={`z-100 absolute top-4 right-10 w-6 h-6 rounded-full font-bold bg-red-400 transition-all delay-150 duration-300 hover:scale-125 hover:cursor-pointer ${
												imgDelButton
													? "opacity-100"
													: "opacity-0"
											}`}
											type="button"
											value="X"
											onMouseOver={(e) => {
												document.getElementById(
													`delImgBtn-${index}`
												)!.style.boxShadow =
													"0 0 0 2px yellow";
											}}
											onMouseLeave={(e) => {
												document.getElementById(
													`delImgBtn-${index}`
												)!.style.boxShadow =
													"0 0 0 0 yellow";
											}}
											onChange={handleImageChange}
											onClick={() => {
												setProductDetails({
													...productDetails,
													images: productDetails.images.filter(
														(img, i) => i !== index
													),
												});
											}}
										/>
										<img
											src={image.url}
											alt={`Vista previa ${index + 1}`}
											className="object-cover w-full h-full"
										/>
									</div>
								))}
							</Carousel>
						</div>
					)}

					<div className="flex flex-row justify-center">
						<div className="flex items-center gap-2 mr-2">
							<input
								type="file"
								accept=".jpg, .jpeg, .png, .gif"
								onChange={handleImageChange}
								className="hidden"
								id="imageUrl"
								multiple
							/>
							<label
								htmlFor="imageUrl"
								className="cursor-pointer bg-black text-white px-4 py-2 rounded-lg hover:bg-[#FFD700] hover:text-gray-900 transition duration-300"
							>
								Seleccionar Imagen
							</label>
						</div>
					</div>
				</div>

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
