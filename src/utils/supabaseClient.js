// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const url  = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

const client = createClient(url, anon, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
})

// ✅ Export nombrado (para quien use { supabase })
export const supabase = client
// ✅ Export default (para quien use import supabase from '...') 
export default client
