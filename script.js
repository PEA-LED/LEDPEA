/* PEA LED Dashboard - Online Supabase version */
const FALLBACK_DATA = [
  {
    "id": 1,
    "site": "วัดพระธาตุพนม วรมหาวิหาร จ.นครพนม",
    "pea": "กฟฉ.1",
    "kwh": 17640.0,
    "baht": 70560.0,
    "co2": 9.019,
    "year": 2556,
    "star": true
  },
  {
    "id": 2,
    "site": "วัดพระธาตุหริภุญชัย วรมหาวิหาร จ.ลำพูน",
    "pea": "กฟน.1",
    "kwh": 29991.6,
    "baht": 119966.4,
    "co2": 15.335,
    "year": 2556,
    "star": true
  },
  {
    "id": 3,
    "site": "วัดพะโคะ (วัดราชประดิษฐาน) จ.สงขลา",
    "pea": "กฟต.3",
    "kwh": 7407.0,
    "baht": 29628.0,
    "co2": 3.787,
    "year": 2556,
    "star": true
  },
  {
    "id": 4,
    "site": "วัดห้วยปลากั้ง จ.เชียงราย",
    "pea": "กฟน.1",
    "kwh": 180.0,
    "baht": 720.0,
    "co2": 0.092,
    "year": 2556,
    "star": false
  },
  {
    "id": 5,
    "site": "วัดพระธาตุดอยกองมู จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2557,
    "star": false
  },
  {
    "id": 6,
    "site": "วัดก้ำก่อ จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": 900.0,
    "baht": 3600.0,
    "co2": 0.46,
    "year": 2557,
    "star": false
  },
  {
    "id": 7,
    "site": "วัดพระนอน จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": 1015.2,
    "baht": 4060.8,
    "co2": 0.519,
    "year": 2557,
    "star": false
  },
  {
    "id": 8,
    "site": "วัดจองกลาง จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2557,
    "star": false
  },
  {
    "id": 9,
    "site": "วัดจองคำ จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": 720.0,
    "baht": 2880.0,
    "co2": 0.368,
    "year": 2557,
    "star": false
  },
  {
    "id": 10,
    "site": "วัดหัวเวียง จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2557,
    "star": false
  },
  {
    "id": 11,
    "site": "อนุสาวรีย์พญาสิงหนาทราชา จ.แม่ฮ่องสอน",
    "pea": "กฟน.1",
    "kwh": 3240.0,
    "baht": 12960.0,
    "co2": 1.657,
    "year": 2557,
    "star": false
  },
  {
    "id": 12,
    "site": "วัดพระธาตุศรีสองรัก อ.ด่านซ้าย จ.เลย",
    "pea": "กฟฉ.1",
    "kwh": 11113.2,
    "baht": 44452.8,
    "co2": 5.682,
    "year": 2557,
    "star": false
  },
  {
    "id": 13,
    "site": "วัดพระธาตุเชิงชุม วรวิหาร จ.สกลนคร",
    "pea": "กฟฉ.1",
    "kwh": 14076.0,
    "baht": 56304.0,
    "co2": 7.197,
    "year": 2558,
    "star": false
  },
  {
    "id": 14,
    "site": "มัสยิดกลาง จ.ปัตตานี",
    "pea": "กฟต.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2558,
    "star": false
  },
  {
    "id": 15,
    "site": "วัดโสธรวรารามวรวิหาร จ.ฉะเชิงเทรา",
    "pea": "กฟก.2",
    "kwh": 19440.0,
    "baht": 77760.0,
    "co2": 9.94,
    "year": 2559,
    "star": false
  },
  {
    "id": 16,
    "site": "วัดพระบรมธาตุไชยาราชวรวิหาร จ.สุราษฎร์ธานี",
    "pea": "กฟต.2",
    "kwh": 2700.0,
    "baht": 10800.0,
    "co2": 1.381,
    "year": 2559,
    "star": false
  },
  {
    "id": 17,
    "site": "ศาลเจ้าแม่ลิ้มกอเหนี่ยว จ.ปัตตานี",
    "pea": "กฟต.3",
    "kwh": 9257.4,
    "baht": 37029.6,
    "co2": 4.733,
    "year": 2559,
    "star": false
  },
  {
    "id": 18,
    "site": "วัดไชยธาราราม (วัดฉลอง) จ.ภูเก็ต",
    "pea": "กฟต.2",
    "kwh": 4338.0,
    "baht": 17352.0,
    "co2": 2.218,
    "year": 2559,
    "star": false
  },
  {
    "id": 19,
    "site": "อุทยานประวัติศาสตร์พระนครศรีอยุธยา (วัดมงคลบพิตร) จ.พระนครศรีอยุธยา",
    "pea": "กฟก.1",
    "kwh": 4399.2,
    "baht": 17596.8,
    "co2": 2.249,
    "year": 2559,
    "star": false
  },
  {
    "id": 20,
    "site": "วัดพระธาตุนาดูน จ.มหาสารคาม",
    "pea": "กฟฉ.2",
    "kwh": 4986.0,
    "baht": 19944.0,
    "co2": 2.549,
    "year": 2559,
    "star": false
  },
  {
    "id": 21,
    "site": "พระพุทธมหาธรรมราชา พุทธอุทยานเพชรบุระ จ.เพชรบูรณ์",
    "pea": "กฟน.3",
    "kwh": 4723.2,
    "baht": 18892.8,
    "co2": 2.415,
    "year": 2559,
    "star": false
  },
  {
    "id": 22,
    "site": "วัดพระปฐมเจดีย์ ราชวรมหาวิหาร จ.นครปฐม",
    "pea": "กฟก.3",
    "kwh": 3618.0,
    "baht": 14472.0,
    "co2": 1.85,
    "year": 2559,
    "star": false
  },
  {
    "id": 23,
    "site": "วัดมหาธาตุวรวิหาร จ.เพชรบุรี",
    "pea": "กฟต.1",
    "kwh": 14099.4,
    "baht": 56397.6,
    "co2": 7.209,
    "year": 2559,
    "star": false
  },
  {
    "id": 24,
    "site": "วัดพระธาตุผาซ่อนแก้ว อ.เขาค้อ จ.เพชรบูรณ์",
    "pea": "กฟน.3",
    "kwh": 1260.0,
    "baht": 5040.0,
    "co2": 0.644,
    "year": 2559,
    "star": false
  },
  {
    "id": 25,
    "site": "วัดพระบรมธาตุ พระอารามหลวง จ.กำแพงเพชร",
    "pea": "กฟน.2",
    "kwh": 10080.0,
    "baht": 40320.0,
    "co2": 5.154,
    "year": 2559,
    "star": false
  },
  {
    "id": 26,
    "site": "วัดพระธาตุช่อแฮ จ.แพร่",
    "pea": "กฟน.2",
    "kwh": 12488.4,
    "baht": 49953.6,
    "co2": 6.385,
    "year": 2559,
    "star": false
  },
  {
    "id": 27,
    "site": "วัดพระบรมธาตุบ้านตาก จ.ตาก",
    "pea": "กฟน.2",
    "kwh": 9187.2,
    "baht": 36748.8,
    "co2": 5.418,
    "year": 2559,
    "star": false
  },
  {
    "id": 28,
    "site": "วัดพระธาตุหนองแวง จ.ขอนแก่น",
    "pea": "กฟฉ.1",
    "kwh": 56946.24,
    "baht": 227784.96,
    "co2": 33.581,
    "year": 2559,
    "star": false
  },
  {
    "id": 29,
    "site": "พระธาตุเรณู จ.นครพนม",
    "pea": "กฟฉ.1",
    "kwh": 24001.2,
    "baht": 96004.8,
    "co2": 12.272,
    "year": 2560,
    "star": false
  },
  {
    "id": 30,
    "site": "วัดพระธาตุหนองบัว จ.อุบลราชธานี",
    "pea": "กฟฉ.2",
    "kwh": 45956.16,
    "baht": 183824.64,
    "co2": 27.1,
    "year": 2560,
    "star": true
  },
  {
    "id": 31,
    "site": "ลานอนุสาวรีย์ท้าวสุรนารี (ย่าโม) จ.นครราชสีมา",
    "pea": "กฟฉ.3",
    "kwh": 13219.2,
    "baht": 52876.8,
    "co2": 7.795,
    "year": 2560,
    "star": false
  },
  {
    "id": 32,
    "site": "พระธาตุแช่แห้ง (พระธาตุประจำปีเถาะ) จ.น่าน",
    "pea": "กฟน.2",
    "kwh": 16044.0,
    "baht": 64177.0,
    "co2": 9.461,
    "year": 2561,
    "star": false
  },
  {
    "id": 33,
    "site": "วัดเกตุการาม จ.เชียงใหม่",
    "pea": "กฟน.1",
    "kwh": 34728.0,
    "baht": 138914.0,
    "co2": 20.5,
    "year": 2561,
    "star": false
  },
  {
    "id": 34,
    "site": "วัดร่อยพระพุทธบาทภูมโนรมย์ จ.มุกดาหาร",
    "pea": "กฟฉ.2",
    "kwh": 63936.0,
    "baht": 223776.0,
    "co2": 75.0,
    "year": 2561,
    "star": true
  },
  {
    "id": 35,
    "site": "องค์พระพุทธศรีสัพพัญญู จ.นครสวรรค์",
    "pea": "กฟน.3",
    "kwh": 10588.0,
    "baht": 42354.0,
    "co2": 6.24,
    "year": 2561,
    "star": false
  },
  {
    "id": 36,
    "site": "ศาลกรมหลวงชุมพร เขตอุดมศักดิ์ จ.ชุมพร",
    "pea": "กฟต.1",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2561,
    "star": false
  },
  {
    "id": 37,
    "site": "วัดห้วยมงคล จ.ประจวบคีรีขันธ์",
    "pea": "กฟต.1",
    "kwh": 19802.0,
    "baht": 80208.0,
    "co2": 11.1,
    "year": 2561,
    "star": false
  },
  {
    "id": 38,
    "site": "วัดเขาดีสลัก จ.สุพรรณบุรี",
    "pea": "กฟก.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2561,
    "star": false
  },
  {
    "id": 39,
    "site": "พระธาตุลำปางหลวง (พระธาตุประจำปีฉลู) จ.ลำปาง",
    "pea": "กฟน.1",
    "kwh": 23616.0,
    "baht": 94464.0,
    "co2": 13.926,
    "year": 2561,
    "star": false
  },
  {
    "id": 40,
    "site": "วัดดวงดี จ.เชียงใหม่",
    "pea": "กฟน.1",
    "kwh": 8957.0,
    "baht": 35827.0,
    "co2": 6.967,
    "year": 2561,
    "star": false
  },
  {
    "id": 41,
    "site": "วัดราษฎร์บูรณะ (วัดช้างให้) จ.ปัตตานี",
    "pea": "กฟต.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2561,
    "star": false
  },
  {
    "id": 42,
    "site": "มัสยิดกรือเซะ และสุสานเจ้าแม่ลิ้มกอเหนี่ยว จ.ปัตตานี",
    "pea": "กฟต.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2561,
    "star": false
  },
  {
    "id": 43,
    "site": "วัดป่าจันทราวาส จ.อุบลราชธานี",
    "pea": "กฟฉ.2",
    "kwh": 56880.0,
    "baht": 227520.0,
    "co2": 33.54,
    "year": 2562,
    "star": true
  },
  {
    "id": 44,
    "site": "วิหารเซียน จ.ชลบุรี",
    "pea": "กฟก.2",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2562,
    "star": false
  },
  {
    "id": 45,
    "site": "วัดพระสิงห์ จ.เชียงใหม่",
    "pea": "กฟน.1",
    "kwh": 3706.0,
    "baht": 14826.0,
    "co2": 2.186,
    "year": 2562,
    "star": false
  },
  {
    "id": 46,
    "site": "วัดพระพุทธบาทราชวรมหาวิหาร จ.สระบุรี",
    "pea": "กฟก.1",
    "kwh": 12592.0,
    "baht": 50371.0,
    "co2": 7.4,
    "year": 2562,
    "star": false
  },
  {
    "id": 47,
    "site": "วัดบูรพาภิราม จ.ร้อยเอ็ด",
    "pea": "กฟฉ.2",
    "kwh": 28800.0,
    "baht": 100800.0,
    "co2": 14.5,
    "year": 2562,
    "star": false
  },
  {
    "id": 48,
    "site": "พระบรมราชานุสาวรีย์ พระบาทสมเด็จพระพุทธยอดฟ้าฯ",
    "pea": "กฟฉ.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2562,
    "star": false
  },
  {
    "id": 49,
    "site": "วัดไพรพัฒนา จ.ศรีสะเกษ",
    "pea": "กฟฉ.2",
    "kwh": 13975.0,
    "baht": 55900.0,
    "co2": 8.2,
    "year": 2562,
    "star": false
  },
  {
    "id": 50,
    "site": "วัดพระธาตุแหลมสัก จ.กระบี่",
    "pea": "กฟต.2",
    "kwh": 7980.0,
    "baht": 32000.0,
    "co2": 1.708,
    "year": 2562,
    "star": true
  },
  {
    "id": 51,
    "site": "วัดโพธิ์เสด็จ จ.นครศรีธรรมราช",
    "pea": "กฟต.2",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2562,
    "star": true
  },
  {
    "id": 52,
    "site": "วัดธาตุน้อยศรีบุญเรือง จ.นครพนม",
    "pea": "กฟฉ.1",
    "kwh": 5462.0,
    "baht": 21844.9,
    "co2": 2.7,
    "year": 2563,
    "star": false
  },
  {
    "id": 53,
    "site": "วัดธาตุน้อย จ.นครศรีธรรมราช",
    "pea": "กฟต.2",
    "kwh": 6480.0,
    "baht": 25920.0,
    "co2": 3.2,
    "year": 2563,
    "star": true
  },
  {
    "id": 54,
    "site": "วัดเขาสุวรรณประดิษฐ์ จ.สุราษฎร์ธานี",
    "pea": "กฟต.2",
    "kwh": 9105.0,
    "baht": 34600.0,
    "co2": 4.5,
    "year": 2563,
    "star": false
  },
  {
    "id": 55,
    "site": "วัดปงท่าข้าม จ.แพร่",
    "pea": "กฟน.2",
    "kwh": 24774.75,
    "baht": 99099.0,
    "co2": 14.1,
    "year": 2563,
    "star": true
  },
  {
    "id": 56,
    "site": "วัดพระศรีรัตนมหาธาตุ วรมหาวิหาร จ.พิษณุโลก",
    "pea": "กฟน.2",
    "kwh": 21100.0,
    "baht": 84520.0,
    "co2": 11.34,
    "year": 2563,
    "star": false
  },
  {
    "id": 57,
    "site": "วัดเขาพระใหญ่ พัทยา จ.ชลบุรี",
    "pea": "กฟก.2",
    "kwh": 3800.0,
    "baht": 15202.0,
    "co2": 2.06,
    "year": 2563,
    "star": false
  },
  {
    "id": 58,
    "site": "วัดมหาธาตุ จ.ราชบุรี",
    "pea": "กฟต.1",
    "kwh": 9100.0,
    "baht": 36401.0,
    "co2": 7.2,
    "year": 2563,
    "star": false
  },
  {
    "id": 59,
    "site": "วัดห้วยแก้ว จ.ลพบุรี",
    "pea": "กฟน.3",
    "kwh": 21100.0,
    "baht": 99592.0,
    "co2": 2.6,
    "year": 2564,
    "star": false
  },
  {
    "id": 60,
    "site": "วัดพุทธนิมิต จ.กาฬสินธุ์",
    "pea": "กฟฉ.2",
    "kwh": 28800.0,
    "baht": 155381.76,
    "co2": 16.983,
    "year": 2564,
    "star": false
  },
  {
    "id": 61,
    "site": "วัดละหารไร่ จ.ระยอง",
    "pea": "กฟก.2",
    "kwh": 7786.0,
    "baht": 31147.0,
    "co2": 4.592,
    "year": 2564,
    "star": false
  },
  {
    "id": 62,
    "site": "วัดประดู่ พระอารามหลวง จ.สมุทรสงคราม",
    "pea": "กฟต.1",
    "kwh": 8604.0,
    "baht": 40610.88,
    "co2": 4.29,
    "year": 2564,
    "star": false
  },
  {
    "id": 63,
    "site": "วัดเทพนิมิตสุดเขตสยาม จ.เชียงราย",
    "pea": "กฟน.1",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2565,
    "star": false
  },
  {
    "id": 64,
    "site": "วัดคุณพุ่ม จ.พิจิตร",
    "pea": "กฟน.2",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2565,
    "star": false
  },
  {
    "id": 65,
    "site": "วัดมงคลโกวิทาราม จ.อุบลราชธานี",
    "pea": "กฟฉ.2",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2565,
    "star": false
  },
  {
    "id": 66,
    "site": "วัดพระเจดีย์แหลมสอ จ.สุราษฎร์ธานี",
    "pea": "กฟต.2",
    "kwh": 5110.56,
    "baht": 24121.84,
    "co2": 3.014,
    "year": 2565,
    "star": false
  },
  {
    "id": 67,
    "site": "วัดพระธาตุบังพวน จ.หนองคาย",
    "pea": "กฟฉ.1",
    "kwh": 3456.0,
    "baht": 13824.0,
    "co2": 2.038,
    "year": 2565,
    "star": false
  },
  {
    "id": 68,
    "site": "วัดศรีจำปาชนบท จ.สกลนคร",
    "pea": "กฟฉ.1",
    "kwh": 2872.0,
    "baht": 11491.2,
    "co2": 1.694,
    "year": 2565,
    "star": false
  },
  {
    "id": 69,
    "site": "วัดศรีทรงธรรม จ.บึงกาฬ",
    "pea": "กฟฉ.1",
    "kwh": 26592.0,
    "baht": 125514.2,
    "co2": 17.22,
    "year": 2565,
    "star": false
  },
  {
    "id": 70,
    "site": "วัดดอนสัก จ.สุราษฎร์ธานี",
    "pea": "กฟต.2",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2566,
    "star": false
  },
  {
    "id": 71,
    "site": "วัดเซกาเจติยาราม จ.บึงกาฬ",
    "pea": "กฟฉ.1",
    "kwh": 1000.1,
    "baht": 4000.4,
    "co2": 0.5,
    "year": 2566,
    "star": false
  },
  {
    "id": 72,
    "site": "วัดใหญ่ชัยมงคล จ.พระนครศรีอยุธยา",
    "pea": "กฟก.1",
    "kwh": 2623.62,
    "baht": 10494.48,
    "co2": 1.312,
    "year": 2567,
    "star": false
  },
  {
    "id": 73,
    "site": "วนอุทยานเขากระโดง และวัดพระพุทธบาทเขากระโดง จ.บุรีรัมย์",
    "pea": "กฟฉ.3",
    "kwh": 1020.91,
    "baht": 4083.62,
    "co2": 0.51,
    "year": 2567,
    "star": false
  },
  {
    "id": 74,
    "site": "ศาลเจ้าพ่อหลักเมืองเพชรบูรณ์ จ.เพชรบูรณ์",
    "pea": "กฟน.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2568,
    "star": false
  },
  {
    "id": 75,
    "site": "วัดพระธาตุเรืองรอง จ.ศรีสะเกษ",
    "pea": "กฟฉ.2",
    "kwh": 5273.16,
    "baht": 21092.62,
    "co2": 2.636,
    "year": 2568,
    "star": false
  },
  {
    "id": 76,
    "site": "สะพานอุตตมานุสรณ์ (สะพานมอญ) จ.กาญจนบุรี",
    "pea": "กฟก.3",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2568,
    "star": false
  },
  {
    "id": 77,
    "site": "พระบรมธาตุเจดีย์เทสรังสีญาณสัมปันโนอนุสรณ์",
    "pea": "กฟต.2",
    "kwh": null,
    "baht": null,
    "co2": null,
    "year": 2568,
    "star": false
  }
];

