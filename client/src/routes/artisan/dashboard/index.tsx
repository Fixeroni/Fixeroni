import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/artisan/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/artisan/dashboard/"!</div>;
}
