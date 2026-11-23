import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{n as t,o as n}from"./iframe-c1D7l1PT.js";import{t as r}from"./svg3d-viewer-DqugKRuP.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),r(),i={title:`SVG3D/3 Camera`,component:`svg3d-viewer`,parameters:{docs:{autodocs:!0}}},a=(e,t=460,r=380)=>n`<svg3d-viewer .markup=${e} style="width:${t}px;height:${r}px"></svg3d-viewer>`,o=()=>{let e=[[0,0,0],[100,0,0],[0,100,0],[100,100,0],[0,0,100],[100,0,100],[0,100,100],[100,100,100]];return[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]].map(t=>{let n=t[0],r=t[1];return`<line x1="${e[n][0]}" y1="${e[n][1]}" z1="${e[n][2]}" x2="${e[r][0]}" y2="${e[r][1]}" z2="${e[r][2]}"/>`}).join(`
    `)},s=()=>{let e=[];for(let t=-50;t<=250;t+=50)e.push(`<line x1="${t}" y1="140" z1="-100" x2="${t}" y2="140" z2="300"/>`),e.push(`<line x1="-100" y1="140" z1="${t}" x2="300" y2="140" z2="${t}"/>`);return e.join(`
    `)},c=`
    <g stroke="#4a5568" stroke-width="1.5">
    ${o()}
    </g>
    <g stroke="#a0aec0" stroke-width="0.75">
    ${s()}
    </g>
    <circle cx="50" cy="50" r="8" cz="50" fill="#e53e3e"/>
`,l={name:`camera attribute url(#id) reuse (defs)`,render:()=>a(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -90 180 180" camera="#orbit">
    <defs>
      <camera id="orbit" projection="perspective" fov="55" position="220 180 280" target="50 50 50" up="0 1 0" near="1"/>
    </defs>
    ${c}
  </svg>`)},u={name:`Depth clipping (near/far)`,render:()=>a(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -90 180 180">
    <camera projection="perspective" fov="55" position="220 180 280" target="50 50 50" up="0 1 0" near="260" far="420"/>
    ${c}
  </svg>`)},d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -90 180 180">
    <camera projection="perspective" fov="55" position="220 180 280" target="50 50 50" up="0 1 0" near="1"/>
    ${c}
  </svg>`,f={name:`Keyboard camera controls (click to focus, then use keys)`,render:()=>n`<div>
      <svg3d-viewer
        controls
        .markup=${d}
        style="width:520px;height:420px"
      ></svg3d-viewer>
      <p style="font:12px/1.5 sans-serif;max-width:520px;color:#64748b">
        Click the canvas (or Tab to it) so it has focus, then:
        <b>←/→</b> orbit around the target · <b>↑/↓</b> orbit elevation · <b>+/−</b> dolly in/out ·
        <b>Shift+arrows</b> pan the view plane · <b>R</b> reset. The orbit rotates the document's
        own camera position around its target; zoom dollies along the view axis (visible under
        perspective; orthographic projection ignores distance by spec §5.4).
      </p>
    </div>`},p=e=>{let t=e*.35*Math.PI/180*4,n=50+300*Math.cos(t),r=50+300*Math.sin(t),i=150+60*Math.sin(t*2);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -90 180 180">
    <camera projection="perspective" fov="55" position="${n.toFixed(1)} ${i.toFixed(1)} ${r.toFixed(1)}" target="50 50 50" up="0 1 0" near="1"/>
    ${c}
  </svg>`},m={name:`Animated camera (orbit)`,render:()=>a(p(0)),play:({canvasElement:e})=>{let t=e.querySelector(`svg3d-viewer`);if(!t)return;let n=performance.now(),r=setInterval(()=>{t.isConnected?t.markup=p((performance.now()-n)/1e3):clearInterval(r)},40)}},h=e=>{let t=60+45*Math.sin(e*Math.PI*2/2.5);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-90 -90 180 180">
    <camera projection="perspective" fov="50" position="150 150 300" target="50 50 50" up="0 1 0" near="1"/>
    <g stroke="#718096" stroke-width="1">
      <line x1="0" y1="0" z1="0" x2="100" y2="0" z2="0"/>
      <line x1="100" y1="0" z1="0" x2="100" y2="100" z2="0"/>
      <line x1="100" y1="100" z1="0" x2="0" y2="100" z2="0"/>
      <line x1="0" y1="100" z1="0" x2="0" y2="0" z2="0"/>
      <line x1="50" y1="50" z1="0" x2="50" y2="50" z2="110" stroke-dasharray="3 3"/>
    </g>
    <circle cx="50" cy="50" r="14" cz="${(60+45*Math.cos(e*Math.PI*2/2.5)).toFixed(1)}" fill="#e53e3e"/>
    <circle cx="50" cy="50" r="14" cz="${t.toFixed(1)}" fill="#3182ce" fill-opacity="0.85"/>
  </svg>`},g={name:`Animated cz (depth motion under perspective)`,render:()=>a(h(0)),play:({canvasElement:e})=>{let t=e.querySelector(`svg3d-viewer`);if(!t)return;let n=performance.now(),r=setInterval(()=>{t.isConnected?t.markup=h((performance.now()-n)/1e3):clearInterval(r)},40)}},_=[`CameraReference`,`NearFarClipping`,`KeyboardControls`,`CameraFlythrough`,`DepthBob`]})))()}v();export{m as CameraFlythrough,l as CameraReference,g as DepthBob,f as KeyboardControls,u as NearFarClipping,_ as __namedExportsOrder,i as default};