"use strict";(self.webpackChunkquiz_app_webapp=self.webpackChunkquiz_app_webapp||[]).push([[290],{2290:function(e,n,i){i.r(n),i.d(n,{default:function(){return I}});var s=i(2791),t=i(3325),a=i(9909),r=i(3360),c=i(1694),l=i.n(c),u=i(6934),o=i(9439),d=i(1413),f=i(5987),p=i(162),v=i(1784),h=i(184),m=["active","disabled","className","style","activeLabel","children"],x=["children"],N=s.forwardRef((function(e,n){var i=e.active,s=e.disabled,t=e.className,a=e.style,r=e.activeLabel,c=e.children,u=(0,f.Z)(e,m),o=i||s?"span":v.Z;return(0,h.jsx)("li",{ref:n,style:a,className:l()(t,"page-item",{active:i,disabled:s}),children:(0,h.jsxs)(o,(0,d.Z)((0,d.Z)({className:"page-link"},u),{},{children:[c,i&&r&&(0,h.jsx)("span",{className:"visually-hidden",children:r})]}))})}));N.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},N.displayName="PageItem";var b=N;function j(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,t=s.forwardRef((function(e,s){var t=e.children,a=(0,f.Z)(e,x);return(0,h.jsxs)(N,(0,d.Z)((0,d.Z)({},a),{},{ref:s,children:[(0,h.jsx)("span",{"aria-hidden":"true",children:t||n}),(0,h.jsx)("span",{className:"visually-hidden",children:i})]}))}));return t.displayName=e,t}var Z=j("First","\xab"),E=j("Prev","\u2039","Previous"),g=j("Ellipsis","\u2026","More"),w=j("Next","\u203a"),L=j("Last","\xbb"),y=["bsPrefix","className","size"],k=s.forwardRef((function(e,n){var i=e.bsPrefix,s=e.className,t=e.size,a=(0,f.Z)(e,y),r=(0,p.vE)(i,"pagination");return(0,h.jsx)("ul",(0,d.Z)((0,d.Z)({ref:n},a),{},{className:l()(s,r,t&&"".concat(r,"-").concat(t))}))}));k.displayName="Pagination";var q=Object.assign(k,{First:Z,Prev:E,Ellipsis:g,Item:b,Next:w,Last:L});var P=i(5123);function S(e){var n=Object.values(e).findIndex((function(e){return e===P.Nj}));return-1===n?n+1:n}function C(e){return e[e.length-1].id}function _(e,n){return e===n}var z=i(3027);var A=function(e){var n=e.question,i=e.isLast,t=e.applyAnswer,a=e.answer,c=(0,s.useState)(a),u=(0,o.Z)(c,2),d=u[0],f=u[1],p=function(e){f(e.target.id)};return(0,s.useEffect)((function(){f(a)}),[a]),(0,h.jsxs)(z.Z,{className:l()("flex-center flex-column fs-6"),onSubmit:function(e){e.preventDefault(),e.stopPropagation(),t(n,d)},children:[(0,h.jsx)(z.Z.Label,{className:l()("mb-5 text-bold"),children:n.question}),(0,h.jsx)(z.Z.Group,{children:n.options.map((function(e,n){return(0,h.jsx)(z.Z.Check,{type:"radio",id:e.id,label:e.text,name:"question",required:!0,checked:d===e.id,onChange:p},n)}))}),(0,h.jsx)(r.Z,{className:l()("position-absolute position-right-bottom"),type:"submit",children:i?"Finish":"Next"})]})},F=i(7689);var O=function(){var e=(0,u.c)().questions,n=(0,s.useState)(0),i=(0,o.Z)(n,2),r=i[0],c=i[1],d=(0,s.useState)(function(e){return Object.fromEntries(e.map((function(e){return[e.id,""]})))}(e)),f=(0,o.Z)(d,2),p=f[0],v=f[1],m=(0,t.o)().checkQuiz,x=(0,F.s0)();return(0,h.jsxs)("div",{className:l()("d-flex w-100 h-100 flex-column align-items-center p-4"),children:[(0,h.jsx)(q,{size:"sm",children:e.map((function(e,n){return(0,h.jsx)(q.Item,{disabled:n>S(p),onClick:function(){return function(e){return c(e)}(n)},active:n===r,children:n+1},n)}))}),(0,h.jsx)("div",{className:l()("w-100 h-100 flex-center position-relative"),children:(0,h.jsx)(A,{question:e[r],isLast:_(C(e),e[r].id),applyAnswer:function(n,i){var s=Object.fromEntries(Object.entries(p).map((function(e){var s=(0,o.Z)(e,2),t=s[0],a=s[1];return t===n.id?[t,i]:[t,a]})));v(s),_(n.id,C(e))?function(e){m(e,a.IQ.GENERAL_KNOWLEDGE_FACTFULNESS),x("/quiz/results")}(s):c((function(e){return++e}))},answer:p[e[r].id]})})]})};var I=function(){var e=(0,t.o)().getQuestions,n=(0,u.c)().questions;return(0,h.jsx)("div",{className:l()("h-100 w-100 flex-center"),children:n.length>0?(0,h.jsx)(O,{}):(0,h.jsx)(r.Z,{onClick:function(){e(a.IQ.GENERAL_KNOWLEDGE_FACTFULNESS)},className:l()("p-4 fs-6"),children:"START"})})}}}]);
//# sourceMappingURL=290.6d8c292c.chunk.js.map