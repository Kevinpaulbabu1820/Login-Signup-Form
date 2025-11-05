import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your account",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div
          className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm ring-1 ring-zinc-200/60 dark:ring-white/10 p-8"
          style={{ backgroundImage: "none" }}
        >
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Sign in</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Welcome back. Please enter your details.</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}


