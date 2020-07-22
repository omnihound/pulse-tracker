(this["webpackJsonppulse-tracker"]=this["webpackJsonppulse-tracker"]||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=(a(78),a(6)),m=a(137),o=a(39),u=a(19),d=a(32),E=a(3),s=a(27),h=a(129),f=a(130),p=function(){var e=Object(u.b)();return r.a.createElement(E.a,{as:"header",bg:"grey",height:"45px",width:"full"},r.a.createElement(s.a,{name:"pulse",color:"white",size:"1.25em",m:"3"}),r.a.createElement(h.a,{display:"inline",size:"sm",color:"white",m:"1"},"Pulse Tracker"),r.a.createElement(E.a,{float:"right"},r.a.createElement(f.a,{icon:"addPlayer",isRound:"true",onClick:function(){return e({type:"ADD_PLAYER"})}}),r.a.createElement(f.a,{icon:"twenty",isRound:"true",onClick:function(){return e({type:"RESET_ALL_PLAYER_LIFE",value:20})}}),r.a.createElement(f.a,{icon:"forty",isRound:"true",onClick:function(){return e({type:"RESET_ALL_PLAYER_LIFE",value:40})}})))},g=a(132),b=a(38),v=a(67),O=a(72),j=a(131),y=a(46),w=a(133),C=a(136),A=a(134),L=a(135),_=a(68),M=a.n(_),R=function(e){var t=e.player,a=(e.id,Object(v.a)(e,["player","id"])),c=Object(j.a)(),i=c.isOpen,l=c.onOpen,m=c.onClose,o=Object(n.useState)(0),d=Object(b.a)(o,2),s=d[0],p=d[1],_=Object(u.b)(),R=Object(u.c)((function(e){return Object.keys(e).map((function(t){return e[t]})).filter((function(e){return e.name!==t.name}))}));return r.a.createElement(E.a,Object.assign({},a,{transform:"rotate(".concat(s,"deg)")}),r.a.createElement(g.a,{templateColumns:"repeat(3, 1fr)"},r.a.createElement(E.a,{w:"100%",fontSize:"0.75em",textAlign:"center"},r.a.createElement(y.a,{onClick:function(){return _({type:"SET_PLAYER_LIFE",id:t.id,name:t.name,value:-1})},rounded:"2em",height:"1.5em",paddingRight:"0.15rem",paddingLeft:"0.15rem",marginTop:"1.5rem",minWidth:"2rem"},"-1")),r.a.createElement(E.a,{w:"100%"},r.a.createElement(h.a,{textAlign:"center",size:"1.6rem"},t.life)),r.a.createElement(E.a,{w:"100%",fontSize:"0.75em",textAlign:"center"},r.a.createElement(y.a,{onClick:function(){return _({type:"SET_PLAYER_LIFE",id:t.id,name:t.name,value:1})},rounded:"2em",height:"1.5em",paddingRight:"0.15rem",paddingLeft:"0.15rem",marginTop:"1.5rem",minWidth:"2rem"},"+1"))),r.a.createElement(E.a,{textAlign:"center"},r.a.createElement(w.a,{rounded:"full",size:["5rem","10rem"],src:t.commander?t.commander.image_uris.art_crop:"https://api.adorable.io/avatars/285/".concat(t.name,".png"),alt:t.commander?t.commander.name:t.name})),r.a.createElement(h.a,{size:"md",textAlign:"center"},t.name),r.a.createElement(g.a,{templateColumns:"repeat(3, 1fr)",marginTop:"1rem"},r.a.createElement(E.a,{w:"100%",textAlign:"center"},r.a.createElement(f.a,{icon:"rotate",size:"sm",isRound:"true",onClick:function(){return function(){switch(s){case 0:return void p(180);case 180:return void p(0);default:return}}()}}),r.a.createElement(f.a,{icon:"edit",size:"sm",isRound:"true",onClick:l}))),r.a.createElement(C.a,{isOpen:i,onClose:m},r.a.createElement(C.g,null),r.a.createElement(C.d,null,r.a.createElement(C.f,null,"Edit: ",t.name),r.a.createElement(C.c,null),r.a.createElement(C.b,null,r.a.createElement(O.a,{cacheOptions:!0,loadOptions:function(e){var t=M.a.get("https://api.scryfall.com/cards/search?q=".concat(e,"+type%3Alegendary"));if(t)return t.then((function(e){return e.data.data.map((function(e){return{value:e,label:e.name}}))}))},onInputChange:function(e){return e.replace(/\W/g,"")},onChange:function(e){return _({type:"SET_PLAYER_COMMANDER",payload:e.value,id:t.id})}}),r.a.createElement(A.a,null,"Commander Damage"),R.map((function(e,a){return r.a.createElement(L.a,{key:"".concat(t.name,"-").concat(a,"-").concat(e.name)},r.a.createElement(A.a,{mt:"1.5em",mr:"1.5em"},e.name),r.a.createElement(A.a,{mt:"1.5em",mr:"1.5em"},t.commanderDamage&&t.commanderDamage[e.id]||0),r.a.createElement(y.a,{onClick:function(){_({type:"SET_COMMANDER_DAMAGE",id:t.id,commanderId:e.id,name:t.name,value:-1})},rounded:"2em",height:"1.5em",paddingRight:"0.15rem",paddingLeft:"0.15rem",marginTop:"1.5rem",minWidth:"2rem"},"-1"),r.a.createElement(y.a,{onClick:function(){_({type:"SET_COMMANDER_DAMAGE",id:t.id,commanderId:e.id,name:t.name,value:1})},rounded:"2em",height:"1.5em",paddingRight:"0.15rem",paddingLeft:"0.15rem",marginTop:"1.5rem",minWidth:"2rem"},"+1"))}))),r.a.createElement(C.e,null,r.a.createElement(y.a,{variantColor:"blue",mr:3,onClick:m},"Close")))))};var z=function(){var e=Object(u.c)((function(e){return Object.keys(e).map((function(t){return e[t]}))})),t=function(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var a=Object(n.useState)(t),r=Object(b.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!e)return!1;function a(){i(t())}return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),c}();return r.a.createElement(E.a,null,r.a.createElement(g.a,{templateColumns:"repeat(".concat(Math.ceil(e.length/2),", 1fr)"),gap:6},e.slice(0,Math.ceil(e.length/2)).map((function(e){return r.a.createElement(R,{key:e.name,id:e.id,player:e,w:"100%",h:"".concat((t.height-50)/2,"px")})}))),r.a.createElement(g.a,{templateColumns:"repeat(".concat(Math.floor(e.length/2),", 1fr)"),gap:6},e.slice(Math.ceil(e.length/2)).map((function(e){return r.a.createElement(R,{key:e.name,id:e.id,player:e,w:"100%",h:"".concat((t.height-50)/2,"px")})}))))},k=a(15),D={0:{id:0,name:"Player 1",life:20,commanderDamage:{}}},T={pulse:{path:r.a.createElement("path",{fill:"currentColor",d:"M450 207.5c-13.934 0-25.988 8.186-31.616 20H332.76l-59.937 159.385-140.647-374L51.471 227.5H0v30h72.24l59.937-159.385 140.647 374L353.529 257.5h64.855c5.628 11.814 17.682 20 31.616 20 19.299 0 35-15.701 35-35s-15.701-35-35-35z"}),viewBox:"0 0 485 485"},twenty:{path:r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M248.082.003C111.07.003 0 111.061 0 248.085c0 137 111.07 248.07 248.082 248.07 137.006 0 248.076-111.07 248.076-248.07C496.158 111.061 385.088.003 248.082.003z",fill:"currentColor"}),r.a.createElement("g",{fill:"#fff"},r.a.createElement("path",{d:"M230.646 325.595c-4.006-3.124-9.814-4.688-17.432-4.688h-76.465c2.439-3.71 4.834-6.885 7.178-9.521 5.468-6.64 15.551-15.967 30.249-27.979 14.696-12.012 25.17-20.824 31.421-26.44 6.248-5.614 12.378-13.378 18.384-23.291 6.006-9.911 9.009-20.922 9.009-33.032 0-7.713-1.441-15.161-4.321-22.339-2.882-7.178-6.91-13.5-12.085-18.97a57.594 57.594 0 0 0-18.018-12.891c-10.547-4.688-23.291-7.031-38.232-7.031-12.403 0-23.218 1.831-32.446 5.493s-16.846 8.473-22.852 14.429c-6.006 5.958-10.524 12.598-13.55 19.922-3.028 7.324-4.541 14.355-4.541 21.094 0 5.566 1.611 9.961 4.834 13.184s7.273 4.834 12.158 4.834c5.566 0 9.789-1.758 12.671-5.273 2.88-3.516 5.468-8.544 7.764-15.088 2.294-6.542 3.93-10.547 4.907-12.012 7.324-11.229 17.381-16.846 30.176-16.846 6.054 0 11.646 1.369 16.772 4.102 5.127 2.735 9.179 6.569 12.158 11.499 2.978 4.933 4.468 10.524 4.468 16.772 0 5.763-1.392 11.646-4.175 17.651s-6.837 11.865-12.158 17.578c-5.323 5.713-11.989 11.403-19.995 17.065-4.493 3.028-11.964 9.352-22.412 18.97-10.451 9.62-22.17 21.167-35.156 34.644-3.127 3.321-6.006 7.887-8.643 13.696-2.637 5.812-3.955 10.474-3.955 13.989 0 5.47 2.051 10.231 6.152 14.282 4.102 4.054 9.814 6.079 17.139 6.079h107.813c6.445 0 11.254-1.659 14.429-4.98 3.173-3.319 4.761-7.372 4.761-12.158-.001-5.369-2.004-9.617-6.007-12.744zM401.008 181.747c-4.299-9.276-9.547-17.065-15.747-23.364-6.202-6.299-13.403-11.083-21.606-14.355-8.203-3.271-17.336-4.907-27.393-4.907-15.234 0-28.345 3.688-39.331 11.06-10.986 7.375-19.361 18.091-25.122 32.153-3.321 8.496-5.764 18.654-7.324 30.469-1.563 11.817-2.344 25.099-2.344 39.844 0 11.426.707 22.046 2.124 31.86 1.415 9.814 3.637 18.775 6.665 26.88 5.955 14.845 14.818 26.466 26.587 34.863 11.767 8.4 25.071 12.598 39.917 12.598 12.891 0 24.609-3.126 35.156-9.375s19.139-15.136 25.781-26.66c5.273-9.375 8.885-19.823 10.84-31.348 1.952-11.522 2.93-25.292 2.93-41.309 0-29.492-3.713-52.295-11.133-68.409zm-32.08 111.182c-2.051 11.623-5.617 20.558-10.693 26.807-5.079 6.251-12.11 9.375-21.094 9.375-8.693 0-15.578-3.003-20.654-9.009-5.079-6.006-8.693-14.868-10.84-26.587-2.149-11.719-3.223-26.756-3.223-45.117 0-27.049 2.514-47.069 7.544-60.059 5.028-12.987 13.989-19.482 26.88-19.482 8.983 0 16.015 2.907 21.094 8.716 5.076 5.812 8.69 14.406 10.84 25.781 2.146 11.378 3.223 26.001 3.223 43.872-.001 18.849-1.027 34.083-3.077 45.703z"}))),viewBox:"0 0 496.158 496.158"},forty:{path:r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M248.082.003C111.07.003 0 111.061 0 248.085c0 137 111.07 248.07 248.082 248.07 137.006 0 248.076-111.07 248.076-248.07C496.158 111.061 385.088.003 248.082.003z",fill:"currentColor"}),r.a.createElement("g",{fill:"#fff"},r.a.createElement("path",{d:"M235.848 279.892c-4.541-2.051-10.572-3.076-18.091-3.076h-6.299V163.437c0-16.992-7.423-25.488-22.266-25.488-4.591 0-8.521 1.538-11.792 4.614-3.273 3.076-7.448 8.034-12.524 14.868L87.239 261.288a1784.678 1784.678 0 0 0-5.42 7.178 112.065 112.065 0 0 0-4.248 6.079c-1.369 2.101-2.394 4.102-3.076 6.006-.685 1.904-1.025 3.786-1.025 5.64 0 7.228 2.318 12.941 6.958 17.139 4.637 4.2 11.595 6.299 20.874 6.299h73.535v27.246c0 7.324 1.685 12.868 5.054 16.626s7.787 5.64 13.257 5.64c5.566 0 10.009-1.831 13.33-5.493 3.319-3.662 4.98-9.251 4.98-16.772V309.63h8.936c7.42 0 12.987-1.293 16.699-3.882 3.71-2.586 5.566-6.713 5.566-12.378 0-6.934-2.27-11.427-6.811-13.478zm-61.011-3.076h-62.988l62.988-85.107v85.107zM401.009 181.747c-4.298-9.276-9.547-17.065-15.747-23.364-6.203-6.299-13.403-11.083-21.606-14.355-8.203-3.271-17.335-4.907-27.393-4.907-15.234 0-28.345 3.688-39.331 11.06-10.986 7.375-19.361 18.091-25.122 32.153-3.321 8.496-5.763 18.654-7.324 30.469-1.563 11.817-2.344 25.099-2.344 39.844 0 11.426.707 22.046 2.124 31.86 1.415 9.814 3.637 18.775 6.665 26.88 5.956 14.845 14.818 26.466 26.587 34.863 11.767 8.4 25.072 12.598 39.917 12.598 12.891 0 24.609-3.126 35.156-9.375s19.139-15.136 25.781-26.66c5.273-9.375 8.885-19.823 10.84-31.348 1.952-11.522 2.93-25.292 2.93-41.309 0-29.492-3.713-52.295-11.133-68.409zm-32.08 111.182c-2.051 11.623-5.617 20.558-10.693 26.807-5.079 6.251-12.11 9.375-21.094 9.375-8.693 0-15.578-3.003-20.654-9.009-5.079-6.006-8.693-14.868-10.84-26.587-2.149-11.719-3.223-26.756-3.223-45.117 0-27.049 2.513-47.069 7.544-60.059 5.028-12.987 13.989-19.482 26.88-19.482 8.983 0 16.015 2.907 21.094 8.716 5.077 5.812 8.69 14.406 10.84 25.781 2.147 11.378 3.223 26.001 3.223 43.872-.001 18.849-1.027 34.083-3.077 45.703z"}))),viewBox:"0 0 496.158 496.158"},addPlayer:{path:r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M13.669 6.284l-.03-.049c.001-.101.002-.202 0-.305l.004-.073-.133-.745c0-1.307-.854-4.946-3.032-4.637 0 0-2.235-1.221-4.977.254C2.843 1.81 2.468 3.805 2.468 5.111v.985a.336.336 0 0 1-.016.048c-.086.247-.093.266.257 2.118a.449.449 0 0 0-.23.161c-.299.396-.038 1.441.042 1.721.075.491.265.773.439.934.384 2.761 2.758 4.93 4.843 4.93 2.438 0 4.746-2.39 5.153-4.927.173-.158.363-.436.435-.905.087-.312.349-1.359.048-1.755a.423.423 0 0 0-.128-.115 8.2 8.2 0 0 0 .326-2.005c.011-.006.022-.01.032-.017zm-2.733 1.467H8.922v2.12H7.088v-2.12H5.073V5.956h2.015V3.854h1.834v2.103h2.014v1.794z",fill:"#currentColor"})),viewBox:"0 0 16.008 16.008"},rotate:{path:r.a.createElement(r.a.Fragment,null,r.a.createElement("path",{d:"M509.823 254.911c0 140.559-114.354 254.911-254.911 254.911C114.353 509.822 0 395.47 0 254.911h44.97c0 115.758 94.182 209.949 209.942 209.949 115.757 0 209.938-94.191 209.938-209.949 0-115.76-94.182-209.941-209.938-209.941-50.893 0-99.505 18.291-137.719 51.558l45.908 45.903-142.594 22.777L43.283 22.633l42.057 42.05C132.097 22.972 192.071 0 254.912 0c140.557 0 254.911 114.353 254.911 254.911zm-100.17-3.747L255.002 96.513 100.347 251.164l154.655 154.652 154.651-154.652z"})),viewBox:"0 0 509.823 509.823"}},S=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PLAYER":var a=Object.keys(e).length;return Object(l.a)(Object(l.a)({},e),{},Object(k.a)({},a,{name:"Player ".concat(a+1),life:20,id:a}));case"RESET_ALL_PLAYER_LIFE":return Object.keys(e).reduce((function(a,n){return Object(l.a)(Object(l.a)({},a),{},Object(k.a)({},n,Object(l.a)(Object(l.a)({},e[n]),{},{commanderDamage:void 0,life:t.value||20})))}),{});case"SET_PLAYER_LIFE":var n=Object(l.a)(Object(l.a)({},e[t.id]),{},{life:e[t.id].life+t.value});return Object(l.a)(Object(l.a)({},e),{},Object(k.a)({},t.id,n));case"SET_PLAYER_COMMANDER":var r=Object(l.a)(Object(l.a)({},e[t.id]),{},{commander:t.payload});return Object(l.a)(Object(l.a)({},e),{},Object(k.a)({},t.id,r));case"SET_COMMANDER_DAMAGE":var c=Object(l.a)({},e[t.id].commanderDamage);c[t.commanderId]||(c[t.commanderId]=0),c[t.commanderId]=c[t.commanderId]+t.value;var i=Object(l.a)(Object(l.a)({},e[t.id]),{},{life:e[t.id].life-t.value,commanderDamage:c});return Object(l.a)(Object(l.a)({},e),{},Object(k.a)({},t.id,i));default:return e}})),x=Object(l.a)(Object(l.a)({},m.a),{},{icons:Object(l.a)(Object(l.a)({},m.a.icons),T)});var P=function(){return r.a.createElement(u.a,{store:S},r.a.createElement(o.a,{theme:x},r.a.createElement(p,null),r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a(124)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.fbacb6d6.chunk.js.map