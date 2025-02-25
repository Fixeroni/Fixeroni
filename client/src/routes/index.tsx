import { createFileRoute, redirect } from '@tanstack/react-router'
import { useSession } from '../stores/useSessionStore'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  // Get the session data
  const session = useSession((state) => state.session);

  // Redirect the user to the login page (if they are not signed in)
  if(!session) return redirect({
    to: "/artisan/auth/login"
  })

  // Redirect to the dashboard
  return redirect({
    to: "/artisan/dashboard"
  })
}
