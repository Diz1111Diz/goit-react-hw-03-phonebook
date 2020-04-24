(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,n,t){e.exports=t(25)},22:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),o=t.n(c),u=(t(22),t(16)),i=t(4),l=t(6),m=t(12),d=t(27),f=function(e,n){return e.find((function(e){return e.name===n.name}))},b=t(1),p=t(2);function s(){var e=Object(b.a)(["\n  font-weight: 600;\n  width: 100px;\n  margin-top: 20px;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);\n  :hover {\n    background-color: ",";\n  }\n"]);return s=function(){return e},e}function h(){var e=Object(b.a)(["\n  width: 200px;\n  height: 20px;\n"]);return h=function(){return e},e}function v(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  font-size: 20px;\n  margin: 0 0 5px;\n"]);return v=function(){return e},e}function x(){var e=Object(b.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 300px;\n  border: 2px solid black;\n  padding: 10px;\n"]);return x=function(){return e},e}var g=p.a.form(x()),E=p.a.label(v()),w=p.a.input(h()),O=p.a.button(s(),(function(e){return!1===e.disabled?"#6495ed":"#ff6666"})),j={name:"",number:""},y=function(e){var n=e.addNewContact,t=e.contacts,c=Object(a.useState)(j),o=Object(i.a)(c,2),u=o[0],b=o[1],p=function(e){var n=e.target.name,t=e.target.value;b(Object(m.a)({},u,Object(l.a)({},n,t)))},s=u.name,h=u.number;return r.a.createElement(g,{onSubmit:function(e){e.preventDefault();var a={name:u.name,number:u.number,id:Object(d.a)()};f(t,a)?alert("".concat(a.name," is already in contacts")):(n(a),b(j))}},r.a.createElement(E,{htmlFor:"name"},"Name",r.a.createElement(w,{name:"name",type:"text",value:s,onChange:p,autoFocus:!0})),r.a.createElement(E,{htmlFor:"number"},"Number",r.a.createElement(w,{name:"number",type:"text",value:h,onChange:p})),s.length>=1&&h>=1?r.a.createElement(O,{type:"submit",disabled:!1},"Add contact"):r.a.createElement(O,{type:"submit",disabled:!0},"Add contact"))};function C(){var e=Object(b.a)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  max-width: 300px;\n"]);return C=function(){return e},e}var S=p.a.ul(C());function k(){var e=Object(b.a)(["\n  height: 20px;\n  width: 60px;\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);\n  :hover {\n    background-color: #6495ed;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(b.a)(["\n  padding-right: 20px;\n"]);return N=function(){return e},e}function F(){var e=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return F=function(){return e},e}var J=p.a.li(F()),A=p.a.p(N()),I=p.a.button(k()),D=function(e){var n=e.contact,t=e.deleteContact,a=n.name,c=n.number;return r.a.createElement(J,null,r.a.createElement(A,null,a,": ",c),r.a.createElement(I,{onClick:t},"Delete"))},L=function(e){var n=e.contacts,t=e.deleteContact;return n.length>0&&r.a.createElement(S,null,n.map((function(e){return r.a.createElement(D,{key:e.id,contact:e,deleteContact:function(){return t(e.id)}})})))},z=function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))};function B(){var e=Object(b.a)([""]);return B=function(){return e},e}var H=p.a.input(B()),K=function(e){var n=e.value,t=e.changeFilter;return r.a.createElement(H,{placeholder:"Search name",type:"text",value:n,onChange:t})},M=function(e,n){try{localStorage.setItem(e,JSON.stringify(n))}catch(t){throw new Error}},P=function(e){try{var n=localStorage.getItem(e);return n?JSON.parse(n):null}catch(t){throw new Error}};var R=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),n=Object(i.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),m=l[0],d=l[1],f=z(t,m);return Object(a.useEffect)((function(){var e=P("contacts");e?c(e):M("contacts",[])}),[]),Object(a.useEffect)((function(){M("contacts",t)}),[t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(y,{addNewContact:function(e){c([].concat(Object(u.a)(t),[e]))},contacts:t}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(K,{value:m,changeFilter:function(e){var n=e.target.value;d(n)}}),r.a.createElement(L,{contacts:f,deleteContact:function(e){var n=t.filter((function(n){return n.id!==e}));c(n)}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4682b0be.chunk.js.map