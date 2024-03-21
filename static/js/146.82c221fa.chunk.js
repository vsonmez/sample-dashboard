"use strict";(self.webpackChunkreact_dev_to=self.webpackChunkreact_dev_to||[]).push([[146],{201:(e,t,s)=>{s.d(t,{A:()=>r});const r=e=>e.replace(/([A-Z])/g," $1").replace(/^./,(e=>e.toUpperCase())).trim()},146:(e,t,s)=>{s.r(t),s.d(t,{default:()=>B});var r=s(43),a=s(593),l=s(579);const c=e=>{let{type:t="text",label:s,id:r,value:a,onChange:c,placeholder:i,className:o,name:n}=e;return(0,l.jsxs)("div",{className:"flex flex-col gap-2","aria-roledescription":"base-input",children:[s&&(0,l.jsx)("label",{className:"font-medium text-gray-900",htmlFor:r,children:s}),(0,l.jsx)("input",{className:"outline-none ring-1 ring-gray-300 px-2 py-1 rounded focus:ring-indigo-500 focus:ring-2 transition-colors ".concat(o||""),name:n,type:t,id:r,value:a,onChange:c,placeholder:i})]})},i=r.memo(c);var o=s(25);const n=e=>(0,l.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",height:"1em",width:"1em",...e,children:[(0,l.jsx)("path",{d:"M19 11 A8 8 0 0 1 11 19 A8 8 0 0 1 3 11 A8 8 0 0 1 19 11 z"}),(0,l.jsx)("path",{d:"M21 21l-4.35-4.35"})]}),d=r.memo(n),u=e=>{let{onSearch:t,placeholder:s}=e;const[a,c]=r.useState("");return(0,l.jsxs)("div",{className:"flex items-center","aria-roledescription":"search",children:[(0,l.jsx)("div",{className:"flex-1",children:(0,l.jsx)(i,{placeholder:s||"Search...",type:"search",onChange:e=>{c(e.target.value)},className:"border-r-0 rounded-e-none"})}),(0,l.jsx)(o.A,{onClick:()=>{t(a)},children:(0,l.jsx)(d,{className:"w-5 h-5"})})]})},m=r.memo(u);var h=s(185);const x=e=>(0,l.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,l.jsx)("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})}),p=r.memo(x),j=e=>(0,l.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",...e,children:(0,l.jsx)("path",{d:"M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"})}),g=r.memo(j),f=e=>(0,l.jsxs)("svg",{viewBox:"0 0 24 24",fill:"currentColor",height:"1em",width:"1em",...e,children:[(0,l.jsx)("path",{d:"M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"}),(0,l.jsx)("path",{d:"M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"})]}),v=r.memo(f),N=(e,t)=>{if(!e||!t)return e;const s=new RegExp(t,"gi");return e.replace(s,(e=>"<span class=\"underline font-semibold text-indigo-500\" title='Search Term'>".concat(e,"</span>")))},A=e=>{let{keyword:t,onSelectProduct:s}=e;const{productList:r,setSelectedProduct:a}=(0,h.A)();return r&&0!==r.length?(0,l.jsx)("div",{className:"bg-white rounded border h-full overflow-auto",children:(0,l.jsxs)("table",{className:"w-full border-collapse","aria-roledescription":"product list",children:[(0,l.jsx)("thead",{className:"sticky top-0 border-b bg-gradient-to-t from-gray-100 to-white",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Image"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Name"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Brand"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Description"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Price"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Discount"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Rating"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold",children:"Quantity"}),(0,l.jsx)("th",{className:"p-3 text-left font-semibold"})]})}),(0,l.jsx)("tbody",{className:"h-full overflow-auto",children:null===r||void 0===r?void 0:r.map((e=>(0,l.jsxs)("tr",{className:"border-b last:border-0 even:bg-indigo-50/50",children:[(0,l.jsx)("td",{className:"p-3",children:(0,l.jsx)("img",{src:e.thumbnail,alt:e.title,className:"rounded w-10"})}),(0,l.jsx)("td",{className:"p-3",dangerouslySetInnerHTML:{__html:N(e.title,t)}}),(0,l.jsx)("td",{className:"p-3",children:e.brand}),(0,l.jsx)("td",{className:"p-3 w-96",dangerouslySetInnerHTML:{__html:N(e.description,t)}}),(0,l.jsxs)("td",{className:"p-3",children:[e.price,"$"]}),(0,l.jsxs)("td",{className:"p-3",children:[e.discountPercentage,"%"]}),(0,l.jsx)("td",{className:"p-3",children:e.rating}),(0,l.jsx)("td",{className:"p-3",children:e.stock}),(0,l.jsx)("td",{className:"p-3",children:(0,l.jsxs)("div",{className:"flex gap-2 flex-nowrap justify-end items-center",children:[(0,l.jsx)(o.A,{variant:"primary",children:(0,l.jsx)(v,{className:"w-5 h-5"})}),(0,l.jsx)(o.A,{variant:"warning",onClick:()=>(e=>{a(e),s&&s()})(e),children:(0,l.jsx)(p,{className:"w-5 h-5"})}),(0,l.jsx)(o.A,{variant:"danger",children:(0,l.jsx)(g,{className:"w-5 h-5"})})]})})]},e.id)))})]})}):null},b=r.memo(A);var y=s(34),w=s(337),S=s(892),q=s(656),P=s(724);const k=e=>e.split("-").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");var C=s(899);const L=e=>{let{onSubmit:t}=e;const{productCategories:s,setProductCategories:a,selectedProduct:c}=(0,h.A)(),i=r.useMemo((()=>s.map((e=>({value:e,label:k(e)})))),[s]);r.useEffect((()=>{0===s.length&&a()}),[s]);const o=C.Ik().shape({brand:C.Yj().required("Brand is required"),category:C.Yj().required("Category is required"),description:C.Yj().required("Description is required"),discountPercentage:C.ai().min(0,"Discount percentage must be greater than or equal to 0").max(100,"Discount percentage must be less than or equal to 100").required("Discount percentage is required"),price:C.ai().min(0,"Price must be greater than or equal to 0").required("Price is required"),rating:C.ai().min(0,"Rating must be greater than or equal to 0").max(5,"Rating must be less than or equal to 5").required("Rating is required"),stock:C.ai().min(0,"Stock must be greater than or equal to 0").required("Stock is required"),title:C.Yj().required("Title is required")}),n={brand:(null===c||void 0===c?void 0:c.brand)||"",category:(null===c||void 0===c?void 0:c.category)||"",description:(null===c||void 0===c?void 0:c.description)||"",discountPercentage:(null===c||void 0===c?void 0:c.discountPercentage)||"",price:(null===c||void 0===c?void 0:c.price)||"",rating:(null===c||void 0===c?void 0:c.rating)||"",stock:(null===c||void 0===c?void 0:c.stock)||"",title:(null===c||void 0===c?void 0:c.title)||""};return(0,l.jsx)("div",{className:"p-10 h-full overflow-auto",children:(0,l.jsx)(S.l1,{initialValues:n,validationSchema:o,onSubmit:t,enableReinitialize:!0,children:(0,l.jsxs)(S.lV,{className:"grid grid-cols-2 gap-5",children:[(0,l.jsx)(q.A,{fieldName:"brand",required:!0}),(0,l.jsx)(P.A,{fieldName:"category",options:i,required:!0}),(0,l.jsx)(q.A,{fieldName:"description",required:!0}),(0,l.jsx)(q.A,{fieldName:"discountPercentage",type:"number",required:!0}),(0,l.jsx)(q.A,{fieldName:"price",type:"number",required:!0}),(0,l.jsx)(q.A,{fieldName:"rating",type:"number",required:!0}),(0,l.jsx)(q.A,{fieldName:"stock",type:"number",required:!0}),(0,l.jsx)(q.A,{fieldName:"title",required:!0}),(0,l.jsx)("div",{className:"col-span-2 flex justify-end",children:(0,l.jsx)(y.A,{type:"submit",text:c?"Update":"Add"})})]})})})},M=r.memo(L);var z=s(156),H=s(453);const D=()=>{const{firstName:e}=(0,H.A)(),t=r.useRef(null),{addToastr:s}=(0,w.A)(),[c,i]=r.useState(""),{searchProductList:o,resetProductStore:n,selectedProduct:d,setSelectedProduct:u}=(0,h.A)(),x=r.useCallback((t=>{i(t),t?o(t):s({message:"".concat(e,", please enter search keyword. For example 'phone'."),variant:"warning"})}),[o,s,e]),p=r.useCallback((()=>{var e;null===(e=t.current)||void 0===e||e.close(),u(null)}),[t,u]),j=r.useCallback((()=>{s({message:"".concat(e,", ").concat(d?"you have successfully updated a product":"you have successfully added a product","."),variant:"success"}),p()}),[s,p,e,d]);return r.useEffect((()=>()=>n()),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{"aria-roledescription":"product",className:"h-full",children:[(0,l.jsx)(a.A,{title:"Product",subtitle:"View, edit, add, or delete product"}),(0,l.jsxs)("div",{className:"p-10 h-[calc(100%-64px)] flex flex-col gap-5",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)(m,{placeholder:"Search products...",onSearch:x}),(0,l.jsx)("div",{children:(0,l.jsx)(y.A,{text:"Add Product",onClick:()=>{var e;null===(e=t.current)||void 0===e||e.showModal()}})})]}),(0,l.jsx)("div",{className:"h-[calc(100%-56px)]",children:(0,l.jsx)(b,{keyword:c,onSelectProduct:()=>{var e;null===(e=t.current)||void 0===e||e.showModal()}})})]})]}),(0,l.jsx)("dialog",{"aria-roledescription":"add product dialog",ref:t,className:"rounded w-1/3 shadow-2xl ring-1 ring-gray-300 h-2/4",children:(0,l.jsxs)("div",{className:"h-full flex flex-col",children:[(0,l.jsx)(z.A,{title:d?"Update Product":"Add Product",onClose:p}),(0,l.jsx)(M,{onSubmit:j})]})})]})},B=r.memo(D)},593:(e,t,s)=>{s.d(t,{A:()=>c});var r=s(43),a=s(579);const l=e=>{let{title:t,subtitle:s}=e;return(0,a.jsxs)("div",{className:"p-2 shadow-md bg-white","aria-roledescription":"section-heading",children:[(0,a.jsx)("h1",{className:"text-lg font-medium",children:t}),s&&(0,a.jsx)("h2",{className:"text-gray-600 italic",children:s})]})},c=r.memo(l)},34:(e,t,s)=>{s.d(t,{A:()=>i});var r=s(43),a=s(964),l=s(579);const c=e=>{let{className:t,onClick:s,text:c,variant:i="primary",type:o="button",isButtonBordered:n}=e;const d="".concat(n?"":"text-white"," font-bold py-2 px-4 rounded transition-colors"),u=r.useRef("".concat(d," ").concat(t||"")),[m,h]=r.useState((0,a.A)(i,u.current,!1,n));return r.useEffect((()=>{h((0,a.A)(i,u.current,!1,n))}),[i,u,n]),(0,l.jsx)("button",{className:m,type:o,onClick:s,children:c})},i=r.memo(c)},156:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(43),a=s(25),l=s(530),c=s(579);const i=e=>{let{onClose:t,title:s}=e;return(0,c.jsxs)("header",{className:"flex items-center justify-between p-5 border-b",children:[(0,c.jsx)("span",{className:"font-medium text-base text-gray-500",children:s}),(0,c.jsx)(a.A,{variant:"danger",onClick:t,children:(0,c.jsx)(l.A,{className:"w-3 h-3"})})]})},o=r.memo(i)},656:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(43),a=s(892),l=s(201),c=s(579);const i=e=>{let{fieldName:t,type:s="text",...i}=e;const o=(0,a.j7)(),[n,d]=r.useState(o.errors[t]);return r.useEffect((()=>{d(o.errors[t])}),[o,t]),(0,c.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,c.jsxs)("label",{htmlFor:t,className:"text-gray-700",children:[(0,l.A)(t)," ",i.required?(0,c.jsx)("span",{className:"text-red-500",children:"*"}):null," "]}),(0,c.jsx)(a.D0,{type:s,id:t,name:t,className:"formik-field ".concat(n?"ring-red-500":"ring-gray-300"),...i}),(0,c.jsx)(a.Kw,{component:"span",className:"text-red-500 text-xs",name:t})]})},o=r.memo(i)},724:(e,t,s)=>{s.d(t,{A:()=>o});var r=s(892),a=s(43),l=s(201),c=s(579);const i=e=>{let{fieldName:t,options:s,...i}=e;const o=(0,r.j7)(),[n,d]=a.useState(o.errors[t]);return a.useEffect((()=>{d(o.errors[t])}),[o,t]),(0,c.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,c.jsxs)("label",{htmlFor:t,className:"text-gray-700",children:[(0,l.A)(t),i.required?(0,c.jsx)("span",{className:"text-red-500",children:"*"}):null," "]}),(0,c.jsxs)(r.D0,{className:"formik-field ".concat(n?"ring-red-500":"ring-gray-300"),as:"select",name:t,id:t,...i,children:[(0,c.jsx)("option",{value:"",children:"Select an option"}),s.map((e=>{let{value:t,label:s}=e;return(0,c.jsx)("option",{value:t,children:s},t)}))]}),(0,c.jsx)(r.Kw,{component:"span",className:"text-red-500 text-xs",name:t})]})},o=a.memo(i)},185:(e,t,s)=>{s.d(t,{A:()=>l});var r=s(416),a=s(357);const l=()=>{const e=r.A.useAppDispatch();return{productList:r.A.useAppSelector(a.A.select.getProductList),productCategories:r.A.useAppSelector(a.A.select.getProductCategories),selectedProduct:r.A.useAppSelector(a.A.select.getSelectedProduct),searchProductList:t=>{e(a.A.searchProductList(t))},resetProductStore:()=>{e(a.A.actions.reset())},setProductCategories:()=>{e(a.A.getProductCategories())},setSelectedProduct:t=>{e(a.A.actions.setSelectedProduct(t))}}}},453:(e,t,s)=>{s.d(t,{A:()=>l});var r=s(416),a=s(603);const l=()=>{const e=r.A.useAppDispatch();return{user:r.A.useAppSelector(a.A.select.user),fullName:r.A.useAppSelector(a.A.select.fullName),firstName:r.A.useAppSelector(a.A.select.firstname),setUser:()=>{e(a.A.fetchUser())},resetUserStore:()=>{e(a.A.actions.reset())}}}}}]);
//# sourceMappingURL=146.82c221fa.chunk.js.map