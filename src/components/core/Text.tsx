import classnames from "classnames";

interface TextProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: any;
}

export default function Text({ children, className, ...props }: TextProps) {
	const classes = classnames(
		"text-sm",
		"md:text-base",
		"bg-clip-text",
		"text-slate-800",
		className
	);

	return (
		<p className={classes} {...props}>
			{children}
		</p>
	);
}
