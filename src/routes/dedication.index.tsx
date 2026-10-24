import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dedication/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/dedication/"!</div>;
}
