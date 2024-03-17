"use strict";(self.webpackChunkreact_dev_to=self.webpackChunkreact_dev_to||[]).push([[318],{964:(e,r,s)=>{s.d(r,{A:()=>i});const i=(e,r,s,i)=>{const n={primary:"border-indigo-500 hover:border-indigo-700 text-indigo-500 hover:text-indigo-700",success:"border-green-600 hover:border-green-700 text-green-600 hover:text-green-700",warning:"border-orange-500 hover:border-orange-700 text-orange-500 hover:text-orange-700",danger:"border-red-500 hover:border-red-700 text-red-500 hover:text-red-700"},a={primary:"bg-indigo-500 hover:bg-indigo-700",success:"bg-green-600 hover:bg-green-700",warning:"bg-orange-500 hover:bg-orange-700",danger:"bg-red-500 hover:bg-red-700"},t={primary:"ring-indigo-500 hover:ring-indigo-700 text-indigo-500 hover:text-indigo-700 hover:ring-2",success:"ring-green-600 hover:ring-green-700 text-green-600 hover:text-green-700 hover:ring-2",warning:"ring-orange-500 hover:ring-orange-700 text-orange-500 hover:text-orange-700 hover:ring-2",danger:"ring-red-500 hover:ring-red-700 text-red-500 hover:text-red-700 hover:ring-2"};return i?"".concat(n[e]||n.primary," ").concat(r):s?"".concat(t[e]||t.primary," ").concat(r):"".concat(a[e]||a.primary," ").concat(r)}},318:(e,r,s)=>{s.r(r),s.d(r,{default:()=>N});var i=s(43),n=s(593),a=s(453),t=s(34),l=s(25),d=s(579);const c=e=>(0,d.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,d.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})}),o=i.memo(c);var m=s(892);const x=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase())).trim(),u=e=>{let{field:r,...s}=e;const n=(0,m.j7)(),[a,t]=i.useState(n.errors[r]);return i.useEffect((()=>{t(n.errors[r])}),[n,r]),(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)("label",{htmlFor:r,children:x(r)}),(0,d.jsx)(m.D0,{type:"text",id:r,name:r,className:"formik-field ".concat(a?"ring-red-500":"ring-gray-300"),...s}),(0,d.jsx)(m.Kw,{component:"span",className:"text-red-500 text-xs",name:r})]})},h=i.memo(u);var g=s(899);const v=e=>{let{updateField:r}=e;const{user:s}=(0,a.A)(),i=g.Ik({username:g.Yj().required("Username is required"),firstName:g.Yj().required("First name is required"),lastName:g.Yj().required("Last name is required"),gender:g.Yj().required("Gender is required"),email:g.Yj().email("Email is not valid").required("Email is required")}),n={username:(null===s||void 0===s?void 0:s.username)||"",firstName:(null===s||void 0===s?void 0:s.firstName)||"",lastName:(null===s||void 0===s?void 0:s.lastName)||"",gender:(null===s||void 0===s?void 0:s.gender)||"",email:(null===s||void 0===s?void 0:s.email)||""};return(0,d.jsx)("div",{"aria-roledescription":"user update",children:(0,d.jsx)(m.l1,{initialValues:n,validationSchema:i,onSubmit:()=>{},enableReinitialize:!0,children:(0,d.jsxs)(m.lV,{className:"flex flex-col gap-5",children:[j(r,"username"),j(r,"firstName"),j(r,"lastName"),j(r,"gender"),j(r,"email")]})})})},j=(e,r)=>e!==r?null:(0,d.jsx)(h,{field:r}),p=i.memo(v),f=()=>{const[e,r]=i.useState(),s=i.useRef(null),{user:c}=(0,a.A)(),m=e=>{var i;r(e),null===(i=s.current)||void 0===i||i.showModal()};return(0,d.jsxs)("div",{"aria-roledescription":"profile",className:"h-full",children:[(0,d.jsx)(n.A,{title:"Home",subtitle:"View and edit your profile"}),(0,d.jsxs)("div",{className:"px-5 pt-10 flex items-start gap-20 h-[calc(100%-64px)] overflow-auto",children:[(0,d.jsxs)("div",{className:"flex items-center gap-5",children:[(0,d.jsx)("img",{src:null===c||void 0===c?void 0:c.image,alt:"",className:"w-24 h-24 rounded-full p-0.5 ring-4 ring-gray-300"}),(0,d.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,d.jsx)(t.A,{text:"Change Avatar"}),(0,d.jsx)("p",{children:"JPG, GIF or PNG. 1MB max."})]})]}),(0,d.jsxs)("ul",{className:"divide-y-2 flex-1",children:[(0,d.jsxs)("li",{className:"flex items-center py-1",children:[(0,d.jsx)("span",{className:"min-w-96 font-medium",children:"Firstname:"}),(0,d.jsx)("span",{className:"flex-1",children:null===c||void 0===c?void 0:c.firstName}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)(t.A,{text:"Edit",isButtonBordered:!0,onClick:()=>m("firstName")})})]}),(0,d.jsxs)("li",{className:"flex items-center py-1",children:[(0,d.jsx)("span",{className:"min-w-96 font-medium",children:"Lastname:"}),(0,d.jsx)("span",{className:"flex-1",children:null===c||void 0===c?void 0:c.lastName}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)(t.A,{text:"Edit",isButtonBordered:!0,onClick:()=>m("lastName")})})]}),(0,d.jsxs)("li",{className:"flex items-center py-1",children:[(0,d.jsx)("span",{className:"min-w-96 font-medium",children:"Email:"}),(0,d.jsx)("span",{className:"flex-1",children:null===c||void 0===c?void 0:c.email}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)(t.A,{text:"Edit",isButtonBordered:!0,onClick:()=>m("email")})})]}),(0,d.jsxs)("li",{className:"flex items-center py-1",children:[(0,d.jsx)("span",{className:"min-w-96 font-medium",children:"Username:"}),(0,d.jsx)("span",{className:"flex-1",children:null===c||void 0===c?void 0:c.username}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)(t.A,{text:"Edit",isButtonBordered:!0,onClick:()=>m("username")})})]}),(0,d.jsxs)("li",{className:"flex items-center py-1",children:[(0,d.jsx)("span",{className:"min-w-96 font-medium",children:"Gender:"}),(0,d.jsx)("span",{className:"flex-1",children:null===c||void 0===c?void 0:c.gender}),(0,d.jsx)("div",{className:"flex justify-end",children:(0,d.jsx)(t.A,{text:"Edit",isButtonBordered:!0,onClick:()=>m("gender")})})]}),(0,d.jsxs)("li",{className:" py-5 flex items-start",children:[(0,d.jsxs)("div",{className:"w-96 pr-5",children:[(0,d.jsx)("h3",{className:"text-base font-medium",children:"Suspend Account"}),(0,d.jsx)("p",{className:"text-gray-600 italic",children:"You can temporarily suspend your account here."})]}),(0,d.jsx)("div",{className:"flex flex-col gap-2",children:(0,d.jsx)(t.A,{text:"Suspend my account",variant:"warning"})})]}),(0,d.jsx)("li",{children:(0,d.jsxs)("div",{className:" py-5 flex items-start",children:[(0,d.jsxs)("div",{className:"w-96 pr-5",children:[(0,d.jsx)("h3",{className:"text-base font-medium",children:"Delete Account"}),(0,d.jsx)("p",{className:"text-gray-600 italic",children:"No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently."})]}),(0,d.jsx)("div",{className:"flex flex-col gap-2",children:(0,d.jsx)(t.A,{text:"Delete my account",variant:"danger"})})]})})]})]}),(0,d.jsxs)("dialog",{ref:s,className:"rounded w-96 shadow-2xl ring-1 ring-gray-300",children:[(0,d.jsxs)("header",{className:"flex items-center justify-between p-2 border-b",children:[(0,d.jsx)("span",{className:"font-medium text-base",children:"Update Profile"}),(0,d.jsx)(l.A,{variant:"danger",onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.close()},children:(0,d.jsx)(o,{className:"w-3 h-3"})})]}),(0,d.jsx)("div",{className:"p-2",children:(0,d.jsx)(p,{updateField:e})}),(0,d.jsx)("footer",{className:"flex justify-end p-2 border-t",children:(0,d.jsx)(t.A,{text:"Update",onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.close()}})})]})]})},N=i.memo(f)},593:(e,r,s)=>{s.d(r,{A:()=>t});var i=s(43),n=s(579);const a=e=>{let{title:r,subtitle:s}=e;return(0,n.jsxs)("div",{className:"p-2 shadow-md","aria-roledescription":"section-heading",children:[(0,n.jsx)("h1",{className:"text-lg font-medium",children:r}),s&&(0,n.jsx)("h2",{className:"text-gray-600 italic",children:s})]})},t=i.memo(a)},34:(e,r,s)=>{s.d(r,{A:()=>l});var i=s(43),n=s(964),a=s(579);const t=e=>{let{className:r,onClick:s,text:t,variant:l="primary",type:d="button",isButtonBordered:c}=e;const o="".concat(c?"":"text-white"," font-bold py-2 px-4 rounded transition-colors"),m=i.useRef("".concat(o," ").concat(r||"")),[x,u]=i.useState((0,n.A)(l,m.current,!1,c));return i.useEffect((()=>{u((0,n.A)(l,m.current,!1,c))}),[l,m,c]),(0,a.jsx)("button",{className:x,type:d,onClick:s,children:t})},l=i.memo(t)},25:(e,r,s)=>{s.d(r,{A:()=>l});var i=s(43),n=s(964),a=s(579);const t=e=>{let{children:r,className:s,onClick:t,type:l,variant:d="primary"}=e;const c=i.useRef("".concat("bg-white font-bold p-1 rounded transition-colors ring-1"," ").concat(s||"")),[o,m]=i.useState((0,n.A)(d,c.current,!0));return i.useEffect((()=>{m((0,n.A)(d,c.current,!0))}),[d,c]),(0,a.jsx)("button",{className:o,type:l,onClick:t,children:r})},l=i.memo(t)},453:(e,r,s)=>{s.d(r,{A:()=>a});var i=s(995),n=s(603);const a=()=>{const e=i.A.useAppDispatch();return{user:i.A.useAppSelector(n.A.select.user),setUser:()=>{e(n.A.fetchUser())},resetUserStore:()=>{e(n.A.actions.reset())}}}}}]);
//# sourceMappingURL=318.001620b0.chunk.js.map