import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artisan/auth/forgot-password/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/artisan/auth/forgot-password/"!</div>
}
