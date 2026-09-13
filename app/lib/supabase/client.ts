import { createBrowserClient } from "@supabase/ssr";

// Browser (client component) Supabase client. Called inside event handlers,
// never at module/render time, so a build without env vars never instantiates it.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  );
}
