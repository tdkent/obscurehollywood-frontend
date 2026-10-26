import Paginated from "@/components/list/Paginated";
import type { Entity } from "@/types/ui.interface";

//? All search params must be provided from URL but may be undefined
interface Props {
	page: string | undefined;
	orderBy: string | undefined;
	searchParam?: string;
	showAll?: string;
	route: Entity;
	tags?: string[];
}

export default function ListPage({
	page,
	orderBy,
	searchParam,
	showAll,
	route,
	tags,
}: Props) {
	let headingText: string;

	if (route === "quiz") headingText = "Quizzes";
	else
		headingText = `${route.slice(0, 1).toUpperCase()}${route.slice(1).toLowerCase()}`;

	return (
		<div className="page-margins bg-content">
			<div className="my-8 px-6 sm:px-12">
				{route === "search" ? (
					<>
						<h1 className="text-3xl md:text-4xl lg:text-5xl">Search Results</h1>
						<p className="my-4 text-lg sm:text-xl">"{searchParam}"</p>
					</>
				) : (
					<h1 className="text-3xl md:text-4xl lg:text-5xl">{headingText}</h1>
				)}
			</div>
			<Paginated
				page={page}
				orderBy={orderBy}
				searchParam={searchParam}
				showAll={showAll}
				route={route}
				showFilterControls={route === "films"}
				tagsParam={tags}
			/>
		</div>
	);
}
