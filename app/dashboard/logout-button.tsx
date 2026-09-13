"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";
import styles from "./dashboard.module.css";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button className={styles.logout} type="button" onClick={handleLogout}>
      Log out
    </button>
  );
}
