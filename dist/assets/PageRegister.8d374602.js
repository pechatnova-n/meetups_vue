import{g as m,z as b,r as l,o as w,i as v,w as t,a,j as p,l as y}from"./vendor.30b2d013.js";import{U as k,a as x}from"./UiInput.d39a7fa4.js";import{U as h}from"./UiCheckbox.78b83370.js";import{U as L}from"./UiLink.56c1780b.js";import{U as F}from"./UiButton.07576b37.js";import{L as q,U as B}from"./LayoutAuth.20f94b29.js";import{_ as C,e as S,r as A}from"./index.c9909d86.js";import"./UiPageTitle.1cf0331b.js";const G={name:"PageRegister",components:{LayoutAuth:q,UiForm:B,UiButton:F,UiLink:L,UiCheckbox:h,UiInput:k,UiFormGroup:x},setup(){const f=m(""),o=m(""),i=m(""),e=m(""),U=m(!1),u=b("toaster"),r=()=>{if(i.value!==e.value)return"\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442";if(!U.value)return"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0441\u044F \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438"};return{email:f,fullname:o,password:i,password2:e,agree:U,handleSubmit:async()=>{const d=r();if(d)return u().error(d);const c={email:f.value,fullname:o.value,password:i.value};await S({...c}).then(()=>{A.push("login"),u().success("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E")}).catch(_=>{u().error(_.message)})}}}};function I(f,o,i,e,U,u){const r=l("UiInput"),s=l("UiFormGroup"),d=l("UiCheckbox"),c=l("UiButton"),_=l("UiLink"),V=l("UiForm"),g=l("LayoutAuth");return w(),v(g,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"},{default:t(()=>[a(V,{onSubmit:y(e.handleSubmit,["prevent"])},{buttons:t(()=>[a(c,{variant:"primary",type:"submit"},{default:t(()=>[p("\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")]),_:1})]),append:t(()=>[p(" \u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442? "),a(_,{to:{name:"login"}},{default:t(()=>[p("\u0412\u043E\u0439\u0434\u0438\u0442\u0435")]),_:1})]),default:t(()=>[a(s,{label:"Email"},{default:t(()=>[a(r,{modelValue:e.email,"onUpdate:modelValue":o[0]||(o[0]=n=>e.email=n),name:"email",type:"email",required:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u0418\u043C\u044F"},{default:t(()=>[a(r,{modelValue:e.fullname,"onUpdate:modelValue":o[1]||(o[1]=n=>e.fullname=n),name:"fullname",required:""},null,8,["modelValue"])]),_:1}),a(s,{label:"\u041F\u0430\u0440\u043E\u043B\u044C"},{default:t(()=>[a(r,{modelValue:e.password,"onUpdate:modelValue":o[2]||(o[2]=n=>e.password=n),name:"password",type:"password",required:"",minlength:"6"},null,8,["modelValue"])]),_:1}),a(s,{label:"\u041F\u043E\u0432\u0442\u043E\u0440 \u043F\u0430\u0440\u043E\u043B\u044F"},{default:t(()=>[a(r,{modelValue:e.password2,"onUpdate:modelValue":o[3]||(o[3]=n=>e.password2=n),type:"password",required:"",minlength:"6"},null,8,["modelValue"])]),_:1}),a(s,null,{default:t(()=>[a(d,{modelValue:e.agree,"onUpdate:modelValue":o[4]||(o[4]=n=>e.agree=n),name:"agree",required:""},{default:t(()=>[p("\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})}const D=C(G,[["render",I]]);export{D as default};
