(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[35],{6742:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/reset-password",function(){return a(2709)}])},3716:function(e,n,a){"use strict";a.d(n,{Z:function(){return r}});var t=a(5893),s=a(4051),o=a(1555);function r(e){let{children:n}=e;return(0,t.jsx)("section",{className:"auth-page",children:(0,t.jsxs)(s.Z,{md:2,className:"g-0",children:[(0,t.jsx)(o.Z,{className:"auth-container",children:n}),(0,t.jsx)(o.Z,{className:"layout",children:(0,t.jsx)("div",{className:"layout-bg"})})]})})}},3593:function(e,n,a){"use strict";a.d(n,{ZL:function(){return d},ph:function(){return r},Ow:function(){return c},vw:function(){return l}});var t=a(5893),s=a(1664),o=a.n(s);function r(e){let{title:n,link:a,path:s,noBack:r}=e;return(0,t.jsxs)("div",{className:"auth-header d-flex justify-content-between align-items-center",children:[r?(0,t.jsx)("div",{}):(0,t.jsx)(o(),{href:"/auth",className:"back-btn d-inline-flex align-items-center justify-content-center",children:(0,t.jsx)("i",{className:"las la-long-arrow-alt-right"})}),(0,t.jsxs)("span",{className:"account-option",children:[n,(0,t.jsx)(o(),{href:s,className:"account-option-link",children:a})]})]})}function l(e){let{title:n,subtitle:a}=e;return(0,t.jsxs)("div",{className:"auth-title",children:[(0,t.jsx)("h1",{className:"auth-title-text fw-bold text-capitalize",children:n}),(0,t.jsx)("h6",{className:"auth-subtitle-text m-0",children:a})]})}var i=a(5949);function c(e){let{title:n,loading:a}=e;return(0,t.jsx)("div",{className:"auth-submit mt-5",children:(0,t.jsx)(i.Ai,{type:"submit",title:n,loading:a})})}function d(e){let{forget:n}=e;return(0,t.jsx)("div",{className:"auth-footer mt-5 d-flex justify-content-between align-items-center",children:n?(0,t.jsx)(o(),{href:"/auth/forget-password",className:"forget-passowrd",children:"forget_passowrd"}):(0,t.jsx)("div",{})})}},2485:function(e,n,a){"use strict";a.d(n,{AS:function(){return o},F9:function(){return s},lK:function(){return t}});let t=[{id:"email-inp",type:"email",name:"email",placeholder:"البريد الالكترونى",icon:"lar la-envelope",noBorder:!0},{id:"password-inp",type:"password",name:"password",placeholder:"كلمة السر",icon:"las la-unlock-alt",noBorder:!0}],s=[{id:"firstName-inp",type:"text",name:"first_name",placeholder:"الاسم الاول",icon:"las la-signature",noBorder:!0,col:4},{id:"middle_name-inp",type:"text",name:"middle_name",placeholder:"الاسم الاوسط",icon:"las la-signature",noBorder:!0,col:4},{id:"lastName-inp",type:"text",name:"last_name",placeholder:"الاسم الاخير",icon:"las la-signature",noBorder:!0,col:4},{id:"gender-inp",type:"select",name:"gender",placeholder:"النوع",icon:"las la-dna",noBorder:!0,col:6,options:[{label:"ذكر",value:"male"},{label:"انثى",value:"female"}]},{id:"dateofbirth-inp",type:"date",name:"dob",placeholder:"تاريخ الميلاد",icon:"las la-calendar",noBorder:!0,col:6},{id:"email-inp",type:"email",name:"email",placeholder:"البريد الالكترونى",icon:"lar la-envelope",noBorder:!0},{id:"phone-inp",type:"text",name:"phone",placeholder:"رقم الهاتف",icon:"las la-phone",noBorder:!0},{id:"password-inp",type:"password",name:"password",placeholder:"كلمة السر",icon:"las la-unlock-alt",noBorder:!0},{id:"password-conifirm-inp",type:"password",name:"password_confirmation",placeholder:"تاكيد كلمة السر",icon:"las la-unlock-alt",noBorder:!0}],o=[{id:"password-reset-inp",type:"password",name:"password",placeholder:"كلمة السر الجديدة",icon:"las la-unlock-alt",noBorder:!0},{id:"password-confirm-reset-inp",type:"password",name:"password_confirmation",placeholder:"تاكيد كلمة السر",icon:"las la-unlock-alt",noBorder:!0}]},2709:function(e,n,a){"use strict";a.r(n),a.d(n,{__N_SSP:function(){return m},default:function(){return h}});var t=a(5893),s=a(7294),o=a(1163),r=a(2175),l=a(6310),i=a(3593),c=a(5949),d=a(2485),u=a(1649),p=a(3716),m=!0;function h(){let{state:e}={state:""},{push:n,query:a}=(0,o.useRouter)();console.log(a);let[p,m]=(0,s.useState)(!1);(0,u.I0)();let h=l.Ry().shape({password:l.Z_().min(7,"minmum_symbols",{count:7}).max(16,"maximum_symbols",{count:16}).required("new_password_is_required"),password_confirmation:l.Z_().required("password_confirm").oneOf([l.iH("password"),null],"password_match")}),f=e=>{m(!0)};return(0,t.jsxs)("section",{className:"forget",children:[(0,t.jsx)(i.ph,{title:"back_to_login",link:"login",path:"/auth/login"}),(0,t.jsx)(i.vw,{title:"reset_password",subtitle:"reset_password_subtitle"}),(0,t.jsx)(r.J9,{initialValues:{password:"",password_confirmation:""},onSubmit:f,validationSchema:h,children:()=>(0,t.jsxs)(r.l0,{children:[d.AS.map((e,n)=>(0,t.jsx)(c.Wu,{id:e.id,type:e.type,name:e.name,placeholder:e.placeholder,icon:e.icon,noBorder:e.noBorder},n)),(0,t.jsx)(i.Ow,{title:"set_new_password",loading:p})]})}),(0,t.jsx)(i.ZL,{})]})}h.getLayout=function(e){return(0,t.jsx)(p.Z,{children:e})}}},function(e){e.O(0,[296,438,742,251,774,888,179],function(){return e(e.s=6742)}),_N_E=e.O()}]);