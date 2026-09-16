// ---- dataset (ลำดับ, สถานที่, กฟข., kWh/ปี, บาท/ปี, tCO2eq/ปี, ปีโครงการ, star) ----
const FALLBACK_DATA = [
[1,"วัดพระธาตุพนม วรมหาวิหาร จ.นครพนม","กฟฉ.1",17640.0,70560.0,9.019,2556,true],
[2,"วัดพระธาตุหริภุญชัย วรมหาวิหาร จ.ลำพูน","กฟน.1",29991.6,119966.4,15.335,2556,true],
[3,"วัดพะโคะ (วัดราชประดิษฐาน) จ.สงขลา","กฟต.3",7407.0,29628.0,3.787,2556,true],
[4,"วัดห้วยปลากั้ง จ.เชียงราย","กฟน.1",180.0,720.0,0.092,2556,false],
[5,"วัดพระธาตุดอยกองมู จ.แม่ฮ่องสอน","กฟน.1",null,null,null,2557,false],
[6,"วัดก้ำก่อ จ.แม่ฮ่องสอน","กฟน.1",900.0,3600.0,0.46,2557,false],
[7,"วัดพระนอน จ.แม่ฮ่องสอน","กฟน.1",1015.2,4060.8,0.519,2557,false],
[8,"วัดจองกลาง จ.แม่ฮ่องสอน","กฟน.1",null,null,null,2557,false],
[9,"วัดจองคำ จ.แม่ฮ่องสอน","กฟน.1",720.0,2880.0,0.368,2557,false],
[10,"วัดหัวเวียง จ.แม่ฮ่องสอน","กฟน.1",null,null,null,2557,false],
[11,"อนุสาวรีย์พญาสิงหนาทราชา จ.แม่ฮ่องสอน","กฟน.1",3240.0,12960.0,1.657,2557,false],
[12,"วัดพระธาตุศรีสองรัก อ.ด่านซ้าย จ.เลย","กฟฉ.1",11113.2,44452.8,5.682,2557,false],
[13,"วัดพระธาตุเชิงชุม วรวิหาร จ.สกลนคร","กฟฉ.1",14076.0,56304.0,7.197,2558,false],
[14,"มัสยิดกลาง จ.ปัตตานี","กฟต.3",null,null,null,2558,false],
[15,"วัดโสธรวรารามวรวิหาร จ.ฉะเชิงเทรา","กฟก.2",19440.0,77760.0,9.94,2559,false],
[16,"วัดพระบรมธาตุไชยาราชวรวิหาร จ.สุราษฎร์ธานี","กฟต.2",2700.0,10800.0,1.381,2559,false],
[17,"ศาลเจ้าแม่ลิ้มกอเหนี่ยว จ.ปัตตานี","กฟต.3",9257.4,37029.6,4.733,2559,false],
[18,"วัดไชยธาราราม (วัดฉลอง) จ.ภูเก็ต","กฟต.2",4338.0,17352.0,2.218,2559,false],
[19,"อุทยานประวัติศาสตร์พระนครศรีอยุธยา (วัดมงคลบพิตร) จ.พระนครศรีอยุธยา","กฟก.1",4399.2,17596.8,2.249,2559,false],
[20,"วัดพระธาตุนาดูน จ.มหาสารคาม","กฟฉ.2",4986.0,19944.0,2.549,2559,false],
[21,"พระพุทธมหาธรรมราชา พุทธอุทยานเพชรบุระ จ.เพชรบูรณ์","กฟน.3",4723.2,18892.8,2.415,2559,false],
[22,"วัดพระปฐมเจดีย์ ราชวรมหาวิหาร จ.นครปฐม","กฟก.3",3618.0,14472.0,1.85,2559,false],
[23,"วัดมหาธาตุวรวิหาร จ.เพชรบุรี","กฟต.1",14099.4,56397.6,7.209,2559,false],
[24,"วัดพระธาตุผาซ่อนแก้ว อ.เขาค้อ จ.เพชรบูรณ์","กฟน.3",1260.0,5040.0,0.644,2559,false],
[25,"วัดพระบรมธาตุ พระอารามหลวง จ.กำแพงเพชร","กฟน.2",10080.0,40320.0,5.154,2559,false],
[26,"วัดพระธาตุช่อแฮ จ.แพร่","กฟน.2",12488.4,49953.6,6.385,2559,false],
[27,"วัดพระบรมธาตุบ้านตาก จ.ตาก","กฟน.2",9187.2,36748.8,5.418,2559,false],
[28,"วัดพระธาตุหนองแวง จ.ขอนแก่น","กฟฉ.1",56946.24,227784.96,33.581,2559,false],
[29,"พระธาตุเรณู จ.นครพนม","กฟฉ.1",24001.2,96004.8,12.272,2560,false],
[30,"วัดพระธาตุหนองบัว จ.อุบลราชธานี","กฟฉ.2",45956.16,183824.64,27.1,2560,true],
[31,"ลานอนุสาวรีย์ท้าวสุรนารี (ย่าโม) จ.นครราชสีมา","กฟฉ.3",13219.2,52876.8,7.795,2560,false],
[32,"พระธาตุแช่แห้ง (พระธาตุประจำปีเถาะ) จ.น่าน","กฟน.2",16044.0,64177.0,9.461,2561,false],
[33,"วัดเกตุการาม จ.เชียงใหม่","กฟน.1",34728.0,138914.0,20.5,2561,false],
[34,"วัดร่อยพระพุทธบาทภูมโนรมย์ จ.มุกดาหาร","กฟฉ.2",63936.0,223776.0,75.0,2561,true],
[35,"องค์พระพุทธศรีสัพพัญญู จ.นครสวรรค์","กฟน.3",10588.0,42354.0,6.24,2561,false],
[36,"ศาลกรมหลวงชุมพร เขตอุดมศักดิ์ จ.ชุมพร","กฟต.1",null,null,null,2561,false],
[37,"วัดห้วยมงคล จ.ประจวบคีรีขันธ์","กฟต.1",19802.0,80208.0,11.1,2561,false],
[38,"วัดเขาดีสลัก จ.สุพรรณบุรี","กฟก.3",null,null,null,2561,false],
[39,"พระธาตุลำปางหลวง (พระธาตุประจำปีฉลู) จ.ลำปาง","กฟน.1",23616.0,94464.0,13.926,2561,false],
[40,"วัดดวงดี จ.เชียงใหม่","กฟน.1",8957.0,35827.0,6.967,2561,false],
[41,"วัดราษฎร์บูรณะ (วัดช้างให้) จ.ปัตตานี","กฟต.3",null,null,null,2561,false],
[42,"มัสยิดกรือเซะ และสุสานเจ้าแม่ลิ้มกอเหนี่ยว จ.ปัตตานี","กฟต.3",null,null,null,2561,false],
[43,"วัดป่าจันทราวาส จ.อุบลราชธานี","กฟฉ.2",56880.0,227520.0,33.54,2562,true],
[44,"วิหารเซียน จ.ชลบุรี","กฟก.2",null,null,null,2562,false],
[45,"วัดพระสิงห์ จ.เชียงใหม่","กฟน.1",3706.0,14826.0,2.186,2562,false],
[46,"วัดพระพุทธบาทราชวรมหาวิหาร จ.สระบุรี","กฟก.1",12592.0,50371.0,7.4,2562,false],
[47,"วัดบูรพาภิราม จ.ร้อยเอ็ด","กฟฉ.2",28800.0,100800.0,14.5,2562,false],
[48,"พระบรมราชานุสาวรีย์ พระบาทสมเด็จพระพุทธยอดฟ้าฯ","กฟฉ.3",null,null,null,2562,false],
[49,"วัดไพรพัฒนา จ.ศรีสะเกษ","กฟฉ.2",13975.0,55900.0,8.2,2562,false],
[50,"วัดพระธาตุแหลมสัก จ.กระบี่","กฟต.2",7980.0,32000.0,1.708,2562,true],
[51,"วัดโพธิ์เสด็จ จ.นครศรีธรรมราช","กฟต.2",null,null,null,2562,true],
[52,"วัดธาตุน้อยศรีบุญเรือง จ.นครพนม","กฟฉ.1",5462.0,21844.9,2.7,2563,false],
[53,"วัดธาตุน้อย จ.นครศรีธรรมราช","กฟต.2",6480.0,25920.0,3.2,2563,true],
[54,"วัดเขาสุวรรณประดิษฐ์ จ.สุราษฎร์ธานี","กฟต.2",9105.0,34600.0,4.5,2563,false],
[55,"วัดปงท่าข้าม จ.แพร่","กฟน.2",24774.75,99099.0,14.1,2563,true],
[56,"วัดพระศรีรัตนมหาธาตุ วรมหาวิหาร จ.พิษณุโลก","กฟน.2",21100.0,84520.0,11.34,2563,false],
[57,"วัดเขาพระใหญ่ พัทยา จ.ชลบุรี","กฟก.2",3800.0,15202.0,2.06,2563,false],
[58,"วัดมหาธาตุ จ.ราชบุรี","กฟต.1",9100.0,36401.0,7.2,2563,false],
[59,"วัดห้วยแก้ว จ.ลพบุรี","กฟน.3",21100.0,99592.0,2.6,2564,false],
[60,"วัดพุทธนิมิต จ.กาฬสินธุ์","กฟฉ.2",28800.0,155381.76,16.983,2564,false],
[61,"วัดละหารไร่ จ.ระยอง","กฟก.2",7786.0,31147.0,4.592,2564,false],
[62,"วัดประดู่ พระอารามหลวง จ.สมุทรสงคราม","กฟต.1",8604.0,40610.88,4.29,2564,false],
[63,"วัดเทพนิมิตสุดเขตสยาม จ.เชียงราย","กฟน.1",null,null,null,2565,false],
[64,"วัดคุณพุ่ม จ.พิจิตร","กฟน.2",null,null,null,2565,false],
[65,"วัดมงคลโกวิทาราม จ.อุบลราชธานี","กฟฉ.2",null,null,null,2565,false],
[66,"วัดพระเจดีย์แหลมสอ จ.สุราษฎร์ธานี","กฟต.2",5110.56,24121.84,3.014,2565,false],
[67,"วัดพระธาตุบังพวน จ.หนองคาย","กฟฉ.1",3456.0,13824.0,2.038,2565,false],
[68,"วัดศรีจำปาชนบท จ.สกลนคร","กฟฉ.1",2872.0,11491.2,1.694,2565,false],
[69,"วัดศรีทรงธรรม จ.บึงกาฬ","กฟฉ.1",26592.0,125514.2,17.22,2565,false],
[70,"วัดดอนสัก จ.สุราษฎร์ธานี","กฟต.2",null,null,null,2566,false],
[71,"วัดเซกาเจติยาราม จ.บึงกาฬ","กฟฉ.1",1000.1,4000.4,0.5,2566,false],
[72,"วัดใหญ่ชัยมงคล จ.พระนครศรีอยุธยา","กฟก.1",2623.62,10494.48,1.312,2567,false],
[73,"วนอุทยานเขากระโดง และวัดพระพุทธบาทเขากระโดง จ.บุรีรัมย์","กฟฉ.3",1020.91,4083.62,0.51,2567,false],
[74,"ศาลเจ้าพ่อหลักเมืองเพชรบูรณ์ จ.เพชรบูรณ์","กฟน.3",null,null,null,2568,false],
[75,"วัดพระธาตุเรืองรอง จ.ศรีสะเกษ","กฟฉ.2",5273.16,21092.62,2.636,2568,false],
[76,"สะพานอุตตมานุสรณ์ (สะพานมอญ) จ.กาญจนบุรี","กฟก.3",null,null,null,2568,false],
[77,"พระบรมธาตุเจดีย์เทสรังสีญาณสัมปันโนอนุสรณ์","กฟต.2",null,null,null,2568,false],
].map(r=>({id:r[0],site:r[1],pea:r[2],kwh:r[3],baht:r[4],co2:r[5],year:r[6],star:r[7]}));

