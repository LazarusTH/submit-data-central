// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fvqmammdphfunhhptmvk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2cW1hbW1kcGhmdW5oaHB0bXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NjA2OTgsImV4cCI6MjA2MDIzNjY5OH0.KYEOBhyBq9SiGvK4nQrjohZ1Xo0buAPYX1Z1YmH84lY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);