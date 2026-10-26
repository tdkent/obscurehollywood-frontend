import { useSearch } from "@tanstack/react-router";
import type { UrlSearchParams } from "@/types/api.interface";

export default function HasArticle() {
	const { showAll }: UrlSearchParams = useSearch({
		from: "/people/",
	});

	const isChecked = showAll?.toString() !== "true";

	function handleCheck(
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) {
		// const selected = e.currentTarget.checked;
	}

	return (
		<label className="flex items-center gap-2">
			<input
				type="checkbox"
				className="checkbox"
				checked={isChecked}
				onChange={handleCheck}
			/>
			<span className="label-text">Show only with article</span>
		</label>
	);
}
