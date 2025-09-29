// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const url  = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

// Debug útil (aparecerá en la consola si falta algo en Vercel o en build local)
if (!url || !anon) {
  console.error('Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY')
}

const client = createClient(url ?? '', anon ?? '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
})

export const supabase = client      // import { supabase } from '...'
export default client               // import supabase from '...'
