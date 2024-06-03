import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://napexujyucrzlkfoeivl.supabase.co'
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
