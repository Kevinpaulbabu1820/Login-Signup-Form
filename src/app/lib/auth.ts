import { cookies } from "next/headers";

const SESSION_COOKIE = "session";

export type Session = {
  userId: string;
  username: string;
  email: string;
};

export async function setSession(session: Session) {
  const c = await cookies();
  c.set(SESSION_COOKIE, JSON.stringify(session), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession() {
  const c = await cookies();
  c.delete(SESSION_COOKIE);
}

export async function getSession(): Promise<Session | null> {
  const c = await cookies();
  const v = c.get(SESSION_COOKIE)?.value;
  if (!v) return null;
  try {
    return JSON.parse(v) as Session;
  } catch {
    return null;
  }
}

export function verifyCredentials(email: string, password: string) {
  if (email === "demo@example.com" && password === "password123") {
    return { userId: "demo-user-1", username: "Demo User", email } as const;
  }
  return null;
}


