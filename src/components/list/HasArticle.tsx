export default function HasArticle() {
	return (
		<label className="flex items-center gap-2">
			<input type="checkbox" defaultChecked className="checkbox" />
			<span className="label-text">Show only with article</span>
		</label>
	);
}
