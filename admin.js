const client=supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
const bodyEl=document.getElementById('adminBody');
const modal=document.getElementById('modal');
const form=document.getElementById('projectForm');
const statusEl=document.getElementById('status');

function msg(text,ok=false){statusEl.textContent=text;statusEl.className='status show '+(ok?'ok':'err');setTimeout(()=>statusEl.className='status',4000);}
function val(id){return document.getElementById(id).value.trim();}
function num(id){const v=val(id);return v===''?null:Number(v);}

async function requireAdmin(){
  const {data:{session}}=await client.auth.getSession();
  if(!session){location.href='login.html';return false;}
  const {data:profile,error}=await client.from('profiles').select('username,role').eq('id',session.user.id).single();
  if(error || !profile || profile.role!=='admin'){await client.auth.signOut();location.href='login.html';return false;}
  return true;
}

async function loadRows(){
  const {data,error}=await client.from('projects').select('*').order('id');
  if(error){msg('โหลดข้อมูลไม่สำเร็จ: '+error.message);return;}
  document.getElementById('count').textContent=`ทั้งหมด ${data.length} สถานที่`;
  bodyEl.innerHTML=data.map(d=>`<tr><td>${d.id}</td><td>${d.star?'✦ ':''}${escapeHtml(d.site)}</td><td>${escapeHtml(d.province||'-')}</td><td>${escapeHtml(d.pea)}</td><td>${d.project_year}</td><td>${d.kwh===null?'—':Number(d.kwh).toLocaleString('en-US',{maximumFractionDigits:2})}</td><td><div class="actions"><button class="btn btn-secondary edit" data-id="${d.id}">แก้ไข</button><button class="btn btn-danger del" data-id="${d.id}">ลบ</button></div></td></tr>`).join('');
  document.querySelectorAll('.edit').forEach(b=>b.addEventListener('click',()=>editRow(Number(b.dataset.id))));
  document.querySelectorAll('.del').forEach(b=>b.addEventListener('click',()=>deleteRow(Number(b.dataset.id))));
}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[c]));}

async function editRow(id){
  const {data,error}=await client.from('projects').select('*').eq('id',id).single();
  if(error){msg(error.message);return;}
  document.getElementById('modalTitle').textContent='แก้ไขข้อมูลโครงการ';
  document.getElementById('projectId').value=data.id;
  document.getElementById('site').value=data.site||'';document.getElementById('province').value=data.province||'';document.getElementById('pea').value=data.pea||'';document.getElementById('project_year').value=data.project_year||'';document.getElementById('kwh').value=data.kwh??'';document.getElementById('baht').value=data.baht??'';document.getElementById('co2').value=data.co2??'';document.getElementById('star').checked=!!data.star;modal.classList.add('open');
}

async function deleteRow(id){
  if(!confirm('ยืนยันการลบข้อมูลรายการนี้?')) return;
  const {error}=await client.from('projects').delete().eq('id',id);
  if(error){msg('ลบไม่สำเร็จ: '+error.message);return;}
  msg('ลบข้อมูลเรียบร้อยแล้ว',true);loadRows();
}

function openAdd(){form.reset();document.getElementById('projectId').value='';document.getElementById('modalTitle').textContent='เพิ่มข้อมูลโครงการ';modal.classList.add('open');}
function closeModal(){modal.classList.remove('open');}

document.getElementById('addBtn').addEventListener('click',openAdd);
document.getElementById('cancelBtn').addEventListener('click',closeModal);
document.getElementById('logoutBtn').addEventListener('click',async()=>{await client.auth.signOut();location.href='login.html';});
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const payload={site:val('site'),province:val('province')||null,pea:val('pea'),project_year:Number(val('project_year')),kwh:num('kwh'),baht:num('baht'),co2:num('co2'),star:document.getElementById('star').checked};
  const id=val('projectId');
  let result;
  if(id) result=await client.from('projects').update(payload).eq('id',Number(id));
  else result=await client.from('projects').insert(payload);
  if(result.error){msg('บันทึกไม่สำเร็จ: '+result.error.message);return;}
  closeModal();msg(id?'แก้ไขข้อมูลเรียบร้อยแล้ว':'เพิ่มข้อมูลเรียบร้อยแล้ว',true);loadRows();
});

(async()=>{if(await requireAdmin()) loadRows();})();
