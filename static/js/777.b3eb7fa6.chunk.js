"use strict";(self.webpackChunkreact_dev_to=self.webpackChunkreact_dev_to||[]).push([[777],{3201:(e,s,a)=>{a.d(s,{A:()=>r});const r=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase())).trim()},9777:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});var r=a(5043),t=a(8384),l=a(3216),o=a(9034),i=a(9337),c=a(416),n=a(843),d=a(899),m=a(3892),u=a(3656),p=a(579);const g=()=>{const{addToastr:e}=(0,i.A)(),s=(0,l.Zp)(),a=localStorage.getItem("accessToken"),g=d.Ik().shape({username:d.Yj().required("Username is required"),password:d.Yj().required("Password is required")});return r.useEffect((()=>{a&&s("/")}),[a,s]),(0,p.jsxs)("div",{"aria-roledescription":"login",className:"h-full flex flex-col justify-center items-center bg-gray-100 gap-10",children:[(0,p.jsx)("img",{src:"https://img.logoipsum.com/262.svg",alt:"Logo"}),(0,p.jsx)("h1",{className:"text-3xl font-medium text-gray-700",children:"Sign in to your account"}),(0,p.jsx)(m.l1,{initialValues:{username:"kminchelle",password:"0lelplR"},validationSchema:g,onSubmit:a=>{let{username:r,password:l}=a;t.A.post("auth/login",{username:r,password:l}).then((a=>{localStorage.setItem("accessToken",a.data.token),e({variant:"success",message:"Welcome ".concat(a.data.firstName," ").concat(a.data.lastName,"!")}),s("/")})).catch((e=>{var s;c.A.store.dispatch(n.A.actions.add({message:null===(s=e.response)||void 0===s?void 0:s.data.message,variant:"danger"}))}))},enableReinitialize:!0,children:(0,p.jsxs)(m.lV,{className:"bg-white p-10 rounded border border-gray-300 flex flex-col gap-5",children:[(0,p.jsx)(u.A,{fieldName:"username",required:!0}),(0,p.jsx)(u.A,{fieldName:"password",type:"password",required:!0}),(0,p.jsx)(o.A,{text:"Login",type:"submit"})]})})]})},x=r.memo(g)},3656:(e,s,a)=>{a.d(s,{A:()=>c});var r=a(5043),t=a(3892),l=a(3201),o=a(579);const i=e=>{let{fieldName:s,type:a="text",...i}=e;const c=(0,t.j7)(),[n,d]=r.useState(c.errors[s]);return r.useEffect((()=>{d(c.errors[s])}),[c,s]),(0,o.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,o.jsxs)("label",{htmlFor:s,className:"text-gray-700",children:[(0,l.A)(s)," ",i.required?(0,o.jsx)("span",{className:"text-red-500",children:"*"}):null," "]}),(0,o.jsx)(t.D0,{type:a,id:s,name:s,className:"formik-field ".concat(n?"ring-red-500":"ring-gray-300"),...i}),(0,o.jsx)(t.Kw,{component:"span",className:"text-red-500 text-xs",name:s})]})},c=r.memo(i)}}]);
//# sourceMappingURL=777.b3eb7fa6.chunk.js.map