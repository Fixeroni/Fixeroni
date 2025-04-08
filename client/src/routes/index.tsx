import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useSession } from "../stores/useSessionStore";
import LandingPage from "@/pages/landing-pages";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const session = useSession((state) => state.session);

  // If user is authenticated, redirect to dashboard
  if (session) {
    return <Navigate to="/artisan/dashboard" />;
  }

  // If not authenticated, show the landing page directly at the root URL
  return <LandingPage />;
}
