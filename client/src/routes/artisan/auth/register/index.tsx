import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../../../../components/shared/AuthLayout'
import AuthHoverCard from '../../../../components/shared/AuthHoverCard'

export const Route = createFileRoute('/artisan/auth/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <AuthHoverCard>
        <article className="flex flex-col gap-4 items-center justify-cente">
          
        </article>
      </AuthHoverCard>
    </AuthLayout>
  )
}
