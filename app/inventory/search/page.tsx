"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { InventoryProduct } from "@/lib/interfaces";

export default function InventorySearchPage() {
	const [search, setSearch] = useState("");
	const [products, setProducts] = useState<InventoryProduct[]>();
	const [productBox, setProductBox] = useState(false);

	useEffect(() => {}, [search]);
	useEffect(() => {
		products?.forEach((product) => {
			console.log(product.name);
		});
	}, [products]);

	const productClickHandler = (e: any) => {
		console.log(
			products?.filter((product) => product._id === e.target.id)[0]
		);
		setProductBox(true);
	};

	return (
		<main className="overflow-y-auto w-full mt-2 text-center h-[calc(100vh-64px)] flex flex-col">
			<h1 className="text-6xl">Busca un Producto!</h1>
			<input
				type="text"
				className="w-[50%] h-12 text-black dark:text-white text-center rounded-2xl my-10 mx-auto border-2 bg-white dark:bg-black border-black dark:border-white"
				value={search}
				placeholder="Buscar..."
				onChange={async (e) => {
					setSearch(e.target.value);
					e.target.value !== ""
						? await client
								.fetch(
									`*[_type == "product" && name match "${e.target.value}*"]`
								)
								.then((data) => {
									setProducts(data);
								})
						: setProducts([]);
				}}
			/>
			<div className="h-full w-full flex justify-evenly">
				<ul>
					{products?.map((product, index) => {
						return (
							<li
								key={index}
								id={product._id}
								className="w-full border border-white rounded-xl p-2 my-2 text-justify cursor-pointer hover:bg-white hover:text-black"
								onClick={productClickHandler}
							>
								{" "}
								* {product.name}
							</li>
						);
					})}
				</ul>
			</div>
			<div
				className={`w-3/6 h-3/5 border border-white bg-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
					productBox ? "visible" : "invisible"
				}`}
			>
				<button
					className="absolute top-4 right-4 w-6 h-6 rounded-full font-bold bg-red-400 hover:scale-125 hover:cursor-pointer"
					onClick={() => setProductBox(false)}
				>
					X
				</button>
			</div>
		</main>
	);
}