let DATA = FALLBACK_DATA.slice();

function getSupabaseClient(){
  if(!window.supabase || !window.isSupabaseConfigured || !window.isSupabaseConfigured()) return null;
  return window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY);
}

async function loadOnlineData(){
  const client=getSupabaseClient();
  if(!client) return false;
  const {data,error}=await client.from('projects').select('*').order('id',{ascending:true});
  if(error || !data){ console.warn('Supabase load failed:',error); return false; }
  DATA=data.map(d=>({id:d.id,site:d.site,province:d.province||'',pea:d.pea||'',kwh:d.kwh===null?null:Number(d.kwh),baht:d.baht===null?null:Number(d.baht),co2:d.co2===null?null:Number(d.co2),year:Number(d.project_year ?? d.year),star:!!d.star}));
  return true;
}

const fmt = n => n===null||n===undefined ? null : n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

// ============================================================
// ANALYTICS: แนวโน้มรายจังหวัด + สรุปรายภาค
// ============================================================

const REGION_NAMES = {
  'กฟน': 'ภาคเหนือ',
  'กฟฉ': 'ภาคตะวันออกเฉียงเหนือ',
  'กฟก': 'ภาคกลาง',
  'กฟต': 'ภาคใต้'
};

// ดึงชื่อจังหวัดจากชื่อสถานที่ เช่น "วัด... จ.เชียงใหม่"
function getProvince(site) {
  const m = site.match(/จ\.([^\s].*)$/);
  return m ? m[1].trim() : 'ไม่ระบุจังหวัด';
}

