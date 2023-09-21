import { InventoryProduct } from "@/app/inventory/add/page";
import { client } from "@/sanity/lib/client";

export default async function uploadProduct(product: InventoryProduct) {
	const details = {
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

	console.log(`Creating product - ${details.name}...`);

	await client
		.create({
			_type: "product",
			...details,
		})
		.catch((error) => {
			console.log("cannot create product:", error.message);
		})
		.then(() => {
			console.log("uploading images...");
			product.images.forEach((image) => {
				client.assets
					.upload("image", image.file, {
						contentType: image.file.type,
						filename: image.file.name,
					})
					.then((asset) => {
						client
							.patch(product._id)
							.setIfMissing({ images: [] })
							.insert("after", "images[-1]", [
								{
									_type: "image",
									asset: {
										_type: "reference",
										_ref: asset._id,
									},
								},
							])
							.commit({ autoGenerateArrayKeys: true });
					})
					.catch((error) => {
						console.log("cannot upload images:", error.message);
					})
					.then(() => {
						console.log("images uploaded!");
					});
			});
		})
		.then(() => {
			console.log("product uploaded successfully");
		});
}
