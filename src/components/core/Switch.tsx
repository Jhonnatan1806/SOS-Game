'use client'
import { useState } from "react";
import classnames from "classnames";

interface SwitchProps {
	options: string[];
    onOptionChange: (option: string) => void;
    disabled?: boolean;
}

export default function Switch({ options, onOptionChange, disabled = false }: SwitchProps) {
    const [activeOption, setActiveOption] = useState(options[0]);

	const handleOptionChange = (option: string) => {
		setActiveOption(option);
        onOptionChange(option);
	};

	return (
		<div className="flex bg-gray-300 rounded w-fit shadow-inner">
			{options.map((option) => (
				<button
					key={option}
					onClick={() => handleOptionChange(option)}
					className={classnames(
						"py-2 px-4 font-bold focus:outline-none ",
						{
							"bg-blue-500 text-white rounded disabled:bg-slate-400": option === activeOption,
						}
					)}
                    disabled={disabled}
				>
					{option}
				</button>
			))}
		</div>
	);
}