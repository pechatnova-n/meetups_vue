import{_ as s}from"./index.c9909d86.js";import{h as o,o as c,i as r,w as u,m as _,u as l,n as i}from"./vendor.30b2d013.js";const p={name:"UiButton",props:{tag:{type:[String,Object],default:"button"},variant:{type:String,default:"secondary"},block:{type:Boolean},type:{type:String}},setup(t){const n=o(()=>"button_"+t.variant),e=o(()=>{if(t.tag==="button")return t.type||"button"});return{createClassName:n,checkType:e}}};function d(t,n,e,a,f,y){return c(),r(i(e.tag),{class:l(["button",[{button_block:e.block},a.createClassName]]),type:a.checkType},{default:u(()=>[_(t.$slots,"default",{},void 0,!0)]),_:3},8,["class","type"])}const g=s(p,[["render",d],["__scopeId","data-v-ef3e4505"]]);export{g as U};