let DATA = FALLBACK_DATA.slice();

const fmt = n => n===null || n===undefined ? null : Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

function getSupabaseClient(){
  if(!window.supabase || !window.isSupabaseConfigured || !window.isSupabaseConfigured()) return null;
  return window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_PUBLISHABLE_KEY);
}

async function loadOnlineData(){
  const client=getSupabaseClient();
  if(!client) return false;
  const {data,error}=await client.from('projects').select('*').order('id',{ascending:true});
  if(error || !data){
    console.warn('Supabase load failed:',error);
    return false;
  }
  DATA=data.map(d=>({id:d.id,site:d.site,province:d.province||'',pea:d.pea,kwh:d.kwh===null?null:Number(d.kwh),baht:d.baht===null?null:Number(d.baht),co2:d.co2===null?null:Number(d.co2),year:d.project_year,star:!!d.star}));
  return true;
}

function updateStats(){
  const sum=(key)=>DATA.reduce((a,d)=>a+(d[key]===null?0:Number(d[key])),0);
  const kwh=sum('kwh'), baht=sum('baht'), co2=sum('co2');
  const years=DATA.map(d=>Number(d.year)).filter(Boolean);
  document.getElementById('heroKwh').textContent=fmt(kwh);
  document.getElementById('statSites').textContent=DATA.length.toLocaleString('en-US');
  document.getElementById('statBaht').textContent=fmt(baht);
  document.getElementById('statCo2').textContent=co2.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  if(years.length) document.getElementById('statYears').textContent=`${Math.min(...years)}–${Math.max(...years)}`;
}

