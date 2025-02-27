import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../../../../components/shared/AuthLayout'
import AuthHoverCard from '../../../../components/shared/AuthHoverCard'
import features from '../../../../data/features'
import Feature from '../../../../components/auth/register/Feature'
import type { Feature as FeatureType } from '../../../../types'
import Switch from '../../../../components/auth/login/Switch'
import RegisterContent from '../../../../components/auth/RegisterContent'
import LoginContent from '../../../../components/auth/LoginContent'
import { fields } from '../../../../data/register'
import Input from '../../../../components/auth/Input'

export const Route = createFileRoute('/artisan/auth/register/')({
  component: RouteComponent,
})

function Register () {

  return (
    <article className="flex flex-col gap-2">
      {
        fields.map((field: { name: string, placeholder: string, type: string, required: boolean }, index: number) => (
          <Input name={field.name} key={index} placeholder={field.placeholder} />
        ))
      }
    </article>
  )
}

function RouteComponent() {

    return (
      <AuthLayout>
        <AuthHoverCard>
          {/* Fixeroni icon */}
          <img src="/images/branding/logo.png" className="w-40" />
  
          {/* Section text */}
          <article className="flex flex-col gap-2 justify-center items-center text-center">
            <h2 className="text-2xl font-medium">Welcome to Fixeroni</h2>
            <p className="text-gray-secondary text-md">
              Let us get things running smoothly and <br /> keep the world in
              working order.
            </p>
          </article>
  
          {/* Login / Register switch */}
          <Switch login={<LoginContent />} register={<Register />} />
        </AuthHoverCard>
      </AuthLayout>
    );
}
