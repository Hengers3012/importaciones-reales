"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { InventoryProduct } from "@/lib/interfaces";

export default function InventorySearchPage() {
	const [search, setSearch] = useState("");
	const [products, setProducts] = useState<InventoryProduct[]>();

	useEffect(() => {}, [search]);
	useEffect(() => {
		products?.forEach((product) => {
			console.log(product.name);
		});
	}, [products]);

	const productClickHandler = (e: any) => {
		console.log(e.target.innerText);
	};

	return (
		<main className="overflow-y-auto w-full mt-2 text-center h-[calc(100vh-64px)] flex flex-col">
			<h1 className="text-6xl">Busca un Producto!</h1>
			<input
				type="text"
				className="w-[50%] h-12 text-black text-center rounded-2xl my-10 mx-auto"
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
		</main>
	);
}
