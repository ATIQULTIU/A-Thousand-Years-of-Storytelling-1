const $=id=>document.getElementById(id),art=$("art");
const S=String.raw;
const acts=[
["c. 100,000 BCE","I · Oral Mist","Stories live only in breath and memory. A storyteller leans into the firelight, the tale rising like smoke, shared by all and gone by dawn."],
["c. 3400 BCE · Sumer","II · Clay Tablet","In Uruk, scribes press reed wedges into wet clay. Cuneiform lets a debt, a law or a poem outlast the voice that spoke it."],
["c. 2500 BCE · Egypt","III · Papyrus Scroll","Reed pith is pressed, dried and glued into rolls. Words grow light enough to carry and long enough to unroll like a river."],
["c. 400 CE · Monasteries","IV · Monastic Codex","Monks fold the scroll into leaves, bind them in leather and gild the edges. Readers can finally leap to any page at will."],
["1450 · Mainz","V · Printing Press Matrix","Gutenberg's lead type: one letter, a thousand times over. Hand copying becomes a rhythm of ink, press and lift."],
["1920s · The Airwaves","VI · Radio Ether","The voice leaps back into the air. Glowing tubes carry it across invisible rings to a whole nation gathered around a cabinet."],
["1950s · The Living Room","VII · CRT Television","An electron beam paints phosphor line by line. The hearth returns as a family circles a flickering wooden window."],
["1980s →","VIII · Digital Terminal","Light becomes symbols becomes code. The story is text again: typed, networked, copied without end. What is the next vessel?"]];
const C=[["#1a1008","#b98550","#e8c48a",0],["#2a1810","#d08a5a","#f0b080",0],["#2b2416","#d9c48a","#fff0b8",1],["#1c120c","#b8925a","#ffd04a",3],["#15140f","#b3b0a4","#ffffff",3],["#120d08","#e0a040","#ff6a30",8],["#1a110a","#e5d7a8","#9dffb8",10],["#020a04","#2fe56e","#d0ffdc",12]];
const pad=(s,w)=>s.padEnd(w);
/* Act I: procedural embers + hearth */
let P=[];
function fire(t){
 const W=48,H=21,g=Array.from({length:H},()=>Array(W).fill(" "));
 for(let i=0;i<3;i++)P.push({x:24+(Math.random()-.5)*7,y:16,v:.12+Math.random()*.25,a:0,s:Math.random()*6});
 P=P.filter(q=>q.a<1).slice(-450);
 for(const q of P){q.a+=.01+q.v*.02;q.y-=q.v;q.x+=Math.sin(t*2+q.s)*.14;const x=q.x|0,y=q.y|0;if(y>=0&&x>=0&&x<W)g[y][x]="#*+:.,'"[Math.min(6,q.a*7|0)]}
 const put=(r,c,s)=>{for(let i=0;i<s.length;i++)if(s[i]!=" ")g[r][c+i]=s[i]};
 const fl=s=>s.replace(/[()]/g,m=>Math.random()<.2?(m=="("?")":"("):m);
 put(16,17,fl("    ) (  ) (  "));put(17,17,fl("  ( )\\ ) )\\ ( "));put(18,17,fl(" _)_(_(_)_)_(_ "));put(19,17,"/\\/\\/\\/\\/\\/\\/\\/");
 const arm=Math.sin(t*2)>0?"\\o/":" o/";
 put(17,5,arm);put(18,6,"|");put(19,5,"/ \\");put(17,38," o");put(18,37,"/|\\");put(19,37,"/ \\");
 put(20,0,"~ ".repeat(24));
 return g.map(r=>r.join("")).join("\n");
}
const rain=(w,h,t,ch="01<>/=+*#$%&")=>{const o=[];for(let r=0;r<h;r++){let l="";for(let c=0;c<w;c++){const s=.5+((c*7919)%13)/13,d=((t*s*5+c*5)%(h+8))-r;l+=d>=0&&d<6?(d<1?"<b>"+ch[(c*3+r+(t*8|0))%ch.length]+"</b>":ch[(c+r*3+(t*3|0))%ch.length]):" "}o.push(l)}return o};
const plasma=(w,h,t)=>{const o=[];for(let r=0;r<h;r++){let l="";for(let c=0;c<w;c++){const v=(Math.sin(c*.3+t*2)+Math.sin(r*.9-t*3)+Math.sin((c+r)*.2+t)+3)/6;l+=" .:-=+*#%@"[Math.min(9,v*10|0)]}o.push(l)}return o};
const box=(top,rows,bot)=>top.concat(rows,bot).join("\n");
const A=[
fire,
(t,p)=>p<.25?S`
        . : '  .
     : * # * : ' .
   . ' * # # * : ,
      ' : * : .`:p<.45?S`
    .-=#####=-.
  .=###########=.
   '-=#######=-'`:S`
   _.--------------------------._
  /  Y>- ^^ >Y- >>| Y>-  ^ >-Y   \
 |  >>- Y^  >-Y  ^^ >Y-  Y>>  -   |
 |  Y>  >-- ^Y>  >>- Y^  >-Y  ^^  |
 |  ^^ Y>-  >Y-  ^ >>  Y>-  Y^>   |
  \  >-Y ^^  Y>>  >-  ^Y>  >Y-   /
   '-._______________________.-'
   a scribe presses a reed:  o--->  Y>`,
(t,p)=>p<.3?S`
 ______________________
|  Y>- ^^ >Y-  >>| Y>- |
|______________________|`:p<.6?S`
 ______________________
|  ~~~~~~~~~~~~~~~~~~  |
|  ~~ ---- ~~ -----    |
(~~~~~~~~~~~~~~~~~~~~~~)`:S`
 .--.______________________.--.
(  O|  ~~~~~~~~~~~~~~~~~~  |O  )
 '--|  ~~ ---- ~~ ----- ~  |--'
    |  ~~~~ ------ ~~~~~  |
 .--|  ~ ------ ~~~~ ---  |--.
(  O|  ~~~~~~~~~~~~~~~~~~  |O  )
 '--'______________________'--'`,
(t,p)=>p<.55?S`
   .------------------.
  /| ################ |
 / | #+==+====+==+  # |
|  | # | CODEX    | # |
|  | # +==+====+==+ # |
|  | ################ |
 \ |__________________|
  \|<b>==================</b>|`:S`
   .------------.------------.
  / ~~~~~~~~~~~~ | ~~~~~~~~~~~ \
 /  ~ <b>A</b>a ~~~~~~~ | ~~~~ ~~~~~~ \
|=  ~~~~~~~~~~~~ | ~~~~~~~~~~  =|
|=  ~~~ ~~~~~~~~ | ~~~~~ ~~~~  =|
|=  ~~~~~~~~ ~~~ | ~~~~~~~~~~  =|
 \<b>=</b>____________|____________<b>=</b>/
   '-------------'-------------'`,
(t)=>{const d=(t%1.6)<.8,L="ABCDEFG".split("").map(c=>"|"+c+"|").join(" ");return d?S`
   ====[ PLATEN ]====      o
         ||  ||           /|\__
   .-. .-. .-. .-. .-. .-. .-.  \
   `+L.replace(/\|/g,"|")+S`
   '-' '-' '-' '-' '-' '-' '-'
 ===============================
   . . . . . . . . . . . . .`:S`
         ||  ||           \o
   ====[ PLATEN ]====     /|\
   .-. .-. .-. .-. .-. .-. .-.
   `+L+S`
 =====<b>#########################</b>
   <b>A B C D E F G</b>  printed page`},
(t)=>S`
      <b>(o)</b>     <b>(o)</b>     <b>(o)</b>
     ._|_______|_______|_________.
    /  .-------.  ::::::::::::    \
   |  /  ))))   \ ::::::::::::    |
   |  \  ((((   / ::::::::::::    |
   |   '-------'   ====  ====     |
   |   (o)   (o)   ----------     |
    \_____________________________/
      ||                      ||`,
(t)=>{const sc=plasma(26,6,t).map(l=>"  | |"+l+"| |"+(Math.random()<0?"":""));return box([S`      \      /`,S`       \____/`,"  .-------------------------------.","  | .---------------------------. | "],sc.map((l,i)=>l+(i==1?" (o)":i==3?" (o)":"")),["  | '---------------------------' |","  '-------------------------------'","     ||                    ||"])},
(t)=>{const w=30,rows=rain(w,8,t);const s="> ONCE UPON A TIME_";rows[0]=("<b>"+s.slice(0,Math.floor(t*6)%(s.length+8))+"</b>").padEnd(w+7);
 return ["   .----------------------------------.","   | .------------------------------. |"].concat(rows.map(l=>"   | |"+l+"| |"),["   | '------------------------------' |","   '---.--------------------------.---'","      /____________________________\\","     [==========]   ______  (o) (o)"]).join("\n")}
];
const bar=$("bar");bar.innerHTML=acts.map((a,i)=>"<span>"+(i+1)+"</span>").join("");
const cap=$("cap"),B=document.body;let cur=-1;
function setAct(i){cur=i;const c=C[i],s=B.style;
 s.setProperty("--bg",c[0]);s.setProperty("--fg",c[1]);s.setProperty("--hi",c[2]);s.setProperty("--glow",c[3]+"px");
 B.classList.toggle("rough",i<4);B.classList.toggle("r",i==5);B.classList.toggle("s",i>=6);
 [...bar.children].forEach((e,k)=>e.classList.toggle("on",k==i));
 cap.style.opacity=0;setTimeout(()=>{$("cy").textContent=acts[i][0];$("ct").textContent=acts[i][1];$("cd").textContent=acts[i][2];cap.style.opacity=1},350);
 art.classList.remove("m");void art.offsetWidth;art.classList.add("m");
 $("hint").style.opacity=i?0:.6}
function loop(ms){const h=innerHeight,f=scrollY/h,i=Math.max(0,Math.min(7,Math.round(f))),p=Math.max(0,Math.min(1,f-i+.5));
 if(i!==cur)setAct(i);art.innerHTML=A[i](ms/1000,p);requestAnimationFrame(loop)}
requestAnimationFrame(loop);