(this["webpackJsonpcian-healthcare.github.io"]=this["webpackJsonpcian-healthcare.github.io"]||[]).push([[0],{73:function(e,t,n){},75:function(e){e.exports=JSON.parse('[{"id":1,"title":"Cian Healthcare Ltd","description":"Cian Healthcare Limited is an WHO-GMP, ISO-9001:2008 certified manufacturer, contract manufacturer, exporeter and distributor of Pharmaceutical Products.","url":"https://www.cian.co/","image":"https://i.ibb.co/3r67nDG/Logo.jpg","type":"Website","show":true},{"id":3,"title":"Dock Forms","description":"A form application for mainly school/college related applications such as conducting tests, surveys etc.","url":"/blogs/dock-forms","image":"https://i.ibb.co/3r67nDG/Logo.jpg","type":"Facebook","show":false},{"id":6,"title":"ToDo Blog","description":"A Well designed todo app for managing your work.","url":"/blogs/todo-app","image":"https://i.ibb.co/3r67nDG/Logo.jpg","type":"Instagram","show":false},{"id":5,"title":"BST Visualization","description":"An app to visualize the insert, delete and search operation on a binary search tree.","url":"/bst-visualization","image":"https://i.ibb.co/3r67nDG/Logo.jpg","type":"Linkedin","show":false}]')},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),c=n(8),r=n.n(c),i=(n(73),n(44)),s=n(6),l=n(14),d=n(2);var u=function(){var e=Object(o.useState)(n(75));return Object(l.a)(e,1)[0].map((function(e){return function(e){return e.show?Object(d.jsx)("a",{href:e.url,target:"_blank",children:Object(d.jsxs)("div",{className:"cards-box",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"card-image",src:e.image,alt:"Img"})}),Object(d.jsxs)("div",{className:"cards-info",children:[Object(d.jsx)("div",{className:"cards-title",children:e.title}),Object(d.jsx)("div",{className:"cards-description",children:e.description})]}),Object(d.jsx)("div",{className:"card-bottom-bar",children:(t=e.type,"Website"===t?Object(d.jsx)("div",{className:"card-type green-border",children:t}):"Facebook"===t?Object(d.jsx)("div",{className:"card-type blue-border",children:t}):"Instagram"===t?Object(d.jsx)("div",{className:"card-type purple-border",children:t}):"Linkedin"===t?Object(d.jsx)("div",{className:"card-type orange-border",children:t}):void 0)})]},e.id)},e.id):Object(d.jsx)(d.Fragment,{children:" "});var t}(e)}))};var j=function(){return document.title="Home | Cian healtcare Ltd",Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(d.jsx)("div",{children:Object(d.jsx)(u,{})})},b=n(108),h=n(109),p=n(41),O=n(110);var f=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",className:"navbar-color",variant:"dark",sticky:"top",children:[Object(d.jsx)(b.a.Brand,{href:"https://cian-healthcare.github.io/",children:"Cian Healthcare Ltd"}),Object(d.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsxs)(b.a.Collapse,{id:"responsive-navbar-nav",children:[Object(d.jsx)(h.a,{className:"mr-auto",children:Object(d.jsx)(h.a.Link,{as:i.b,to:"/todo-app",children:"To-Do App"})}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)(O.a,{title:"Facebook",placement:"bottom",arrow:!0,children:Object(d.jsx)(h.a.Link,{href:"https://www.facebook.com/CianHealthcareLtd/",className:"navbar-icons",children:Object(d.jsx)(p.a,{})})}),Object(d.jsx)(O.a,{title:"Linkedin",placement:"bottom",arrow:!0,children:Object(d.jsx)(h.a.Link,{href:"https://www.linkedin.com/company/cian-healthcare/?originalSubdomain=in",className:"navbar-icons",children:Object(d.jsx)(p.c,{})})}),Object(d.jsx)(O.a,{title:"enquiry@cian.co",placement:"bottom",arrow:!0,interactive:!0,children:Object(d.jsx)(h.a.Link,{href:"mailto:enquiry@cian.co",className:"navbar-icons",children:Object(d.jsx)(p.b,{})})}),Object(d.jsx)(O.a,{title:"Whatsapp",placement:"bottom",arrow:!0,interactive:!0,children:Object(d.jsx)(h.a.Link,{href:"https://wa.me/917620742114",className:"navbar-icons",children:Object(d.jsx)(p.d,{})})})]})]})]})})},x=(n(83),n(35));var m=function(e){var t=Object(o.useState)(e.edit?e.edit.value:""),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(o.useRef)(null),i=["todo-row blue","todo-row orange","todo-row pink","todo-row purple","todo-row red","todo-row green"],s=["Blue","Orange","Pink","Purple","Red","Green"],u=Object(o.useState)(e.edit.class+" color-select-div"),j=Object(l.a)(u,2),b=j[0],h=j[1],p=Object(o.useState)(!1),O=Object(l.a)(p,2),f=O[0],x=O[1];Object(o.useEffect)((function(){window.innerWidth>=1350&&r.current.focus()}));var m=function(e){c(e.target.value)},v=Object(d.jsx)("div",{className:b,onClick:function(e){return function(e){var t=e.target.className.split(" ");h(i[(i.indexOf(t[0]+" "+t[1])+1)%i.length]+" color-select-div")}(e)},onContextMenu:function(e){return function(e){e.preventDefault(),x(!0)}(e)},children:s[i.indexOf(b.slice(0,-17))]});return f&&(v=i.map((function(e,t){return Object(d.jsx)("div",{className:e+" color-select-div",onClick:function(e){h(e.target.className),x(!1)},children:s[t]},s[t])}))),Object(d.jsx)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.edit.id?e.onSubmit({id:Math.floor(1e5*Math.random()),text:a,list:e.edit.list,class:b.slice(0,-17)}):e.onSubmit({id:Math.floor(1e5*Math.random()),text:a,list:"todo",class:i[Math.floor(Math.random()*i.length)]}),c("")},children:e.edit.id?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"edit-form",children:[Object(d.jsx)("input",{type:"text",placeholder:"Update your todo",value:a,className:"todo-input",onChange:m,ref:r}),Object(d.jsx)("button",{className:"todo-button edit",children:"Update"})]}),v]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{type:"text",placeholder:"Add a todo",value:a,className:"todo-input",onChange:m,ref:r}),Object(d.jsx)("button",{className:"todo-button",children:"Add Todo"})]})})},v=n(31),g=n(25),D=n(65);var w=function(e){var t=e.todos,n=e.updateTodo,a=e.sendToDoing,c=e.sendToDone,r=e.handleDrag,i=e.handlePositionChange,s=e.allowDrop,u=e.setShowDelete,j=Object(o.useState)({id:null,value:"",list:"todo",class:""}),b=Object(l.a)(j,2),h=b[0],p=b[1];return h.id?Object(d.jsx)(m,{edit:h,onSubmit:function(e){n(h.id,e),p({id:null,value:"",list:"todo",class:""})}}):t.map((function(e,t){return"todo"===e.list?Object(d.jsxs)("div",{className:e.class,draggable:!0,onDragStart:function(t){return r(t,JSON.stringify(e))},onDragEnd:function(){return u(!1)},onDrop:function(t){return i(t,e)},onDragOver:function(e){return s(e)},onDoubleClick:function(){return p({id:e.id,value:e.text,list:"todo",class:e.class})},children:[Object(d.jsx)("div",{children:e.text},e.id),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(O.a,{title:"Edit Text",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(v.a,{onClick:function(){return p({id:e.id,value:e.text,list:"todo",class:e.class})},className:"edit-icon"})})}),Object(d.jsx)(O.a,{title:"Send to Doing",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(D.a,{onClick:function(){return a(e.id)}})})}),Object(d.jsx)(O.a,{title:"Send to Done",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(g.b,{onClick:function(){return c(e.id)}})})})]})]},t):null}))};var S=function(e){var t=e.todos,n=e.updateTodo,a=e.sendToDo,c=e.sendToDone,r=e.handleDrag,i=e.handlePositionChange,s=e.allowDrop,u=e.setShowDelete,j=Object(o.useState)({id:null,value:"",list:"doing",class:""}),b=Object(l.a)(j,2),h=b[0],p=b[1];return h.id?Object(d.jsx)(m,{edit:h,onSubmit:function(e){n(h.id,e),p({id:null,value:"",list:"doing",class:""})}}):t.map((function(e,t){return"doing"===e.list?Object(d.jsxs)("div",{className:e.class,draggable:!0,onDragStart:function(t){return r(t,JSON.stringify(e))},onDragEnd:function(){return u(!1)},onDrop:function(t){return i(t,e)},onDragOver:function(e){return s(e)},onDoubleClick:function(){return p({id:e.id,value:e.text,list:"doing",class:e.class})},children:[Object(d.jsx)("div",{children:e.text},e.id),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(O.a,{title:"Edit Text",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(v.a,{onClick:function(){return p({id:e.id,value:e.text,list:"doing",class:e.class})},className:"edit-icon"})})}),Object(d.jsx)(O.a,{title:"Send to To-Do's",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(g.a,{onClick:function(){return a(e.id)}})})}),Object(d.jsx)(O.a,{title:"Send to Done",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(g.b,{onClick:function(){return c(e.id)}})})})]})]},t):null}))};var N=function(e){var t=e.todos,n=e.deleteAllDone,o=e.allowDrop,a=e.removeTodo,c=e.showDelete;return Object(x.a)(t).filter((function(e){return"done"===e.list})).length>1||c?Object(d.jsx)("button",{className:"delete-all-button",onClick:n,onDragOver:function(e){return o(e)},onDrop:function(e){return a(JSON.parse(e.dataTransfer.getData("todo")).id)},children:"Delete Done"}):null},T=n(66);var k=function(e){var t=e.todos,n=e.removeTodo,a=e.updateTodo,c=e.sendToDo,r=e.handleDrag,i=e.handlePositionChange,s=e.allowDrop,u=e.setShowDelete,j=Object(o.useState)({id:null,value:"",list:"done",class:""}),b=Object(l.a)(j,2),h=b[0],p=b[1];return h.id?Object(d.jsx)(m,{edit:h,onSubmit:function(e){a(h.id,e),p({id:null,value:"",list:"done",class:""})}}):t.map((function(e,t){return"done"===e.list?Object(d.jsxs)("div",{className:e.class,draggable:!0,onDragStart:function(t){return r(t,JSON.stringify(e))},onDragEnd:function(){return u(!1)},onDrop:function(t){return i(t,e)},onDragOver:function(e){return s(e)},onDoubleClick:function(){return p({id:e.id,value:e.text,list:"done",class:e.class})},children:[Object(d.jsx)("div",{children:e.text},e.id),Object(d.jsxs)("div",{className:"icons",children:[Object(d.jsx)(O.a,{title:"Edit Text",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(v.a,{onClick:function(){return p({id:e.id,value:e.text,list:"done",class:e.class})},className:"edit-icon"})})}),Object(d.jsx)(O.a,{title:"Send to To-Do's",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(g.a,{onClick:function(){return c(e.id)}})})}),Object(d.jsx)(O.a,{title:"Delete To-do",placement:"top",arrow:!0,children:Object(d.jsx)("span",{children:Object(d.jsx)(T.a,{onClick:function(){return n(e.id)}})})})]})]},t):null}))},C=n(33);var y=function(){var e=Object(o.useState)(localStorage.getItem("savedTodos")?JSON.parse(localStorage.getItem("savedTodos")):[]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(!1),r=Object(l.a)(c,2),i=r[0],s=r[1],u=Object(C.b)().enqueueSnackbar;Object(o.useEffect)((function(){localStorage.setItem("savedTodos",JSON.stringify(n))}),[n]),Object(o.useEffect)((function(){if("v1"!==localStorage.getItem("update_version")){var e=["todo-row blue","todo-row orange","todo-row pink","todo-row purple","todo-row red","todo-row green"],t=[],o="";n.map((function(n){o=n.todoList?"todo":n.doing?"doing":"done";var a={id:n.id,text:n.text,list:o,class:e[Math.floor(Math.random()*e.length)]};t.push(a)})),a(t),localStorage.setItem("update_version","v1")}}),[]);var j=function(e,t){t.text&&!/^\s*$/.test(t.text)&&a((function(n){return n.map((function(n){return n.id===e?t:n}))}))},b=function(e){var t=Object(x.a)(n).filter((function(t){return t.id!==e}));a((function(e){return a(t)}))},h=function(e){var t=n.map((function(t){return t.id===e&&(t.list="todo"),t}));a(t)},p=function(e){var t=n.map((function(t){return t.id===e&&(t.list="doing"),t}));a(t)},O=function(e){var t=n.map((function(t){return t.id===e&&(t.list="done"),t}));u("Yayyy !! You completed a todo. ",{variant:"success"}),a(t)},f=function(e,t){e.dataTransfer.setData("todo",t),s(!0)},v=function(e,t){var o=JSON.parse(e.dataTransfer.getData("todo"));o.list=t.list;var c,r=[];for(c=0;c<n.length;c++)n[c].id!==o.id&&r.push(n[c]),n[c].id===t.id&&r.push(o);s(!1),a((function(e){return a(r)}))},g=function(e){e.preventDefault()};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"todo-app",onDrop:function(e){return function(e){var t=JSON.parse(e.dataTransfer.getData("todo")).id;h(t),s(!1)}(e)},onDragOver:function(e){return g(e)},children:[Object(d.jsx)("h2",{children:"To Do's"}),Object(d.jsx)(m,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[].concat(Object(x.a)(n),[e]);a(t)}},edit:{class:"todo-row blue"},newTodo:!0}),Object(d.jsx)(w,{todos:n,updateTodo:j,sendToDoing:p,sendToDone:O,handleDrag:f,handlePositionChange:v,allowDrop:g,setShowDelete:s})]}),Object(d.jsxs)("div",{className:"todo-app",onDrop:function(e){return function(e){var t=JSON.parse(e.dataTransfer.getData("todo")).id;p(t),s(!1)}(e)},onDragOver:function(e){return g(e)},children:[Object(d.jsx)("h2",{children:"Doing ...."}),Object(d.jsx)(S,{todos:n,updateTodo:j,sendToDo:h,sendToDone:O,handleDrag:f,handlePositionChange:v,allowDrop:g,setShowDelete:s})]}),Object(d.jsxs)("div",{className:"todo-app extra-padding",onDrop:function(e){return function(e){var t=JSON.parse(e.dataTransfer.getData("todo")).id;O(t),s(!1)}(e)},onDragOver:function(e){return g(e)},children:[Object(d.jsx)("h2",{children:"Done !!!"}),Object(d.jsx)(k,{todos:n,removeTodo:b,updateTodo:j,sendToDo:h,handleDrag:f,handlePositionChange:v,allowDrop:g,setShowDelete:s}),Object(d.jsx)(N,{todos:n,deleteAllDone:function(){var e=Object(x.a)(n).filter((function(e){return"done"!==e.list}));a(e)},allowDrop:g,removeTodo:b,showDelete:i})]})]})};var L=function(){document.title="To-Do App | Cian Healthcare Ltd",Object(o.useEffect)((function(){window.scrollTo(0,0)}),[]);var e=Object(C.b)().enqueueSnackbar,t=function(e){return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsx)("div",{onClick:function(){window.location.href="http://cian-healthcare.github.io/"},style:{background:"transparent",border:"none",cursor:"pointer",color:"red"},children:"Check Out"})})};return Object(o.useEffect)((function(){e("Check out new posts from Cian .",{variant:"info",autoHideDuration:5e3,action:t})}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"main-outer-todo-div",children:[Object(d.jsx)("h1",{children:"To-Do App"}),Object(d.jsx)(y,{})]})})};var E=function(){return Object(o.useEffect)((function(){localStorage.removeItem("redirectTo")}),[undefined]),Object(d.jsxs)(i.a,{children:[Object(d.jsx)(f,{}),Object(d.jsxs)(s.d,{children:[Object(d.jsx)(s.b,{path:"/todo-app",children:Object(d.jsx)(L,{})}),Object(d.jsxs)(s.b,{path:"/",children:[localStorage.getItem("redirectTo")?Object(d.jsx)(s.a,{to:localStorage.getItem("redirectTo")}):null,Object(d.jsx)(j,{})]})]})]})};var I=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(E,{})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(C.a,{maxSnack:2,anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:3e3,children:Object(d.jsx)(I,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.9822f056.chunk.js.map