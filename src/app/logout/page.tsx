import { Metadata } from "next";
import { getSession } from "../lib/auth";
import { logout } from "../actions";

export const metadata: Metadata = {
  title: "Logout",
  description: "Sign out of your account",
};

export default async function LogoutPage() {
  const session = await getSession();
  const username = session?.username ?? "there";

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm ring-1 ring-zinc-200/60 dark:ring-white/10 p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Hi {username}</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">You can sign out of your account below.</p>
          </div>
          <form action={logout} className="space-y-4">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


