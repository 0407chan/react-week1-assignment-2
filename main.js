(()=>{function n(n,e,...t){const u=document.createElement(n);return Object.entries(e||{}).forEach((([n,e])=>{u[n.toLowerCase()]=e})),t.flat().forEach((n=>{n instanceof Node?u.appendChild(n):u.appendChild(document.createTextNode(n))})),u}!function e({result:t=[0]}){function u(){return Number.isInteger(t.slice(-1)[0])}const r=n("div",null,n("p",null,"간단 계산기"),n("p",null,function(){const n=[...t].reverse();return Number.isInteger(n[0])?n[0]:n[1]}()),n("p",null,[1,2,3,4,5,6,7,8,9,0].map((r=>n("button",{type:"button",onClick:()=>function({number:n}){if("="===t.slice(-1)[0])return void e({result:[n]});const r=function({newResult:n,number:e}){return u()?n.map(((t,u)=>u===n.length-1?10*n.slice(-1)[0]+e:t)):n}({newResult:t,number:n});u()?e({result:r}):e({result:[...r,n]})}({number:r})},r)))),n("p",null,["+","-","*","/","="].map((r=>n("button",{type:"button",onClick:()=>function({sign:n}){u()?t.length>=3?e({result:function({sign:n}){return{"+":[t[0]+t[2],n],"-":[t[0]-t[2],n],"*":[t[0]*t[2],n],"/":[t[0]/t[2],n]}[t[1]]}({sign:n})}):e({result:[...t,n]}):e({result:t.map(((e,u)=>u===t.length-1?n:e))})}({sign:r})},r))))),l=document.getElementById("app");l.textContent="",l.appendChild(r)}({})})();