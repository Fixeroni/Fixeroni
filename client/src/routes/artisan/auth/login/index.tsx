import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../../../../components/shared/AuthLayout'
import AuthHoverCard from '../../../../components/shared/AuthHoverCard'

export const Route = createFileRoute('/artisan/auth/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <AuthHoverCard>
        <h2>Hello, auth !</h2>
      </AuthHoverCard>
    </AuthLayout>
  )
}