function renderYearChart(){
  const yearTotals={};
  DATA.forEach(d=>{if(d.kwh!==null) yearTotals[d.year]=(yearTotals[d.year]||0)+Number(d.kwh);});
  const years=Object.keys(yearTotals).sort();
  const maxVal=Math.max(...Object.values(yearTotals),1);
  const barsEl=document.getElementById('barsChart');
  barsEl.innerHTML='';
  years.forEach(y=>{
    const v=yearTotals[y];
    const h=Math.max(6,(v/maxVal)*150);
    const col=document.createElement('div'); col.className='bar-col';
    col.innerHTML=`<div class="bar-val">${Math.round(v).toLocaleString()}</div><div class="bar" style="height:${h}px" title="ปี ${y}: ${fmt(v)} kWh/ปี"></div><div class="bar-year">${y}</div>`;
    barsEl.appendChild(col);
  });
  const yearFilter=document.getElementById('yearFilter');
  yearFilter.innerHTML='<option value="">ทุกปี</option>' + years.map(y=>`<option value="${y}">ปี ${y}</option>`).join('');
}

let sortKey='id', sortDir=1;
function render(){
  const q=document.getElementById('searchBox').value.trim().toLowerCase();
  const reg=document.getElementById('regionFilter').value;
  const yr=document.getElementById('yearFilter').value;
  let rows=DATA.filter(d=>{
    const hay=(d.site+' '+(d.province||'')).toLowerCase();
    if(q && !hay.includes(q)) return false;
    if(reg && !String(d.pea).startsWith(reg)) return false;
    if(yr && String(d.year)!==yr) return false;
    return true;
  });
  rows.sort((a,b)=>{
    let av=a[sortKey],bv=b[sortKey];
    if(av===null || av===undefined) av=-Infinity;
    if(bv===null || bv===undefined) bv=-Infinity;
    if(typeof av==='string') return sortDir*av.localeCompare(String(bv),'th');
    return sortDir*(Number(av)-Number(bv));
  });
  document.getElementById('rowCount').textContent=`แสดง ${rows.length} จาก ${DATA.length} สถานที่`;
  document.getElementById('tableBody').innerHTML=rows.map(d=>`
    <tr>
      <td class="mono" data-label="ลำดับ">${d.id}</td>
      <td class="site" data-label="สถานที่">${d.star?'<span class="star">✦</span>':''}${d.site}</td>
      <td data-label="กฟข."><span class="tag">${d.pea}</span></td>
      <td class="num" data-label="kWh ลดลง/ปี">${d.kwh!==null?fmt(d.kwh):'<span class="no-data">— ไม่มีข้อมูล</span>'}</td>
      <td class="num" data-label="บาท/ปี">${d.baht!==null?fmt(d.baht):'<span class="no-data">—</span>'}</td>
      <td class="num" data-label="CO₂ (tCO2eq/ปี)">${d.co2!==null?Number(d.co2).toFixed(3):'<span class="no-data">—</span>'}</td>
      <td class="mono" data-label="ปีโครงการ">ปี ${d.year}</td>
    </tr>`).join('');
}

async function init(){
  const online=await loadOnlineData();
  document.body.classList.toggle('online-mode',online);
  updateStats();
  renderYearChart();
  render();
  document.getElementById('dataMode').textContent=online?'● ฐานข้อมูลออนไลน์':'● โหมดข้อมูลสำรอง';
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('searchBox').addEventListener('input',render);
  document.getElementById('regionFilter').addEventListener('change',render);
  document.getElementById('yearFilter').addEventListener('change',render);
  document.querySelectorAll('thead th').forEach(th=>th.addEventListener('click',()=>{
    const key=th.dataset.key; if(sortKey===key) sortDir*=-1; else {sortKey=key;sortDir=1;} render();
  }));
  init();
});
