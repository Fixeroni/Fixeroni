"use client";

import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <Outlet />,
  
  errorComponent: ({ error }) => {
    console.error("Router error:", error);
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          We've encountered an unexpected error.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Return Home
        </button>
      </div>
    );
  },
});
