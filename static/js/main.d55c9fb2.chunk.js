(this.webpackJsonpbanana_quiz=this.webpackJsonpbanana_quiz||[]).push([[0],{13:function(e,n,a){},17:function(e,n,a){},26:function(e,n,a){e.exports=a.p+"static/media/bananasplit.575292f9.jpg"},27:function(e,n,a){e.exports=a.p+"static/media/bananabread.9bac3c7c.jpg"},28:function(e,n,a){e.exports=a.p+"static/media/bananapeel.24d79001.jpg"},29:function(e,n,a){e.exports=a.p+"static/media/banana.3d9a6a39.jpg"},35:function(e,n,a){e.exports=a(46)},40:function(e,n,a){},46:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),i=a(19),r=a.n(i),s=(a(40),a(20)),l=a(21),u=a(32),c=a(22),p=a(33),m=(a(17),a(8)),w=a(47);function d(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"bg"},o.a.createElement("div",{className:"whatBanana"},o.a.createElement("h5",{className:"animated fadeInUpBig delay-1s myAnimation"},"What type of banana are you?")),o.a.createElement("div",{className:"myButtonAnimation"},o.a.createElement(m.c,{to:"/questions"},o.a.createElement(w.a,{className:"startBut",variant:"dark"},"Start Quiz")))))}var b=a(6),g=a(31),h=a(7);a(13);function f(e){return o.a.createElement("div",{className:"backBlue"},o.a.createElement("div",{className:"yellowBox"},o.a.createElement("span",{id:"resultReady"},o.a.createElement("h1",null,"Ready for your result?")),o.a.createElement("div",{className:"sillyShake animated wobble"},o.a.createElement("button",{id:"readyButton",onClick:function(){e.showResults()}},"Yes!"))))}var E=a(30),q=a(26),B=a.n(q),y=a(27),v=a.n(y),_=a(28),k=a.n(_),S=a(29),O=a.n(S);function j(e){var n=e.answerArray,a=o.a.useState({h3:"",src:""}),t=Object(h.a)(a,2),i=t[0],r=t[1];return o.a.useEffect((function(){var e={counter:0,h3:"Banana Split",src:B.a},a={counter:0,h3:"Banana Bread",src:v.a},t={counter:0,h3:"Banana Peel",src:k.a},o={counter:0,h3:"Regular Banana",src:O.a};n&&(n.map((function(n){return"split"===n?e.counter+=1:"bread"===n?a.counter+=1:"peel"===n?t.counter+=1:o.counter+=1})),r([e,a,t,o].sort((function(e,n){return n.counter-e.counter}))[0]))}),[n]),o.a.createElement("main",{className:"backBlue"},o.a.createElement("div",{className:"yellowBox"},o.a.createElement("h4",null,"You are a..."),o.a.createElement("h3",null,i.h3),o.a.createElement(E.a,{src:i.src,className:"image",rounded:!0,fluid:!0}),o.a.createElement(w.a,{variant:"dark",onClick:function(){window.location.replace("questions")}},"Try again?")))}function P(){var e=Object(t.useState)(0),n=Object(h.a)(e,2),a=n[0],i=n[1],r=Object(t.useState)([{question_num:"Question One",question_title:"Pick a Colour:",options:[{option:"White",answer:"split"},{option:"Brown",answer:"bread"},{option:"Yellow",answer:"regular"},{option:"Black",answer:"peel"}]},{question_num:"Question Two",question_title:"Pick a Consistency:",options:[{option:"Mush",answer:"peel"},{option:"Foam",answer:"bread"},{option:"Cream",answer:"split"},{option:"Banana",answer:"regular"}]},{question_num:"Question Three",question_title:"Pick a Smell:",options:[{option:"Fresh out the oven",answer:"bread"},{option:"Sugar",answer:"split"},{option:"Floor wax",answer:"peel"},{option:"Banana",answer:"regular"}]},{question_num:"Question Four",question_title:"Pick a Taste:",options:[{option:"Sweet",answer:"split"},{option:"Savoury",answer:"bread"},{option:"Bitter",answer:"peel"},{option:"Banana",answer:"regular"}]},{question_num:"Question Five",question_title:"Pick an Interaction:",options:[{option:"Slipping over",answer:"peel"},{option:"Cutting a slice",answer:"bread"},{option:"Scooping a spoonful",answer:"split"},{option:"Peeling a banana",answer:"regular"}]},{question_num:"Question Six",question_title:"Pick an Effect:",options:[{option:"Brain freeze",answer:"split"},{option:"being full",answer:"bread"},{option:"Increased potassium",answer:"regular"},{option:"Body pain",answer:"peel"}]},{question_num:"Question Seven",question_title:"Pick an Occasion:",options:[{option:"Birthday party",answer:"split"},{option:"Brunch",answer:"bread"},{option:"Not looking where you're going",answer:"peel"},{option:"Eating a banana",answer:"regular"}]},{question_num:"Question Eight",question_title:"Pick a Response:",options:[{option:"That was a good banana",answer:"regular"},{option:"Yummy",answer:"split"},{option:"Ooh, smells good!",answer:"bread"},{option:"Why me?",answer:"peel"}]}][a]),s=Object(h.a)(r,2),l=s[0],u=s[1],c=Object(t.useState)([]),p=Object(h.a)(c,2),m=p[0],w=p[1],d=Object(t.useState)(!1),b=Object(h.a)(d,2),E=b[0],q=b[1],B=Object(t.useState)(!1),y=Object(h.a)(B,2),v=y[0],_=y[1];Object(t.useEffect)((function(){u([{question_num:"Question One",question_title:"Pick a Colour:",options:[{option:"White",answer:"split"},{option:"Brown",answer:"bread"},{option:"Yellow",answer:"regular"},{option:"Black",answer:"peel"}]},{question_num:"Question Two",question_title:"Pick a Consistency:",options:[{option:"Mush",answer:"peel"},{option:"Foam",answer:"bread"},{option:"Cream",answer:"split"},{option:"Banana",answer:"regular"}]},{question_num:"Question Three",question_title:"Pick a Smell:",options:[{option:"Fresh out the oven",answer:"bread"},{option:"Sugar",answer:"split"},{option:"Floor wax",answer:"peel"},{option:"Banana",answer:"regular"}]},{question_num:"Question Four",question_title:"Pick a Taste:",options:[{option:"Sweet",answer:"split"},{option:"Savoury",answer:"bread"},{option:"Bitter",answer:"peel"},{option:"Banana",answer:"regular"}]},{question_num:"Question Five",question_title:"Pick an Interaction:",options:[{option:"Slipping over",answer:"peel"},{option:"Cutting a slice",answer:"bread"},{option:"Scooping a spoonful",answer:"split"},{option:"Peeling a banana",answer:"regular"}]},{question_num:"Question Six",question_title:"Pick an Effect:",options:[{option:"Brain freeze",answer:"split"},{option:"being full",answer:"bread"},{option:"Increased potassium",answer:"regular"},{option:"Body pain",answer:"peel"}]},{question_num:"Question Seven",question_title:"Pick an Occasion:",options:[{option:"Birthday party",answer:"split"},{option:"Brunch",answer:"bread"},{option:"Not looking where you're going",answer:"peel"},{option:"Eating a banana",answer:"regular"}]},{question_num:"Question Eight",question_title:"Pick a Response:",options:[{option:"That was a good banana",answer:"regular"},{option:"Yummy",answer:"split"},{option:"Ooh, smells good!",answer:"bread"},{option:"Why me?",answer:"peel"}]}][a])}),[a]);return E?o.a.createElement(f,{showResults:function(){_(!0),q(!1)}}):v?o.a.createElement(j,{answerArray:m}):o.a.createElement("main",{className:"backBlue"},o.a.createElement("div",{className:"yellowBox"},o.a.createElement("h2",null,l.question_num),o.a.createElement("h3",{className:"questionFont"},l.question_title),l.options.map((function(e,n){var t=e.answer;return o.a.createElement("div",{key:n},o.a.createElement("button",{onClick:function(){var e=m;w([].concat(Object(g.a)(e),[t])),a<7?i(a+1):q(!0)},className:"buttonPadding"},o.a.createElement("h1",null,e.option)))}))))}var N=function(e){function n(){return Object(s.a)(this,n),Object(u.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,null,o.a.createElement(b.a,{exact:!0,path:"/bananaQuiz/",component:d}),o.a.createElement(b.a,{path:"/questions",component:P})))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(m.b,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.d55c9fb2.chunk.js.map