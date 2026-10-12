import fs from 'node:fs';
const raw=fs.readFileSync(new URL('../Genius Picture Website Starter.txt',import.meta.url),'utf8').replace(/\r/g,'');
const groups=[[],[],[]];let group=-1,item;
for(const line of raw.split('\n').map(x=>x.trim())){
 if(/^1\. Website Packages$/.test(line)){group=0;continue}
 if(/^2\. Maintenance —/.test(line)){group=1;continue}
 if(/^3\. Add-ons —/.test(line)){group=2;continue}
 if(group<0)continue;
 const match=line.match(/^(.+?) — ฿([\d,]+)(\/ปี)?$/);
 if(match){item={name:match[1],price:Number(match[2].replace(/,/g,'')),features:[],notes:[]};groups[group].push(item)}
 else if(item&&line.startsWith('• '))item.features.push(line.slice(2));
 else if(item&&line)item.notes.push(line);
}
if(groups.map(x=>x.length).join(',')!=='4,3,3')throw Error('Package data mismatch');
fs.mkdirSync(new URL('dist/',import.meta.url),{recursive:true});
fs.writeFileSync(new URL('dist/data.js',import.meta.url),'window.SITE_DATA='+JSON.stringify({packages:groups[0],maintenance:groups[1],addons:groups[2]})+';\n');
console.log('Verified and generated all 4 packages, 3 maintenance plans, and 3 add-ons from original brief.');
