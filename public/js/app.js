webpackJsonp([1],[,function(t,e){t.exports=function(t,e,n,s){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),s){var l=Object.create(a.computed||null);Object.keys(s).forEach(function(t){var e=s[t];l[t]=function(){return e}}),a.computed=l}return{esModule:i,exports:r,options:a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(8),i=n.n(s);window.axios=n(7),window.axios.defaults.headers.common={"X-CSRF-TOKEN":window.Laravel.csrfToken,"X-Requested-With":"XMLHttpRequest"},i.a.component("BandCards",n(145)),i.a.component("Breadcrumbs",n(146)),i.a.component("CustomButton",n(147)),i.a.component("Gigs",n(148)),i.a.component("MainFooter",n(149)),i.a.component("MainNavigation",n(150)),i.a.component("Setlist",n(151)),i.a.component("Songs",n(152)),i.a.component("UpcomingGigs",n(153)),i.a.component("WelcomeScreen",n(154));new i.a({el:"#app"});document.addEventListener("DOMContentLoaded",function(){var t=void 0!==document.getElementsByClassName("overlay-element")&&document.getElementsByClassName("overlay-element");if(t)for(var e=0;e<t.length;e++){t[e];document.onclick=function(e){for(var n=0;n<t.length;n++)t[n].classList.remove("active");var s=void 0!==e.target.classList&&e.target.classList,i=null!==e.target.parentNode&&void 0!==e.target.parentNode.classList&&e.target.parentNode.classList;s&&s.forEach(function(t){"overlay-element"==t&&s.add("active")}),i&&i.forEach(function(t){"overlay-element"==t&&i.add("active")})}}},!1)},function(t,e){},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"BandCards",data:function(){return{htmlContent:""}},props:["bands"],created:function(){this.htmlContent=this.getGridElement(this.bands)},methods:{getGridElement:function(t){var e=[];return t.forEach(function(t){e.push({sizes:{phone:12,tablet:6,tabletLandscape:4,screen:4},content:this.getCardElement(t)})}.bind(this)),s.Molecules.Sections.Grid.getModule({gridItems:e})},getCardElement:function(t){return s.Organisms.Cards.Card.getModule({title:t.name,theme:"primary",content:s.Organisms.Menus.ListMenu.getModule({id:"band-card-list-"+t.id,hover:!0,listItems:this.getListItems(t)})})},getListItems:function(t){return[{title:"Songs",iconClass:"fa fa-music",link:"/bands/"+t.id+"/songs"},{title:"Gigs",iconClass:"fa fa-calendar",link:"/bands/"+t.id+"/gigs"},{title:"Members",iconClass:"fa fa-group",link:"/bands/"+t.id+"/band-memberships"}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"Breadcrumbs",props:["breadcrumbItems"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createBreadcrumbsElement()},methods:{createBreadcrumbsElement:function(){return s.Molecules.Navigation.Breadcrumbs.getModule({breadcrumbItems:this.breadcrumbItems})},createDummyListItems:function(){return[{title:"Lunch Gig",subTitle:"2017-10-28 - Johnny Walk Concert House - Morrisburgh",iconClass:"fa fa-globe",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Student event",subTitle:"2017-08-19 - Wisozk Lodge Stadium - North Lonport",iconClass:"fa fa-check-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Summer Music Fest",subTitle:"2012-12-06 - Shanel Alley Park - Leannonchester",iconClass:"fa fa-question-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"CustomButton",props:["button"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=s.Atoms.Buttons.Button.getModule(this.button)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"Gigs",props:["gigs"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,raised:!0,listItems:this.getListItems()})},getListItems:function(){var t=[];return this.gigs.forEach(function(e){var n={title:e.name,subTitle:this.getSubTitle(e),iconClass:this.getIconClass(e),link:this.getLink(e),buttonRow:this.getButtonRow(e)};t.push(n)}.bind(this)),t},getSubTitle:function(t){return t.date+" - "+t.venue+" - "+t.location},getIconClass:function(t){var e="";return void 0!==t.status&&("Proposed"==t.status&&(e="fa fa-question-circle-o"),"Settled"==t.status&&(e="fa fa-check-circle-o"),"Public"==t.status&&(e="fa fa-globe")),e},getLink:function(t){return"/gigs/"+t.id},getButtonRow:function(t){return{buttons:[{iconClass:"fa fa-pencil",link:"/gigs/"+t.id+"/edit"},{iconClass:"fa fa-trash"}]}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"MainFooter",data:function(){return{htmlContent:this.createFooterElement()}},methods:{createFooterElement:function(){return s.Organisms.Global.Footer.getModule({logo:{image:{src:n(104),alt:"quarkGUI logo"},url:"/"},content:'\n                        <div class="text-center">\n                            <p>FlowGig licensed under <a href="https://github.com/flowgig/flowgig/blob/master/LICENSE">GNU General Public License</a></p>\n                            <p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>\n                        </div>\n\t\t\t        '})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"MainNavigation",props:["currentBand","currentUser"],data:function(){return{htmlContent:"",header:{}}},created:function(){var t={id:"main-header",theme:"dark",logo:{image:{src:n(103),alt:"FlowGig logo"},url:"/dashboard"},primaryNavigation:{id:"primary-navigation",listItems:[]},sidebar:{sidebarNavigation:{listItems:[{name:"About",link:"",iconClass:"fa fa-info-circle"},{name:"Developers",link:"",iconClass:"fa fa-code"},{name:"Send feedback",link:"",iconClass:"fa fa-comment"}]}}};if(void 0!==this.currentBand){var e={name:this.currentBand.name,dropdownContent:{listItems:[{name:"Songs",link:"/bands/"+this.currentBand.id+"/songs",iconClass:"fa fa-music"},{name:"Gigs",link:"/bands/"+this.currentBand.id+"/gigs",iconClass:"fa fa-calendar"},{name:"Members",link:"/bands/"+this.currentBand.id+"/band-memberships",iconClass:"fa fa-group"}]}};t.primaryNavigation.listItems.push(e)}this.header=t,this.htmlContent=s.Organisms.Global.Header.getModule(this.header)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),i=(n.n(s),{id:2,created_by:1,updated_by:null,gig_id:11,created_at:"2017-04-08 11:19:02",updated_at:"2017-04-08 11:19:02",gig:{id:11,created_by:1,updated_by:null,band_id:1,name:"charity concert",date:"2016-10-13 10:39:22",venue:"upton islands stage",location:"aftonfurt",confirmed:0,created_at:"2017-03-05 20:35:03",updated_at:"2017-03-05 20:35:03",band:{id:1,created_by:1,updated_by:null,name:"the wurlitzers",created_at:"2017-03-05 20:35:03",songs:[{id:1,created_by:1,updated_by:null,band_id:1,title:"chapter ii. the",artist:"the user experience researchers",music_by:"milton d'amore",lyrics_by:"dr. cletus sauer dvm",key:"fm",bpm:124,duration:205,intensity:9,created_at:"2017-03-05 20:35:03",deleted_at:null},{id:2,created_by:1,updated_by:null,band_id:1,title:"duchess 'what a",artist:"the real estate sales agents",music_by:"dr. summer runolfsson iv",lyrics_by:"constance stanton",key:"dm",bpm:105,duration:219,intensity:7,created_at:"2017-03-05 20:35:03",deleted_at:null}]}},setlist_songs:[]});e.default={name:"Setlist",data:function(){return{htmlContent:"",csrfToken:"",setlist:i,setlistSongs:[],repertoire:"",newSong:{}}},ready:function(){this.setlistSongs=this.setlist.setlist_songs.sort(function(t,e){return t.number_in_list-e.number_in_list})},created:function(){this.htmlContent=this.createListElement()},components:{},events:{reordered:function(t){this.reOrderSetlistSongs(t)}},methods:{createListElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,dragable:!0,listItems:this.createDummyListItems()})},createDummyListItems:function(){var t=[];return this.setlist.gig.band.songs.forEach(function(e){var n={id:"setlist-"+i.id+"-song-"+e.id,title:e.title,expandable:!0,buttonRow:{buttons:[{iconClass:"fa fa-minus"}]},expandableContent:"test"};t.push(n)}),t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"Songs",props:["songs"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,raised:!0,listItems:this.getListItems()})},getListItems:function(){var t=[];return this.songs.forEach(function(e){var n={title:e.title,subTitle:this.getSubTitle(e),link:this.getLink(e),buttonRow:this.getButtonRow(e)};t.push(n)}.bind(this)),t},getSubTitle:function(t){return t.artist},getLink:function(t){return"/songs/"+t.id},getButtonRow:function(t){return{buttons:[{iconClass:"fa fa-pencil",link:"/songs/"+t.id+"/edit"},{iconClass:"fa fa-trash"}]}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"UpcomingGigs",props:["gigs"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,raised:!0,listItems:this.getListItems()})},getListItems:function(){var t=[];return this.gigs.forEach(function(e){var n={title:e.name,subTitle:this.getSubTitle(e),iconClass:this.getIconClass(e),link:this.getLink(e)};t.push(n)}.bind(this)),t},getSubTitle:function(t){return t.date+" - "+t.venue+" - "+t.location},getIconClass:function(t){var e="";return void 0!==t.status&&("Proposed"==t.status&&(e="fa fa-question-circle-o"),"Settled"==t.status&&(e="fa fa-check-circle-o"),"Public"==t.status&&(e="fa fa-globe")),e},getLink:function(t){return"/gigs/"+t.id}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(155),i=n.n(s),r=n(156),o=n.n(r),a=n(157),l=n.n(a),u=n(0);n.n(u);e.default={name:"WelcomeScreen",props:["formType","formData"],components:{welcome:l.a,loginForm:i.a,registerForm:o.a},data:function(){return{logo:u.Atoms.Media.Image.getModule({src:n(105),alt:"FlowGig logo"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"LoginForm",data:function(){return{inputEmail:s.Molecules.FormElements.InputField.getModule({id:"login-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required","autofocus"]}),inputPassword:s.Molecules.FormElements.InputField.getModule({id:"login-password",name:"password",label:"Password",type:"password",attributes:["required"]}),checkboxRemember:s.Molecules.FormElements.Checkbox.getModule({id:"login-remember",name:"remember",label:"Remember Me",value:"true"}),loginButton:s.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Log in"}),csrfToken:window.Laravel.csrfToken}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(0);n.n(s);e.default={name:"RegisterForm",data:function(){return{inputName:s.Molecules.FormElements.InputField.getModule({id:"register-name",name:"name",label:"Name",type:"text",value:this.$parent.formData.oldName,attributes:["required","autofocus"]}),inputEmail:s.Molecules.FormElements.InputField.getModule({id:"register-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required"]}),inputPassword:s.Molecules.FormElements.InputField.getModule({id:"register-password",name:"password",label:"Password",type:"password",attributes:["required"]}),inputPasswordConfirmation:s.Molecules.FormElements.InputField.getModule({id:"register-password_confirmation",name:"password_confirmation",label:"Confirm Password",type:"password",attributes:["required"]}),registerButton:s.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Register"}),csrfToken:window.Laravel.csrfToken}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Welcome"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports="/fonts/flowgig-beta-logo-white.svg?59e89767169b8b9e25aacaddc2115866"},function(t,e){t.exports="/fonts/flowgig-logo-gray.svg?413772836746db575069063b35a2d033"},function(t,e){t.exports="/fonts/flowgig-logo-white.svg?c459988ca87c3c370f8dbc3b416cf9fb"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var s=n(1)(n(49),n(163),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(50),n(164),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(51),n(165),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(52),n(159),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(53),n(170),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(54),n(168),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(55),n(162),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(56),n(167),null,null);t.exports=s.exports},function(t,e,n){var s=n(1)(n(57),n(158),null,null);t.exports=s.exports},function(t,e,n){n(101);var s=n(1)(n(58),n(166),"data-v-af7af802",null);t.exports=s.exports},function(t,e,n){n(102);var s=n(1)(n(59),n(169),"data-v-e38bb6b6",null);t.exports=s.exports},function(t,e,n){n(99);var s=n(1)(n(60),n(160),"data-v-50f58f42",null);t.exports=s.exports},function(t,e,n){n(100);var s=n(1)(n(61),n(161),"data-v-6c4e89ba",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:t.$parent.formData.registerUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.csrfToken}}),t._v(" "),t._m(0),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.inputName)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.inputEmail)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.inputPassword)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.inputPasswordConfirmation)}}),t._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:t._s(t.registerButton)}})]),t._v(" "),n("div",{staticClass:"clearfix"})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-box-header"},[n("p",[t._v("Register")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float-right"},[n("custom-button",{attrs:{button:{link:"/login",theme:"primary",content:"Log in"}}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"welcome-screen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.logo)}}),t._v(" "),"welcome"==t.formType?n("div",[n("welcome")],1):"login"==t.formType?n("div",[n("login-form")],1):"register"==t.formType?n("div",[n("register-form")],1):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:t.$parent.formData.loginUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.csrfToken}}),t._v(" "),t._m(0),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.inputEmail)}}),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.inputPassword)}}),t._v(" "),n("div",{staticClass:"checkbox-container",domProps:{innerHTML:t._s(t.checkboxRemember)}}),t._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:t._s(t.loginButton)}})]),t._v(" "),n("div",{staticClass:"clearfix"}),t._v(" "),n("div",{staticClass:"text-center"},[n("a",{attrs:{href:t.$parent.formData.resetUrl}},[t._v("Forgot Your Password?")])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-box-header"},[n("p",[t._v("Log in")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.htmlContent)}})},staticRenderFns:[]}},function(t,e,n){n(29),t.exports=n(30)}],[171]);