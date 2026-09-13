"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/app/lib/supabase/client";
import styles from "./auth.module.css";

type Mode = "login" | "signup";

const copy = {
  login: {
    title: "Log in",
    action: "Log in",
    pending: "Logging in…",
    switchText: "Need an account?",
    switchHref: "/signup",
    switchLabel: "Sign up",
  },
  signup: {
    title: "Sign up",
    action: "Sign up",
    pending: "Creating account…",
    switchText: "Already have an account?",
    switchHref: "/login",
    switchLabel: "Log in",
  },
} as const;

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const t = copy[mode];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const supabase = createClient();
    const { error: authError } =
      mode === "signup"
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password });

    if (authError) {
      setError(authError.message);
      setPending(false);
      return;
    }

    // Email confirmation is off, so a new account has a session immediately.
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className={styles.wrap}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>{t.title}</h1>

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={styles.input}
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className={styles.input}
          type="password"
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}

        <button className={styles.button} type="submit" disabled={pending}>
          {pending ? t.pending : t.action}
        </button>

        <p className={styles.switch}>
          {t.switchText}{" "}
          <Link className={styles.link} href={t.switchHref}>
            {t.switchLabel}
          </Link>
        </p>
      </form>
    </main>
  );
}
