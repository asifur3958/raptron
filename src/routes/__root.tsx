import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-mist px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand">
          Error 404
        </div>
        <h1 className="mt-3 font-display text-6xl font-bold text-ink">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-gradient-brand text-white font-semibold"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
