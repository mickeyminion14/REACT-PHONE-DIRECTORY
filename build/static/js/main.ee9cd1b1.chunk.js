(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),c=(a(16),a(7)),s=a(2),o=a(3),d=a(5),m=a(4),u=a(6),b=function(e){return e.children},h=function(e){return i.a.createElement(b,null,i.a.createElement("nav",{className:"navbar is-dark is-flex tile is-parent has-text-centered",style:{justifyContent:"center"},role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},e.NavbarName)))},E=function(e){return i.a.createElement(b,null,i.a.createElement("div",null,i.a.createElement(h,{NavbarName:e.NavbarName})),i.a.createElement("main",null,e.children))},v=a(1),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={name:"",phone:""},a.handleChangeName=function(e){a.setState({name:e.target.value})},a.handleChangePhone=function(e){a.setState({phone:e.target.value})},a.addSubscriberHandler=function(){a.props.addSubscriber(a.state.name,a.state.phone),a.setState({name:"",phone:""})},a.addSubscriberHandler=a.addSubscriberHandler.bind(Object(v.a)(Object(v.a)(a))),console.log(e),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(e){var t=this;return i.a.createElement(b,null,i.a.createElement("div",null,i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Name"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{style:{width:"200px"},className:"input",type:"text",placeholder:"Name",value:this.state.name,onChange:this.handleChangeName}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label"},"Phone"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{style:{width:"200px"},className:"input",type:"text",placeholder:"Phone",value:this.state.phone,onChange:this.handleChangePhone}))),i.a.createElement("div",null,i.a.createElement("p",null,"Subscriber to be added :"),i.a.createElement("p",null,"Name : ",this.state.name),i.a.createElement("p",null,"Phone : ",this.state.phone)),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return t.addSubscriberHandler()},style:{marginTop:"20px"},className:"button is-primary"},"ADD"))))}}]),t}(n.Component),p=function(e){return console.log(e),i.a.createElement(b,null,i.a.createElement("div",{className:"main"},i.a.createElement("div",null,i.a.createElement("button",{onClick:e.changeAddVisibility,className:"button"},"BACK"))),i.a.createElement("div",{className:"main"},i.a.createElement(N,{addSubscriber:e.addSubscriber,changeAddVisibility:e.changeAddVisibility})))},y=(a(17),function(e){return i.a.createElement(b,null,i.a.createElement("div",null,e.directoryList.map(function(t,a){return i.a.createElement("div",{key:a,className:"columns  "},i.a.createElement("div",{className:"column"},t.name),i.a.createElement("div",{className:"column"},t.phone),i.a.createElement("div",{onClick:function(){return e.deleteSubscriber(a)},className:"column"},i.a.createElement("button",{className:"button is-danger"},"DELETE")))})))}),f=function(e){return i.a.createElement(b,null,i.a.createElement("div",{className:"main"},i.a.createElement("div",null,i.a.createElement("button",{onClick:e.changeAddVisibility,className:"button is-primary"},"Add")),i.a.createElement("div",{className:"columns subscribers "},i.a.createElement("div",{className:"column"},"NAME"),i.a.createElement("div",{className:"column"},"PHONE")),i.a.createElement("div",{className:" subscriber"},i.a.createElement(y,{directoryList:e.directoryList,deleteSubscriber:e.deleteSubscriber}))))},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={NavbarName:"PHONE DIRECTORY",directoryList:[],addVisibility:!1},a.changeNavbarName=function(){a.setState({NavbarName:"ADD SUBSCRIBER"})},a.addSubscriber=function(e,t){if(""===e||""===t)alert("Field empty");else{var n={name:e,phone:t};a.setState({directoryList:[].concat(Object(c.a)(a.state.directoryList),[n])})}},a.deleteSubscriber=function(e){var t=Object(c.a)(a.state.directoryList);t.splice(e,1),a.setState({directoryList:t})},a.changeAddVisibility=function(){var e="";a.state.addVisibility?(e="PHONE DIRECTORY",window.history.pushState("home","home","/")):(e=" ADD SUBSCRIBER",window.history.pushState("add","addSubscriber","add")),a.setState({addVisibility:!a.state.addVisibility,NavbarName:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log(window.location.href)}},{key:"render",value:function(){return i.a.createElement(b,null,i.a.createElement(E,{NavbarName:this.state.NavbarName},this.state.addVisibility?i.a.createElement(p,{addSubscriber:this.addSubscriber,changeAddVisibility:this.changeAddVisibility}):i.a.createElement(f,{directoryList:this.state.directoryList,changeAddVisibility:this.changeAddVisibility,deleteSubscriber:this.deleteSubscriber})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.ee9cd1b1.chunk.js.map