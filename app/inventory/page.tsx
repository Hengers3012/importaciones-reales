import Link from "next/link";

export default function InventoryPage() {
	return (
		<main className="overflow-hidden mt-40 flex items-center justify-evenly">
			<Link href={"/inventory/search"}>
				<button className="border py-2 px-4 rounded-xl text-2xl font-bold">
					SEARCH
				</button>
			</Link>
			<Link href={"/inventory/add"}>
				<button className="border py-2 px-4 rounded-xl text-2xl font-bold">
					ADD
				</button>
			</Link>
			<Link href={"/inventory/add"}>
				<button className="border py-2 px-4 rounded-xl text-2xl font-bold">
					DELETE
				</button>
			</Link>
		</main>
	);
}
