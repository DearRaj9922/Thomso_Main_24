/*! For license information please see main.ab252d5c.js.LICENSE.txt */
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ra=(0,at.i7)(Xi||(Xi=ea`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),ia=e=>{const{classes:t,variant:n,color:r,disableShrink:i}=e;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach((i=>{r[i]=e[i].reduce(((e,r)=>{if(r){const i=t(r);""!==i&&e.push(i),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}({root:["root",n,`color${Zr(r)}`],svg:["svg"],circle:["circle",`circle${Zr(n)}`,i&&"circleDisableShrink"]},qi,t)},aa=Hi("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${Zr(n.color)}`]]}})((e=>{let{ownerState:t,theme:n}=e;return(0,Ye.A)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:(n.vars||n).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,at.AH)(Zi||(Zi=ea`
      animation: ${0} 1.4s linear infinite;
    `),na)})),oa=Hi("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),sa=Hi("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${Zr(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:n}=e;return(0,Ye.A)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,at.AH)($i||($i=ea`
      animation: ${0} 1.4s ease-in-out infinite;
//# sourceMappingURL=main.ab252d5c.js.map