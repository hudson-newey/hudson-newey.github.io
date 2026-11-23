import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{n as t,s as n}from"./iframe-CFewjbFk.js";import{t as r}from"./svg3d-viewer-DYrgqUb-.js";import{a as i,c as a,d as o,f as s,g as c,h as l,i as u,m as d,n as f,o as p,p as m,r as h,s as g,u as _}from"./mesh3d-BzQt_fmd.js";function v(e,t){let n=e*.14,r=t?[Math.sin(n)*60,-480,Math.cos(n)*60]:[Math.sin(n)*340,-175+Math.sin(e*.35)*28,Math.cos(n)*340],o=[];for(let e of M){let t=e.tiltDeg*Math.PI/180,n=[];for(let r=0;r<40;r++){let i=r/40*Math.PI*2,a=[Math.cos(i)*e.orbitR,0,Math.sin(i)*e.orbitR];n.push(m(a,t))}o.push({depth:1e9-e.orbitR,markup:_(n,`fill="none" stroke="#334155" stroke-width="0.9" stroke-dasharray="3 3"`)})}let s=u([0,0,0],r);o.push({depth:s+20,markup:`<circle cx="0" cy="0" r="34" cz="0" fill="url(#sun-halo)"/>`}),o.push({depth:s,markup:`<circle cx="0" cy="0" r="22" cz="0" fill="url(#sun-core)" stroke="#fef08a" stroke-width="0.8"/>`});for(let t of M){let n=t.phase+e*t.speed,s=t.tiltDeg*Math.PI/180,c=m([Math.cos(n)*t.orbitR,0,Math.sin(n)*t.orbitR],s),l=u(c,r);Math.abs(c[1])>2&&o.push({depth:l+5,markup:a([c[0],0,c[2]],c,`stroke="#475569" stroke-width="0.7" stroke-dasharray="2 2"`)}),t.ring&&o.push({depth:l+1,markup:`<g transform="translate3d(${i(c[0])} ${i(c[1])} ${i(c[2])}) rotateX(72) rotateY(22)">
          <ellipse cx="0" cy="0" rx="${t.ring.outer}" ry="${t.ring.outer}" cz="0" fill="none" stroke="${t.ring.color}" stroke-width="4.2" stroke-opacity="0.72"/>
          <ellipse cx="0" cy="0" rx="${t.ring.inner}" ry="${t.ring.inner}" cz="0" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.8"/>
        </g>`}),o.push({depth:l,markup:`<circle cx="${i(c[0])}" cy="${i(c[1])}" r="${t.radius}" cz="${i(c[2])}" fill="${t.color}" stroke="${t.stroke}" stroke-width="1.1"/>`});let d=c[1]-t.radius-7,f=[...t.name].map((e,n)=>i(c[0]+(n-t.name.length/2)*4.2)).join(` `),p=[...t.name].map(()=>i(d)).join(` `),h=[...t.name].map(()=>i(c[2])).join(` `);if(o.push({depth:l-2,markup:`<text x="${f}" y="${p}" z="${h}" font-size="6.5" font-family="ui-monospace,monospace" fill="#94a3b8">${t.name}</text>`}),t.moon){let n=e*t.moon.speed,a=[c[0]+Math.cos(n)*t.moon.orbitR,c[1]+Math.sin(n)*5,c[2]+Math.sin(n)*t.moon.orbitR];o.push({depth:u(a,r),markup:`<circle cx="${i(a[0])}" cy="${i(a[1])}" r="${t.moon.radius}" cz="${i(a[2])}" fill="${t.moon.color}" stroke="#64748b" stroke-width="0.6"/>`})}}let l=N.map(e=>`<circle cx="${i(e.pos[0])}" cy="${i(e.pos[1])}" r="${e.r}" cz="${i(e.pos[2])}" fill="#f8fafc" fill-opacity="${e.op.toFixed(2)}"/>`).join(`
`);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-210 -150 420 300" style="background:radial-gradient(circle at 50% 45%,#131c38 0%,#060913 100%)">
  <defs>
    <radialGradient id="sun-core" cx="38%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#fef9c3"/>
      <stop offset="45%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </radialGradient>
    <radialGradient id="sun-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fb923c" stop-opacity="0.7"/>
      <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <camera projection="perspective" fov="52" position="${i(r[0])} ${i(r[1])} ${i(r[2])}" target="0 0 0" up="0 1 0" near="10"/>
  ${l}
  ${c(o)}
</svg>`}function y(e){let t=[0,0,290],n=1.8,r=e*.9,o=[],s=[];for(let e=0;e<=54;e++){let t=e/54,i=(t-.5)*220,a=t*Math.PI*2*n+r,c=m([Math.cos(a)*52,i,Math.sin(a)*52],.28),l=m([Math.cos(a+Math.PI)*52,i,Math.sin(a+Math.PI)*52],.28);o.push(c),s.push(l)}let l=[];for(let e=0;e<54;e++){let n=o[e],r=o[e+1],a=s[e],c=s[e+1],d=h([n,r]),f=h([a,c]);l.push({depth:u(d,t),markup:`<path3d fill="none" stroke="#38bdf8" stroke-width="4.2" stroke-linecap="round" d="M ${i(n[0])},${i(n[1])},${i(n[2])} L ${i(r[0])},${i(r[1])},${i(r[2])}"/>`}),l.push({depth:u(f,t),markup:`<path3d fill="none" stroke="#a78bfa" stroke-width="4.2" stroke-linecap="round" d="M ${i(a[0])},${i(a[1])},${i(a[2])} L ${i(c[0])},${i(c[1])},${i(c[2])}"/>`})}for(let e=0;e<18;e++){let o=(e+.5)/18,s=(o-.5)*220,c=o*Math.PI*2*n+r,d=m([Math.cos(c)*52,s,Math.sin(c)*52],.28),f=m([Math.cos(c+Math.PI)*52,s,Math.sin(c+Math.PI)*52],.28),p=h([d,f]),g=F[e%F.length];l.push({depth:u(h([d,p]),t),markup:a(d,p,`stroke="${g[0]}" stroke-width="3" stroke-linecap="round"`)}),l.push({depth:u(h([p,f]),t),markup:a(p,f,`stroke="${g[1]}" stroke-width="3" stroke-linecap="round"`)}),l.push({depth:u(d,t)-4,markup:`<circle cx="${i(d[0])}" cy="${i(d[1])}" r="5.5" cz="${i(d[2])}" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.4"/>`}),l.push({depth:u(f,t)-4,markup:`<circle cx="${i(f[0])}" cy="${i(f[1])}" r="5.5" cz="${i(f[2])}" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.4"/>`})}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-170 -140 340 280" style="background:radial-gradient(circle at 50% 50%,#17153b 0%,#090a1a 100%)">
  <camera projection="perspective" fov="50" position="0 0 290" target="0 0 0" up="0 1 0" near="10"/>
  ${c(l)}
</svg>`}function b(e,t){let n=[];for(let r of e){let e=h(r),i=[e[0]*t,e[1]*t,e[2]*t];n.push([r[0],r[1],i]),n.push([r[1],r[2],i]),n.push([r[2],r[0],i])}return n}function x(e,t){let n=Math.cos(3*e)+2.15;return[n*Math.cos(2*e)*t,n*Math.sin(2*e)*t,-Math.sin(3*e)*t*1.35]}function S(e,t,n,r){let l=[0,-35,240],f=e*.55,p=e*.85,m=e=>s(o(e,f),p),g=``;if(t===`torus-knot`){let e=[],t=[];for(let e=0;e<96;e++){let n=e/96*Math.PI*2;t.push(m(x(n,27)))}for(let n=0;n<96;n++){let i=t[n],a=t[(n+1)%96],o=h([i,a]),s=`hsl(${Math.round(n/96*360)}, 82%, 60%)`,c=r?s:`rgba(15,23,42,0.45)`,d=r?`none`:s,f=[i[0],i[1]-11,i[2]],p=[a[0],a[1]-11,a[2]],m=[a[0],a[1]+11,a[2]],g=[i[0],i[1]+11,i[2]];e.push({depth:u(o,l),markup:_([f,p,m,g],`fill="${d}" fill-opacity="0.92" stroke="${c}" stroke-width="${r?1.4:.6}"`)})}let n=`M ${i(t[0][0])},${i(t[0][1])},${i(t[0][2])} `+t.slice(1).map(e=>`L ${i(e[0])},${i(e[1])},${i(e[2])}`).join(` `)+` Z`;g=c(e)+`\n<path3d fill="none" stroke="#ffffff" stroke-opacity="0.55" stroke-width="1.2" d="${n}"/>`}else{let e=(t===`icosahedron`?L:R).map(e=>e.map(m)),n=t===`icosahedron`?`#38bdf8`:`#c084fc`;if(r){let t=e.map(e=>({depth:u(h(e),l),markup:_(e,`fill="none" stroke="${n}" stroke-width="1.3" stroke-linejoin="round"`)}));g=c(t)}else{let t=d(e,{baseColor:n,stroke:`#0f172a`,strokeWidth:.9,camPos:l,cullBackfaces:!0,ambient:.35});g=c(t)}}let v=[];for(let e=-120;e<=120;e+=40)v.push(a([e,95,-120],[e,95,120],`stroke="#1e293b" stroke-width="0.9"`)),v.push(a([-120,95,e],[120,95,e],`stroke="#1e293b" stroke-width="0.9"`));return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-160 -125 320 250" style="background:linear-gradient(180deg,#0f172a 0%,#020617 100%)">
  <camera projection="${n}" fov="52" position="${i(l[0])} ${i(l[1])} ${i(l[2])}" target="0 0 0" up="0 1 0" near="5"/>
  ${v.join(`
`)}
  ${g}
</svg>`}function C(e){let t=B[e].pos,n=[],r=f(240,10,220,[0,5,0]);n.push(...d(r,{baseColor:`#1e293b`,stroke:`#334155`,strokeWidth:.8,camPos:t,cullBackfaces:!0})),n.push({depth:u([0,-.5,0],t),markup:_([[-26,-.5,-108],[26,-.5,-108],[26,-.5,108],[-26,-.5,108]],`fill="#0ea5e9" fill-opacity="0.72" stroke="#38bdf8" stroke-width="0.9"`)});for(let e of[{x:-72,z:-55,w:38,h:115,d:38,color:`#3b82f6`,spire:!0},{x:-74,z:12,w:42,h:72,d:44,color:`#6366f1`},{x:-65,z:68,w:34,h:52,d:34,color:`#8b5cf6`},{x:70,z:-52,w:44,h:138,d:40,color:`#14b8a6`,spire:!0},{x:76,z:16,w:38,h:86,d:38,color:`#06b6d4`},{x:66,z:72,w:42,h:48,d:34,color:`#f59e0b`}]){let r=f(e.w,e.h,e.d,[e.x,-e.h/2,e.z]);n.push(...d(r,{baseColor:e.color,stroke:`#0f172a`,strokeWidth:.9,camPos:t,cullBackfaces:!0,ambient:.44}));let o=e.z+e.d/2+.3;for(let r=-e.h+12;r<-10;r+=14)n.push({depth:u([e.x,r,o],t)-1,markup:a([e.x-e.w*.36,r,o],[e.x+e.w*.36,r,o],`stroke="#fef08a" stroke-opacity="0.75" stroke-width="2"`)});e.spire&&(n.push({depth:u([e.x,-e.h-14,e.z],t),markup:a([e.x,-e.h,e.z],[e.x,-e.h-28,e.z],`stroke="#f8fafc" stroke-width="1.6"`)}),n.push({depth:u([e.x,-e.h-28,e.z],t)-1,markup:`<circle cx="${i(e.x)}" cy="${i(-e.h-28)}" r="2.6" cz="${i(e.z)}" fill="#f43f5e"/>`}))}n.push({depth:u([66,-48.5,72],t)-2,markup:`<g transform="translate3d(66 -48.5 72) rotateX(90)">
      <circle cx="0" cy="0" r="12" cz="0" fill="#1e293b" stroke="#fde047" stroke-width="1.6"/>
    </g>`}),n.push({depth:u([0,-14,14],t),markup:`<g>
      ${_([[-45,-10,6],[45,-10,6],[45,-10,22],[-45,-10,22]],`fill="#cbd5e1" stroke="#334155" stroke-width="0.9"`)}
      <path3d fill="none" stroke="#f43f5e" stroke-width="2.4"
        d="M -45,-10,6 C -18,-48,6 18,-48,6 45,-10,6"/>
      <path3d fill="none" stroke="#fb7185" stroke-width="2.4"
        d="M -45,-10,22 C -18,-48,22 18,-48,22 45,-10,22"/>
    </g>`});let o=`SVG3D`,s=[...o].map((e,t)=>i(-36+t*18)).join(` `),l=[...o].map(()=>`-152`).join(` `),p=[...o].map(()=>`-55`).join(` `);return n.push({depth:u([0,-152,-55],t),markup:`<text x="${s}" y="${l}" z="${p}" font-size="16" font-weight="700" font-family="ui-monospace,monospace" fill="#38bdf8">${o}</text>`}),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-165 -125 330 250" camera="#${e}" style="background:linear-gradient(180deg,#0f172a 0%,#1e1b4b 55%,#090d16 100%)">
  <defs>
    <camera id="aerial" projection="perspective" fov="50" position="210 -175 225" target="0 -35 0" up="0 1 0" near="5"/>
    <camera id="iso" projection="orthographic" position="210 -170 210" target="0 -35 0" up="0 1 0"/>
    <camera id="street" projection="perspective" fov="58" position="125 -28 175" target="-15 -55 -20" up="0 1 0" near="5"/>
  </defs>
  ${c(n)}
</svg>`}function w(e,t,n,r){let i=e/2,a=n+t*r*Math.cos(i);return[a*Math.cos(e),t*r*Math.sin(i),a*Math.sin(e)]}function T(e,t){let n=t?[0,0,1e3]:[0,-110,230],r=.55+Math.sin(e*.4)*.25,a=e*.7,d=e=>s(o(e,r),a),f=[],p=[],m=[];for(let e=0;e<48;e++){let t=e/48*Math.PI*2,r=(e+1)/48*Math.PI*2,i=d(w(t,-1,74,24)),a=d(w(r,-1,74,24)),o=d(w(r,1,74,24)),s=d(w(t,1,74,24));p.push(i),m.push(s);let c=h([i,a,o,s]),g=e%2==0?`#2dd4bf`:`#0ea5e9`,v=.62+.45*((c[2]+100)/200);f.push({depth:u(c,n),markup:_([i,a,o,s],`fill="${l(g,v)}" fill-opacity="0.92" stroke="#0f172a" stroke-width="0.65"`)})}let g=(e,t)=>`<path3d fill="none" stroke="${t}" stroke-width="2" d="${`M ${i(e[0][0])},${i(e[0][1])},${i(e[0][2])} `+e.slice(1).map(e=>`L ${i(e[0])},${i(e[1])},${i(e[2])}`).join(` `)}"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-155 -120 310 240" style="background:radial-gradient(circle at 50% 45%,#132035 0%,#060a14 100%)">
  ${t?``:`<camera projection="perspective" fov="50" position="0 -110 230" target="0 0 0" up="0 1 0" near="5"/>`}
  ${c(f)}
  ${g(p,`#f8fafc`)}
  ${g(m,`#fde047`)}
</svg>`}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{t(),r(),g(),E={title:`SVG3D/5 Showcase`,component:`svg3d-viewer`,parameters:{docs:{autodocs:!1}}},D=`display:flex;flex-direction:column;gap:10px;font:13px/1.45 system-ui,-apple-system,sans-serif;color:#e2e8f0;background:#0b1020;padding:14px;border-radius:12px;width:fit-content;box-shadow:0 12px 32px rgba(2,6,23,0.45);border:1px solid rgba(148,163,184,0.18)`,O=`display:flex;flex-wrap:wrap;align-items:center;gap:8px`,k=`padding:5px 11px;border-radius:6px;border:1px solid rgba(148,163,184,0.35);background:#1e293b;color:#f8fafc;font:12px/1.2 system-ui,sans-serif;cursor:pointer`,A=`padding:5px 11px;border-radius:6px;border:1px solid #38bdf8;background:#0284c7;color:#ffffff;font:12px/1.2 system-ui,sans-serif;cursor:pointer;font-weight:600`,j=`margin:0;font-size:12px;color:#94a3b8;max-width:600px`,M=[{name:`MERCURY`,orbitR:52,radius:4.5,speed:1.9,phase:.4,tiltDeg:6,color:`#cbd5e1`,stroke:`#64748b`},{name:`VENUS`,orbitR:78,radius:7.2,speed:1.35,phase:2.1,tiltDeg:-3,color:`#fbbf24`,stroke:`#b45309`},{name:`EARTH`,orbitR:110,radius:8.5,speed:.95,phase:4.2,tiltDeg:4,color:`#38bdf8`,stroke:`#0369a1`,moon:{orbitR:18,radius:2.8,speed:4.2,color:`#e2e8f0`}},{name:`MARS`,orbitR:142,radius:6.2,speed:.72,phase:1.2,tiltDeg:-5,color:`#f97316`,stroke:`#9a3412`},{name:`SATURN`,orbitR:192,radius:13.5,speed:.42,phase:5.1,tiltDeg:8,color:`#fde68a`,stroke:`#b45309`,ring:{inner:18,outer:30,color:`#fcd34d`}},{name:`NEPTUNE`,orbitR:238,radius:9.5,speed:.27,phase:3.1,tiltDeg:-7,color:`#60a5fa`,stroke:`#1d4ed8`}],N=Array.from({length:48},(e,t)=>{let n=t*2.39996%(Math.PI*2),r=t*37%100/100*Math.PI-Math.PI/2,i=420+t*53%140;return{pos:[Math.cos(r)*Math.cos(n)*i,Math.sin(r)*i,Math.cos(r)*Math.sin(n)*i],r:1+t%3*.7,op:.35+t*19%60/100}}),P={name:`1. 3D Solar System Orrery`,render:()=>n`
    <div style=${D} data-story="solar">
      <div style=${O}>
        <button data-action="toggle" style=${A}>Pause Orbit</button>
        <button data-action="view" style=${k}>Switch to Top-Down</button>
        <span style="font-size:12px;color:#94a3b8;margin-left:auto">
          Click canvas + Arrow keys to manually orbit camera
        </span>
      </div>
      <svg3d-viewer
        controls
        .markup=${v(0,!1)}
        style="width:620px;height:440px;border-radius:8px;overflow:hidden"
      ></svg3d-viewer>
      <p style=${j}>
        Uses perspective <code>&lt;camera&gt;</code>, tilted <code>&lt;ellipse&gt;</code> rings with
        3D <code>transform</code>, <code>&lt;circle cz&gt;</code>,
        <code>&lt;polygon zs&gt;</code> orbital tracks, 3D <code>&lt;text x y z&gt;</code> labels,
        and painter-sorted document order (§3.4).
      </p>
    </div>
  `,play:({canvasElement:e})=>{let t=e.querySelector(`[data-story="solar"]`),n=t?.querySelector(`svg3d-viewer`),r=t?.querySelector(`[data-action="toggle"]`),i=t?.querySelector(`[data-action="view"]`);if(!n||!r||!i)return;let a=!0,o=!1,s=0,c=performance.now();r.onclick=()=>{a=!a,r.textContent=a?`Pause Orbit`:`Resume Orbit`,r.style.cssText=a?A:k},i.onclick=()=>{o=!o,i.textContent=o?`Switch to Perspective`:`Switch to Top-Down`,n.markup=v(s,o)};let l=e=>{if(!n.isConnected)return;let t=Math.min(.05,(e-c)/1e3);c=e,a&&(s+=t,n.markup=v(s,o)),requestAnimationFrame(l)};requestAnimationFrame(l)}},F=[[`#38bdf8`,`#fb7185`],[`#34d399`,`#fbbf24`],[`#fb7185`,`#38bdf8`],[`#fbbf24`,`#34d399`]],I={name:`2. Spinning DNA Double Helix (path3d)`,render:()=>n`
    <div style=${D} data-story="dna">
      <div style=${O}>
        <button data-action="toggle" style=${A}>Pause Spin</button>
        <span style="font-size:12px;color:#94a3b8;margin-left:auto">
          Click canvas + Arrow keys to orbit around the helix
        </span>
      </div>
      <svg3d-viewer
        controls
        .markup=${y(0)}
        style="width:580px;height:440px;border-radius:8px;overflow:hidden"
      ></svg3d-viewer>
      <p style=${j}>
        Two intertwined <code>&lt;path3d&gt;</code> sugar-phosphate backbones, color-coded
        <code>&lt;line z1 z2&gt;</code> base-pair rungs, and
        <code>&lt;circle cz&gt;</code> phosphate beads depth-sorted per frame.
      </p>
    </div>
  `,play:({canvasElement:e})=>{let t=e.querySelector(`[data-story="dna"]`),n=t?.querySelector(`svg3d-viewer`),r=t?.querySelector(`[data-action="toggle"]`);if(!n||!r)return;let i=!0,a=0,o=performance.now();r.onclick=()=>{i=!i,r.textContent=i?`Pause Spin`:`Resume Spin`,r.style.cssText=i?A:k};let s=e=>{if(!n.isConnected)return;let t=Math.min(.05,(e-o)/1e3);o=e,i&&(a+=t,n.markup=y(a)),requestAnimationFrame(s)};requestAnimationFrame(s)}},L=p(72),R=b(p(48),1.72),z={name:`3. Interactive Polyhedra & Torus Knot Lab`,render:()=>n`
    <div style=${D} data-story="lab">
      <div style=${O}>
        <button data-shape="icosahedron" style=${A}>Icosahedron</button>
        <button data-shape="crystal" style=${k}>Starburst Crystal</button>
        <button data-shape="torus-knot" style=${k}>Trefoil Torus Knot</button>
        <span style="width:1px;height:18px;background:rgba(148,163,184,0.25)"></span>
        <button data-action="proj" style=${k}>Perspective</button>
        <button data-action="wire" style=${k}>Shaded</button>
        <button data-action="spin" style=${A}>Spinning</button>
      </div>
      <svg3d-viewer
        controls
        .markup=${S(.4,`icosahedron`,`perspective`,!1)}
        style="width:580px;height:430px;border-radius:8px;overflow:hidden"
      ></svg3d-viewer>
      <p style=${j}>
        Flat-shaded 3D meshes built from <code>&lt;polygon points zs&gt;</code> with backface
        culling, directional shading, and a rainbow parametric <code>&lt;path3d&gt;</code> trefoil
        knot.
      </p>
    </div>
  `,play:({canvasElement:e})=>{let t=e.querySelector(`[data-story="lab"]`),n=t?.querySelector(`svg3d-viewer`);if(!t||!n)return;let r=`icosahedron`,i=`perspective`,a=!1,o=!0,s=.4,c=performance.now(),l=[...t.querySelectorAll(`[data-shape]`)],u=t.querySelector(`[data-action="proj"]`),d=t.querySelector(`[data-action="wire"]`),f=t.querySelector(`[data-action="spin"]`),p=()=>{n.markup=S(s,r,i,a)};for(let e of l)e.onclick=()=>{r=e.dataset.shape??`icosahedron`;for(let t of l)t.style.cssText=t===e?A:k;p()};u.onclick=()=>{i=i===`perspective`?`orthographic`:`perspective`,u.textContent=i===`perspective`?`Perspective`:`Orthographic`,p()},d.onclick=()=>{a=!a,d.textContent=a?`Wireframe`:`Shaded`,p()},f.onclick=()=>{o=!o,f.textContent=o?`Spinning`:`Paused`,f.style.cssText=o?A:k};let m=e=>{if(!n.isConnected)return;let t=Math.min(.05,(e-c)/1e3);c=e,o&&(s+=t,p()),requestAnimationFrame(m)};requestAnimationFrame(m)}},B={aerial:{pos:[210,-175,225],target:[0,-35,0],label:`Aerial Perspective (#aerial)`},iso:{pos:[210,-170,210],target:[0,-35,0],label:`Isometric Ortho (#iso)`},street:{pos:[125,-28,175],target:[-15,-55,-20],label:`Street Level (#street)`}},V={name:`4. 3D Skyline & <camera> Presets`,render:()=>n`
    <div style=${D} data-story="city">
      <div style=${O}>
        <button data-cam="aerial" style=${A}>Aerial Perspective</button>
        <button data-cam="iso" style=${k}>Isometric Ortho</button>
        <button data-cam="street" style=${k}>Street Level</button>
        <span style="font-size:12px;color:#94a3b8;margin-left:auto">
          Click canvas + Arrow keys to orbit any preset
        </span>
      </div>
      <svg3d-viewer
        controls
        .markup=${C(`aerial`)}
        style="width:620px;height:440px;border-radius:8px;overflow:hidden"
      ></svg3d-viewer>
      <p style=${j}>
        Declares three reusable <code>&lt;camera id="..."&gt;</code> elements inside
        <code>&lt;defs&gt;</code> and switches the viewport via the root
        <code>camera="#id"</code> attribute (§5.2), combining
        <code>&lt;polygon zs&gt;</code> towers, a cubic <code>&lt;path3d&gt;</code> arch bridge, and
        3D <code>&lt;text&gt;</code>.
      </p>
    </div>
  `,play:({canvasElement:e})=>{let t=e.querySelector(`[data-story="city"]`),n=t?.querySelector(`svg3d-viewer`);if(!t||!n)return;let r=[...t.querySelectorAll(`[data-cam]`)];for(let e of r)e.onclick=()=>{let t=e.dataset.cam??`aerial`;for(let t of r)t.style.cssText=t===e?A:k;n.markup=C(t)}}},H={name:`5. Möbius Strip & SVG 2 Flat Fallback`,render:()=>n`
    <div style=${D} data-story="mobius">
      <div style=${O}>
        <button data-mode="3d" style=${A}>3D Perspective Camera</button>
        <button data-mode="2d" style=${k}>Default Camera (SVG 2 Flat §5.5)</button>
        <button data-action="spin" style=${A}>Spinning</button>
      </div>
      <svg3d-viewer
        controls
        .markup=${T(0,!1)}
        style="width:580px;height:420px;border-radius:8px;overflow:hidden"
      ></svg3d-viewer>
      <p style=${j}>
        A parametric 3D Möbius strip rendered with <code>&lt;polygon zs&gt;</code> quads and glowing
        <code>&lt;path3d&gt;</code> boundary curves. Toggle to the default camera to see the exact
        <code>z = 0</code> orthographic projection guaranteed by spec §5.5.
      </p>
    </div>
  `,play:({canvasElement:e})=>{let t=e.querySelector(`[data-story="mobius"]`),n=t?.querySelector(`svg3d-viewer`);if(!t||!n)return;let r=t.querySelector(`[data-mode="3d"]`),i=t.querySelector(`[data-mode="2d"]`),a=t.querySelector(`[data-action="spin"]`),o=!1,s=!0,c=0,l=performance.now(),u=()=>{n.markup=T(c,o)};r.onclick=()=>{o=!1,r.style.cssText=A,i.style.cssText=k,u()},i.onclick=()=>{o=!0,i.style.cssText=A,r.style.cssText=k,u()},a.onclick=()=>{s=!s,a.textContent=s?`Spinning`:`Paused`,a.style.cssText=s?A:k};let d=e=>{if(!n.isConnected)return;let t=Math.min(.05,(e-l)/1e3);l=e,s&&(c+=t,u()),requestAnimationFrame(d)};requestAnimationFrame(d)}},U=[`SolarSystemOrrery`,`DnaDoubleHelix`,`PolyhedraLab`,`VoxelCitySkyline`,`MobiusStripAndFallback`]})))()}W();export{I as DnaDoubleHelix,H as MobiusStripAndFallback,z as PolyhedraLab,P as SolarSystemOrrery,V as VoxelCitySkyline,U as __namedExportsOrder,E as default};