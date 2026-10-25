import { createFileRoute } from "@tanstack/react-router";
import { DOMAIN_URL } from "@/constants/api.constants";

const description =
	"Dedication to Elaine Kent, website founder and primary author.";
const canonicalUrl = `${DOMAIN_URL}dedication`;

export const Route = createFileRoute("/dedication/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Dedication - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Dedication" },
			{
				property: "og:description",
				content: description,
			},
			{
				property: "og:url",
				content: canonicalUrl,
			},
		],
		links: [
			{
				rel: "canonical",
				href: canonicalUrl,
			},
		],
	}),
});

function RouteComponent() {
	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				<div className="flex flex-col gap-8 sm:gap-12">
					<header className="flex flex-col gap-2">
						<h1 className="text-3xl md:text-4xl">Dedication</h1>
					</header>
					<section className="flex flex-col gap-4">
						<h2 className="text-xl">Elaine Kent, 1943-2026</h2>
						<p className="font-light lg:text-[17px] lg:w-3/4">
							Dedicated in memory of Elaine Kent, founder and primary author of
							Obscure Hollywood. We hope to continue providing new articles,
							updates, and improvements in her absence for many years to come.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
