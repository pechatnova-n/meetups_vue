import{h as e}from"./index.c9909d86.js";function n(){return e.get("/meetups")}function r(t){return e.get(`/meetups/${t}`)}function s(t){return e.post("/meetups",t)}function a(t,u){return e.put(`/meetups/${t}`,u)}function i(t){return e.post(`/meetups/${t}/participation`)}function o(t){return e.delete(`/meetups/${t}/participation`)}export{i as a,r as b,a as c,n as g,o as l,s as p};
