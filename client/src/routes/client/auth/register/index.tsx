import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/client/auth/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/client/auth/register/"!</div>
}
