import React from "react";
import classnames from 'classnames';

interface LayoutProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: any;
}

export default function Layout({ children, className, ...props }: LayoutProps) {
	const classes = classnames(
		"flex",
		"flex-col",
		"min-h-screen",
		"p-4",
		"bg-gradient-to-b",
		"from-white",
		"to-cyan-100",
        "items-center",
        "h-screen",
        "w-screen",
		className
	);

	return (
		<main className={classes} {...props}>
			{children}
		</main>
	);
}
