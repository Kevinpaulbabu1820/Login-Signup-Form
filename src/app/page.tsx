import Link from "next/link";
import { getSession } from "./lib/auth";
import { logout } from "./actions";

export default async function Home() {
  const session = await getSession();
  const isLoggedIn = Boolean(session);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md p-6">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200/60 dark:bg-zinc-900 dark:ring-white/10">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Want to sign up?</h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Access your account to continue. Use demo credentials to try it.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-white/15 dark:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Sign up
            </Link>
            {isLoggedIn ? (
              <form action={logout}>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
                >
                  Logout
                </button>
              </form>
            ) : null}
          </div>
          <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
            Demo user: demo@example.com / password123
          </div>
        </div>
      </main>
    </div>
  );
}
