import { redirect } from "next/navigation";
import { createClient } from "@/app/lib/supabase/server";
import LogoutButton from "./logout-button";
import styles from "./dashboard.module.css";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Logged-out visitors never see this page.
  if (!user) {
    redirect("/login");
  }

  return (
    <main className={styles.wrap}>
      <section className={styles.card}>
        <h1 className={styles.title}>You&apos;re logged in</h1>
        <p className={styles.email}>{user.email}</p>
        <LogoutButton />
      </section>
    </main>
  );
}
