(this.webpackJsonp9625site1jsreact=this.webpackJsonp9625site1jsreact||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/read1.96b3826a.png"},34:function(e,a,t){e.exports=t.p+"static/media/storage2.56a923ae.png"},37:function(e,a,t){e.exports=t(75)},42:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n,c=t(0),l=t.n(c),r=t(31),o=t.n(r),m=(t(42),t(12)),i=t(3),s=t(2),u=t(9),d=function(){var e=Object(c.useState)({hover:!1}),a=Object(u.a)(e,2),t=a[0];a[1];return t.hover?{position:"absolute",zIndex:2,display:"flex",flexDirection:"column"}:{display:"none"},l.a.createElement("div",{style:{position:"fixed",width:"100vw",zIndex:"99"}},l.a.createElement("nav",{className:"navbar navbar-dark navbar-expand color "},l.a.createElement("div",{className:"container"},l.a.createElement(m.b,{className:"navbar-brand",to:"/main",width:"30",height:"30",alt:"",style:{border:"1px solid #ccc",borderRadius:"3px",padding:"5px"}},"PK"),l.a.createElement("ul",{className:"navbar-nav "},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/page"}," \u041f\u0440\u043e\u0435\u043a\u0442\u044b ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{className:"nav-link",to:"/contacts"}," \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b "))),l.a.createElement("hr",null))))},b=function(){return l.a.createElement("footer",{className:"text-muted color"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-copyright text-center py-3 text-color"},"\xa9\xa0",(new Date).getFullYear().toString())))},E=Object(c.createContext)(),p=function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"spinner-border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))},g=function(){var e=Object(c.useContext)(E),a=e.showLoader,t=e.sendMessage,n=e.loading,r=Object(c.useState)({name:"",email:"",message:"",subject:"",info:""}),o=Object(u.a)(r,2),m=o[0],i=o[1];return l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{style:{height:"75px"}},l.a.createElement(d,null)),l.a.createElement("main",{className:"main"},l.a.createElement("div",{className:"container  d-flex justify-content-center"},l.a.createElement("div",{className:""},l.a.createElement("label",null,"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435: ",l.a.createElement("span",{style:{color:"red"}},n?l.a.createElement(p,null):m.info)),l.a.createElement("div",null,l.a.createElement("div",{className:" col-fluid-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"name",className:"form-control",value:m.name,onChange:function(e){i(Object(s.a)(Object(s.a)({},m),{},{name:e.target.value}))},placeholder:"\u0418\u043c\u044f"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",value:m.email,onChange:function(e){i(Object(s.a)(Object(s.a)({},m),{},{email:e.target.value}))},placeholder:"name@example.com"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",value:m.subject,onChange:function(e){i(Object(s.a)(Object(s.a)({},m),{},{subject:e.target.value}))},placeholder:"\u0422\u0435\u043c\u0430"})),l.a.createElement("textarea",{className:"form-control",value:m.message,onChange:function(e){i(Object(s.a)(Object(s.a)({},m),{},{message:e.target.value}))},rows:"3"})),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("button",{onClick:function(){""!==m.name?""!==m.email?""!==m.message?(a(),t(m.message,"\u0438\u043c\u044f: "+m.name+" \u043f\u043e\u0447\u044c\u0442\u0430: "+m.email+" \u0442\u0435\u043c\u0430: "+m.subject).then((function(){i(Object(s.a)(Object(s.a)({},m),{},{name:"",email:"",message:"",subject:"",info:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e"}))})).catch((function(){i(Object(s.a)(Object(s.a)({},m),{},{info:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"}))}))):i(Object(s.a)(Object(s.a)({},m),{},{info:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 message"})):i(Object(s.a)(Object(s.a)({},m),{},{info:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"})):i(Object(s.a)(Object(s.a)({},m),{},{info:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f"}))},className:"btn  btn-outline-info my-3 "},"send"),l.a.createElement("button",{onClick:function(){i(Object(s.a)(Object(s.a)({},m),{},{name:"",email:"",message:"",subject:""}))},className:"btn btn-outline-secondary ml-3  my-3 "},"clear"))),l.a.createElement("div",{className:"d-flex justify-content-around align-items-center "},l.a.createElement("div",{className:"text-body"},l.a.createElement("h5",null,"Contact:"),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("div",{className:"d-flex flex-column align-items-end"},l.a.createElement("span",null,"phone\xa0"),l.a.createElement("span",null,"telegram\xa0"),l.a.createElement("span",null,"mail\xa0")),l.a.createElement("div",{className:"d-flex flex-column "},l.a.createElement("span",null,"+79208776896"),l.a.createElement("span",null,"pavelk6896"),l.a.createElement("span",null,"79208776896@yandex.com"))))))))),l.a.createElement(b,null))},v=function(){return l.a.createElement("header",{className:"card-header container text-center"},l.a.createElement("h1",{className:"card-title"},"\u041b\u0438\u0447\u043d\u044b\u0439 \u0441\u0430\u0439\u0442."))},h=t(33),j=t.n(h),f=t(34),O=t.n(f),y=t(1),x=function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(y.ScrollContainer,null,l.a.createElement("div",{className:"back-b2"},l.a.createElement(y.ScrollPage,{page:0},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.Fade)(),Object(y.Sticky)(),Object(y.MoveOut)(0,-200))},l.a.createElement(y.Animator,{animation:Object(y.ZoomOut)(2,-2)},l.a.createElement(v,null),l.a.createElement("p",null,"\u041c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 \u041f\u0430\u0432\u0435\u043b \u044f \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0441\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c 2 \u0433\u043e\u0434\u0430."))))),l.a.createElement("div",{className:"back-g2"},l.a.createElement(y.ScrollPage,{page:1},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.Fade)(),Object(y.Move)(),Object(y.Sticky)())},l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(500,500)},l.a.createElement(y.Animator,{animation:Object(y.MoveOut)(-500,-500)},l.a.createElement("div",{className:"mx-auto text-body mx-md-5"},l.a.createElement("h2",null,"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u043c\u043e\u0439 \u0441\u0430\u0439\u0442!"),l.a.createElement("h3",null,"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0432\u0430\u0441 \u0447\u0442\u043e \u0437\u0430\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442."))))))),l.a.createElement("div",{className:"back-b1"},l.a.createElement(y.ScrollPage,{page:2},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.Fade)(),Object(y.Sticky)())},l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(-1e3,-150)},l.a.createElement(y.Animator,{animation:Object(y.MoveOut)(2500,350)},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",src:j.a})))))),l.a.createElement("div",{className:"back-g1"},l.a.createElement(y.ScrollPage,{page:3},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.Fade)(),Object(y.Sticky)())},l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(1500,-150)},l.a.createElement("img",{className:"bd-placeholder-img card-img-top",src:O.a}))))),l.a.createElement(b,null)))},N=function(){var e=Object(c.useState)({text1:r(12),value1:12}),a=Object(u.a)(e,2),t=a[0],n=a[1];function r(e){for(var a="",t=0;t<e/4;t++)for(var n=0;n<4;n++){var c=Math.round(Math.random()*(D[n].length-1));a+=D[n][c]}return a}return l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u043f\u0430\u0440\u043e\u043b\u0435\u0439"),l.a.createElement("main",{className:"main",style:{minHeight:"60vh"}},l.a.createElement("input",{type:"number",value:t.value1,step:4,onChange:function(e){n({text1:r(e.target.value-1),value1:e.target.value})},style:{maxWidth:"50px"}}),l.a.createElement("button",{style:{maxWidth:"50px",marginLeft:"10px"},onClick:function(){n({text1:r(t.value1),value1:t.value1})}},"\u0435\u0449\u0435"),l.a.createElement("div",null,"\u0412\u0430\u0448\u044c \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u0438\u043d\u043e\u0439 ",t.text1.length,":",l.a.createElement("pre",{style:{fontSize:"50px"}},t.text1))))),l.a.createElement(b,null))},D=[["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],[1,2,3,4,5,6,7,8,9,0],["!","@","#","$","%","&","?","-","+","=","~"]],S=function(){var e=function(e,a,t){for(var n,c={0:31,1:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31},l=0,r=0,o=1;o<e;o++)3&(n=o)||!(n%25)&n&15||r++;for(var m=365*e+r,i=0;i<a;i++)l+=c[i];return m+l+t},a=new Date,t=e(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()),n=e(1994,0,28),r=t-n,o=Object(c.useState)({check1:!1,check2:!1,dataDay1:t,dataDay2:n,dataDay3:r,dataDay5:r,text1:"\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u044b",text2:"\u0441\u0435\u0434\u043d\u044f \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e"}),m=Object(u.a)(o,2),i=m[0],E=m[1];return l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"wrapper"},l.a.createElement(d,null),l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"\u0441\u0435\u0433\u043e\u0434\u043d\u044f:\xa0",i.dataDay3.toString().slice(0,i.dataDay3.toString().length-3)+" "+i.dataDay3.toString().slice(i.dataDay3.toString().length-3,i.dataDay3.toString().length),"\xa0\u0434\u0435\u043d\u044c"),l.a.createElement("p",null,"\u0441\u0435\u0433\u043e\u0434\u043d\u044f:\xa0",i.dataDay1.toString().slice(0,i.dataDay1.toString().length-3)+" "+i.dataDay1.toString().slice(i.dataDay1.toString().length-3,i.dataDay1.toString().length),"\xa0\u0434\u0435\u043d\u044c \u043d\u0430\u0448\u0435\u0439 \u044d\u0440\u044b"),l.a.createElement("p",null,l.a.createElement("input",{type:"checkbox",onChange:function(e){e.target.checked?E((function(e){return Object(s.a)(Object(s.a)({},e),{},{check1:!e.check1,dataDay1:e.dataDay1+1,dataDay2:e.dataDay2+1,dataDay3:e.dataDay3+1,dataDay5:e.dataDay5+1,text1:"\u0441 \u043d\u0443\u043b\u044f"})})):E((function(e){return Object(s.a)(Object(s.a)({},e),{},{check1:!e.check1,dataDay1:e.dataDay1-1,dataDay2:e.dataDay2-1,dataDay3:e.dataDay3-1,dataDay5:e.dataDay5-1,text1:"\u0441 \u0435\u0434\u0438\u043d\u0438\u0446\u044b"})}))}}),i.text1),l.a.createElement("p",null,l.a.createElement("input",{type:"checkbox",onChange:function(e){e.target.checked?E((function(e){return Object(s.a)(Object(s.a)({},e),{},{check2:!e.check2,dataDay1:e.dataDay1+1,dataDay2:e.dataDay2+1,dataDay3:e.dataDay3+1,dataDay5:e.dataDay5+1,text2:"\u0441\u0435\u0434\u043d\u044f \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u044f"})})):E((function(e){return Object(s.a)(Object(s.a)({},e),{},{check2:!e.check2,dataDay1:e.dataDay1-1,dataDay2:e.dataDay2-1,dataDay3:e.dataDay3-1,dataDay5:e.dataDay5-1,text2:"\u0441\u0435\u0434\u043d\u044f \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e"})}))}}),i.text2),l.a.createElement("p",null,l.a.createElement("input",{type:"date",onChange:function(a){var t=a.target.value.split("-"),c=e(+t[0],t[1]-1,+t[2]);E((function(e){return Object(s.a)(Object(s.a)({},e),{},{dataDay5:c-n})}))}})," date"),l.a.createElement("p",null,i.dataDay5.toString().slice(0,i.dataDay5.toString().length-3)+" "+i.dataDay5.toString().slice(i.dataDay5.toString().length-3,i.dataDay5.toString().length),"\xa0\u0434\u0435\u043d\u044c"))),l.a.createElement(b,null))},k=function(){return l.a.createElement(y.ScrollContainer,null,l.a.createElement(d,null),l.a.createElement("div",{className:"back-g2"},l.a.createElement(y.ScrollPage,{page:0},l.a.createElement(y.Animator,{animation:Object(y.FadeOut)(2,-3)},l.a.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{style:{height:"25vh",display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement(y.Animator,{animation:Object(y.MoveOut)(1e3,-500)}," Read 1 "),"Server Amazon aws frontend and backend -",l.a.createElement("br",null),l.a.createElement("a",{className:"a-href",href:"http://18.156.192.31/read1/"},"Read 1"),l.a.createElement("br",null),"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0441\u043e\u0446\u0441\u0435\u0442\u044c \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u0441\u0442\u044b \u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u044b, \u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a\u0438.",l.a.createElement(y.Animator,{animation:Object(y.MoveOut)(1500,-150)},l.a.createElement("br",null),"\u0421\u0442\u0435\u043a \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439: git, nginx, sonar lint.",l.a.createElement("br",null),"backend: java 11, spring boot 2, postgres 12, h2, hibernate, jsonwebtoken, mapstruct, maven, junit 5.",l.a.createElement("br",null),"frontend: angular 10, quill, toastr, ts, js, HTML, CSS, bootstrap 4, http-server 0.12, jasmine 3."),l.a.createElement(y.Animator,{animation:Object(y.MoveOut)(1e3,150)},l.a.createElement("br",null)," ",l.a.createElement("a",{className:"a-href",href:"https://github.com/PavelK6896/9758Read1JavaSpringTSAngular"},"Work code - GitHub"))))))),l.a.createElement("div",{className:"back-b1"},l.a.createElement(y.ScrollPage,{page:1},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.Fade)(),Object(y.StickyOut)(),Object(y.MoveOut)(0,-200))},l.a.createElement("div",null,l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(-1e3,0)}," Storage"),l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(20,-500)}," ",l.a.createElement("br",null),l.a.createElement("a",{className:"a-href",href:"https://pavelk6896.github.io/9740Storage2JavaSpringAngular/"},"static server GitHub Pages frontend heroku backend"),l.a.createElement("br",null),l.a.createElement("a",{className:"a-href",href:"https://storage2.herokuapp.com/storage2/"},"server heroku full"),l.a.createElement("br",null)),"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 rest servic. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u043e https \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c, \u0443\u0434\u0430\u043b\u044f\u0442\u044c, \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u043f\u043e \u043d\u0438\u043c \u043f\u043e\u0438\u0441\u043a, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432 \u0444\u0430\u0439\u043b \u0440\u0430\u0437\u043d\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432.",l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(1500,-1e3)},l.a.createElement("br",null),"\u0421\u0442\u0435\u043a \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439:",l.a.createElement("br",null),"backend: java 11, spring boot, hibernate, flyway, postgres 12, h2, jjwt, lombok, apache.poi, itextpdf, odftoolkit, swagger, maven, junit.",l.a.createElement("br",null),"frontend: angular 10, toastr, ts, js, HTML, CSS, bootstrap 4, jasmine 3."),l.a.createElement(y.Animator,{animation:Object(y.MoveIn)(3e3,0)},l.a.createElement("br",null),l.a.createElement("a",{className:"a-href",href:"https://github.com/PavelK6896/9740Storage2JavaSpringAngular"},"Work code - GitHub")))))),l.a.createElement("div",{className:"back-g2"},l.a.createElement(y.ScrollPage,{page:2},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.FadeIn)(),Object(y.StickyOut)(),Object(y.MoveOut)(0,-200),Object(y.ZoomIn)())},l.a.createElement("div",null,l.a.createElement("a",{className:"a-href",href:"https://pavelktrainer1.web.app"}," \u0442\u0440\u0435\u043d\u0435\u04401 ")," \u0441\u043b\u0435\u043f\u043e\u0439 \u043f\u0435\u0447\u0430\u0442\u0438")))),l.a.createElement("div",{className:"back-g1"},l.a.createElement(y.ScrollPage,{page:3},l.a.createElement(y.Animator,{animation:Object(y.batch)(Object(y.Fade)(),Object(y.Sticky)(),Object(y.MoveOut)(0,-200),Object(y.ZoomIn)())},l.a.createElement("div",null,l.a.createElement("a",{className:"a-href",href:"https://pavelktrainer2.web.app"}," \u0442\u0440\u0435\u043d\u0435\u04402 ")," \u0443\u0441\u0442\u043d\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430")))),l.a.createElement(b,null))},w=t(19),A=t.n(w),M=t(35),C=t(11),I=(n={},Object(C.a)(n,"SHOW_LOADER",(function(e){return Object(s.a)(Object(s.a)({},e),{},{loading:!0})})),Object(C.a)(n,"SEND_MESSAGE",(function(e,a){a.payload;return Object(s.a)(Object(s.a)({},e),{},{loading:!1})})),Object(C.a)(n,"DEFAULT",(function(e){return e})),n),P=function(e,a){return(I[a.type]||I.DEFAULT)(e,a)},F=t(36),L=t.n(F),H=function(e){var a=e.children,t=Object(c.useReducer)(P,{message:[],loading:!1}),n=Object(u.a)(t,2),r=n[0],o=n[1],m=function(){var e=Object(M.a)(A.a.mark((function e(a,t){var n,c,l;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={message:a,info:t,date:(new Date).toJSON()},e.prev=1,e.next=4,L.a.post("".concat("https://site1-50e80.firebaseio.com","/message.json"),n);case 4:c=e.sent,l=Object(s.a)(Object(s.a)({},n),{},{id:c.data.name}),o({type:"SEND_MESSAGE",payload:l}),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,t){return e.apply(this,arguments)}}();return l.a.createElement(E.Provider,{value:{showLoader:function(){return o({type:"SHOW_LOADER"})},sendMessage:m,loading:r.loading}},a)};var T=function(){return l.a.createElement(H,null,l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/main",exact:!0,component:x}),l.a.createElement(i.a,{path:"/contacts",exact:!0,component:g}),l.a.createElement(i.a,{path:"/page",exact:!0,component:k}),l.a.createElement(i.a,{path:"/generator",exact:!0,component:N}),l.a.createElement(i.a,{path:"/day",exact:!0,component:S}),l.a.createElement(i.a,{path:"",component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=l.a.createElement(T,null);o.a.render(W,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.bc3c2580.chunk.js.map