import React, { ReactNode } from "react";

interface GridProps {
	children: ReactNode;
    className?: string;
	columns: number;
}

export default function Grid({ children, className, columns }: GridProps) {
	const columnWidth = `w-${Math.floor(12 / columns)}/12`;

	return (
		<div className={`grid grid-cols-${columns} gap-4`}>
			{React.Children.map(children, (child) => (
				<>{child}</>
			))}
		</div>
	);
}
