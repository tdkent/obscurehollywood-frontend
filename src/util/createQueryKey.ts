interface Inputs {
	pageParam: number;
	route: string;
	searchParam?: string;
	showAll?: string;
	sortParam: string;
	tagsParam?: string[];
}

interface ParamsObj {
	[key: string]: number | string | string[];
}

export function createQueryKey({
	pageParam,
	route,
	searchParam,
	showAll,
	sortParam,
	tagsParam,
}: Inputs) {
	const paramsObj: ParamsObj = {
		page: pageParam,
		orderBy: sortParam,
	};

	if (searchParam) paramsObj.search = searchParam;

	if (showAll) paramsObj.showAll = showAll;

	if (tagsParam?.length) paramsObj.tagsParam = tagsParam;

	const queryKey = [route, paramsObj];

	return queryKey;
}
