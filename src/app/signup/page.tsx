import { Metadata } from "next";
import SignupForm from "./SignupForm";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create a new account",
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm ring-1 ring-zinc-200/60 dark:ring-white/10 p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Create your account</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Sign up with a username, email and password.</p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}


