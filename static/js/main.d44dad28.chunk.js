(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports={Sidebar:"sidebar_Sidebar__Jfrav",wrap_sidebar:"sidebar_wrap_sidebar__33Pik",divider:"sidebar_divider__3ye8F",section:"sidebar_section__36Nv8",item:"sidebar_item__2sju8",active:"sidebar_active__2a7tm",active_item:"sidebar_active_item__2ZEI7"}},14:function(e,t,n){e.exports={Header:"header_Header__NUN7S",menu:"header_menu__n9c8M",icon:"header_icon__2aTfo",divider:"header_divider__1Spdy"}},15:function(e,t,n){e.exports={title:"home_title__1CAKz",Home:"home_Home__1Z_Pe",wrap_home:"home_wrap_home__12vcc",content:"home_content__29Kqe"}},16:function(e,t,n){e.exports={ReactSdom:"react-sdom_ReactSdom__fN2Ly",code:"react-sdom_code__1nKFM",npm:"react-sdom_npm__2derM",example:"react-sdom_example__1r0JG"}},18:function(e,t,n){e.exports={Download:"download_Download__1HJAS",compresed:"download_compresed__2D_UH",uncompresed:"download_uncompresed__2WVKT"}},235:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),o=n.n(l),i=(n(39),n(1)),s=n(2),c=n(4),m=n(3),u=n(5),d=n(12),h=n(10),p=(n(40),n(41),n(14)),v=n.n(p);n(42);function f(){var e="SDOM".split("");return r.a.createElement("div",null,r.a.createElement("p",{className:"sdom"},e.map(function(e,t){return r.a.createElement("span",{key:t},e)})))}var b=n(26),_=n.n(b),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"header",className:v.a.Header},r.a.createElement("div",{id:"menu",className:v.a.menu},r.a.createElement("img",{alt:"icon menu",className:v.a.icon,src:_.a,onClick:this.props.toggle_menu}),r.a.createElement("div",{className:v.a.divider})),r.a.createElement(f,null),r.a.createElement("div",{className:v.a.divider}))}}]),t}(r.a.Component),E=n(11),y=n.n(E),w=["addClass","append","attr","click","css","find","findOne","focus","hasClass","height","html","on","position","prev","prepend","remove","removeClass","scrollAt","toggleClass","val","visible","width"],O={Animation:{},React:{},Info:{title:"Simple DOM (SDOM)",html:["SDOM Is an extension of the JavaScript NodeList and Element prototype, it adds extra functions to work on the entire result list of a querySelectorAll.","The SDOM functions simplify the task of manipulating the html DOM and are similar to the most common functions of the old jQuery, all this in a simpler and lighter script summarizing only the essential and more useful using more current and compatible javascript properties.","SDOM includes a function _ that returns a document.querySelectorAll to decrease the code scrambling."]},Ajax:{title:"Ajax request (POST/GET)",html:["SDOM incorporates functions for asyncronous requests _.get and _.post by promises, these will intend to give a response json."]},addClass:{html:["Allows you to add classes to an element, you can add multiple classes separating names with spaces.","return this"]},append:{html:["Add node or html to the end of an element.","return this"]},attr:{html:["Add or return attributes.","returns this when attributes are assigned."]},click:{html:["Add or call the event click.","return this"]},css:{html:["Add or return css property.","return this"]},find:{html:["Performs another SDOM querySelectorALL on the first element of the current SDOM."]},findOne:{html:["The same as find, but returns only the first element found."]},focus:{html:["Receives 2 functions, onFocusIn and onFocusOut that execute respectively."]},hasClass:{html:["Validates if the first element has a class."]},height:{html:["Returns or assigns element height in px."]},html:{html:["Returns or assigns the element's html.","returns this when html are assigned."]},on:{html:["Add event on.","return this"]},parent:{html:["Returns the parent element of the current."]},position:{html:["Returns the object getBoundingClientRect."]},prev:{html:["Returns the previous element to the current."]},prepend:{html:["Add node or html to the start of an element.","return this"]},remove:{html:["Removes all the elements in the list of the html dom.","return this"]},removeClass:{html:["Delete a class or a set of classes","return this"]},toggleClass:{html:["Add or delete the selected class in a toggle.","return this"]},val:{html:["Returns or assigns the value of an element."]},visible:{html:["Assigns the states of visible, true or false for an element, or returns the state of the same."]},width:{html:["Returns or assigns the element width in px."]},scrollAt:{},Download:{},About:{}},j={Info:"\n        // all concurrences \n        var list = document.querySelectorAll(\".item\");\n\n        list.addClass(\"active\").css({\n            background: 'purple',\n            color: 'white'\n        });\n\n\n        // first concurrence\n        var element = document.querySelector(\".item\");\n\n        element.addClass(\"active\").css({\n            background: 'purple',\n            color: 'white'\n        });\n\n\n        // ------------ OR ------------\n        // _ function = document.querySelectorAll\n        // (existing does not need to declare it)\n\n\n        // all concurrences \n        _(\".item\").addClass(\"active\").css({\n            background: 'purple',\n            color: 'white'\n        });\n\n        // first concurrence\n        _(\".item\")[0].addClass(\"active\").css({\n            background: 'purple',\n            color: 'white'\n        });\n    ",Ajax:"\n        // get request\n\n        _.get('https://randomuser.me/api/')\n        .then(result => {\n            console.log(result)\n        })\n\n        // post request sending data\n\n        _.post('https://url.com/yourapi/', {user: 12})\n        .then(result => {\n            console.log(result)\n        })\n\n        // in React ---------------------\n\n        import {Get, Post} from \"react-sdom\";\n\n        Get('https://randomuser.me/api/')\n        .then(result => {\n            console.log(result)\n        })\n\n        Post('https://url.com/yourapi/', {user: 12})\n        .then(result => {\n            console.log(result)\n        })\n    ",addClass:'\n        var el = _(\'.item\')\n\n        el.addClass("active");\n        el.addClass("active animation");\n    ',append:'\n        var el = _(\'.item\')[0]\n\n        el.append("<p> hello </p>");\n\n        //  --------------------------\n\n        var div = document.createElement("div");\n        el.addClass(div);\n    ',attr:'\n        // get num attribute \n        // in first element in NodeList\n\n        var num = _(".item").attr("num");\n\n        // set attribute in current index \n        // in all NodeList .items\n\n        _(".item").forEach((el, index) => {\n            el.attr("num", index);\n        });\n    ',click:'\n        // set click event\n        _(".item").click((e) => {\n            console.log(e.target);\n        })\n\n        // call event click in\n        // first element\n        _(".item")[0].click();\n    ',css:"\n        var items = _(\".item\");\n\n        items.css('color', 'coral');\n\n        // multi property\n        el.css({\n            color:'white',\n            background: 'coral'\n        });\n\n        // get css property\n        var color = el.css(\"color\");\n    ",find:"\n        // get all p in the all .item\n        var list = _('.item').find('p');\n\n        // -------------------------\n\n        list.foEach(p => {\n            console.log(p)\n        })\n    ",findOne:"\n        // get first p in the .item\n        var p = _('.item').findOne('p');\n    ",focus:'\n        var el = _(".item");\n\n\n        el.focus(onFocusIn=>{\n            console.log("in");\n        }, onFocusOut=>{\n            console.log("out");\n        });\n    ',hasClass:'\n        var el = _(".item");\n\n        if (el.hasClass("active")) {\n            console.log("is active");\n        }\n    ',height:'\n        var el = _(".item");\n\n        var height = el.height();\n    ',html:'\n        // get innerHTML \n        // in first element in NodeList\n\n        var el = _(".item");\n        var html = el.html();\n\n        // set html in first element\n        el[0].html("<p> Hello </p>");\n    ',on:'\n        var el = _(".item");\n        \n        el.on(\'keypress\', () => {\n            console.log("click in item");\n        })\n    ',parent:'\n        var el = _(".item");\n        var parent = el.parent();\n        parent.html("<p> update parent </p>");\n    ',position:'\n        var el = _(".item");\n\n        var position = el.position();\n    ',prev:'\n        var el = _(".item");\n\n        var prev = el.prev();\n    ',prepend:"\n        var el = _(\".item\");\n\n        the.prepend('<h1> hi </h1>')\n    ",next:'\n        var el = _(\'.item\')[0]\n\n        el.append("<p> hello </p>");\n\n        //  --------------------------\n\n        var div = document.createElement("div");\n        el.addClass(div);\n    ',remove:"\n        // remove all elements with class .item\n        _('.item').remove();\n    ",removeClass:'\n        var el = _(\'.item.active\');\n        el.removeClass("active");\n\n        // or \n\n        el.removeClass("class1 class2");\n    ',toggleClass:"\n        var el = _('.item');\n\n        el.toggleClass(\"active\");\n    ",val:"\n\n        // return value of first element\n\n        var el = _('input')[0];\n        var value el.value('hi')\n\n        // set value (clear)\n\n        el.val(\"\");\n    ",visible:"\n        var el = _('.item');\n\n        // set display block\n        el.visible(true);\n\n        // set display none\n        el.visible(false);\n\n        // set other display\n        el.visible(\"flex\");\n\n        // return display\n        var display = el.visible();\n    ",width:'\n        var el = _(".item");\n        \n        var height = el.height();\n    ',Animation:'\n        // Animation in\n\n        _(".item").in(\n            "bounceIn", \n            700, // Default is 800 (optional)\n            flex // Default is block (optional)\n        ).then(el => {\n            console.log("Completed animation");\n        });\n\n        // Animation out\n\n        _(".item").out(\n            "bounceOut", \n            700, // Default is 800 (optional)\n        ).then(el => {\n            console.log("Completed animation");\n        });\n\n        // Other Animation\n\n        _(".item").animate(\n            "jello", \n            700, // Default is 800 (optional)\n        ).then(el => {\n            console.log("Completed animation");\n        });\n    ',scrollAt:'\n        // Scroll at .section1 in\n        // the .content\n\n        var el = (".content .section1");\n\n        el.scrollAt("start", "smooth");\n        \n        // default is "start" and "smooth"\n    \n    ',Download:"\n        // Add script in your html\n    ",React:'\n        import React from "react";\n        import { Sdom } from "react-sdom";\n\n        class Home extends React.Component {\n\n            title = Sdom(); // get Sdom ref\n            \n            componentDidMount() {\n                // use Sdom ref\n                this.title.css({\n                    color: "coral",\n                    textTransform: "uppercase"\n\n                }).in("bounceIn", 700)\n            }\n\n            render() {\n                return (\n                    <div>\n                        <h1 ref={this.title}> \n                            hello \n                        </h1>\n                    </div>\n                )\n            }\n        }\n        export default Home;\n    ',About:'\n        // Code highlight by:\n        // https://npmjs.com/package/react-highlight-js\n\n        import Highlight from "react-highlight.js";\n\n\n        // BONARJA\n    '},k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).sidebar=r.a.createRef(),n.menu={general:["Info","Ajax","Animation","React","Download","About"],functions:w},n.state={active:n.get_location()},n.select=function(e){n.setState({active:e})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"get_location",value:function(){var e=this.props.location.pathname;return!!(e=e.split("/"))[1]&&e[1]}},{key:"componentDidMount",value:function(){var e=this.sidebar.current.querySelector('a[href="/'.concat(this.state.active,'"]'));e&&e.scrollIntoView({block:"end"})}},{key:"componentDidUpdate",value:function(){var e=this.get_location();this.state.active!==e&&this.setState({active:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"sidebar",className:y.a.Sidebar,ref:this.sidebar},r.a.createElement("div",{className:y.a.wrap_sidebar},Object.keys(this.menu).map(function(t,n){return r.a.createElement("div",{className:y.a.section,key:n},r.a.createElement("div",{className:y.a.divider},r.a.createElement("p",null,t)),r.a.createElement(A,{list:e.menu[t],select:e.select,active:e.state.active,toggle_menu:e.props.toggle_menu,menu:e.props.menu}))})))}}]),t}(r.a.Component),A=function(e){return r.a.createElement("div",null,e.list.map(function(t,n){return r.a.createElement(d.b,{key:n,to:"/".concat(t),onClick:function(){e.select(n),!e.menu&&e.toggle_menu()},className:"".concat(y.a.item," ").concat(e.active===t&&y.a.active)},r.a.createElement("div",null),r.a.createElement("p",null,t))}))},N=Object(h.e)(k),C=n(29),x=n.n(C),S=(n(47),n(30)),D=n.n(S),R=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={code:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"draw",value:function(){var e=this.props.load;return(e=j[e])||""}},{key:"componentDidUpdate",value:function(){this.props.animation("#code pre","slideInLeft",200)}},{key:"render",value:function(){return r.a.createElement("div",{id:"code",className:x.a.Code},r.a.createElement(D.a,{language:"javascript"},this.draw()))}}]),t}(r.a.Component),T=n(15),M=n.n(T),L=n(31),I=n.n(L),q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:I.a.Animations},r.a.createElement("p",null,"SDOM integrates the css library of animate.css and adds functions to SDOM to manage animations as promises."),r.a.createElement("p",null,"you can add the ",r.a.createElement("b",null,"animated")," class and the class of the desired animation to animate an element, or you can use the prototype functions to create input or output animations returning promise"),r.a.createElement("p",null,"The promise returns the same animated sun element."),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"Entrance animations (in)"),r.a.createElement("p",null,"You can use the prototype ",r.a.createElement("b",null,"in")," function to start an input animation, if the element is hidden it will become visible by entering with the animation."),r.a.createElement("p",null,"The function in receives 3 parameters, the last 2 are not necessary and it does not matter the order between these 2."),r.a.createElement("ul",null,r.a.createElement("li",null,"Input Animation Name"),r.a.createElement("li",null,"Animation Time (in ms)"),r.a.createElement("li",null,"Final Display Type")),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"Exit animation (out)"),r.a.createElement("p",null,"You can use the prototype ",r.a.createElement("b",null,"out")," function to start an output animation, at the end of the animation the element will be hidden (display none)."),r.a.createElement("p",null,"The function out receives 2 parameters"),r.a.createElement("ul",null,r.a.createElement("li",null,"Output Animation Name"),r.a.createElement("li",null,"Animation Time (in ms)")),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"Other animations"),r.a.createElement("p",null,"For other animations that are not input or output animations, use the ",r.a.createElement("b",null,"animate")," function"),r.a.createElement("p",null,"The function animate receives 2 parameters"),r.a.createElement("ul",null,r.a.createElement("li",null,"Animation Name"),r.a.createElement("li",null,"Animation Time (in ms)")),r.a.createElement("br",null),r.a.createElement("h1",{className:"title"},"Animations List"),r.a.createElement("p",null,"You can check the list of animations from ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://daneden.github.io/animate.css/",rel:"noopener noreferrer",target:"_blank"},"animate.css"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("iframe",{title:"animate.css",src:"https://daneden.github.io/animate.css/"})))}}]),t}(r.a.Component),H=n(32),P=n.n(H),F=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:P.a.ScrollAt},r.a.createElement("p",null,"Performs a scrollIntoView to the selected element."),r.a.createElement("p",null,"scrollAt can receive 2 optional parameters (block, behavior)"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"block:"),' ("start" | "end")'),r.a.createElement("li",null,r.a.createElement("b",null,"behavior:"),' ("auto" | "instant" | "smooth")')),r.a.createElement("br",null),r.a.createElement("p",null,'Default options is "start" and "smooth".'))}}]),t}(r.a.Component),G=n(18),J=n.n(G),U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).url_compresed="https://cdn.jsdelivr.net/gh/bonarja/sdom/sdom.min.js",n.url_developer="https://cdn.jsdelivr.net/gh/bonarja/sdom/sdom.js",n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:J.a.Download},r.a.createElement("p",null,"Download sdom by:"),r.a.createElement("br",null),r.a.createElement("h2",{className:"title"},"Compresed version (min)"),r.a.createElement("a",{className:"btn ".concat(J.a.compresed),href:this.url_compresed,target:"_blank",rel:"noopener noreferrer"},"Download"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",{className:"title"},"Uncompresed version (developer)"),r.a.createElement("a",{className:"btn ".concat(J.a.uncompresed),href:this.url_developer,target:"_blank",rel:"noopener noreferrer"},"Download"))}}]),t}(r.a.Component),B=n(16),K=n.n(B),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).codes=["npm install react-sdom --save".split(" "),'import { Get, Post } from "react-sdom"'.split(" ")],n.npm="https://www.npmjs.com/package/react-sdom",n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:K.a.ReactSdom},r.a.createElement("p",null,"sdom includes compatibility to react by:"),r.a.createElement("p",{className:K.a.code,num:1},this.codes[0].map(function(e,t){return r.a.createElement("span",{key:t},e," ")})),r.a.createElement("br",null),r.a.createElement("a",{className:"btn ".concat(K.a.npm),href:this.npm,target:"_blank",rel:"noopener noreferrer"},"View in NPM"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Sdom in react returns an object that includes the current reference and all sdom functions that will work on it."),r.a.createElement("h1",{className:"title"},"Ajax request (POST/GET)"),r.a.createElement("p",null,"To use the get or post functions you must import them from react-sdom:"),r.a.createElement("p",{className:K.a.code,num:2},this.codes[1].map(function(e,t){return r.a.createElement("span",{key:t},e," ")})),r.a.createElement("br",null),r.a.createElement(d.b,{className:"btn ".concat(K.a.example),to:"Ajax"},"Ajax Example"))}}]),t}(r.a.Component),z=n(33),W=n.n(z),Y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).github="https://github.com/bonarja/sdom/tree/source/",n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:W.a.About},r.a.createElement("p",null,"This documentation has been created with react, you can review its code in:"),r.a.createElement("a",{className:"btn",href:this.github,target:"_blank"},"Github"))}}]),t}(r.a.Component),Z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).index=["Animation","scrollAt","Download","React","About"],n.components=[r.a.createElement(q,null),r.a.createElement(F,null),r.a.createElement(U,null),r.a.createElement(V,null),r.a.createElement(Y,null)],n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.props.animation("#wrap_home","slideInRight",200)}},{key:"draw",value:function(e){var t=this.index.indexOf(e);return t>=0?this.components[t]:O[e].html.map(function(e,t){return r.a.createElement("p",{key:t},e)})}},{key:"render",value:function(){var e=this.props.load;return O[e]?r.a.createElement("div",{id:"home",className:"".concat(M.a.Home," cover")},r.a.createElement("div",{id:"wrap_home",className:"".concat(M.a.wrap_home," cover slideInRight")},r.a.createElement("h1",{className:M.a.title}," ",O[e].title||this.props.load," "),r.a.createElement("div",{className:M.a.content},this.draw(e)))):r.a.createElement("h1",{style:{background:"white",margin:0,padding:30},className:M.a.title},"Error 404")}}]),t}(r.a.Component),Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).content=r.a.createRef(),n.app=r.a.createRef(),n.menu=!1,n.toggle_menu=function(){(n.menu=!n.menu)?(n.app.current.classList.add("open_menu"),n.content.current.addEventListener("click",n.toggle_menu,!1),window.addEventListener("resize",n.toggle_menu,!1)):(n.app.current.classList.remove("open_menu"),n.content.current.removeEventListener("click",n.toggle_menu,!1),window.removeEventListener("resize",n.toggle_menu,!1))},n.animation=function(e,t,a){return new Promise(function(r){var l=n.content.current.querySelector(e);l&&(l.style.animationDuration=a+"ms",l.classList.add(t),setTimeout(function(){l.classList.remove(t),r()},a+5))})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"show",value:function(e){return r.a.createElement("div",{className:"content cover"},r.a.createElement(Z,{load:e,animation:this.animation}),r.a.createElement(R,{load:e,animation:this.animation}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"app",className:"App cover",ref:this.app},r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,render:function(e){e.history.push("/Info")}}),r.a.createElement(g,{toggle_menu:this.toggle_menu}),r.a.createElement(N,{toggle_menu:this.toggle_menu,menu:this.menu}),r.a.createElement("div",{className:"cover",ref:this.content},r.a.createElement(h.a,{path:"/:load",render:function(t){return e.show(t.match.params.load)}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,n){e.exports=n.p+"static/media/menu.3ce2bfe2.svg"},29:function(e,t,n){e.exports={Code:"code_Code__1Kqp5"}},31:function(e,t,n){e.exports={Animations:"animations_Animations__3eT-B"}},32:function(e,t,n){},33:function(e,t,n){e.exports={About:"about_About__1Orf2"}},34:function(e,t,n){e.exports=n(235)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){}},[[34,1,2]]]);
//# sourceMappingURL=main.d44dad28.chunk.js.map