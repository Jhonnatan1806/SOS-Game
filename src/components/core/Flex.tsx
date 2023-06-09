import classnames from "classnames";

interface FlexProps {
	children: React.ReactNode;
	className?: string;
	[key: string]: any;
}

export default function Flex({ children, className, ...props }: FlexProps) {
	const classes = classnames("flex", className);

	return (
		<div className={classes} {...props}>
			{children}
		</div>
	);
}
