import{M as p}from"./MeetupAgenda.7f2de44f.js";import{_ as c,c as s}from"./index.079bc0eb.js";import{r as t,o as a,i as n,w as d,j as m}from"./vendor.30b2d013.js";import"./meetupService.5eb92bb3.js";const u={name:"PageMeetupAgenda",components:{UiAlert:s,MeetupAgenda:p},props:{meetup:{type:Object,required:!0}}};function _(i,g,e,l,f,A){const o=t("MeetupAgenda"),r=t("UiAlert");return e.meetup.agenda.length?(a(),n(o,{key:0,agenda:e.meetup.agenda},null,8,["agenda"])):(a(),n(r,{key:1},{default:d(()=>[m("\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u0430...")]),_:1}))}const y=c(u,[["render",_]]);export{y as default};