"use client";
import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { Edit, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLogo } from "@/components/nav-logo";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
	const pathname = usePathname();

	const [activeLink, setActiveLink] = useState("main");

	if (pathname.startsWith("/sanity-studio")) return null;

	return (
		<header className="relative top-0 w-full  z-30 bg-white-500 transition-all pt-4">
			<div className="mx-auto flex h-16 w-full items-center justify-between space-x-4 px-6 sm:space-x-0">
				<NavLogo />
				<nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
					<Link
						href={"/"}
						className={
							"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
							(activeLink === "main"
								? " text-orange-500 animation-active "
								: " text-black-500 hover:text-orange-500")
						}
						onClick={() => {
							setActiveLink("main");
						}}
					>
						Principal
					</Link>

					<Link
						href={"/inventory"}
						className={
							"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
							(activeLink === "inventory"
								? " text-orange-500 animation-active "
								: " text-black-500 hover:text-orange-500")
						}
						onClick={() => {
							setActiveLink("inventory");
						}}
					>
						Inventario
					</Link>

					<Link
						href={"/pricing"}
						className={
							"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
							(activeLink === "pricing"
								? " text-orange-500 animation-active "
								: " text-black-500 hover:text-orange-500")
						}
						onClick={() => {
							setActiveLink("pricing");
						}}
					>
						Cotizaciones
					</Link>
				</nav>

				<div className="font-medium flex justify-end items-center">
					<a
						href="###"
						className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all"
					>
						  Sign In
					</a>
					<Button
						size="md"
						variant="default"
						rounded="max"
						bgColor="orange"
					>
						{" "}
						Sign Up
					</Button>
				</div>

				<div className="flex items-center space-x-1">
					<a href="/cart">
						<Button size="sm" variant="clear">
							<ShoppingBag className="h-5 w-5" />
							<span className="ml-2 text-sm font-bold">0</span>
							<span className="sr-only">Carrito</span>
						</Button>
					</a>
					<ThemeToggle />
					{process.env.NODE_ENV === "development" && (
						<a href={"/sanity-studio"}>
							<Button size="sm" variant="clear">
								<Edit className="h-5 w-5" />
							</Button>
						</a>
					)}
				</div>
			</div>
		</header>
	);
}
