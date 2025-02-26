import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../../../../components/shared/AuthLayout'
import AuthHoverCard from '../../../../components/shared/AuthHoverCard'
import features from '../../../../data/features'
import Feature from '../../../../components/auth/register/Feature'
import type { Feature as FeatureType } from '../../../../types'

export const Route = createFileRoute('/artisan/auth/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthLayout>
      <AuthHoverCard>
        <article className="flex flex-col gap-4 items-center justify-cente">
          {
            features.map((feature: FeatureType, index: number) => (
              <Feature key={index} {...feature} />
            ))
          }
        </article>
      </AuthHoverCard>
    </AuthLayout>
  )
}
