import Link from "next/link";
import classnames from "classnames";

interface ButtonProps {
	children: React.ReactNode;
	href: string;
	className?: string;
	[key: string]: any;
}

export default function Button({
	children,
	href,
	className,
	...props
}: ButtonProps) {
	const classes = classnames(
		"w-fit",
		"cursor-pointer",
		"select-none",
		"hover:scale-110",
		"ease-in",
		"duration-300",
		"text-white",
		"font-bold",
		"py-2",
		"px-8",
		"rounded",
		className
	);

	return (
		<Link href={href} className={classes} {...props}>
			{children}
		</Link>
	);
}
