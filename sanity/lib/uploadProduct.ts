import { InventoryProduct } from "@/app/inventory/add/page";
import { client } from "@/sanity/lib/client";

export default async function uploadProduct(product: InventoryProduct) {
	console.log("uploading product", product);

	const temp = {
		_id: product._id,
		name: product.name,
		categories: product.categories,
		sizes: product.sizes,
		colors: product.colors,
		price: product.price,
		currency: product.currency,
		description: product.description,
		sku: product.sku,
	};

	// const productJSON = JSON.stringify(temp);

	console.log("creating product...");

	await client
		.create({
			_type: "product",
			...temp,
		})
		.catch((err) => {
			console.error(err);
		})
		.then(() => {
			console.log("uploading images...");
		})
		.then(() => {
			product.images.forEach((image) => {
				client
					.patch(product._id)
					.setIfMissing({ images: [] })
					// Add the items after the last item in the array (append)
					.insert("after", "images[-1]", [
						{
							_type: "image",
							asset: {
								_type: "reference",
								_ref: image._id,
							},
						},
					])
					.commit({ autoGenerateArrayKeys: true });
			});
		})
		.then(() => {
			console.log("product uploaded successfully");
		});
}
