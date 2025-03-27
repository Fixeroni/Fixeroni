import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/artisan/dashboard/dashboard-pages/FindPro')({
  component: FindPro,
})

export default function FindPro() {
  return <div>Hello "/artisan/dashboard/dashboard-pages/FindPro"!</div>
}
