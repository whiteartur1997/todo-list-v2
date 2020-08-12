(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={App:"TodoItem_App__1mTs7",Item:"TodoItem_Item__2Tie0",done:"TodoItem_done__3OAJd",hidden:"TodoItem_hidden__3vUyr"}},function(e,t,a){e.exports={App:"Modal_App__1_izs",modalBase:"Modal_modalBase__1t6Sn",deleteBtn:"Modal_deleteBtn__2gaRK"}},,,,,function(e,t,a){e.exports={App:"App_App__1W0X9"}},function(e,t,a){e.exports={List:"TodoList_List__uR5cA"}},function(e,t,a){e.exports={App:"AddTodo_App__3SjtY",Add:"AddTodo_Add__KjuF3"}},function(e,t,a){e.exports={Filter:"FilterTodo_Filter__28OSa"}},,function(e,t,a){e.exports={Counter:"TodoCounter_Counter__2ynrs"}},,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(8),l=a.n(s),r=(a(24),a(1)),i=a(3),c=a(9),d=a(10),u=a(18),m=a(17),p=a(11),f=a.n(p),h=a(12),k=a.n(h),v=a(5),_=a.n(v),E=function(e){var t=[_.a.Item],a=null;return e.done&&(a=o.a.createElement("button",{onClick:function(t){t.stopPropagation(),e.openModal(e.id,e.text)}},"Delete"),t.push(_.a.done)),e.hidden&&t.push(_.a.hidden),o.a.createElement("li",{id:e.id,onClick:function(t){return e.toggle(e.id)},className:t.join(" ")},o.a.createElement("span",null,e.text),a)},O=function(e){var t=null;return 0===e.tasks.length&&(t=o.a.createElement("h1",null,"No tasks now. Add something")),o.a.createElement("div",null,t||o.a.createElement("ul",{className:k.a.List},e.tasks.map((function(t){return o.a.createElement(E,{id:t.id,key:t.id,text:t.text,done:t.done,hidden:t.isHidden,toggle:e.toggle,openModal:e.openModal})}))))},g=a(13),b=a.n(g),j=function(e){var t=o.a.createRef();return o.a.createElement("div",{className:b.a.Add},o.a.createElement("input",{type:"text",ref:t}),o.a.createElement("button",{onClick:function(){t.current.value.length>0&&(e.add(t.current.value),t.current.value="")}},"Add task"))},A=a(14),T=a.n(A),x=function(e){var t=function(){var t=0;return e.tasks.forEach((function(e){!0===e.isHidden&&t++})),t},a="Filter your todos";t()===e.tasks.length&&(a="Nothing found with your filter");var n=o.a.createRef();return o.a.createElement("div",{className:T.a.Filter},o.a.createElement("span",{style:{color:t()===e.tasks.length?"red":"black"}},a),o.a.createElement("input",{type:"text",ref:n,onKeyUp:function(){e.filter(n.current.value)}}))},y=a(15),w=a(16),C=a.n(w),M=function(e){var t=function(){var t,a=0,n=Object(y.a)(e.tasks);try{for(n.s();!(t=n.n()).done;){t.value.done&&a++}}catch(o){n.e(o)}finally{n.f()}return a};return o.a.createElement("div",{className:C.a.Counter},o.a.createElement("div",null,"All tasks: ",e.tasks.length),o.a.createElement("div",null,"Done: ",t()),o.a.createElement("div",null,"Should be done: ",e.tasks.length-t()))},S=a(6),N=a.n(S),B=function(e){return e.isOpen?o.a.createElement("div",{className:N.a.modalBase},o.a.createElement("div",null,o.a.createElement("h3",null,'Do you want to delete task "',e.name,'"'),o.a.createElement("div",null,o.a.createElement("button",{className:N.a.deleteBtn,onClick:function(){return e.remove(e.id)}},"Delete"),o.a.createElement("button",{className:N.a.cancelBtn,onClick:function(){return e.cancel()}},"Cancel")))):null},I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).toggleTask=function(e){var t=Object(i.a)(n.state.tasks);n.setState({tasks:t.map((function(t){return t.id===e&&(t.done=!t.done),t}))})},n.filterTasks=function(e){console.log(e);var t=Object(i.a)(n.state.tasks).map((function(t){return-1===t.text.toLowerCase().indexOf(e.toLowerCase())?Object(r.a)(Object(r.a)({},t),{},{isHidden:!0}):Object(r.a)(Object(r.a)({},t),{},{isHidden:!1})}));n.setState({tasks:t})},n.addTask=function(e){var t={id:Date.now(),text:e,done:!1},a=Object(i.a)(n.state.tasks);a.push(t),n.setState({tasks:a})},n.removeTask=function(e){var t=Object(i.a)(n.state.tasks);n.setState({tasks:t.filter((function(t){return t.id!==e}))});var a=Object(r.a)(Object(r.a)({},n.state.modal),{},{isOpen:!n.state.modal.isOpen});n.setState({modal:a})},n.openModal=function(e,t){var a={isOpen:!n.state.modal.isOpen,id:e,name:t};n.setState({modal:a})},n.closeModal=function(){var e=Object(r.a)(Object(r.a)({},n.state.modal),{},{isOpen:!n.state.modal.isOpen});n.setState({modal:e})},n.state={tasks:[],modal:{isOpen:!1}},n}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:f.a.App},o.a.createElement(B,{isOpen:this.state.modal.isOpen,name:this.state.modal.name,id:this.state.modal.id,remove:this.removeTask,cancel:this.closeModal}),o.a.createElement("h1",null,"ToDo list"),this.state.tasks.length?o.a.createElement(x,{filter:this.filterTasks,tasks:this.state.tasks}):null,o.a.createElement(O,{tasks:this.state.tasks,toggle:this.toggleTask,openModal:this.openModal}),o.a.createElement(j,{add:this.addTask}),o.a.createElement(M,{tasks:this.state.tasks}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.fa8741a6.chunk.js.map