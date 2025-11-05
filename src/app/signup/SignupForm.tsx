"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";
import { signup, type SignupState } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black disabled:opacity-60 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
    >
      {pending ? "Creating account…" : "Create account"}
    </button>
  );
}

export default function SignupForm() {
  const initialState: SignupState = { error: null };
  const [state, action] = React.useActionState(signup, initialState);

  return (
    <form action={action} className="space-y-5">
      {state?.error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/30 dark:text-red-300">
          {state.error}
        </div>
      ) : null}

      <div>
        <label htmlFor="username" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          className="mt-1 block w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-white/20 dark:focus:ring-white/10"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-1 block w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-white/20 dark:focus:ring-white/10"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          className="mt-1 block w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-white/20 dark:focus:ring-white/10"
          placeholder="At least 8 characters"
        />
      </div>

      <SubmitButton />
    </form>
  );
}


