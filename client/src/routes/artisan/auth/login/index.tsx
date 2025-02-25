import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artisan/auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/artisan/auth/login/"!</div>
}
