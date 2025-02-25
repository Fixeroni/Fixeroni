import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../../../../components/shared/AuthLayout'

export const Route = createFileRoute('/artisan/auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <h2>Hello, auth !</h2>
    </AuthLayout>
  )
}
