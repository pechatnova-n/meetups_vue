const a={registration:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",opening:"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435",break:"\u041F\u0435\u0440\u0435\u0440\u044B\u0432",coffee:"Coffee Break",closing:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435",afterparty:"Afterparty",talk:"\u0414\u043E\u043A\u043B\u0430\u0434",other:"\u0414\u0440\u0443\u0433\u043E\u0435"},n={registration:"key",opening:"cal-sm",talk:"tv",break:"clock",coffee:"coffee",closing:"key",afterparty:"cal-sm",other:"cal-sm"};Object.entries(a).map(([e,t])=>({value:e,text:t,icon:n[e]}));let l=0;function s(){return{id:--l,title:"",description:"",imageId:null,image:null,date:+new Date().setUTCHours(0,0,0,0),place:"",agenda:[]}}let r=0;function o(){return{id:--r,startsAt:"00:00",endsAt:"00:00",type:"other",title:null,description:null,speaker:null,language:null}}export{n as a,a as b,o as c,s as d};
