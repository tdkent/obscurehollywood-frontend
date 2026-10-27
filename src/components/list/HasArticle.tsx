import { useNavigate, useSearch } from "@tanstack/react-router";
import type { UrlSearchParams } from "@/types/api.interface";

export default function HasArticle() {
	const { showAll }: UrlSearchParams = useSearch({
		from: "/people/",
	});
	const navigate = useNavigate({ from: "/people/" });

	const isChecked = showAll?.toString() !== "true";

	function handleCheck() {
		if (!isChecked) navigate({ to: "/people", search: {} });
		else navigate({ to: "/people", search: { showAll: true } });
	}

	return (
		<label className="flex items-center gap-2 hover:cursor-pointer">
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
