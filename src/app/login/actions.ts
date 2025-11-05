"use server";

import { redirect } from "next/navigation";
import { setSession, verifyCredentials } from "../lib/auth";

export type LoginState = {
  error?: string | null;
};

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const verified = verifyCredentials(email, password);
  if (!verified) {
    return { error: "Invalid email or password." };
  }

  await setSession({ userId: verified.userId, username: verified.username, email: verified.email });
  redirect("/logout");
}


