import { client } from "@/sanity/lib/client";

export default async function addProduct(product: {}) {

	
console.log(product)

	const {
		_id,
		name,
		image,
		images,
		categories,
		sizes,
		colors,
		price,
		currency,
		description,
		sku,
	} = JSON.parse(product.toString());



	try {
		await client.create({
			_type: "product",
			_id,
			name,
			image,
			images,
			categories,
			sizes,
			colors,
			price,
			currency,
			description,
			sku,
		});
	} catch (err) {
		console.error(err);
		
	}
}
