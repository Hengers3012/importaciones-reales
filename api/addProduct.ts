import { client } from "@/sanity/lib/client";

export default async function addProduct(req, res) {
	const {
		lender,
		amountFunded,
		balance,
		dateFunded,
		frequency,
		numberOfPayments,
		payback,
		status,
	} = JSON.parse(req.body);

	try {
		await client.create({
			_type: "debt",
			lender,
			amountFunded,
			balance,
			dateFunded,
			frequency,
			numberOfPayments,
			payback,
			status,
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "Couldn't submit debt", err });
	}

	return res
		.status(200)
		.json({ message: `Debt ${res._id} has been created` });
}