DATA.forEach(d => {
  d.province = getProvince(d.site);
  d.region = REGION_NAMES[d.pea.slice(0,3)] || 'ไม่ระบุภาค';
});

let ANALYTIC_YEARS = [...new Set(DATA.map(d => d.year))].sort((a,b)=>a-b);
let PROVINCES = [...new Set(DATA.map(d => d.province).filter(p => p && p !== 'ไม่ระบุจังหวัด'))].sort((a,b)=>a.localeCompare(b,'th'));
const REGIONS = ['ภาคเหนือ','ภาคตะวันออกเฉียงเหนือ','ภาคกลาง','ภาคใต้'];

const metricConfig = {
  kwh:  {label:'หน่วยไฟฟ้าที่ประหยัดได้', unit:'kWh/ปี', decimals:2},
  baht: {label:'ค่าไฟฟ้าที่ประหยัดได้', unit:'บาท/ปี', decimals:2},
  co2:  {label:'การลด CO₂', unit:'tCO₂eq/ปี', decimals:3},
  sites:{label:'จำนวนสถานที่ที่มีข้อมูล', unit:'สถานที่', decimals:0}
};

function aggregateByYear(rows, metric) {
  const out = {};
  rows.forEach(d => {
    const value = metric === 'sites' ? 1 : d[metric];
    if (value === null || value === undefined || Number.isNaN(Number(value))) return;
    out[d.year] = (out[d.year] || 0) + Number(value);
  });
  return out;
}

