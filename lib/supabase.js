import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client — used server-side in API routes.
 *
 * Add these two variables to your .env.local:
 *   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key   ← NOT the anon key
 *
 * The service role key is used only in API routes (server-side).
 * It is never exposed to the browser.
 */
const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Missing Supabase env vars. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to .env.local'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
