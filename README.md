# Genius Picture Website

เว็บไซต์ HTML / CSS / JavaScript รันในเครื่องด้วย Node.js โดยไม่ต้องติดตั้ง dependencies

## เปิดเว็บไซต์

เปิด Terminal ในโฟลเดอร์ `C:\Storage\Codex\Geniuspicture` แล้วรัน:

```powershell
npm start
```

เข้า http://localhost:3000 และกด Ctrl+C ใน Terminal เพื่อหยุด

ใช้ `npm run dev` ได้เช่นกัน แก้ไฟล์แล้วรีเฟรชเบราว์เซอร์เพื่อดูผล

หากพอร์ต 3000 ถูกใช้งานอยู่:

```powershell
$env:PORT = '3001'
npm start
```

## แก้เนื้อหาและหน้าตา

- `site/dist/index.html` — โครงสร้างหน้าเว็บและข้อความทั่วไป
- `site/dist/style.css` — สี ฟอนต์ และการจัดวางบนคอมและมือถือ
- `site/dist/app.js` — ตัวคำนวณแพ็กเกจและปุ่มต่าง ๆ
- `Genius Picture Website Starter.txt` — ข้อมูลแพ็กเกจต้นฉบับ

หลังแก้ข้อมูลแพ็กเกจในไฟล์ต้นฉบับ รัน `npm run build` เพื่อสร้าง `site/dist/data.js` ใหม่

เว็บนี้เป็นหน้าโฆษณาและตัวคำนวณงบเบื้องต้น ปุ่มติดต่อเปิด LINE หรือโทรศัพท์ ไม่มีระบบรับฟอร์มหลังบ้าน

ฟอนต์โหลดจาก Google Fonts เมื่อออนไลน์ หากออฟไลน์จะใช้ฟอนต์สำรองของเครื่อง
