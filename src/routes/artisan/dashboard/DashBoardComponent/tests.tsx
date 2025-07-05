import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/artisan/dashboard/DashBoardComponent/tests',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/artisan/dashboard/DashBoardComponent/tests"!</div>
}
