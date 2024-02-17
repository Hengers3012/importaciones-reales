import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
	{
		variants: {
			variant: {
				default:
					"border-none outline-none bg-blue-500 text-white hover:bg-blue-600 light:text-black",
				outline:
					"border border-input hover:bg-gray-500 hover:text-black light:text-black",
				underline:
					"border-none outline-none underline-offset-8 underline bg-transparent light:text-black",
				clear: "border-none outline-none bg-transparent text-white light:text-black",
				link: "border-none outline-none underline-offset-4 hover:underline bg-transparent light:text-black",
			},
			size: {
				sm: "h-8 px-3 rounded-md",
				md: "h-10 px-6 rounded-md",
				lg: "h-12 px-8 rounded-md",
			},
			rounded: {
				default: "rounded-none",
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				max: "rounded-full",
			},
			bgColor: {
				default: "bg-primary",
				transparent: "bg-transparent",
				red: "bg-red-400",
				green: "bg-green-400",
				blue: "bg-blue-400",
				yellow: "bg-yellow-400",
				pink: "bg-pink-400",
				gray: "bg-gray-400",
				orange: "bg-orange-400",
				white: "bg-white",
				black: "bg-black",
				primary: "bg-primary",
				secondary: "bg-secondary",
				destructive: "bg-destructive",
				accent: "bg-accent",
				success: "bg-success",
				warning: "bg-warning",
				error: "bg-error",
				info: "bg-info",
				neutral: "bg-neutral",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "sm",
			rounded: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, rounded, size, bgColor, ...props }, ref) => {
		return (
			<button
				className={cn(
					buttonVariants({
						variant,
						size,
						rounded,
						bgColor,
						className,
					})
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
