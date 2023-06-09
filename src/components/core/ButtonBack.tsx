"use client";
import { useRouter } from "next/navigation";
import { FaLongArrowAltLeft } from "react-icons/fa";
import classnames from "classnames";

export default function ButtonBack() {
	const classes = classnames(
		"text-4xl",
		"cursor-pointer",
		"select-none",
        "w-fit",
		"hover:scale-110",
		"ease-in",
		"duration-300",
        "text-slate-700"
	);
	const router = useRouter();

	function goBack() {
		router.push("/");
	}

	return (
		<>
			<button onClick={goBack} className={classes} >
				<FaLongArrowAltLeft />
			</button>
		</>
	);
}
