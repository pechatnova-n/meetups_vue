import{_ as m,U as u}from"./index.c9909d86.js";import{r as l,o as d,c as f,d as n,a as c,j as _,t as r}from"./vendor.30b2d013.js";const p=e=>new Date(e).toISOString().substring(0,10),g=e=>new Date(e).toLocaleString(navigator.language,{year:"numeric",month:"long",day:"numeric"}),D=1e3*60*60*24,o=e=>new Date(e),x=e=>e.getUTCDay()||7,I=(e,a)=>o(e.getTime()+a*D),y=(e,a)=>o(o(e).setUTCMonth(e.getUTCMonth()+a)),M=e=>o(o(o(e).setUTCDate(1)).setUTCHours(0,0,0,0)),L=e=>I(M(y(e,1)),-1);const h={name:"MeetupInfo",components:{UiIcon:u},props:{organizer:{type:String,required:!0},place:{type:String,required:!0},date:{type:Number,required:!0}},setup(){return{formatDateAsIso:t=>p(t),formatDate:t=>g(t)}}},U={class:"meetup-info"},S=["datetime"];function C(e,a,t,i,T,A){const s=l("UiIcon");return d(),f("ul",U,[n("li",null,[c(s,{class:"meetup-info__icon",icon:"user"}),_(" "+r(t.organizer),1)]),n("li",null,[c(s,{class:"meetup-info__icon",icon:"map"}),_(" "+r(t.place),1)]),n("li",null,[c(s,{class:"meetup-info__icon",icon:"cal-lg"}),n("time",{datetime:i.formatDateAsIso(t.date)},r(i.formatDate(t.date)),9,S)])])}const k=m(h,[["render",C],["__scopeId","data-v-9c1636ce"]]);export{k as M,L as a,I as b,x as c,y as d,M as g};