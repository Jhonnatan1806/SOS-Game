import classnames from "classnames";

interface ButtonExternalProps {
	children: React.ReactNode;
	[key: string]: any;
}

export default function ButtonExternal({
	children,
	className,
	...props
}: ButtonExternalProps) {
	const classes = classnames(
		"flex",
		"gap-2",
		"flex-wrap",
		"items-center",
		"w-fit",
		"cursor-pointer",
		"select-none",
		"text-base",
		"underline",
		className
	);

	return (
		<a
			{...props}
			target="_blank"
			rel="noopener noreferrer"
			className={classes}
		>
			{children}
		</a>
	);
}
