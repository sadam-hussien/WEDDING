(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[344],{2505:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return t(4800)}])},3716:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var a=t(5893),o=t(4051),r=t(1555);function i(e){let{children:n}=e;return(0,a.jsx)("section",{className:"auth-page",children:(0,a.jsxs)(o.Z,{md:2,className:"g-0",children:[(0,a.jsx)(r.Z,{className:"auth-container",children:n}),(0,a.jsx)(r.Z,{className:"layout",children:(0,a.jsx)("div",{className:"layout-bg"})})]})})}},3593:function(e,n,t){"use strict";t.d(n,{ZL:function(){return d},ph:function(){return i},Ow:function(){return c},vw:function(){return s}});var a=t(5893),o=t(1664),r=t.n(o);function i(e){let{title:n,link:t,path:o,noBack:i}=e;return(0,a.jsxs)("div",{className:"auth-header d-flex justify-content-between align-items-center",children:[i?(0,a.jsx)("div",{}):(0,a.jsx)(r(),{href:"/auth",className:"back-btn d-inline-flex align-items-center justify-content-center",children:(0,a.jsx)("i",{className:"las la-long-arrow-alt-right"})}),(0,a.jsxs)("span",{className:"account-option",children:[n,(0,a.jsx)(r(),{href:o,className:"account-option-link",children:t})]})]})}function s(e){let{title:n,subtitle:t}=e;return(0,a.jsxs)("div",{className:"auth-title",children:[(0,a.jsx)("h1",{className:"auth-title-text fw-bold text-capitalize",children:n}),(0,a.jsx)("h6",{className:"auth-subtitle-text m-0",children:t})]})}var l=t(5949);function c(e){let{title:n,loading:t}=e;return(0,a.jsx)("div",{className:"auth-submit mt-5",children:(0,a.jsx)(l.Ai,{type:"submit",title:n,loading:t})})}function d(e){let{forget:n}=e;return(0,a.jsx)("div",{className:"auth-footer mt-5 d-flex justify-content-between align-items-center",children:n?(0,a.jsx)(r(),{href:"/auth/forget-password",className:"forget-passowrd",children:"forget_passowrd"}):(0,a.jsx)("div",{})})}},2485:function(e,n,t){"use strict";t.d(n,{AS:function(){return r},F9:function(){return o},lK:function(){return a}});let a=[{id:"email-inp",type:"email",name:"email",placeholder:"البريد الالكترونى",icon:"lar la-envelope",noBorder:!0},{id:"password-inp",type:"password",name:"password",placeholder:"كلمة السر",icon:"las la-unlock-alt",noBorder:!0}],o=[{id:"firstName-inp",type:"text",name:"first_name",placeholder:"الاسم الاول",icon:"las la-signature",noBorder:!0,col:4},{id:"middle_name-inp",type:"text",name:"middle_name",placeholder:"الاسم الاوسط",icon:"las la-signature",noBorder:!0,col:4},{id:"lastName-inp",type:"text",name:"last_name",placeholder:"الاسم الاخير",icon:"las la-signature",noBorder:!0,col:4},{id:"gender-inp",type:"select",name:"gender",placeholder:"النوع",icon:"las la-dna",noBorder:!0,col:6,options:[{label:"ذكر",value:"male"},{label:"انثى",value:"female"}]},{id:"dateofbirth-inp",type:"date",name:"dob",placeholder:"تاريخ الميلاد",icon:"las la-calendar",noBorder:!0,col:6},{id:"email-inp",type:"email",name:"email",placeholder:"البريد الالكترونى",icon:"lar la-envelope",noBorder:!0},{id:"phone-inp",type:"text",name:"phone",placeholder:"رقم الهاتف",icon:"las la-phone",noBorder:!0},{id:"password-inp",type:"password",name:"password",placeholder:"كلمة السر",icon:"las la-unlock-alt",noBorder:!0},{id:"password-conifirm-inp",type:"password",name:"password_confirmation",placeholder:"تاكيد كلمة السر",icon:"las la-unlock-alt",noBorder:!0}],r=[{id:"password-reset-inp",type:"password",name:"password",placeholder:"كلمة السر الجديدة",icon:"las la-unlock-alt",noBorder:!0},{id:"password-confirm-reset-inp",type:"password",name:"password_confirmation",placeholder:"تاكيد كلمة السر",icon:"las la-unlock-alt",noBorder:!0}]},4897:function(e,n,t){"use strict";t.d(n,{EH:function(){return i},fe:function(){return o},uX:function(){return r},z3:function(){return s}});var a=t(4699);function o(e){return(0,a.Z)().post("auth/login",e)}function r(e){return(0,a.Z)().post("register",e)}function i(e,n){return(0,a.Z)(e).post("auth/account/verify",n)}function s(e){return(0,a.Z)(e).post("auth/account/otp/resend")}},4800:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return v},default:function(){return x}});var a=t(5893);t(7294);var o=t(2175),r=t(6310),i=t(3593),s=t(5949),l=t(2485),c=t(1649),d=t(5753),u=t(3716),p=t(4897),h=t(4597),m=t(1163),f=t(1955),v=!0;function x(){let e=(0,m.useRouter)(),n=(0,c.I0)(),{mutate:t,isLoading:u}=(0,h.uV)({queryFn:p.fe,alert:!1}),v=a=>{t(a,{onSuccess:t=>{var a;(null==t?void 0:null===(a=t.data)||void 0===a?void 0:a.email_verified_at)?(f.Z.set("access_token",t.access_token,{expires:t.expires_in}),n((0,d.x4)(t)),e.push("/profile")):e.push("/auth/verify-email?token=".concat(t.access_token))},onError:e=>{console.log(e)}})},x=r.Ry().shape({email:r.Z_().email("ادخل بريد كويس").required("البريد الالكترونى مطلوب"),password:r.Z_().required("كلمة السر مطلوبة")});return(0,a.jsxs)("section",{className:"login",children:[(0,a.jsx)(i.ph,{title:"ليس لديك حساب؟",link:"انشاء حساب",path:"/auth/register",noBack:!0}),(0,a.jsx)(i.vw,{title:"تسجيل الدخول",subtitle:"ادخل البريد الالكترونى وكلمة السر للدخول الى لوحة التحكم"}),(0,a.jsx)(o.J9,{initialValues:{email:"",password:""},onSubmit:v,validationSchema:x,children:()=>(0,a.jsxs)(o.l0,{children:[l.lK.map((e,n)=>(0,a.jsx)(s.Wu,{id:e.id,type:e.type,name:e.name,placeholder:e.placeholder,icon:e.icon,noBorder:e.noBorder},n)),(0,a.jsx)(i.Ow,{title:"تسجيل الدخول",loading:u})]})})]})}x.getLayout=function(e){return(0,a.jsx)(u.Z,{children:e})}},4699:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(6154),o=t(1083),r=t(1955),i=t(5753);function s(e){let n=e||r.Z.get("access_token"),t=a.Z.create({baseURL:"https://ahmedsprofile.com/api/",headers:{Authorization:"Bearer ".concat(n),Accept:"application/json",ContentType:"application/json","Accept-Language":"ar","Content-Language":"ar"}});return t.interceptors.response.use(e=>e.data,e=>{var n,t,a,s;let l=(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message)||(null==e?void 0:null===(a=e.response)||void 0===a?void 0:null===(s=a.data)||void 0===s?void 0:s.msg);return["Unauthenticated","you don't have a verified email"].includes(l)&&(r.Z.remove("access_token"),o.Z.dispatch((0,i.kS)()),window.location.href="/auth"),Promise.reject(e.response)}),t}}},function(e){e.O(0,[296,438,907,742,251,774,888,179],function(){return e(e.s=2505)}),_N_E=e.O()}]);