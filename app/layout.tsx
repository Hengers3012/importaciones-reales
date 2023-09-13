import "@/styles/globals.css";

import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<body className={inter.className}>
					<SiteHeader />
					{children}
				</body>
			</html>
		</>
	);
}
