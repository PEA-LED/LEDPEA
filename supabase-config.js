// PEA LED Dashboard - Supabase configuration
// ใช้ Project URL + Publishable/Anon key เท่านั้นสำหรับเว็บไซต์ฝั่งผู้ใช้
const SUPABASE_URL = "https://oknnatvwfyleokhdmwbi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rbm5hdHZ3ZnlsZW9raGRtd2JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0Nzk4MTUsImV4cCI6MjEwNTA1NTgxNX0.X3Xkpk3vr37BEYlHsOJFEo_BbhKtdAT5ICh_mLMnLLg";

// หน้า Login ให้กรอก username เป็น Dear / แนน แล้วระบบจะแปลงเป็นอีเมลของ Supabase Auth
const ADMIN_ACCOUNTS = {
  "Dear": "ajchanoksuksawad@gmail.com",
  "แนน": "166333241054-st@rmutsb.ac.th"
};

function isSupabaseConfigured(){
  return SUPABASE_URL.startsWith('https://') &&
         SUPABASE_PUBLISHABLE_KEY &&
         !SUPABASE_PUBLISHABLE_KEY.startsWith('ใส่_');
}
