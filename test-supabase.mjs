import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yeezszaxstvukfbtqcdv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZXpzemF4c3R2dWtmYnRxY2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTU3MzQsImV4cCI6MjA5NjQ5MTczNH0.naYrsO0hPTdq8Ob0c9dH69XyGTRm4NoYCm_e17o0aVI";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function test() {
  console.log("Testing lowercase 'waitlist' table...");
  const res1 = await supabase.from("waitlist").insert([{ name: "Test", email: "test@example.com" }]);
  console.log("lowercase waitlist response:", res1);

  console.log("Testing uppercase 'Waitlist' table...");
  const res2 = await supabase.from("Waitlist").insert([{ name: "Test", email: "test2@example.com" }]);
  console.log("uppercase Waitlist response:", res2);
}

test();
