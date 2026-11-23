import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{n as t,s as n}from"./iframe-DJ2fUIa7.js";import{t as r}from"./svg3d-viewer-AfxXfgOX.js";import{a as i,c as a,d as o,f as s,g as c,i as l,l as u,m as d,n as f,p,r as m,s as h,t as g,u as _}from"./mesh3d-BzQt_fmd.js";function v(e=`@two-web/kit/animation (${x++})`){return()=>Symbol(e)}function y(e,t=e){S.set(t,e),b()}function b(){C||(C=!0,requestAnimationFrame(()=>{C=!1;for(let[e,t]of S.entries())t(),S.delete(e)}))}var x,S,C,w;function T(){return(T=e((()=>{x=0,S=new Map,C=!1,w=class{callback;options;intervalRef=null;constructor(e,t){this.callback=e,this.options=t}get isRunning(){return this.intervalRef!==null}start(){this.intervalRef=setInterval(this.callback,1)}stop(){this.intervalRef?(clearInterval(this.intervalRef),this.intervalRef=null):console.warn(`Attempted to stop a timeline that is not running.`)}}})))()}function E(e=0){return{phase:`title`,camMode:`chase`,time:0,scrollZ:0,speed:310,score:0,best:e,combo:1,shield:100,hitFlash:0,wave:1,shipX:0,shipY:6,shipVx:0,shipVy:0,bank:0,pitch:0,fireCooldown:0,spawnTimer:.6,ringTimer:2.2,nextId:1,lasers:[],drones:[],rings:[],shards:[],popups:[]}}function D(e,t,n){return Math.min(n,Math.max(t,e))}function O(e,t){return e+Math.random()*(t-e)}function k(e,t){let n=t=>{let n=o(t,e.pitch);return n=p(n,e.bank),g(n,[e.shipX,e.shipY,0])},r=[0,1,-30],i=[0,-8,-4],a=[0,7,-4],s=[0,-6,16],c=[0,6,16],u=[-32,6,14],d=[32,6,14],f=[-9,2,12],h=[9,2,12],v=[-11,-13,17],y=[11,-13,17],b=[0,-5,-14],x=[0,-9,2],S=[-5,-2,-4],C=[5,-2,-4],w=e.hitFlash>0?`#fb7185`:`#e2e8f0`,T=e.hitFlash>0?`#f43f5e`:`#38bdf8`,E=[{pts:[r,u,f],fill:T,stroke:`#0284c7`},{pts:[r,h,d],fill:T,stroke:`#0284c7`},{pts:[r,f,i],fill:w,stroke:`#334155`},{pts:[r,i,h],fill:`#cbd5e1`,stroke:`#334155`},{pts:[i,f,s],fill:`#cbd5e1`,stroke:`#334155`},{pts:[i,s,h],fill:`#94a3b8`,stroke:`#334155`},{pts:[r,a,f],fill:`#64748b`,stroke:`#1e293b`},{pts:[r,h,a],fill:`#64748b`,stroke:`#1e293b`},{pts:[s,f,c,h],fill:`#1e293b`,stroke:`#0f172a`},{pts:[f,v,[-9,2,-2]],fill:`#0ea5e9`,stroke:`#0369a1`},{pts:[h,y,[9,2,-2]],fill:`#0ea5e9`,stroke:`#0369a1`},{pts:[b,S,x],fill:`#22d3ee`,stroke:`#ecfeff`},{pts:[b,x,C],fill:`#06b6d4`,stroke:`#ecfeff`}],D=10+Math.sin(e.time*42)*4;return E.push({pts:[[-6,1,16],[-2,1,16],[-4,2,16+D]],fill:`#facc15`,stroke:`#fb923c`},{pts:[[2,1,16],[6,1,16],[4,2,16+D]],fill:`#facc15`,stroke:`#fb923c`}),E.map(e=>{let r=e.pts.map(n);return{depth:l(m(r),t),markup:_(r,`fill="${e.fill}" stroke="${e.stroke}" stroke-width="0.9" stroke-linejoin="round"`)}})}function A(e){let t,n,r;e.camMode===`cockpit`?(t=[e.shipX,e.shipY-3,-10],n=[e.shipX+e.bank*45,e.shipY-e.pitch*45,-280],r=72):e.camMode===`cinematic`?(t=[e.shipX*.35+102,e.shipY*.35-52,128],n=[e.shipX*.65,e.shipY*.55,-150],r=58):(t=[e.shipX*.52,e.shipY*.45-34,134],n=[e.shipX*.72,e.shipY*.65,-220],r=62);let u=[],f=e.scrollZ%80;for(let e=-148;e<=R;e+=37){let t=Math.abs(e)>=143;u.push(a([e,L,-780],[e,L,40],`stroke="${t?`#ec4899`:`#312e81`}" stroke-width="${t?1.8:.9}"`))}u.push(a([-148,-92,-780],[-148,-92,40],`stroke="#06b6d4" stroke-opacity="0.45" stroke-width="1.2"`),a([R,-92,-780],[R,-92,40],`stroke="#06b6d4" stroke-opacity="0.45" stroke-width="1.2"`));for(let e=0;e<10;e++){let t=-760+e*80+f;if(t>30)continue;let n=D((t+780)/760,.18,.92);u.push(a([-148,L,t],[R,L,t],`stroke="#6366f1" stroke-opacity="${n.toFixed(2)}" stroke-width="1.1"`)),e%2==0&&u.push(`<path3d fill="none" stroke="#ec4899" stroke-opacity="${(n*.55).toFixed(2)}" stroke-width="1.2"
          d="M -148,${L},${i(t)} L -148,-92,${i(t)} L -116,-112,${i(t)} M ${R},${L},${i(t)} L ${R},-92,${i(t)} L 116,-112,${i(t)}"/>`)}let p=[],m=-195,h=e.shipX,v=e.shipY;p.push({depth:l([h,v,m],t),markup:`<g stroke="#22d3ee" stroke-opacity="0.78" stroke-width="1.2" fill="none">
      <polygon points="${i(h-14)},${i(v)} ${i(h)},${i(v-14)} ${i(h+14)},${i(v)} ${i(h)},${i(v+14)}"
               zs="${m} ${m} ${m} ${m}"/>
      <line x1="${i(h-22)}" y1="${i(v)}" z1="${m}" x2="${i(h-8)}" y2="${i(v)}" z2="${m}"/>
      <line x1="${i(h+8)}" y1="${i(v)}" z1="${m}" x2="${i(h+22)}" y2="${i(v)}" z2="${m}"/>
    </g>`});for(let n of e.rings){let e=[];for(let t=0;t<10;t++){let r=t/10*Math.PI*2+n.spin;e.push([n.x+Math.cos(r)*n.radius,n.y+Math.sin(r)*n.radius,n.z])}let r=n.passed?`#fde047`:`#34d399`;p.push({depth:l([n.x,n.y,n.z],t),markup:_(e,`fill="none" stroke="${r}" stroke-width="${n.passed?4:3.2}" stroke-opacity="0.92"`)})}for(let n of e.drones){let e=(n.kind===`drone`?z:B).map(e=>e.map(e=>g(s(o(e,n.spin*.7),n.spin),[n.x,n.y,n.z]))),r=n.flash>0?`#ffffff`:n.kind===`drone`?`#f43f5e`:`#f59e0b`,i=n.kind===`drone`?`#fda4af`:`#fef08a`;p.push(...d(e,{baseColor:r,stroke:i,strokeWidth:.9,camPos:t,cullBackfaces:!0,ambient:.4}))}for(let n of e.lasers)p.push({depth:l([n.x,n.y,n.z],t),markup:a([n.x,n.y,n.z],[n.x,n.y,n.z-48],`stroke="#38bdf8" stroke-width="3.2" stroke-linecap="round"`)}),p.push({depth:l([n.x,n.y,n.z],t)-1,markup:a([n.x,n.y,n.z],[n.x,n.y,n.z-42],`stroke="#f0f9ff" stroke-width="1.3" stroke-linecap="round"`)});for(let n of e.shards){let e=n.life/n.maxLife*n.size,r=[n.pos[0],n.pos[1]-e,n.pos[2]],i=[n.pos[0]+e,n.pos[1]+e*.7,n.pos[2]+e*.4],a=[n.pos[0]-e,n.pos[1]+e*.6,n.pos[2]-e*.4];p.push({depth:l(n.pos,t),markup:_([r,i,a],`fill="${n.color}" fill-opacity="${(n.life/n.maxLife).toFixed(2)}" stroke="#ffffff" stroke-width="0.6"`)})}for(let n of e.popups){let e=[...n.text],r=e.map((t,r)=>i(n.pos[0]+(r-e.length/2)*8)).join(` `),a=e.map(()=>i(n.pos[1])).join(` `),o=e.map(()=>i(n.pos[2])).join(` `);p.push({depth:l(n.pos,t)-5,markup:`<text x="${r}" y="${a}" z="${o}" font-size="13" font-weight="700" font-family="ui-monospace,monospace" fill="${n.color}">${n.text}</text>`})}return e.camMode!==`cockpit`&&p.push(...k(e,t)),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-210 -135 420 270" style="background:linear-gradient(180deg,#090d24 0%,${e.hitFlash>0?`#3b0722`:`#070919`} 60%,#120826 100%)">
  <defs>
    <linearGradient id="horizon-sun" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fde047"/>
      <stop offset="52%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <camera projection="perspective" fov="${r}" position="${i(t[0])} ${i(t[1])} ${i(t[2])}" target="${i(n[0])} ${i(n[1])} ${i(n[2])}" up="0 1 0" near="4" far="920"/>
  
    <circle cx="0" cy="-68" r="92" cz="-820" fill="url(#horizon-sun)"/>
    <polygon points="-460,82 -310,-12 -180,35 -70,-28 50,24 190,-38 330,18 460,82"
             zs="-800 -800 -800 -800 -800 -800 -800 -800"
             fill="#1e1b4b" fill-opacity="0.9" stroke="#6366f1" stroke-width="1.2"/>
  
  ${u.join(`
`)}
  ${c(p)}
</svg>`}function j(e,t,n,r=8){for(let i=0;i<r;i++){let r=O(0,Math.PI*2),a=O(-1,1),o=O(65,165);e.shards.push({pos:[...t],vel:[Math.cos(r)*o,Math.sin(r)*o,a*o],life:.55,maxLife:.55,size:O(6,13),color:i%2==0?n:`#fef08a`})}}function ee(e,t,n,r,i,a,o=null){if(e.time+=t,e.scrollZ+=e.speed*t,e.hitFlash>0&&(e.hitFlash=Math.max(0,e.hitFlash-t)),e.phase!==`playing`){let n=Math.sin(e.time*.9)*58,r=Math.cos(e.time*1.3)*22;e.shipVx=(n-e.shipX)*3,e.shipVy=(r-e.shipY)*3,e.shipX+=e.shipVx*t,e.shipY+=e.shipVy*t,e.bank=D(-e.shipVx*.004,-.5,.5),e.pitch=D(-e.shipVy*.003,-.35,.35);for(let n of e.shards)n.pos=g(n.pos,[n.vel[0]*t,n.vel[1]*t,n.vel[2]*t]),n.life-=t;e.shards=e.shards.filter(e=>e.life>0);return}e.wave=1+Math.floor(e.score/1800),e.speed=Math.min(540,315+(e.wave-1)*32);let s=0,c=0;if((n.has(`ArrowLeft`)||n.has(`KeyA`))&&--s,(n.has(`ArrowRight`)||n.has(`KeyD`))&&(s+=1),(n.has(`ArrowUp`)||n.has(`KeyW`))&&--c,(n.has(`ArrowDown`)||n.has(`KeyS`))&&(c+=1),s!==0||c!==0){let n=Math.hypot(s,c);e.shipVx+=(s/n*210-e.shipVx)*Math.min(1,t*11),e.shipVy+=(c/n*210-e.shipVy)*Math.min(1,t*11)}else if(o&&(o.x!==0||o.y!==0))e.shipVx+=(o.x*210-e.shipVx)*Math.min(1,t*11),e.shipVy+=(o.y*210-e.shipVy)*Math.min(1,t*11);else if(r){let n=r.x-e.shipX,i=r.y-e.shipY;e.shipVx+=(D(n*5.5,-210,210)-e.shipVx)*Math.min(1,t*10),e.shipVy+=(D(i*5.5,-210,210)-e.shipVy)*Math.min(1,t*10)}else e.shipVx*=Math.max(0,1-t*9),e.shipVy*=Math.max(0,1-t*9);e.shipX=D(e.shipX+e.shipVx*t,-108,P),e.shipY=D(e.shipY+e.shipVy*t,F,I),e.bank+=(D(-e.shipVx*.0026,-.58,.58)-e.bank)*Math.min(1,t*10),e.pitch+=(D(-e.shipVy*.0022,-.38,.38)-e.pitch)*Math.min(1,t*10),e.fireCooldown=Math.max(0,e.fireCooldown-t),(i||n.has(`Space`)||n.has(`KeyZ`))&&e.fireCooldown<=0&&(e.lasers.push({x:e.shipX-18,y:e.shipY+4,z:-20,side:-1},{x:e.shipX+18,y:e.shipY+4,z:-20,side:1}),e.fireCooldown=.16,a.laser());for(let n of e.lasers)n.z-=920*t;if(e.lasers=e.lasers.filter(e=>e.z>-820),e.spawnTimer-=t,e.spawnTimer<=0){let t=Math.random()<.3,n=O(-91.8,P*.85),r=O(F*.8,I*.8);e.drones.push({id:e.nextId++,x:n,y:r,z:-780,baseX:n,baseY:r,phase:O(0,Math.PI*2),spin:O(0,Math.PI*2),hp:t?3:1,kind:t?`monolith`:`drone`,radius:t?24:20,flash:0}),e.spawnTimer=Math.max(.38,1.05-(e.wave-1)*.08)}e.ringTimer-=t,e.ringTimer<=0&&(e.rings.push({x:O(-108*.72,P*.72),y:O(F*.7,I*.65),z:-780,radius:34,passed:!1,spin:0}),e.ringTimer=O(2.6,3.8));for(let n of e.rings)if(n.z+=e.speed*t,n.spin+=t*1.4,!n.passed&&n.z>=-18&&n.z<=22&&Math.hypot(n.x-e.shipX,n.y-e.shipY)<n.radius+10){n.passed=!0,e.combo=Math.min(8,e.combo+1);let t=200*e.combo;e.score+=t,e.shield=Math.min(100,e.shield+12),e.popups.push({pos:[n.x,n.y-16,-25],text:`RING x${e.combo}!`,color:`#34d399`,life:.9}),a.ring()}e.rings=e.rings.filter(e=>e.z<75);let l=[];for(let n of e.drones){n.z+=e.speed*(n.kind===`drone`?1.08:.95)*t,n.spin+=t*(n.kind===`drone`?2.4:.9),n.flash>0&&(n.flash=Math.max(0,n.flash-t)),n.kind===`drone`&&(n.x=D(n.baseX+Math.sin(e.time*2.2+n.phase)*32,-108,P),n.y=D(n.baseY+Math.cos(e.time*1.7+n.phase)*16,F,I));let r=!1;for(let t=e.lasers.length-1;t>=0;t--){let i=e.lasers[t];if(Math.abs(i.z-n.z)<42&&Math.hypot(i.x-n.x,i.y-n.y)<n.radius+11&&(e.lasers.splice(t,1),--n.hp,n.flash=.09,n.hp<=0)){r=!0;let t=(n.kind===`drone`?150:250)*e.combo;e.score+=t,j(e,[n.x,n.y,n.z],n.kind===`drone`?`#f43f5e`:`#f59e0b`,9),e.popups.push({pos:[n.x,n.y-12,n.z],text:`+${t}`,color:`#fde047`,life:.85}),a.explode();break}}r||(n.z>=-24&&n.z<=22&&Math.hypot(n.x-e.shipX,n.y-e.shipY)<n.radius+15?(e.shield=Math.max(0,e.shield-(n.kind===`monolith`?32:24)),e.combo=1,e.hitFlash=.25,j(e,[n.x,n.y,n.z],`#fb7185`,10),a.hit(),e.shield<=0&&(e.phase=`gameover`,e.best=Math.max(e.best,Math.floor(e.score)),j(e,[e.shipX,e.shipY,0],`#38bdf8`,14))):n.z<75&&l.push(n))}e.drones=l,e.score+=t*18*e.combo,e.score>e.best&&(e.best=Math.floor(e.score));for(let n of e.shards)n.pos=g(n.pos,[n.vel[0]*t,n.vel[1]*t,n.vel[2]*t]),n.life-=t;e.shards=e.shards.filter(e=>e.life>0);for(let n of e.popups)n.pos[1]-=28*t,n.life-=t;e.popups=e.popups.filter(e=>e.life>0)}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{t(),r(),T(),h(),M={title:`SVG3D/6 3D Game`,component:`svg3d-viewer`,parameters:{layout:`fullscreen`,docs:{autodocs:!1}}},N=class{constructor(){this.#e=null,this.enabled=!0}#e;#t(){if(!this.enabled)return null;try{if(!this.#e){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.#e=new e}return this.#e.state===`suspended`&&this.#e.resume(),this.#e}catch{return null}}laser(){let e=this.#t();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`sawtooth`,n.frequency.setValueAtTime(760,t),n.frequency.exponentialRampToValueAtTime(190,t+.09),r.gain.setValueAtTime(.06,t),r.gain.exponentialRampToValueAtTime(.001,t+.09),n.connect(r).connect(e.destination),n.start(t),n.stop(t+.095)}explode(){let e=this.#t();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`triangle`,n.frequency.setValueAtTime(170,t),n.frequency.exponentialRampToValueAtTime(34,t+.22),r.gain.setValueAtTime(.14,t),r.gain.exponentialRampToValueAtTime(.001,t+.22),n.connect(r).connect(e.destination),n.start(t),n.stop(t+.23)}ring(){let e=this.#t();if(!e)return;let t=e.currentTime;[523.25,659.25,783.99].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.setValueAtTime(n,t+r*.045),a.gain.setValueAtTime(.07,t+r*.045),a.gain.exponentialRampToValueAtTime(.001,t+r*.045+.14),i.connect(a).connect(e.destination),i.start(t+r*.045),i.stop(t+r*.045+.15)})}hit(){let e=this.#t();if(!e)return;let t=e.currentTime,n=e.createOscillator(),r=e.createGain();n.type=`square`,n.frequency.setValueAtTime(120,t),n.frequency.linearRampToValueAtTime(55,t+.18),r.gain.setValueAtTime(.12,t),r.gain.exponentialRampToValueAtTime(.001,t+.19),n.connect(r).connect(e.destination),n.start(t),n.stop(t+.2)}},P=108,F=-64,I=56,L=82,R=148,z=u(18),B=f(32,46,32),V=`position:relative;display:flex;flex-direction:column;gap:10px;width:100%;height:100vh;box-sizing:border-box;overflow:hidden;padding:14px;border-radius:14px;background:#070a14;color:#e2e8f0;font:13px/1.4 system-ui,-apple-system,sans-serif;border:1px solid rgba(56,189,248,0.28);box-shadow:0 18px 42px rgba(2,6,23,0.65);user-select:none`,H=`display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px;border-radius:8px;background:rgba(15,23,42,0.85);border:1px solid rgba(148,163,184,0.2);font-family:ui-monospace,SFMono-Regular,monospace`,U=`padding:4px 10px;border-radius:6px;border:1px solid rgba(148,163,184,0.35);background:#1e293b;color:#f8fafc;font:11px/1.3 ui-monospace,monospace;cursor:pointer`,W=`position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(5,8,20,0.64);backdrop-filter:blur(2px);text-align:center;padding:20px`,G=`padding:10px 24px;border-radius:8px;border:1px solid #38bdf8;background:linear-gradient(135deg,#0284c7,#6366f1);color:#ffffff;font:700 14px/1.2 system-ui,sans-serif;letter-spacing:0.06em;cursor:pointer;box-shadow:0 0 22px rgba(56,189,248,0.45)`,K={name:`Neon Vectors 3D (Space Trench Shooter)`,render:()=>n`
    <style>
      .neon-cabinet {
        width: 100%;
        height: 100vh;
        height: 100dvh;
      }
      .neon-playfield svg3d-viewer {
        touch-action: none;
      }
      .touch-only {
        display: none;
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
        touch-action: none;
      }
      @media (pointer: coarse) {
        .touch-only {
          display: flex;
        }
      }
      @media (max-width: 640px) {
        .neon-cabinet {
          padding: 8px !important;
          gap: 6px !important;
        }
      }
      .neon-cabinet:fullscreen {
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: none;
        box-shadow: none;
      }
    </style>
    <div class="neon-cabinet" style=${V} data-game="neon-vectors" tabindex="0">
      <div style=${H}>
        <div style="display:flex;gap:16px;align-items:center">
          <div>
            <span style="color:#94a3b8;font-size:10px">SCORE</span>
            <div data-hud="score" style="font-size:16px;font-weight:700;color:#38bdf8">00000</div>
          </div>
          <div>
            <span style="color:#94a3b8;font-size:10px">BEST</span>
            <div data-hud="best" style="font-size:14px;color:#cbd5e1">00000</div>
          </div>
          <div>
            <span style="color:#94a3b8;font-size:10px">COMBO</span>
            <div data-hud="combo" style="font-size:15px;font-weight:700;color:#34d399">x1</div>
          </div>
          <div>
            <span style="color:#94a3b8;font-size:10px">WAVE</span>
            <div data-hud="wave" style="font-size:15px;color:#facc15">1</div>
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:110px">
            <div
              style="display:flex;justify-content:space-between;font-size:10px;color:#94a3b8;margin-bottom:3px"
            >
              <span>SHIELD</span>
              <span data-hud="shield-pct">100%</span>
            </div>
            <div style="height:7px;background:#1e293b;border-radius:999px;overflow:hidden">
              <div
                data-hud="shield-bar"
                style="height:100%;width:100%;background:#34d399;transition:width 0.1s"
              ></div>
            </div>
          </div>
          <button data-action="cam" style=${U}>CAM: CHASE</button>
          <button data-action="sound" style=${U}>SFX: ON</button>
          <button data-action="pause" style=${U}>PAUSE</button>
          <button data-action="fs" style=${U}>⛶ FULLSCREEN</button>
        </div>
      </div>

      <div
        class="neon-playfield"
        style="position:relative;flex:1;min-height:0;width:100%;border-radius:10px;overflow:hidden;border:1px solid rgba(56,189,248,0.22)"
      >
        <svg3d-viewer
          .markup=${A(E())}
          style="width:100%;height:100%;cursor:crosshair"
        ></svg3d-viewer>

        <button
          class="touch-only"
          data-action="fire"
          style="position:absolute;right:20px;bottom:20px;width:104px;height:104px;border-radius:999px;border:2px solid #f43f5e;background:rgba(244,63,94,0.28);color:#fecdd3;font:800 16px/1 system-ui,sans-serif;letter-spacing:0.08em;align-items:center;justify-content:center;padding:0"
        >
          FIRE
        </button>

        <div
          class="touch-only"
          data-control="joystick"
          style="position:absolute;left:20px;bottom:20px;width:128px;height:128px;border-radius:999px;border:2px solid rgba(56,189,248,0.55);background:rgba(56,189,248,0.14);align-items:center;justify-content:center"
        >
          <div
            data-control="joystick-knob"
            style="width:56px;height:56px;border-radius:999px;border:2px solid #38bdf8;background:rgba(56,189,248,0.4);box-shadow:0 0 14px rgba(56,189,248,0.5);pointer-events:none;will-change:transform"
          ></div>
        </div>

        <div data-overlay="panel" style=${W}>
          <div
            style="font:800 30px/1.1 ui-monospace,monospace;letter-spacing:0.12em;color:#f8fafc;text-shadow:0 0 20px rgba(56,189,248,0.8)"
          >
            NEON VECTORS 3D
          </div>
          <div data-overlay="sub" style="font-size:13px;color:#cbd5e1;max-width:460px">
            100% rendered in real time through <code>&lt;svg3d-viewer&gt;</code> using SVG 3D Level
            1 <code>&lt;camera&gt;</code>, <code>&lt;polygon zs&gt;</code>,
            <code>&lt;path3d&gt;</code>, <code>&lt;line z1/z2&gt;</code>, and 3D
            <code>&lt;text&gt;</code>.
          </div>
          <div
            data-overlay="stats"
            style="font:700 15px/1.4 ui-monospace,monospace;color:#fde047;display:none"
          ></div>
          <button data-action="start" style=${G}>LAUNCH MISSION</button>
          <div style="font-size:11px;color:#94a3b8;margin-top:4px">
            <b>WASD / Arrows</b> or <b>Mouse</b> steer · <b>Space / Click</b> fire · <b>C</b> camera
            · <b>P</b> pause · <b>F</b> fullscreen ·
            <b>Touch: left stick steers, right button fires</b>
          </div>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;font-size:12px;color:#94a3b8">
        <span
          >Blast red <b>Octahedron Drones</b> &amp; amber <b>Monoliths</b>. Fly through green
          <b>Rings</b> for combos &amp; shield!</span
        >
        <span>Press <b>C</b> to switch <code>&lt;camera&gt;</code> modes</span>
      </div>
    </div>
  `,play:({canvasElement:e})=>{let t=e.querySelector(`[data-game="neon-vectors"]`),n=t?.querySelector(`svg3d-viewer`);if(!t||!n)return;let r=t.querySelector(`[data-hud="score"]`),i=t.querySelector(`[data-hud="best"]`),a=t.querySelector(`[data-hud="combo"]`),o=t.querySelector(`[data-hud="wave"]`),s=t.querySelector(`[data-hud="shield-pct"]`),c=t.querySelector(`[data-hud="shield-bar"]`),l=t.querySelector(`[data-overlay="panel"]`),u=t.querySelector(`[data-overlay="sub"]`),d=t.querySelector(`[data-overlay="stats"]`),f=t.querySelector(`[data-action="start"]`),p=t.querySelector(`[data-action="cam"]`),m=t.querySelector(`[data-action="sound"]`),h=t.querySelector(`[data-action="pause"]`),g=t.querySelector(`[data-action="fs"]`),_=t.querySelector(`[data-action="fire"]`),b=t.querySelector(`[data-control="joystick"]`),x=t.querySelector(`[data-control="joystick-knob"]`),S=new N,C=E(),T=new Set,O=null,k=!1,j=!1,M=null,L=window.matchMedia(`(pointer: fine)`).matches,R=!1,z=null,B=()=>{if(L&&!R&&C.phase===`playing`)try{let e=n.requestPointerLock?.();e&&typeof e.catch==`function`&&e.catch(()=>{})}catch{}},V=()=>{document.pointerLockElement&&document.exitPointerLock()},H=()=>{R=document.pointerLockElement===n,z=R?{x:C.shipX,y:C.shipY}:null};document.addEventListener(`pointerlockchange`,H);let U=()=>{let e=[`chase`,`cockpit`,`cinematic`],t=e[(e.indexOf(C.camMode)+1)%e.length];C.camMode=t,p.textContent=`CAM: ${t.toUpperCase()}`},W=()=>{let e=C.best,n=C.camMode;C=E(e),C.camMode=n,C.phase=`playing`,l.style.display=`none`,h.textContent=`PAUSE`,t.focus(),B()},G=()=>{C.phase===`playing`?(C.phase=`paused`,$.isRunning&&$.stop(),V(),l.style.display=`flex`,u.textContent=`Mission paused. Press P or click Resume to continue.`,d.style.display=`none`,f.textContent=`RESUME`,h.textContent=`RESUME`):C.phase===`paused`&&(C.phase=`playing`,Q=performance.now(),$.isRunning||$.start(),l.style.display=`none`,h.textContent=`PAUSE`,t.focus())};f.onclick=()=>{C.phase===`paused`?G():W()},p.onclick=U,m.onclick=()=>{S.enabled=!S.enabled,m.textContent=S.enabled?`SFX: ON`:`SFX: OFF`},h.onclick=G;let K=()=>{if(document.fullscreenElement)document.exitFullscreen();else{let e=t.requestFullscreen?.();e&&typeof e.catch==`function`&&e.catch(()=>{})}};g.onclick=K;let q=e=>{t.isConnected&&([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&e.preventDefault(),T.add(e.code),e.code===`KeyC`&&U(),e.code===`KeyP`&&G(),e.code===`KeyF`&&K(),(e.code===`Enter`||e.code===`KeyR`)&&C.phase!==`playing`&&W())},J=e=>{T.delete(e.code)};window.addEventListener(`keydown`,q),window.addEventListener(`keyup`,J),n.addEventListener(`pointermove`,e=>{if(e.pointerType===`touch`||C.phase!==`playing`)return;if(R){z&&(z={x:D(z.x+e.movementX*.38,-108,P),y:D(z.y+e.movementY*.38,F,I)},O=z);return}let t=n.getBoundingClientRect(),r=(e.clientX-t.left)/t.width*2-1,i=(e.clientY-t.top)/t.height*2-1;O={x:D(r*P*1.15,-108,P),y:D(i*74,F,I)}}),n.addEventListener(`pointerleave`,()=>{O=null,k=!1}),n.addEventListener(`pointerdown`,e=>{e.pointerType!==`touch`&&C.phase===`playing`&&(k=!0,B())}),n.addEventListener(`contextmenu`,e=>e.preventDefault());let Y=null;_.addEventListener(`pointerdown`,e=>{e.preventDefault(),Y===null&&(Y=e.pointerId,_.setPointerCapture?.(e.pointerId),j=!0,_.style.background=`rgba(244,63,94,0.55)`)});let te=e=>{e.pointerId===Y&&(Y=null,j=!1,_.style.background=`rgba(244,63,94,0.28)`)};_.addEventListener(`pointerup`,te),_.addEventListener(`pointercancel`,te),_.addEventListener(`contextmenu`,e=>e.preventDefault());let X=.12,Z=null,ne=e=>{let t=b.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.hypot(n,r);i>48&&(n=n/i*48,r=r/i*48),x.style.transform=`translate(${n}px, ${r}px)`;let a=Math.min(1,i/48);if(a<X)M=null;else{let e=(a-X)/.88;M={x:n/48*(e/a),y:r/48*(e/a)}}},re=e=>{e.pointerId===Z&&(Z=null,M=null,x.style.transform=``)};b.addEventListener(`pointerdown`,e=>{e.preventDefault(),Z===null&&(Z=e.pointerId,b.setPointerCapture?.(e.pointerId),ne(e))}),b.addEventListener(`pointermove`,e=>{e.pointerId===Z&&ne(e)}),b.addEventListener(`pointerup`,re),b.addEventListener(`pointercancel`,re),b.addEventListener(`contextmenu`,e=>e.preventDefault());let ie=e=>{e.pointerType!==`touch`&&(k=!1)};window.addEventListener(`pointerup`,ie);let Q=performance.now(),ae=C.phase,oe=v(`neon-vectors:render`),se=v(`neon-vectors:hud`),ce=()=>{r.textContent=String(Math.floor(C.score)).padStart(5,`0`),i.textContent=String(Math.floor(C.best)).padStart(5,`0`),a.textContent=`x${C.combo}`,o.textContent=String(C.wave),s.textContent=`${Math.round(C.shield)}%`,c.style.width=`${C.shield}%`,c.style.background=C.shield>50?`#34d399`:C.shield>25?`#facc15`:`#f43f5e`,C.phase!==ae&&(ae=C.phase,C.phase===`gameover`&&(V(),l.style.display=`flex`,u.textContent=`Shields depleted! Ready for another trench run?`,d.style.display=`block`,d.textContent=`FINAL SCORE: ${Math.floor(C.score)}  ·  WAVE ${C.wave}  ·  BEST: ${Math.floor(C.best)}`,f.textContent=`PLAY AGAIN`))},$=new w(()=>{if(!n.isConnected){$.isRunning&&$.stop(),window.removeEventListener(`keydown`,q),window.removeEventListener(`keyup`,J),window.removeEventListener(`pointerup`,ie),document.removeEventListener(`pointerlockchange`,H),V();return}let e=performance.now(),t=Math.min(.05,(e-Q)/1e3);Q=e,C.phase===`paused`||t<=0||(ee(C,t,T,O,k||j,S,M),y(()=>{n.markup=A(C)},oe),y(()=>{ce()},se))});$.start()}},q=[`NeonVectors3D`]})))()}J();export{K as NeonVectors3D,q as __namedExportsOrder,M as default};