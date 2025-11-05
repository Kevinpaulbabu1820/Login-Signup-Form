"use server";

import { redirect } from "next/navigation";
import { setSession } from "../lib/auth";

export type SignupState = {
  error?: string | null;
};

export async function signup(_prev: SignupState, formData: FormData): Promise<SignupState> {
  const username = String(formData.get("username") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !email || !password) {
    return { error: "Please fill in all fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  const userId = `user_${Date.now()}`;
  await setSession({ userId, username, email });
  redirect("/logout");
}


