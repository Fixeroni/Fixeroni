import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/artisan/dashboard/dashboard-pages/Orders',
)({
  component: Orders,
})

function Orders() {
  return (
  <div>
              <section>
              <h2 className='Poppins text-[#1E1E1E] text-[36px] font-medium mt-4'>My Orders</h2>
              </section>
    </div>
    )
}
