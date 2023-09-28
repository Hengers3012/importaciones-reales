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
