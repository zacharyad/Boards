import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ndrmmswtfclidqkfgwbc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcm1tc3d0ZmNsaWRxa2Znd2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2NzQxMzEsImV4cCI6MTk4MTI1MDEzMX0.C8KKQSStuJ9SBJjYPvVzWRfFMsoVouyGUMAEMNtM7Uw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
