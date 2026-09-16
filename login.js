const msg=document.getElementById('msg');
function showMsg(text,type='error'){msg.textContent=text;msg.className='msg '+type;}

document.getElementById('loginForm').addEventListener('submit',async e=>{
  e.preventDefault();
  if(!isSupabaseConfigured()){showMsg('ยังไม่ได้ตั้งค่า Supabase ในไฟล์ supabase-config.js');return;}
  const username=document.getElementById('username').value.trim();
  const password=document.getElementById('password').value;
  const email=ADMIN_ACCOUNTS[username];
  if(!email || email.includes('ใส่อีเมล')){showMsg('ยังไม่ได้กำหนดอีเมลของผู้ใช้ '+username+' ใน supabase-config.js');return;}
  const client=supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
  const {data,error}=await client.auth.signInWithPassword({email,password});
  if(error){showMsg('เข้าสู่ระบบไม่สำเร็จ: '+error.message);return;}
  const {data:profile,error:profileError}=await client.from('profiles').select('username,role').eq('id',data.user.id).single();
  if(profileError || !profile || profile.role!=='admin'){await client.auth.signOut();showMsg('บัญชีนี้ยังไม่ได้รับสิทธิ์ผู้ดูแลระบบ');return;}
  sessionStorage.setItem('pea_led_admin_username',profile.username||username);
  location.href='admin.html';
});
