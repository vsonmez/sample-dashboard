"use strict";(self.webpackChunkreact_dev_to=self.webpackChunkreact_dev_to||[]).push([[777],{964:(e,r,o)=>{o.d(r,{A:()=>t});const t=(e,r,o,t)=>{const n={primary:"border-indigo-500 hover:border-indigo-700 text-indigo-500 hover:text-indigo-700",success:"border-green-600 hover:border-green-700 text-green-600 hover:text-green-700",warning:"border-orange-500 hover:border-orange-700 text-orange-500 hover:text-orange-700",danger:"border-red-500 hover:border-red-700 text-red-500 hover:text-red-700"},a={primary:"bg-indigo-500 hover:bg-indigo-700",success:"bg-green-600 hover:bg-green-700",warning:"bg-orange-500 hover:bg-orange-700",danger:"bg-red-500 hover:bg-red-700"},s={primary:"ring-indigo-500 hover:ring-indigo-700 text-indigo-500 hover:text-indigo-700 hover:ring-2",success:"ring-green-600 hover:ring-green-700 text-green-600 hover:text-green-700 hover:ring-2",warning:"ring-orange-500 hover:ring-orange-700 text-orange-500 hover:text-orange-700 hover:ring-2",danger:"ring-red-500 hover:ring-red-700 text-red-500 hover:text-red-700 hover:ring-2"};return t?"".concat(n[e]||n.primary," ").concat(r):o?"".concat(s[e]||s.primary," ").concat(r):"".concat(a[e]||a.primary," ").concat(r)}},158:(e,r,o)=>{o.r(r),o.d(r,{default:()=>l});var t=o(43),n=o(384),a=o(216),s=o(427),i=o(34),c=o(579);const g=()=>{const e=(0,a.Zp)(),[r,o]=t.useState("kminchelle"),[g,l]=t.useState("0lelplR"),d=localStorage.getItem("accessToken");return t.useEffect((()=>{d&&e("/")}),[d,e]),(0,c.jsxs)("div",{"aria-roledescription":"login",className:"h-full flex flex-col gap-5 justify-center items-center bg-gray-50",children:[(0,c.jsx)("img",{src:"https://img.logoipsum.com/262.svg",alt:"Logo"}),(0,c.jsx)("h1",{className:"text-3xl font-medium",children:"Sign in to your account"}),(0,c.jsx)("div",{className:"w-full max-w-96 border rounded p-5 shadow-sm bg-white",children:(0,c.jsxs)("form",{onSubmit:o=>(o.preventDefault(),void n.A.post("auth/login",{username:r,password:g}).then((r=>{localStorage.setItem("accessToken",r.data.token),e("/")})).catch((e=>{console.log(e)}))),className:"flex flex-col gap-5",children:[(0,c.jsx)(s.A,{label:"Username",id:"username",value:r,onChange:e=>o(e.target.value)}),(0,c.jsx)(s.A,{label:"Password",id:"password",type:"password",value:g,onChange:e=>l(e.target.value)}),(0,c.jsx)(i.A,{text:"Login",type:"submit"})]})})]})},l=t.memo(g)},34:(e,r,o)=>{o.d(r,{A:()=>i});var t=o(43),n=o(964),a=o(579);const s=e=>{let{className:r,onClick:o,text:s,variant:i="primary",type:c="button",isButtonBordered:g}=e;const l="".concat(g?"":"text-white"," font-bold py-2 px-4 rounded transition-colors"),d=t.useRef("".concat(l," ").concat(r||"")),[h,u]=t.useState((0,n.A)(i,d.current,!1,g));return t.useEffect((()=>{u((0,n.A)(i,d.current,!1,g))}),[i,d,g]),(0,a.jsx)("button",{className:h,type:c,onClick:o,children:s})},i=t.memo(s)},427:(e,r,o)=>{o.d(r,{A:()=>s});var t=o(43),n=o(579);const a=e=>{let{type:r="text",label:o,id:t,value:a,onChange:s,placeholder:i,className:c}=e;return(0,n.jsxs)("div",{className:"flex flex-col gap-2","aria-roledescription":"base-input",children:[o&&(0,n.jsx)("label",{className:"font-medium text-gray-900",htmlFor:t,children:o}),(0,n.jsx)("input",{className:"outline-none ring-1 ring-gray-300 px-2 py-1 rounded focus:ring-indigo-500 focus:ring-2 transition-colors ".concat(c||""),type:r,id:t,value:a,onChange:s,placeholder:i})]})},s=t.memo(a)}}]);
//# sourceMappingURL=777.633ded59.chunk.js.map