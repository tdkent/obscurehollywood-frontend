import { Link } from "@tanstack/react-router";
import Image from "@/components/image/Image";
import type { Entity } from "@/types/ui.interface";

interface Props {
	children?: React.ReactNode;
	name: string;
	personGender?: string | null;
	route?: Entity;
	showImage?: boolean;
	slug?: string;
	subtitle?: number | string | null;
}

/** Render header element of article page with heading and children. */
export default function ArticleHeader({
	children,
	name,
	personGender,
	route,
	showImage,
	slug,
	subtitle,
}: Props) {
	return (
		<header className="flex flex-col gap-6">
			<div className="my-8 px-6 sm:px-12">
				<h1 className="text-3xl font-normal md:text-4xl lg:text-5xl">{name}</h1>
				{subtitle && (
					<h2 className="text-xl text-secondary-text mt-2 md:text-2xl lg:text-3xl lg:mt-3">
						{subtitle}
					</h2>
				)}
				{route === "studios" && (
					<div className="mt-8">
						<Link to={"/studios"}>
							<span className="flex items-center gap-2 content-link">
								All Studios
							</span>
						</Link>
					</div>
				)}
			</div>
			{showImage && slug && (
				<div className="px-6 bg-transparent sm:px-12">
					<Image
						altText={name}
						containerStyles="border lg:object-bottom lg:w-3/4 xl:w-200"
						fetchPriority="high"
						isHeader
						lazyLoading="eager"
						personGender={personGender}
						sizes="(max-width: 1024px) 100vw, (max-width: 1170px) 75vw, 800px"
						slug={slug}
					/>
				</div>
			)}
			{children}
		</header>
	);
}
