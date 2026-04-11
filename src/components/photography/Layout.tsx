import { Outlet, Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export function FigmaShowcaseLayout() {
  return (
    <div
      className="photography w-full min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col"
      style={{ fontFamily: "'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
    >
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="py-8 px-6 md:px-12 text-zinc-500 text-sm flex flex-col md:flex-row justify-between items-center border-t border-zinc-200/50 mt-auto bg-[#fafafa]">
        <p>&copy; {new Date().getFullYear()} Rahul Vikram.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/" className="hover:text-zinc-900 transition-colors">
            <HomeIcon className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