function fmtMetric(value, metric) {
  if (value === null || value === undefined) return '—';
  const cfg = metricConfig[metric];
  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: cfg.decimals,
    maximumFractionDigits: cfg.decimals
  }) + ' ' + cfg.unit;
}

function percentChange(current, previous) {
  if (previous === null || previous === undefined || previous === 0) return null;
  return ((current - previous) / Math.abs(previous)) * 100;
}

function changeText(current, previous, metric) {
  if (previous === null || previous === undefined) {
    return {text:'ยังไม่มีข้อมูลเปรียบเทียบ', cls:'neutral'};
  }
  const diff = current - previous;
  const pct = percentChange(current, previous);
  if (Math.abs(diff) < 1e-9) return {text:'คงที่ (0.00%)', cls:'neutral'};
  const direction = diff > 0 ? 'เพิ่มขึ้น' : 'ลดลง';
  return {
    text:`${direction} ${Math.abs(pct).toFixed(2)}%`,
    cls: diff > 0 ? 'up' : 'down'
  };
}

// ---------- จังหวัด ----------
const provinceFilter = document.getElementById('provinceFilter');
const provinceMetric = document.getElementById('provinceMetric');
const provinceTrendTable = document.getElementById('provinceTrendTable');
const provinceTrendSummary = document.getElementById('provinceTrendSummary');
let provinceChart = null;
let regionChart = null;

