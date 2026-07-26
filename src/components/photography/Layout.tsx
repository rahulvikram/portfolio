import { Outlet, Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export function FigmaShowcaseLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <main className="flex flex-grow flex-col">
        <Outlet />
      </main>

      <footer className="mt-auto flex flex-col items-center justify-between gap-4 border-t border-border px-6 py-8 font-mono text-xs text-muted-foreground md:flex-row md:px-12">
        <p>&copy; {new Date().getFullYear()} Rahul Vikram.</p>
        <Link to="/" aria-label="Home" className="transition-colors hover:text-foreground">
          <HomeIcon className="h-4 w-4" />
        </Link>
      </footer>
    </div>
  );
}
