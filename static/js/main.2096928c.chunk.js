(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=(a(33),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),p=a(43),d=a(44),h=a(27),f=a(18),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"content"},r.a.createElement("nav",null,r.a.createElement("h1",null,"JustTrip"),r.a.createElement("ul",null,r.a.createElement("li",{className:"nav__links"},r.a.createElement("a",{href:"JustTrip/#/about__app"},"O APLIKACJI")),r.a.createElement("li",{className:"nav__links"},r.a.createElement("a",{href:"JustTrip/#/about__author"},"O AUTORZE")),r.a.createElement("li",{className:"nav__links"},r.a.createElement(f.a,{to:"/app"},"APLIKACJA"))))))}}]),t}(n.Component),b=[{url:"url('https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",textHeader:"Lorem ipsum dolor sit amet",text:"consectetur adipisicing elit, aliquid amet delectus inventore ipsam minus officia perspiciatis quisquam ratione velit veritatis!."},{url:'url("https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',textHeader:"Ipsum dolor sit amet lorem",text:"facere fuga maiores numquam obcaecati perferendis placeat quas quos repellendus. Autem, consequatur dolore."},{url:'url("https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',textHeader:"Dolor sit ipsum amet lorem",text:"autem, consequatur dolore, facere fuga maiores numquam obcaecati perferendis placeat quas quos repellendus."}],v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={elemIndex:0,background:b},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){e.state.elemIndex===e.state.background.length-1?e.setState({elemIndex:0}):e.setState({elemIndex:e.state.elemIndex+1})},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this.state.background[this.state.elemIndex],t={backgroundImage:e.url};return r.a.createElement("section",{id:"slider",style:t,className:"carousel"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"carousel__opacity__text"},r.a.createElement("h2",null,e.textHeader),r.a.createElement("p",null,e.text))))}}]),t}(n.Component),O=a(8),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutApp__description__options__container"},r.a.createElement(O.a,{className:"fontAwesome",icon:this.props.icon}),r.a.createElement("p",null,this.props.description))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"aboutApp"},r.a.createElement("div",{id:"about__app"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"aboutApp__description"},r.a.createElement("h3",null,"O APLIKACJI"),r.a.createElement("div",{className:"aboutApp__description__options"},r.a.createElement(y,{icon:"globe-americas",description:"INFORMACJE O KRAJU KT\xd3RY ODWIEDZASZ do kt\xf3rego jedziemy Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis quia?"}),r.a.createElement(y,{icon:"hiking",description:"ZAPLANUJ PAKOWANIE PLACAKA Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis quia?"}),r.a.createElement(y,{icon:"plane",description:"ZAPLANUJ PODR\xd3\u017b Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis quia?"}),r.a.createElement(y,{icon:"share",description:"DZIEL SI\u0118 Z INNYMI Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eligendi in laudantium unde? Earum enim esse facilis, ipsam officiis quia?"}))),r.a.createElement("div",{className:"aboutApp__images"})))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"aboutAuthor"},r.a.createElement("div",{id:"about__author"}),r.a.createElement("div",{className:"content"},r.a.createElement("h4",null,"O AUTORZE"),r.a.createElement("div",{className:"aboutAuthor__container"},r.a.createElement("div",{className:"aboutAuthor__description"},r.a.createElement("h3",null,"Bartosz Bart\u0142omiej Lewicki"),r.a.createElement("p",null,"Od dziecka fascynuj\u0105 mnie podr\xf3\u017ce. Zacz\u0119\u0142o si\u0119 od wycieczek rowerowych, pieszych z plecakiem prowiantu po okolicach Nysy - mojego rodzinnego miasta. Z biegiem lat zacz\u0119\u0142y si\u0119 podr\xf3\u017ce po Polsce poci\u0105giem, autobusem, albo z wystawionym kciukiem do g\xf3ry, liczac na dobroduszno\u015b\u0107 kierowc\xf3w. Nast\u0119pnie kilka kraj\xf3w Europy, Islandia, Tajlandia, a w planach Wietnam. Ta pasja popchn\u0119\u0142a mnie do stworzenia JustTrip, miejsca w kt\xf3rym ka\u017cdy b\u0119dzie m\xf3g\u0142 zaplanowa\u0107 swoj\u0105 podr\xf3\u017c, stworzy\u0107 z niej pami\u0105tk\u0119 oraz dzieli\u0107 si\u0119 swoimi prze\u017cyciami i do\u015bwiadczeniami z innymi entuziastami podr\xf3\u017cy, nie wa\u017cne czy dalekich czy bliskich. Ka\u017cda podr\xf3\u017c kszta\u0142ci! ")),r.a.createElement("div",{className:"aboutAuthor__img"},r.a.createElement("img",{alt:"author",title:"bbl",src:"https://scontent.fktw1-1.fna.fbcdn.net/v/t31.0-8/13708175_10207447624044141_7761435969495735113_o.jpg?_nc_cat=109&_nc_ht=scontent.fktw1-1.fna&oh=8e545d1a4add410a91026174fdb9b7cc&oe=5D2433F9"})))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"Copyright \xa9 2019 Bartosz Bart\u0142omiej Lewicki")))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(k,null),r.a.createElement(g,null))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"appHeader"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},r.a.createElement(f.a,{to:"/"},r.a.createElement("h1",null,"JustTrip")),r.a.createElement("p",null,"Bartosz ",r.a.createElement(O.a,{icon:"user"})))))}}]),t}(n.Component);function S(e){return null!=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))}var w={saveCountry:"",saveBackpack:[],saveDiary:"",saveTripPlan:""},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSaveTrip=function(){var e,t;w.saveCountry=S("userCountryChoose"),w.saveBackpack.push(S("stuffToPack")),w.saveTripPlan=S("trip-plan"),w.saveDiary=S("diary"),console.log(w),e="newTripObj",t=w,localStorage.setItem(e,JSON.stringify(t))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.handleSaveTrip}," zapisz podr\xf3\u017a")}}]),t}(n.Component),T=a(42),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={color:"#c43235"};return r.a.createElement("div",{className:"appNavigation"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(T.a,{exact:!0,to:"/app/newTrip",activeStyle:e},r.a.createElement(O.a,{icon:"globe-americas"})," STRONA G\u0141\xd3WNA")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/app/newTrip/tripPlan",activeStyle:e},r.a.createElement(O.a,{icon:"list-ul"})," PLAN PODR\xd3\u017bY")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/app/newTrip/backpack",activeStyle:e},r.a.createElement(O.a,{icon:"hiking"})," PLECAK")),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/app/newTrip/diary",activeStyle:e},r.a.createElement(O.a,{icon:"book"})," DZIENNIK POK\u0141ADOWY"))),r.a.createElement("ul",{className:"back"},r.a.createElement("li",null,r.a.createElement(I,null)),r.a.createElement("li",null,r.a.createElement(T.a,{exact:!0,to:"/app/",activeStyle:e},r.a.createElement(O.a,{icon:"arrow-left"})," POWR\xd3T")))))}}]),t}(n.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"desktop"},this.props.children)}}]),t}(n.Component);function P(e){return null!=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))}var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({planText:e.target.value})},a.handleSubmit=function(e){var t,n;e.preventDefault(),t="trip-plan",n=a.state.planText,localStorage.setItem(t,JSON.stringify(n))},a.state={planText:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){!1!==P("trip-plan")?this.setState({planText:P("trip-plan")}):this.setState({planText:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"PLAN PODR\xd3\u017bY"),r.a.createElement("form",{className:"tripPlan__form"},r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.planText,placeholder:"Dobry plan to po\u0142owa sukcesu udanej podr\xf3\u017cy! Zapisz swoje pomys\u0142y, miejsca kt\xf3re chcesz odwiedzi\u0107 i wszystko o czym chcesz pami\u0119ta\u0107 podczas swojej przygody!"}),r.a.createElement("button",{className:"save__country",onClick:this.handleSubmit},"ZAPISZ")))}}]),t}(n.Component),z=a(26),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handlePackedStuff=function(){"toPack"===a.state.packed?a.setState({packed:"packed"}):a.setState({packed:"toPack"})},a.state={packed:"toPack"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",null,r.a.createElement("div",{className:"stuff"},r.a.createElement("div",{className:this.state.packed},this.props.item.text),r.a.createElement("div",null,r.a.createElement("button",{className:"stuff__btn",onClick:function(){return e.handlePackedStuff(e.props.item.id)}},r.a.createElement(O.a,{icon:"check"})),r.a.createElement("button",{className:"stuff__btn",onClick:function(){return e.props.deleteItem(e.props.item.id)}},r.a.createElement(O.a,{icon:"times"})))))}}]),t}(n.Component),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"scroll"},r.a.createElement("ul",null,this.props.data.map(function(t,a){return r.a.createElement(D,{deleteItem:e.props.handleDelete,key:a,item:t})})))}}]),t}(n.Component),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),"function"===typeof a.props.handleNewItem&&(a.props.handleNewItem(a.state.taskName),a.setState({taskName:""}))},a.handleChange=function(e){a.setState({taskName:e.target.value})},a.state={taskName:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"stuffToPack"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{className:"input",onChange:this.handleChange,type:"text",value:this.state.taskName}),r.a.createElement("input",{className:"button",type:"submit",value:"SPAKUJ"})))}}]),t}(n.Component);function L(e){return null!=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))}function R(e,t){localStorage.setItem("stuffToPack",JSON.stringify(t))}var K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addNewTask=function(e){if(""!==e){var t=[].concat(Object(z.a)(a.state.stuffToPack),[{text:e,id:a.state.stuffToPack.length}]);a.setState({stuffToPack:t}),R(0,t)}},a.deleteSelected=function(e){var t=a.state.stuffToPack.filter(function(t){return t.id!==e});a.setState({stuffToPack:t}),R(0,t)},a.state={stuffToPack:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=L("stuffToPack")?L("stuffToPack"):[];this.setState({stuffToPack:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Z,{handleNewItem:this.addNewTask}),r.a.createElement(J,{data:this.state.stuffToPack,handleDelete:this.deleteSelected}))}}]),t}(n.Component),W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backpack"},r.a.createElement(K,null))}}]),t}(n.Component);function q(e){return null!=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))}var B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({diaryText:e.target.value})},a.handleSubmit=function(e){var t,n;e.preventDefault(),t="diary",n=a.state.diaryText,localStorage.setItem(t,JSON.stringify(n))},a.state={diaryText:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){!1!==q("diary")?this.setState({diaryText:q("diary")}):this.setState({diaryText:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"DZIENNIK POK\u0141ADOWY"),r.a.createElement("form",{className:"tripPlan__form"},r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.diaryText,placeholder:"W trakcie podr\xf3\u017cy wiele si\u0119 dzieje i czasami mog\u0105 Ci umkn\u0105\u0107\xa0pewne wspomnienia. Zapisz najlepsze momenty w dzienniku pok\u0142adowym, aby o \u017cadne wspomnienie Ci nie umkn\u0119\u0142o."}),r.a.createElement("button",{className:"save__country",onClick:this.handleSubmit},"ZAPISZ")))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.information},r.a.createElement("input",{onChange:this.props.change,placeholder:this.props.place,value:this.props.userCountry}))}}]),t}(n.Component);function M(e){return null!=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e))}var Y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).countriesInformation=function(e){e.preventDefault();var t;fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(e){var t=e.filter(function(e){return e.name===a.state.userCountry}),n=t[0];console.log(n),a.setState({countryInfo:n,allCountry:t,data:!0,userCountry:""})}),t="userCountryChoose",localStorage.removeItem(t)},a.userChooseCountry=function(e){console.log(e.target.value),a.setState({userCountry:e.target.value})},a.handleSaveClick=function(){var e,t;e="userCountryChoose",t=a.state.countryInfo,localStorage.setItem(e,JSON.stringify(t))},a.state={countryInfo:M("userCountryChoose")?M("userCountryChoose"):"",userCountry:"",data:!!M("userCountryChoose")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;if(this.state.data){if(void 0===this.state.countryInfo)return r.a.createElement("div",{className:"mainPage"},r.a.createElement(U,{information:this.countriesInformation,change:function(t){return e.userChooseCountry(t)},userCountry:this.state.userCountry,place:"NIEPRAWID\u0141OWA NAZWA KRAJU"}));var t=this.state.countryInfo;return r.a.createElement("div",{className:"mainPage"},r.a.createElement(U,{information:this.countriesInformation,change:function(t){return e.userChooseCountry(t)},userCountry:this.state.userCountry,place:"KRAJ"}),r.a.createElement("div",{className:"informationAboutCountry"},r.a.createElement("p",null,"Country: ",r.a.createElement("span",null,t.name)),r.a.createElement("p",null,"Capital: ",r.a.createElement("span",null,t.capital)),r.a.createElement("p",null,"Languages: ",r.a.createElement("span",null,t.languages[0].name)),r.a.createElement("p",null,"Co-ordinates:"),r.a.createElement("ul",null,r.a.createElement("li",null,"N: ",r.a.createElement("span",null,t.latlng[0])),r.a.createElement("li",null,"E: ",r.a.createElement("span",null,t.latlng[1]))),r.a.createElement("p",null,"Region: ",r.a.createElement("span",null,t.region)),r.a.createElement("p",null,"Subregion: ",r.a.createElement("span",null,t.subregion)),r.a.createElement("p",null,"Currencies: ",r.a.createElement("span",null,t.currencies[0].name)),r.a.createElement("p",null,"TimeZone: ",r.a.createElement("span",null,t.timezones[0]))),r.a.createElement("div",{className:"flag"},r.a.createElement("img",{src:t.flag})),r.a.createElement("button",{onClick:this.handleSaveClick,className:"save__country"},"ZAPISZ"))}return r.a.createElement("div",{className:"mainPage"},r.a.createElement(U,{information:this.countriesInformation,change:function(t){return e.userChooseCountry(t)},userCountry:this.state.userCountry,place:"KRAJ"}))}}]),t}(n.Component),H=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"notFound"},r.a.createElement("div",null,r.a.createElement("h4",null,"404"),r.a.createElement("p",null,"TAK DALEKO JESZCZE NIE PODR\xd3\u017bUJEMY...")))}}]),t}(n.Component),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"desktopSpace content"},r.a.createElement(_,null),r.a.createElement(p.a,null,r.a.createElement(A,null,r.a.createElement(h.a,{exact:!0,path:"/app/newTrip",component:Y}),r.a.createElement(h.a,{path:"/app/newTrip/tripPlan",component:x}),r.a.createElement(h.a,{path:"/app/newTrip/backpack",component:W}),r.a.createElement(h.a,{path:"/app/newTrip/diary",component:B})))))}}]),t}(n.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"viewSpace"},r.a.createElement(f.a,{to:"/app/newTrip"},r.a.createElement("div",{className:"newTrip"},r.a.createElement("div",{className:"newTrip__text"},r.a.createElement("p",null,"NOWA PODR\xd3\u017b")))),r.a.createElement(f.a,{to:"/app/yourTrip"},r.a.createElement("div",{className:"yourTrip"},r.a.createElement("div",{className:"yourTrip__text"},r.a.createElement("p",null,"TWOJE PODR\xd3\u017bE")))))))}}]),t}(n.Component);var $=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t={color:"#c43235"},a=(e="newTripObj",null!=localStorage.getItem(e)&&JSON.parse(localStorage.getItem(e)));return r.a.createElement("div",{className:"appNavigation"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,"YOUR TRIPS:"),r.a.createElement("li",null,r.a.createElement(T.a,{to:"/app/yourTrip/trip1",activeStyle:t},r.a.createElement(O.a,{icon:"globe-americas"})," ",a.saveCountry.name))),r.a.createElement("ul",{className:"back"},r.a.createElement("li",null,r.a.createElement(T.a,{exact:!0,to:"/app/",activeStyle:t},r.a.createElement(O.a,{icon:"arrow-left"})," POWR\xd3T")))))}}]),t}(n.Component);var Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement("div",{className:"desktopSpace content"},r.a.createElement($,null),r.a.createElement(p.a,null,r.a.createElement(A,null,r.a.createElement(h.a,null)))))}}]),t}(n.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/app",component:G}),r.a.createElement(h.a,{path:"/app/newTrip",component:F}),r.a.createElement(h.a,{path:"/app/yourTrip",component:Q}),r.a.createElement(h.a,{path:"/*/",component:H})))))}}]),t}(n.Component),X=(a(40),a(9)),ee=a(13),te=a(21),ae=a(22),ne=a(23),re=a(24),ce=a(25);X.b.add(ee.c),X.b.add(te.faCompass),X.b.add(ee.b),X.b.add(ae.faHiking),X.b.add(ee.e),X.b.add(ee.f),X.b.add(ne.faBook),X.b.add(ee.d),X.b.add(ee.g),X.b.add(re.faCheck),X.b.add(ce.faTimes),X.b.add(ee.a);var le=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:C}),r.a.createElement(h.a,{path:"/about__app",component:C}),r.a.createElement(h.a,{path:"/about__author",component:C}),r.a.createElement(h.a,{path:"/app",component:V}),r.a.createElement(h.a,{path:"*",component:H})))))}}]),t}(n.Component);document.addEventListener("DOMContentLoaded",function(){l.a.render(r.a.createElement(le,null),document.getElementById("app"))});var ie=le;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ie,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.2096928c.chunk.js.map