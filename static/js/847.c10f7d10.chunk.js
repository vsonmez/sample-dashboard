"use strict";(self.webpackChunkreact_dev_to=self.webpackChunkreact_dev_to||[]).push([[847],{201:(e,s,t)=>{t.d(s,{A:()=>r});const r=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase())).trim()},847:(e,s,t)=>{t.r(s),t.d(s,{default:()=>z});var r=t(43),a=t(593),l=t(427),c=t(25),i=t(579);const n=e=>(0,i.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",height:"1em",width:"1em",...e,children:[(0,i.jsx)("path",{d:"M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z"}),(0,i.jsx)("path",{d:"M21 21l-4.35-4.35"})]}),o=r.memo(n),d=e=>{let{onSearch:s,placeholder:t}=e;const[a,n]=r.useState("");return(0,i.jsxs)("div",{className:"flex items-center","aria-roledescription":"search",children:[(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)(l.A,{placeholder:t||"Search...",type:"search",onChange:e=>{n(e.target.value)},className:"border-r-0 rounded-e-none"})}),(0,i.jsx)(c.A,{onClick:()=>{s(a)},children:(0,i.jsx)(o,{className:"w-5 h-5"})})]})},m=r.memo(d);var u=t(185);const h=e=>(0,i.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,i.jsx)("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})}),x=r.memo(h),p=e=>(0,i.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,i.jsx)("path",{d:"M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"})}),j=r.memo(p),g=e=>(0,i.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",...e,children:[(0,i.jsx)("path",{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"}),(0,i.jsx)("path",{d:"M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"})]}),f=r.memo(g),v=(e,s)=>{if(!e||!s)return e;const t=new RegExp(s,"gi");return e.replace(t,(e=>"<span class=\"underline font-semibold text-indigo-500\" title='Search Term'>".concat(e,"</span>")))},N=e=>{let{keyword:s}=e;const{productList:t}=(0,u.A)();return t&&0!==t.length?(0,i.jsxs)("table",{className:"w-full","aria-roledescription":"product list",children:[(0,i.jsx)("thead",{className:"border-b-2 font-semibold",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{className:"text-left p-2",children:"Image"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Name"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Brand"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Description"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Price"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Discount"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Rating"}),(0,i.jsx)("th",{className:"text-left p-2",children:"Quantity"}),(0,i.jsx)("th",{})]})}),(0,i.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((e=>(0,i.jsxs)("tr",{className:"border-b",children:[(0,i.jsx)("td",{className:"p-2 w-24",children:(0,i.jsx)("img",{src:e.thumbnail,alt:e.title,className:"w-24 rounded"})}),(0,i.jsx)("td",{className:"p-2",dangerouslySetInnerHTML:{__html:v(e.title,s)}}),(0,i.jsx)("td",{className:"p-2",children:e.brand}),(0,i.jsx)("td",{className:"p-2 w-56",dangerouslySetInnerHTML:{__html:v(e.description,s)}}),(0,i.jsxs)("td",{className:"p-2",children:[e.price,"$"]}),(0,i.jsxs)("td",{className:"p-2",children:[e.discountPercentage,"%"]}),(0,i.jsx)("td",{className:"p-2",children:e.rating}),(0,i.jsx)("td",{className:"p-2",children:e.stock}),(0,i.jsx)("td",{className:"p-2",children:(0,i.jsxs)("div",{className:"flex gap-2 flex-nowrap justify-end items-center",children:[(0,i.jsx)(c.A,{variant:"primary",children:(0,i.jsx)(f,{className:"w-5 h-5"})}),(0,i.jsx)(c.A,{variant:"warning",children:(0,i.jsx)(x,{className:"w-5 h-5"})}),(0,i.jsx)(c.A,{variant:"danger",children:(0,i.jsx)(j,{className:"w-5 h-5"})})]})})]},e.id)))})]}):null},A=r.memo(N);var b=t(34),w=t(337),y=t(892),k=t(656),C=t(724);const S=e=>e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");var q=t(899);const P=e=>{let{onSubmit:s}=e;const{productCategories:t,setProductCategories:a}=(0,u.A)(),l=r.useMemo((()=>t.map((e=>({value:e,label:S(e)})))),[t]);r.useEffect((()=>{0===t.length&&a()}),[t]);const c=q.Ik().shape({brand:q.Yj().required("Brand is required"),category:q.Yj().required("Category is required"),description:q.Yj().required("Description is required"),discountPercentage:q.ai().min(0,"Discount percentage must be greater than or equal to 0").max(100,"Discount percentage must be less than or equal to 100").required("Discount percentage is required"),price:q.ai().min(0,"Price must be greater than or equal to 0").required("Price is required"),rating:q.ai().min(0,"Rating must be greater than or equal to 0").max(5,"Rating must be less than or equal to 5").required("Rating is required"),stock:q.ai().min(0,"Stock must be greater than or equal to 0").required("Stock is required"),title:q.Yj().required("Title is required")});return(0,i.jsx)("div",{className:"p-5 h-full overflow-auto",children:(0,i.jsx)(y.l1,{initialValues:{brand:"",category:"",description:"",discountPercentage:0,price:0,rating:0,stock:0,title:""},validationSchema:c,onSubmit:s,children:(0,i.jsxs)(y.lV,{className:"grid grid-cols-2 gap-5",children:[(0,i.jsx)(k.A,{fieldName:"brand"}),(0,i.jsx)(C.A,{fieldName:"category",options:l}),(0,i.jsx)(k.A,{fieldName:"description"}),(0,i.jsx)(k.A,{fieldName:"discountPercentage",type:"number"}),(0,i.jsx)(k.A,{fieldName:"price",type:"number"}),(0,i.jsx)(k.A,{fieldName:"rating",type:"number"}),(0,i.jsx)(k.A,{fieldName:"stock"}),(0,i.jsx)(k.A,{fieldName:"title"}),(0,i.jsx)("div",{className:"col-span-2 flex justify-end",children:(0,i.jsx)(b.A,{type:"submit",text:"Add"})})]})})})},L=r.memo(P);var M=t(156);const H=()=>{const e=r.useRef(null),{addToastr:s}=(0,w.A)(),[t,l]=r.useState(""),{searchProductList:c,resetProductStore:n}=(0,u.A)(),o=r.useCallback((e=>{l(e),e?c(e):s({message:"Please enter search keyword",variant:"danger"})}),[c,s]),d=r.useCallback((()=>{var s;null===(s=e.current)||void 0===s||s.close()}),[e]),h=r.useCallback((()=>{s({message:"Product added successfully",variant:"success"}),d()}),[s,d]);return r.useEffect((()=>()=>n()),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{"aria-roledescription":"product",className:"h-full",children:[(0,i.jsx)(a.A,{title:"Product",subtitle:"View, edit, add, or delete product"}),(0,i.jsxs)("div",{className:"p-5 h-[calc(100%-64px)]",children:[(0,i.jsxs)("div",{className:"flex justify-between pb-5",children:[(0,i.jsx)(m,{placeholder:"Search products...",onSearch:o}),(0,i.jsx)("div",{children:(0,i.jsx)(b.A,{text:"Add Product",onClick:()=>{var s;null===(s=e.current)||void 0===s||s.showModal()}})})]}),(0,i.jsx)("div",{className:"h-[calc(100%-56px)] overflow-auto",children:(0,i.jsx)(A,{keyword:t})})]})]}),(0,i.jsx)("dialog",{"aria-roledescription":"add product dialog",ref:e,className:"rounded w-1/3 shadow-2xl ring-1 ring-gray-300 h-2/4",children:(0,i.jsxs)("div",{className:"h-full flex flex-col",children:[(0,i.jsx)(M.A,{title:"Add Product",onClose:d}),(0,i.jsx)(L,{onSubmit:h})]})})]})},z=r.memo(H)},593:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(43),a=t(579);const l=e=>{let{title:s,subtitle:t}=e;return(0,a.jsxs)("div",{className:"p-2 shadow-md","aria-roledescription":"section-heading",children:[(0,a.jsx)("h1",{className:"text-lg font-medium",children:s}),t&&(0,a.jsx)("h2",{className:"text-gray-600 italic",children:t})]})},c=r.memo(l)},34:(e,s,t)=>{t.d(s,{A:()=>i});var r=t(43),a=t(964),l=t(579);const c=e=>{let{className:s,onClick:t,text:c,variant:i="primary",type:n="button",isButtonBordered:o}=e;const d="".concat(o?"":"text-white"," font-bold py-2 px-4 rounded transition-colors"),m=r.useRef("".concat(d," ").concat(s||"")),[u,h]=r.useState((0,a.A)(i,m.current,!1,o));return r.useEffect((()=>{h((0,a.A)(i,m.current,!1,o))}),[i,m,o]),(0,l.jsx)("button",{className:u,type:n,onClick:t,children:c})},i=r.memo(c)},156:(e,s,t)=>{t.d(s,{A:()=>n});var r=t(43),a=t(25),l=t(530),c=t(579);const i=e=>{let{onClose:s,title:t}=e;return(0,c.jsxs)("header",{className:"flex items-center justify-between p-3 border-b",children:[(0,c.jsx)("span",{className:"font-medium text-base",children:t}),(0,c.jsx)(a.A,{variant:"danger",onClick:s,children:(0,c.jsx)(l.A,{className:"w-3 h-3"})})]})},n=r.memo(i)},427:(e,s,t)=>{t.d(s,{A:()=>c});var r=t(43),a=t(579);const l=e=>{let{type:s="text",label:t,id:r,value:l,onChange:c,placeholder:i,className:n,name:o}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-2","aria-roledescription":"base-input",children:[t&&(0,a.jsx)("label",{className:"font-medium text-gray-900",htmlFor:r,children:t}),(0,a.jsx)("input",{className:"outline-none ring-1 ring-gray-300 px-2 py-1 rounded focus:ring-indigo-500 focus:ring-2 transition-colors ".concat(n||""),name:o,type:s,id:r,value:l,onChange:c,placeholder:i})]})},c=r.memo(l)},656:(e,s,t)=>{t.d(s,{A:()=>n});var r=t(43),a=t(892),l=t(201),c=t(579);const i=e=>{let{fieldName:s,type:t="text",...i}=e;const n=(0,a.j7)(),[o,d]=r.useState(n.errors[s]);return r.useEffect((()=>{d(n.errors[s])}),[n,s]),(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)("label",{htmlFor:s,children:(0,l.A)(s)}),(0,c.jsx)(a.D0,{type:t,id:s,name:s,className:"formik-field ".concat(o?"ring-red-500":"ring-gray-300"),...i}),(0,c.jsx)(a.Kw,{component:"span",className:"text-red-500 text-xs",name:s})]})},n=r.memo(i)},724:(e,s,t)=>{t.d(s,{A:()=>n});var r=t(892),a=t(43),l=t(201),c=t(579);const i=e=>{let{fieldName:s,options:t,...i}=e;const n=(0,r.j7)(),[o,d]=a.useState(n.errors[s]);return a.useEffect((()=>{d(n.errors[s])}),[n,s]),(0,c.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,c.jsx)("label",{htmlFor:s,children:(0,l.A)(s)}),(0,c.jsxs)(r.D0,{className:"formik-field ".concat(o?"ring-red-500":"ring-gray-300"),as:"select",name:s,id:s,...i,children:[(0,c.jsx)("option",{value:"",children:"Select an option"}),t.map((e=>{let{value:s,label:t}=e;return(0,c.jsx)("option",{value:s,children:t},s)}))]}),(0,c.jsx)(r.Kw,{component:"span",className:"text-red-500 text-xs",name:s})]})},n=a.memo(i)},185:(e,s,t)=>{t.d(s,{A:()=>l});var r=t(416),a=t(357);const l=()=>{const e=r.A.useAppDispatch();return{productList:r.A.useAppSelector(a.A.select.getProductList),productCategories:r.A.useAppSelector(a.A.select.getProductCategories),searchProductList:s=>{e(a.A.searchProductList(s))},resetProductStore:()=>{e(a.A.actions.reset())},setProductCategories:()=>{e(a.A.getProductCategories())}}}}}]);
//# sourceMappingURL=847.c10f7d10.chunk.js.map