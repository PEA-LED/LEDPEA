# PEA LED Dashboard — Supabase พร้อมใช้

## ไฟล์หลัก
- `index.html` — Dashboard สาธารณะ
- `login.html` — หน้า Login แยกจาก Admin
- `admin.html` — หน้าเพิ่ม/แก้ไข/ลบข้อมูล
- `script.js` — ดึงข้อมูลจาก Supabase มาแสดง Dashboard
- `login.js` — Login ด้วย Supabase Auth
- `admin.js` — CRUD ข้อมูลโครงการ
- `supabase-config.js` — ตั้งค่า Project URL / Publishable key / อีเมลผู้ดูแล
- `supabase.sql` — ใช้สำหรับสร้างฐานข้อมูลครั้งแรก
- `supabase-admin-fix.sql` — ใช้กับฐานข้อมูลที่สร้างไว้แล้ว เพื่อเปิดสิทธิ์ Admin และสร้าง profile อัตโนมัติ

## ข้อมูล Supabase ของโปรเจกต์นี้
Project URL:
`https://oknnatvwfyleokhdmwbi.supabase.co`

เว็บไซต์ใช้ Publishable/Anon key เท่านั้น ห้ามนำ Secret/Service Role key ไปใส่ในเว็บ

## ตั้งค่าให้ Login ใช้งานจริง
### ถ้ายังไม่ได้สร้างผู้ใช้ใน Supabase Auth
1. เปิด Supabase Project `PEA LED Project`
2. ไปที่ `Authentication` → `Users`
3. เลือก `Add user`
4. สร้าง 2 บัญชี:
   - Dear — `ajchanoksuksawad@gmail.com`
   - แนน — `166333241054-st@rmutsb.ac.th`
5. ตั้งรหัสผ่านของทั้งสองบัญชีเป็น `40021151`
6. ถ้ามีตัวเลือก Confirm email ให้เปิดเป็น Confirmed/Auto Confirm สำหรับการทดลองระบบ

จากนั้นเปิด SQL Editor แล้วรัน `supabase-admin-fix.sql` หนึ่งครั้ง

ไฟล์นี้จะสร้าง `profiles` และกำหนด role `admin` ให้สองอีเมลข้างต้นโดยอัตโนมัติ

### ถ้ามีผู้ใช้สองบัญชีอยู่แล้ว
ไม่ต้องสร้างซ้ำ ให้รันเฉพาะ `supabase-admin-fix.sql` หนึ่งครั้ง

## วิธีทดสอบ
1. เปิด Dashboard
2. กด `เข้าสู่ระบบแอดมิน`
3. ใส่ Username: `Dear` หรือ `แนน`
4. ใส่รหัสผ่าน `40021151`
5. เมื่อ Login สำเร็จจะไป `admin.html`
6. ทดลอง `เพิ่มข้อมูล` / `แก้ไข` / `ลบ`
7. กลับ Dashboard แล้วข้อมูลจะอ่านจากฐานข้อมูล Supabase

## GitHub Pages
อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ไว้ระดับเดียวกับ `index.html` ใน repository เดิม แล้วรอ GitHub Pages deploy

Flow:
Dashboard → Login → Admin → เพิ่ม/แก้ไข/ลบ → Supabase → Dashboard
