"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[655],{931:(e,s,a)=>{a.d(s,{DY:()=>l,hU:()=>r,zB:()=>i});var n=a(213);const t="https://frontend-test-assignment-api.abz.agency/api/v1",o=async()=>{try{return(await n.A.get("".concat(t,"/token"))).data.token}catch(e){throw console.error("error fetching token:",e),e}},r=async e=>{try{const s=await o(),a=await n.A.get("".concat(t,"/users"),{params:{page:e,count:6},headers:{Token:s}}),r=a.data.users.sort(((e,s)=>new Date(s.registration_timestamp)-new Date(e.registration_timestamp)));return{...a.data,users:r}}catch(s){throw console.error("Error fetching users:",s),s}},i=async()=>{try{return(await n.A.get("".concat(t,"/positions"))).data}catch(e){throw console.log("Error fetching positions:",e),e}},l=async e=>{try{const s=await o();return(await n.A.post("".concat(t,"/users"),e,{headers:{"Content-Type":"multipart/form-data",Token:s}})).data}catch(s){throw console.log("Error register user:",s),s}}},285:(e,s,a)=>{a.d(s,{A:()=>o});const n="Button_btn__W1TTO";var t=a(579);const o=e=>{let{text:s,type:a,onClick:o,disabled:r}=e;return(0,t.jsx)("button",{className:n,type:a,onClick:o,disabled:r,children:s})}},655:(e,s,a)=>{a.r(s),a.d(s,{default:()=>$});const n="SignUpSection_section__e6z4r",t="SignUpSection_container__bLFfx",o="SignUpSection_title__UwKgd",r="SignUpSection_loader__vd14Y";var i=a(43),l=a(931),c=a(423);const m="Modal_modal__yEgVW",p="Modal_modalContent__JODE3",d="Modal_icon__jhXbv",u="Modal_cross__-Alxa",h="Modal_errorImg__3k5gZ",_="Modal_text__KkjCx",x="Modal_successImg__VdVzw";var g=a(397);const j=a.p+"static/media/success.0d3202ba11b04fa7364b0f83ce42aea5.svg";var y=a(473),f=a(579);const S=e=>{let{isOpen:s,message:a,onClose:n,isSuccess:t}=e;const o=(0,i.useCallback)((()=>{t&&y.Nk.scrollTo(600,{duration:1e3,smooth:"easeInOutQuad"}),n()}),[t,n]);(0,i.useEffect)((()=>{const e=e=>{"Escape"===e.key&&o()};return s?(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",window.addEventListener("keydown",e)):(document.documentElement.style.overflow="",document.body.style.overflow="",window.removeEventListener("keydown",e)),()=>{document.documentElement.style.overflow="",document.body.style.overflow="",window.removeEventListener("keydown",e)}}),[s,o]);return s?(0,f.jsx)("div",{className:m,onClick:e=>{e.target===e.currentTarget&&o()},children:(0,f.jsxs)("div",{className:p,children:[t?(0,f.jsx)("img",{src:j,alt:"success",loading:"lazy",className:x}):(0,f.jsx)(g.lhk,{className:h}),(0,f.jsx)("p",{className:_,children:a}),(0,f.jsx)("div",{onClick:o,className:d,children:(0,f.jsx)(c.oxH,{className:u})})]})}):null},N="SignUpForm_positionList__oYszt",b="SignUpForm_form__CGOfo",w="SignUpForm_inputGroup__vyVmm",v="SignUpForm_label__5GGPL",k="SignUpForm_labelError__FftGE",U="SignUpForm_input__8xDO4",F="SignUpForm_inputError__a10Na",C="SignUpForm_errorText__CpkIA",E="SignUpForm_helperText__hmyc3",z="SignUpForm_positionsWrapper__apSnR",I="SignUpForm_positionItem__YrD5K",P="SignUpForm_positionsTitle__-d+zs",O="SignUpForm_positionName__ejyfR",T="SignUpForm_radioBtn__FQjxr",A="SignUpForm_customRadioBtn__eWKcC",B="SignUpForm_fileInputWrapper__XSOGs",D="SignUpForm_error__YZ0dN",G="SignUpForm_fileInputButton__jrPf9",M="SignUpForm_fileInputButtonErr__kG+nY",Y="SignUpForm_fileInputField__QMrxB",W="SignUpForm_customInput__pSn08",q="SignUpForm_selectedFile__tXp2c";var L=a(285),R=a(278);const V=e=>{let{positions:s,onRegister:a}=e;const[n,t]=(0,i.useState)({name:"",email:"",phone:"",position_id:"",photo:null,errors:{}}),o=/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,r=(e,s)=>{let a="";switch(e){case"name":(s.length<2||s.length>60)&&(a="Name must be between 2 and 60 characters");break;case"email":o.test(s)||(a="Invalid email address");break;case"phone":/^\+380\d{9}$/.test(s)||(a="Phone number must start with +380 and be 12 digits long");break;case"photo":s?s.size>5242880?a="Photo size must not exceed 5MB":["image/jpeg","image/jpg"].includes(s.type)||(a="Photo must be in JPEG or JPG format"):a="Photo is required"}return a},l=e=>{const{name:s,value:a}=e.target;let n=a;"email"===s&&(n=a.toLowerCase()),"name"===s&&(n=a.trimStart());let o="";n.length>=1&&(o=r(s,n)),t((e=>({...e,[s]:n,errors:{...e.errors,[s]:o}})))},c=e=>{const{value:s}=e.target;t((e=>({...e,position_id:s})))},m=()=>{t({name:"",email:"",phone:"",position_id:"",photo:null,errors:{}})};return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{className:b,onSubmit:async e=>{e.preventDefault();const s={};if(Object.keys(n).forEach((e=>{if("photo"!==e&&"errors"!==e){const a=r(e,n[e]);a&&(s[e]=a)}})),Object.keys(s).length>0)return void t((e=>({...e,errors:s})));await a(n)&&m()},children:[(0,f.jsxs)("div",{className:w,children:[n.name&&(0,f.jsx)("label",{className:"".concat(n.errors.name?k:v),children:"Your name"}),(0,f.jsx)("input",{className:"".concat(n.errors.name?F:U),type:"text",name:"name",placeholder:"Your name",value:n.name,onChange:l,required:!0,autoComplete:"user name"}),n.errors.name?(0,f.jsx)("span",{className:C,children:n.errors.name}):(0,f.jsx)("span",{className:E,children:"Please enter user name"})]}),(0,f.jsxs)("div",{className:w,children:[n.email&&(0,f.jsx)("label",{className:"".concat(n.errors.email?k:v),children:"Email"}),(0,f.jsx)("input",{className:"".concat(n.errors.email?F:U),type:"email",name:"email",placeholder:"Email",value:n.email,onChange:l,required:!0,autoComplete:"email"}),n.errors.email?(0,f.jsx)("span",{className:C,children:n.errors.email}):(0,f.jsx)("span",{className:E,children:"Please enter your email"})]}),(0,f.jsxs)("div",{className:w,children:[n.phone&&(0,f.jsx)("label",{className:n.errors.phone?k:v,children:"Phone"}),(0,f.jsx)("input",{id:"",className:"".concat(n.errors.phone?F:U),type:"tel",name:"phone",placeholder:"Phone",value:n.phone,onChange:l,required:!0,autoComplete:"phone number"}),n.errors.phone?(0,f.jsx)("span",{className:C,children:n.errors.phone}):(0,f.jsx)("span",{className:E,children:"Please enter your phone number"})]}),(0,f.jsxs)("div",{className:z,children:[(0,f.jsx)("p",{className:P,children:"Select your position"}),(0,f.jsx)("ul",{className:N,children:s.map((e=>(0,f.jsx)("li",{className:I,children:(0,f.jsxs)("label",{className:O,children:[(0,f.jsx)("input",{type:"radio",name:"position_id",value:e.id,onChange:c,required:!0,className:T,checked:n.position_id===String(e.id),tabIndex:"0"}),(0,f.jsx)("span",{className:A}),e.name]})},e.id)))})]}),(0,f.jsxs)("div",{className:w,children:[(0,f.jsxs)("div",{className:"".concat(B," ").concat(n.errors.photo?D:""),children:[(0,f.jsx)("label",{className:"".concat(n.errors.photo?M:G),htmlFor:"fileInput",children:"Upload"}),(0,f.jsx)("span",{className:W,children:n.photo?(0,f.jsx)("p",{className:q,children:(0,R.V)(n.photo.name,24)}):"Upload your photo"}),(0,f.jsx)("input",{id:"fileInput",className:Y,type:"file",onChange:e=>{const s=e.target.files[0],a=r("photo",s);t((s=>({...s,photo:e.target.files[0],errors:{...s.errors,photo:a}})))},required:!0})]}),n.errors.photo?(0,f.jsx)("span",{className:C,children:n.errors.photo}):""]}),(0,f.jsx)(L.A,{type:"submit",text:"Sign up",disabled:!n.name||!n.email||!n.phone||!n.position_id||!n.photo})]})})};var K=a(608);const $=e=>{let{onRegisterSuccess:s}=e;const[a,c]=(0,i.useState)([]),[m,p]=(0,i.useState)(null),[d,u]=(0,i.useState)(null),[h,_]=(0,i.useState)(!1),[x,g]=(0,i.useState)(!1);(0,i.useEffect)((()=>{(async()=>{try{const e=await(0,l.zB)();c(e.positions)}catch(m){p("")}})()}),[]);const j=()=>{g(!1),p(null),u(null)};return(0,f.jsx)("section",{className:n,children:(0,f.jsxs)("div",{className:t,children:[(0,f.jsx)("h2",{className:o,children:"Working with POST request"}),(0,f.jsx)(V,{positions:a,onRegister:async e=>{_(!0);try{const a=new FormData;return a.append("name",e.name),a.append("email",e.email),a.append("phone",e.phone),a.append("position_id",e.position_id),a.append("photo",e.photo),await(0,l.DY)(a),s(),u("User successfully registered"),g(!0),!0}catch(m){p(m.message),g(!0)}finally{_(!1)}}}),h&&(0,f.jsx)("img",{src:K.A,alt:"loading...",className:r}),m&&(0,f.jsx)(S,{isOpen:x,message:"".concat(m),isSuccess:!1,onClose:j}),d&&(0,f.jsx)(S,{isOpen:x,message:d,isSuccess:!0,onClose:j})]})})}},278:(e,s,a)=>{a.d(s,{E:()=>t,V:()=>n});const n=e=>{const s=window.innerWidth>=768?30:22;return e.length<=s?e:e.substring(0,s)+"..."},t=e=>{const s=window.innerWidth>=1024?30:35;return e.length<=s?e:e.substring(0,s)+"..."}}}]);
//# sourceMappingURL=655.8b258b72.chunk.js.map