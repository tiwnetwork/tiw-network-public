import { createClient } from '@supabase/supabase-js'

// ✅ Replace these with your actual values:
const supabaseUrl = 'https://jftzyzeuglmmyjcnalvw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmdHp5emV1Z2xtbXlqY25hbHZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNzYyNjIsImV4cCI6MjA2MTk1MjI2Mn0.xS_oWymvx77HJJjQC0ECMQUPvMWf7XIkl_NeGvNiwEs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