function refreshDerivedData(){
  DATA.forEach(d=>{
    if(!d.province) d.province=getProvince(d.site);
    d.region=REGION_NAMES[String(d.pea).slice(0,3)] || 'ไม่ระบุภาค';
  });
  ANALYTIC_YEARS=[...new Set(DATA.map(d=>Number(d.year)).filter(Boolean))].sort((a,b)=>a-b);
  PROVINCES=[...new Set(DATA.map(d=>d.province).filter(p=>p&&p!=='ไม่ระบุจังหวัด'))].sort((a,b)=>a.localeCompare(b,'th'));
  provinceFilter.innerHTML='';
  const placeholder=document.createElement('option');
  placeholder.value=''; placeholder.textContent='เลือกจังหวัด'; placeholder.selected=true; placeholder.disabled=true;
  provinceFilter.appendChild(placeholder);
  PROVINCES.forEach(p=>{const opt=document.createElement('option');opt.value=p;opt.textContent=p;provinceFilter.appendChild(opt);});
}

function renderProvinceTrend() {
  const province = provinceFilter.value;
  const metric = provinceMetric.value;

  // ก่อนเลือกจังหวัด ให้แสดงสถานะเริ่มต้น ไม่สร้างกราฟจากข้อมูลที่ไม่ใช่จังหวัด
  if (!province) {
    if (provinceChart) { provinceChart.destroy(); provinceChart = null; }
    provinceTrendTable.innerHTML = '';
    provinceTrendSummary.innerHTML = `
      <div class="trend-summary-title">สรุปแนวโน้ม: เลือกจังหวัด</div>
      <div class="trend-big">เลือกจังหวัด</div>
      <div class="trend-label">กรุณาเลือกจังหวัดจากรายการด้านบนเพื่อดูการเปลี่ยนแปลงรายปี</div>
      <div class="trend-small">เมื่อเลือกจังหวัดแล้ว ระบบจะแสดงกราฟเส้นและสรุปว่าข้อมูลเพิ่มขึ้นหรือลดลงในแต่ละปี</div>
    `;
    return;
  }

  const rows = DATA.filter(d => d.province === province);
  const totals = aggregateByYear(rows, metric);
  const labels = ANALYTIC_YEARS.map(y => String(y));
  const values = ANALYTIC_YEARS.map(y => totals[y] ?? null);

  const canvas = document.getElementById('provinceTrendChart');
  if (provinceChart) provinceChart.destroy();
  provinceChart = new Chart(canvas, {
    type:'line',
    data:{
      labels,
      datasets:[{
        label: metricConfig[metric].label,
        data: values,
        tension:.28,
        spanGaps:false,
        pointRadius:4,
        pointHoverRadius:6,
        borderWidth:2
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{
        legend:{display:true},
        tooltip:{callbacks:{
          label: ctx => ctx.parsed.y == null ? 'ไม่มีข้อมูล' : fmtMetric(ctx.parsed.y, metric)
        }}
      },
      scales:{
        x:{title:{display:true,text:'ปีโครงการ'}},
        y:{beginAtZero:true,title:{display:true,text:metricConfig[metric].unit}}
      }
    }
  });

  const valid = ANALYTIC_YEARS
    .map((year,i)=>({year,value:values[i]}))
    .filter(x=>x.value !== null);

  provinceTrendTable.innerHTML = ANALYTIC_YEARS.map((year,i)=>{
    const value = values[i];
    if (value === null) {
      return `<tr><td>${year}</td><td class="no-data">— ไม่มีข้อมูล</td><td class="no-data">—</td><td class="status-neutral">ไม่มีข้อมูล</td></tr>`;
    }
    const prev = [...valid].reverse().find(x=>x.year < year);
    const ch = changeText(value, prev?.value, metric);
    const arrow = ch.cls === 'up' ? '↑' : ch.cls === 'down' ? '↓' : '•';
    return `<tr>
      <td>${year}</td>
      <td class="num">${fmtMetric(value, metric)}</td>
      <td class="change ${ch.cls}">${ch.text}</td>
      <td class="status-${ch.cls}">${arrow} ${ch.cls==='up'?'เพิ่มขึ้น':ch.cls==='down'?'ลดลง':'คงที่'}</td>
    </tr>`;
  }).join('');

  const latest = valid[valid.length-1];
  const previous = valid.length > 1 ? valid[valid.length-2] : null;
  let summaryHtml = `
    <div class="trend-summary-title">สรุปแนวโน้ม: ${province}</div>
    <div class="trend-big">${latest ? fmtMetric(latest.value, metric) : 'ไม่มีข้อมูล'}</div>
    <div class="trend-label">ค่าล่าสุดที่มีข้อมูล (${latest ? 'ปี '+latest.year : '—'})</div>
  `;
  if (latest && previous) {
    const ch = changeText(latest.value, previous.value, metric);
    summaryHtml += `<div class="trend-badge ${ch.cls}">${ch.cls==='up'?'↑':ch.cls==='down'?'↓':'•'} ${ch.text} จากปี ${previous.year}</div>`;
  } else if (latest) {
    summaryHtml += `<div class="trend-badge neutral">มีข้อมูลสำหรับเปรียบเทียบ ${valid.length} ปี</div>`;
  }
  summaryHtml += `<div class="trend-small">หมายเหตุ: ปีที่ไม่มีข้อมูลจะแสดงเป็นช่องว่าง ไม่ถือว่าเป็นค่า 0 เพื่อป้องกันการตีความคลาดเคลื่อน</div>`;
  provinceTrendSummary.innerHTML = summaryHtml;
}

provinceFilter.addEventListener('change', renderProvinceTrend);
provinceMetric.addEventListener('change', renderProvinceTrend);

// ---------- รายภาค ----------
const regionMetric = document.getElementById('regionMetric');
const regionCards = document.getElementById('regionCards');

function renderRegionSummary() {
  const metric = regionMetric.value;
  const cardRows = REGIONS.map(region => {
    const rows = DATA.filter(d => d.region === region);
    const totals = aggregateByYear(rows, metric);
    const valid = Object.entries(totals).map(([year,value])=>({year:Number(year),value})).sort((a,b)=>a.year-b.year);
    const latest = valid[valid.length-1];
    const previous = valid.length > 1 ? valid[valid.length-2] : null;
    const change = latest && previous ? changeText(latest.value, previous.value, metric) : {text:'มีข้อมูลไม่พอสำหรับเปรียบเทียบ',cls:'neutral'};
    return {region, totals, latest, previous, change};
  });

  regionCards.innerHTML = cardRows.map(r => `
    <div class="region-card">
      <div class="region-card-name">${r.region}</div>
      <div class="region-card-value">${r.latest ? fmtMetric(r.latest.value, metric) : 'ไม่มีข้อมูล'}</div>
      <div class="region-card-year">ข้อมูลล่าสุด: ${r.latest ? 'ปี '+r.latest.year : '—'}</div>
      <div class="trend-badge ${r.change.cls}">${r.change.cls==='up'?'↑':r.change.cls==='down'?'↓':'•'} ${r.change.text}</div>
    </div>
  `).join('');

  const datasets = REGIONS.map(region => {
    const totals = aggregateByYear(DATA.filter(d=>d.region===region), metric);
    return {
      label:region,
      data:ANALYTIC_YEARS.map(y=>totals[y] ?? null),
      tension:.28,
      spanGaps:false,
      pointRadius:3,
      pointHoverRadius:5,
      borderWidth:2
    };
  });

  const canvas = document.getElementById('regionTrendChart');
  if (regionChart) regionChart.destroy();
  regionChart = new Chart(canvas, {
    type:'line',
    data:{labels:ANALYTIC_YEARS.map(String),datasets},
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{
        legend:{position:'bottom'},
        tooltip:{callbacks:{
          label:ctx => `${ctx.dataset.label}: ${ctx.parsed.y == null ? 'ไม่มีข้อมูล' : fmtMetric(ctx.parsed.y, metric)}`
        }}
      },
      scales:{
        x:{title:{display:true,text:'ปีโครงการ'}},
        y:{beginAtZero:true,title:{display:true,text:metricConfig[metric].unit}}
      }
    }
  });
}

regionMetric.addEventListener('change', renderRegionSummary);


function renderYearChart(){
  const yearTotals={};
  DATA.forEach(d=>{if(d.kwh!==null&&d.kwh!==undefined)yearTotals[d.year]=(yearTotals[d.year]||0)+Number(d.kwh);});
  const years=Object.keys(yearTotals).sort((a,b)=>Number(a)-Number(b));
  const maxVal=Math.max(...Object.values(yearTotals),1);
  const barsEl=document.getElementById('barsChart'); barsEl.innerHTML='';
  years.forEach(y=>{const v=yearTotals[y],h=Math.max(6,(v/maxVal)*150),col=document.createElement('div');col.className='bar-col';col.innerHTML=`<div class="bar-val">${Math.round(v).toLocaleString()}</div><div class="bar" style="height:${h}px" title="ปี ${y}: ${fmt(v)} kWh/ปี"></div><div class="bar-year">${y}</div>`;barsEl.appendChild(col);});
  const yf=document.getElementById('yearFilter'),current=yf.value;
  yf.innerHTML='<option value="">ทุกปี</option>'+years.map(y=>`<option value="${y}">ปี ${y}</option>`).join('');
  if(years.includes(current))yf.value=current;
}
function updateStats(){
  const sum=k=>DATA.reduce((a,d)=>a+(d[k]==null?0:Number(d[k])),0);
  document.getElementById('heroKwh').textContent=fmt(sum('kwh'));document.getElementById('statSites').textContent=DATA.length.toLocaleString('en-US');document.getElementById('statBaht').textContent=fmt(sum('baht'));document.getElementById('statCo2').textContent=sum('co2').toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const ys=DATA.map(d=>Number(d.year)).filter(Boolean);if(ys.length)document.getElementById('statYears').textContent=`${Math.min(...ys)}–${Math.max(...ys)}`;
}
let sortKey='id',sortDir=1;
function renderTable(){
  const q=document.getElementById('searchBox').value.trim().toLowerCase(),reg=document.getElementById('regionFilter').value,yr=document.getElementById('yearFilter').value;
  let rows=DATA.filter(d=>{const hay=(d.site+' '+(d.province||'')).toLowerCase();return(!q||hay.includes(q))&&(!reg||String(d.pea).startsWith(reg))&&(!yr||String(d.year)===yr);});
  rows.sort((a,b)=>{let av=a[sortKey],bv=b[sortKey];if(av==null)av=-Infinity;if(bv==null)bv=-Infinity;if(typeof av==='string')return sortDir*av.localeCompare(String(bv),'th');return sortDir*(Number(av)-Number(bv));});
  document.getElementById('rowCount').textContent=`แสดง ${rows.length} จาก ${DATA.length} สถานที่`;
  document.getElementById('tableBody').innerHTML=rows.map(d=>`<tr><td class="mono">${d.id}</td><td class="site">${d.star?'<span class="star">✦</span>':''}${d.site}</td><td><span class="tag">${d.pea}</span></td><td class="num">${d.kwh!==null?fmt(d.kwh):'<span class="no-data">— ไม่มีข้อมูล</span>'}</td><td class="num">${d.baht!==null?fmt(d.baht):'<span class="no-data">—</span>'}</td><td class="num">${d.co2!==null?Number(d.co2).toFixed(3):'<span class="no-data">—</span>'}</td><td class="mono">ปี ${d.year}</td></tr>`).join('');
}
async function initDashboard(){
  const online=await loadOnlineData();refreshDerivedData();updateStats();renderYearChart();renderTable();renderProvinceTrend();renderRegionSummary();
  document.body.classList.toggle('online-mode',online);const mode=document.getElementById('dataMode');if(mode)mode.textContent=online?'● ฐานข้อมูลออนไลน์':'● โหมดข้อมูลสำรอง';
}
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('searchBox').addEventListener('input',renderTable);document.getElementById('regionFilter').addEventListener('change',renderTable);document.getElementById('yearFilter').addEventListener('change',renderTable);
  document.querySelectorAll('thead th').forEach(th=>th.addEventListener('click',()=>{const key=th.dataset.key;if(sortKey===key)sortDir*=-1;else{sortKey=key;sortDir=1;}renderTable();}));
  initDashboard();
});
