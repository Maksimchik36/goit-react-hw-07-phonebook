"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[309],{318:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var a,r,o,s,i,d=t(885),c=t(168),l=t(223),u=l.Z.form(a||(a=(0,c.Z)(["\npadding: 20px;\ndisplay: flex; \nflex-direction: column; \nalign-items: center;"]))),p=l.Z.label(r||(r=(0,c.Z)(["\nmargin-bottom: 20px;\nfont-weight: 700;\n"]))),m=l.Z.input(o||(o=(0,c.Z)(["\nmargin-left: 10px;\n"]))),h=l.Z.button(s||(s=(0,c.Z)(["\npadding: 5px;\nborder-radius: 4px;\nborder-color: #747274;\nfont-weight: 600;\ncursor: pointer;\n&:hover {\nbackground-color: #87ff37b3;\n}\n"]))),x=t(184),f=function(e){var n=e.onSubmit;return(0,x.jsxs)(u,{onSubmit:n,children:[(0,x.jsxs)(p,{children:["Name",(0,x.jsx)(m,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,x.jsxs)(p,{children:["Phone",(0,x.jsx)(m,{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,x.jsx)(h,{type:"submit",children:"Add contact"})]})},b=t(871),Z=l.Z.div(i||(i=(0,c.Z)(["\n"]))),g=t(617),j=t(532),v=function(){var e=(0,b.s0)(),n=(0,g.Jx)().data,t=(0,g.Lr)(),a=(0,d.Z)(t,2),r=a[0],o=a[1].isLoading;return(0,x.jsxs)(Z,{children:[o&&(0,x.jsx)(j.Z,{}),(0,x.jsx)(f,{onSubmit:function(t){t.preventDefault();var a=t.target.elements.name.value,o=t.target.elements.phone.value;t.currentTarget.reset(),n.some((function(e){return e.name===a}))?alert("".concat(a," is already in contacts list.")):(r({name:a,phone:o}),e("/phonebook"))}})]})}}}]);
//# sourceMappingURL=309.ce943eee.chunk.js.map