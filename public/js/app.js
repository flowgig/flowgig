webpackJsonp([1],[,function(e,t){e.exports=function(e,t,n,s,o){var a,i=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(a=e,i=e.default);var l="function"==typeof i?i.options:i;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),s&&(l._scopeId=s);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var d=l.functional,m=d?l.render:l.beforeCreate;d?l.render=function(e,t){return u.call(t),m(e,t)}:l.beforeCreate=m?[].concat(m,u):[u]}return{esModule:a,exports:i,options:l}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var s=n(1)(n(130),n(131),null,null,null);e.exports=s.exports},function(e,t){e.exports=[{name:"C",value:"C"},{name:"D",value:"D"},{name:"E",value:"E"},{name:"F",value:"F"},{name:"G",value:"G"},{name:"A",value:"A"},{name:"B",value:"B"},{name:"Cm",value:"Cm"},{name:"Dm",value:"Dm"},{name:"Em",value:"Em"},{name:"Fm",value:"Fm"},{name:"Gm",value:"Gm"},{name:"Am",value:"Am"},{name:"Bm",value:"Bm"},{name:"C♯",value:"C♯"},{name:"D♯",value:"D♯"},{name:"F♯",value:"F♯"},{name:"G♯",value:"G♯"},{name:"A♯",value:"A♯"},{name:"C♯m",value:"C♯m"},{name:"D♯m",value:"D♯m"},{name:"F♯m",value:"F♯m"},{name:"G♯m",value:"G♯m"},{name:"A♯m",value:"A♯m"},{name:"D♭",value:"D♭"},{name:"E♭",value:"E♭"},{name:"G♭",value:"G♭"},{name:"A♭",value:"A♭"},{name:"B♭♯",value:"B♭"},{name:"D♭m",value:"D♭m"},{name:"E♭m",value:"E♭m"},{name:"G♭m",value:"G♭m"},{name:"A♭m",value:"A♭m"},{name:"B♭m",value:"B♭m"}]},function(e,t,n){n(34),e.exports=n(187)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(10),o=n.n(s),a=n(0);n.n(a);window.axios=n(25),window.axios.defaults.headers.common={"X-CSRF-TOKEN":window.Laravel.csrfToken,"X-Requested-With":"XMLHttpRequest"},o.a.component("Gig",n(126)),o.a.component("SetlistSong",n(31)),o.a.component("Song",n(132)),o.a.component("BandMembers",n(135)),o.a.component("Gigs",n(138)),o.a.component("SetlistEditable",n(141)),o.a.component("Songs",n(144)),o.a.component("UpcomingGigs",n(147)),o.a.component("BandCards",n(150)),o.a.component("Breadcrumbs",n(153)),o.a.component("CustomButton",n(156)),o.a.component("CustomButtonRow",n(159)),o.a.component("MainFooter",n(162)),o.a.component("MainNavigation",n(166)),o.a.component("WelcomeScreen",n(170));new o.a({el:"#app"});a.Init.default()},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var s=n(1)(n(127),n(129),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"Gig",props:["formData"],data:function(){return{formElements:{name:s.Molecules.FormElements.InputField.getModule({id:"name",name:"name",label:"Name",type:"text",placeholder:"Name of the gig",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.name?this.formData.savedValues.name:"",attributes:"show"==this.formData.viewType?["required","readonly"]:["required"]}),venue:s.Molecules.FormElements.InputField.getModule({id:"venue",name:"venue",label:"Venue",type:"text",placeholder:"Venue the gig takes place",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.venue?this.formData.savedValues.venue:"",attributes:"show"==this.formData.viewType?["readonly"]:[]}),location:s.Molecules.FormElements.InputField.getModule({id:"location",name:"location",label:"Location",type:"text",placeholder:"Location of the gig",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.location?this.formData.savedValues.location:"",attributes:"show"==this.formData.viewType?["readonly"]:[]}),date:s.Molecules.FormElements.DatePicker.getModule({id:"date",name:"date",label:"Date",type:"datetime",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.date?this.formData.savedValues.date:"",attributes:"show"==this.formData.viewType?["readonly"]:[],clockOptions:{required:!1}}),status:s.Molecules.FormElements.SelectList.getModule({id:"status",name:"status",label:"Status",searchable:!0,placeholder:"Status for the gig",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.status?this.formData.savedValues.status:"",options:n(128),attributes:"show"==this.formData.viewType?["readonly"]:[]}),actionButton:s.Atoms.Buttons.Button.getModule({submit:"show"!=this.formData.viewType,link:"show"==this.formData.viewType?this.formData.editLink:null,theme:"primary",content:this.getActionButtonText()})},csrfToken:window.Laravel.csrfToken}},methods:{getActionButtonText:function(){var e="";return"create"==this.formData.viewType?e="Create":"edit"==this.formData.viewType?e="Update":"show"==this.formData.viewType&&(e="Edit"),e}}}},function(e,t){e.exports=[{name:"Proposed",value:"Proposed"},{name:"Settled",value:"Settled"},{name:"Public",value:"Public"}]},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{method:"POST",action:e.formData.postUrl}},["show"!==e.formData.viewType?n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}):e._e(),e._v(" "),"edit"==e.formData.viewType?n("input",{attrs:{type:"hidden",name:"_method",value:"PUT"}}):e._e(),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.name)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.venue)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.location)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.date)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.status)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.formElements.actionButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"})])},staticRenderFns:[]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"SetlistSong",props:["formData","setlistSongId"],data:function(){return{formElements:{key:s.Molecules.FormElements.SelectList.getModule({id:"setlist-song-modal-key-"+this.formData.savedValues.id,name:"key",label:"Key",searchable:!0,placeholder:"E.g. F, Am, or C#",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.key?this.formData.savedValues.key:"",options:n(32),attributes:"show"==this.formData.viewType?["readonly"]:[]}),bpm:s.Molecules.FormElements.InputField.getModule({id:"setlist-song-modal-bpm-"+this.formData.savedValues.id,name:"bpm",label:"BPM",type:"number",placeholder:"Beats Per Minute",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.bpm?this.formData.savedValues.bpm:"",attributes:"show"==this.formData.viewType?["readonly"]:["min='0'"]}),duration:s.Molecules.FormElements.DatePicker.getModule({id:"setlist-song-modal-duration-"+this.formData.savedValues.id,name:"duration",label:"Duration",type:"time",placeholder:"03:25",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.duration?this.formData.savedValues.duration:"",attributes:"show"==this.formData.viewType?["readonly"]:[],clockOptions:{showHours:!1}}),intensity:s.Molecules.FormElements.InputField.getModule({id:"setlist-song-modal-intensity-"+this.formData.savedValues.id,name:"intensity",label:"Intensity",type:"number",placeholder:"1&ndash;10 (Ballad&ndash;Bebop)",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.intensity?this.formData.savedValues.intensity:"",attributes:"show"==this.formData.viewType?["readonly"]:["min='0'","max='10'"]}),comment:s.Molecules.FormElements.InputField.getModule({id:"setlist-song-modal-comment-"+this.formData.savedValues.id,name:"comment",label:"Comment",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.comment?this.formData.savedValues.comment:"",attributes:"show"==this.formData.viewType?["readonly"]:[]}),actionButton:s.Atoms.Buttons.Button.getModule({submit:"show"!=this.formData.viewType,link:"show"==this.formData.viewType?this.formData.editLink:null,theme:"primary",content:this.getActionButtonText()})},csrfToken:window.Laravel.csrfToken}},created:function(){this.$parent.setlistSongModalButtons[this.setlistSongId]=this.createModalElement()},methods:{getActionButtonText:function(){var e="";return"create"==this.formData.viewType?e="Create":"edit"==this.formData.viewType?e="Update":"show"==this.formData.viewType&&(e="Edit"),e},createModalContent:function(){var e="",t="";"show"!==this.formData.viewType&&(e='<input type="hidden" name="_token" value="'+this.csrfToken+'"/>'),"edit"==this.formData.viewType&&(t='<input type="hidden" name="_method" value="PUT">');var n=""+e+t+this.formElements.key+this.formElements.bpm+this.formElements.duration+this.formElements.intensity+this.formElements.comment,s='<div class="input-group float-right">'+this.formElements.actionButton+"</div>";return'<form method="POST" action="'+this.formData.postUrl+'">'+n+s+'<div class="clearfix"></div></form>'},createModalElement:function(){return s.Molecules.Messaging.Modal.getModule({id:"setlist-song-modal-"+this.formData.savedValues.id,triggerElement:s.Atoms.Buttons.Button.getModule({iconClass:"fa fa-pencil",type:"minimal",theme:"primary"}),modalElement:{title:"Setlist song",content:this.createModalContent(),scrollable:!0}})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(133),n(134),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"Song",props:["formData"],data:function(){return{formElements:{title:s.Molecules.FormElements.InputField.getModule({id:"title",name:"title",label:"Title",type:"text",placeholder:"The song title",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.title?this.formData.savedValues.title:"",attributes:"show"==this.formData.viewType?["required","readonly"]:["required"]}),artist:s.Molecules.FormElements.InputField.getModule({id:"artist",name:"artist",label:"Artist",type:"text",placeholder:"The original artist/band",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.artist?this.formData.savedValues.artist:"",attributes:"show"==this.formData.viewType?["readonly"]:[]}),lyricsBy:s.Molecules.FormElements.InputField.getModule({id:"lyrics-by",name:"lyrics_by",label:"Lyrics by",type:"text",placeholder:"The lyrics author",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.lyrics_by?this.formData.savedValues.lyrics_by:"",attributes:"show"==this.formData.viewType?["readonly"]:[]}),musicBy:s.Molecules.FormElements.InputField.getModule({id:"music-by",name:"music_by",label:"Music by",type:"text",placeholder:"The music composer",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.music_by?this.formData.savedValues.music_by:"",attributes:"show"==this.formData.viewType?["readonly"]:[]}),key:s.Molecules.FormElements.SelectList.getModule({id:"key",name:"key",label:"Key",searchable:!0,placeholder:"E.g. F, Am, or C#",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.key?this.formData.savedValues.key:"",options:n(32),attributes:"show"==this.formData.viewType?["readonly"]:[]}),bpm:s.Molecules.FormElements.InputField.getModule({id:"bpm",name:"bpm",label:"BPM",type:"number",placeholder:"Beats Per Minute",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.bpm?this.formData.savedValues.bpm:"",attributes:"show"==this.formData.viewType?["readonly"]:["min='0'"]}),duration:s.Molecules.FormElements.DatePicker.getModule({id:"duration",name:"duration",label:"Duration",type:"time",placeholder:"03:25",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.duration?this.formData.savedValues.duration:"",attributes:"show"==this.formData.viewType?["readonly"]:[],clockOptions:{showHours:!1}}),intensity:s.Molecules.FormElements.InputField.getModule({id:"intensity",name:"intensity",label:"Intensity",type:"number",placeholder:"1&ndash;10 (Ballad&ndash;Bebop)",value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.intensity?this.formData.savedValues.intensity:"",attributes:"show"==this.formData.viewType?["readonly"]:["min='0'","max='10'"]}),actionButton:s.Atoms.Buttons.Button.getModule({submit:"show"!=this.formData.viewType,link:"show"==this.formData.viewType?this.formData.editLink:null,theme:"primary",content:this.getActionButtonText()})},csrfToken:window.Laravel.csrfToken}},methods:{getActionButtonText:function(){var e="";return"create"==this.formData.viewType?e="Create":"edit"==this.formData.viewType?e="Update":"show"==this.formData.viewType&&(e="Edit"),e}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{method:"POST",action:e.formData.postUrl}},["show"!==e.formData.viewType?n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}):e._e(),e._v(" "),"edit"==e.formData.viewType?n("input",{attrs:{type:"hidden",name:"_method",value:"PUT"}}):e._e(),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.title)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.artist)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.lyricsBy)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.musicBy)}}),e._v(" "),"show"==e.formData.viewType?n("p",[e._v("The following properties are defaults which may be set\n        different for each instance of this song in setlists\n    ")]):n("p",[e._v("You may set the following values different every time you add this song to a setlist,\n        but values entered here will be used as default")]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.key)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.bpm)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.duration)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.formElements.intensity)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.formElements.actionButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"})])},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(136),n(137),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"BandMembers",props:["bandMembers","authUser"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"band-members-list",hover:!1,listItems:this.getListItems()})},getListItems:function(){var e=[];return this.bandMembers.forEach(function(t){var n={title:t.user.name,buttonRow:this.getButtonRow(t)};e.push(n)}.bind(this)),e},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-trash",submit:!0}]}},validateDelete:function(e){return 1==this.bandMembers.length?(alert("You are the last member and cannot be removed.\n(You'll have to delete the band)"),!1):e==this.authUser.id?confirm("This completely removes your access to the band {{ $band->name }}"):confirm("This removes "+userName)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(139),n(140),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"Gigs",props:["gigs"],data:function(){return{htmlContent:"",csrfToken:window.Laravel.csrfToken}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",listItems:this.getListItems()})},getListItems:function(){var e=[];return this.gigs.forEach(function(t){var n={title:t.name,subTitle:this.getSubTitle(t),iconClass:this.getIconClass(t),link:this.getLink(t),buttonRow:this.getButtonRow(t),hiddenButtonRow:!0};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.date+" - "+e.venue+" - "+e.location},getIconClass:function(e){var t="";return void 0!==e.status&&("Proposed"==e.status&&(t="fa fa-question-circle-o"),"Settled"==e.status&&(t="fa fa-check-circle-o"),"Public"==e.status&&(t="fa fa-globe")),t},getLink:function(e){return"/gigs/"+e.id},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-pencil",link:"/gigs/"+e.id+"/edit",type:"minimal",theme:"primary"},{iconClass:"fa fa-trash",submit:!0,type:"minimal",theme:"primary",formWrapper:{formAction:"/gigs/"+e.id,formMethod:"POST",hiddenFields:[{name:"_token",value:this.csrfToken},{name:"_method",value:"DELETE"}]}}]}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(142),n(143),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),o=(n.n(s),n(8)),a=(n.n(o),n(31)),i=n.n(a);t.default={name:"SetlistEditable",props:["setlist","repertoire","formData"],data:function(){return{htmlContent:"",modalHtmlContent:"",csrfToken:"",newSong:{},setlistSongModalButtons:{}}},ready:function(){},created:function(){this.modalHtmlContent=this.createRepertoireModalElement()},mounted:function(){var e=this,t=null,n=o([document.querySelector("#songs-list")]);n.on("drag",function(e,n){var s=[].indexOf.call(e.parentNode.children,e);t=s}),n.on("drop",function(n,s,o,a){var i=[].indexOf.call(n.parentNode.children,n);e.setlist.setlist_songs.splice(i,0,e.setlist.setlist_songs.splice(t,1)[0]),this.updateNumberInListForAllSetlistSongs()}.bind(this)),this.htmlContent=this.createListElement()},components:{SetlistSong:i.a},events:{reordered:function(e){this.reOrderSetlistSongs(e)}},methods:{createListElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,listItems:this.createListItems()})},createListItems:function(){var e=[];return this.setlist.setlist_songs.forEach(function(t){var n=this.setlistSongModalButtons[t.id],s={id:"setlist-"+this.setlist.id+"-song-"+t.song.id,title:t.song.title,buttonRow:{buttons:[{iconClass:"fa fa-minus",type:"minimal"}],buttonElements:[n]}};e.push(s)}.bind(this)),e},updateNumberInListForAllSetlistSongs:function(){this.setlist.setlist_songs.forEach(function(e,t){e.number_in_list=t+1})},createRepertoireListElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"repertoire-list",hover:!0,listItems:this.createRepertoireListItems()})},createRepertoireListItems:function(){var e=[];return this.repertoire.forEach(function(t){var n={id:"repertoire-"+this.setlist.id+"-song-"+t.id,title:t.title,buttonRow:{buttons:[{iconClass:"fa fa-plus"}]}};e.push(n)}.bind(this)),e},createRepertoireModalElement:function(){return s.Molecules.Messaging.Modal.getModule({id:"repertoire-modal",triggerElement:s.Atoms.Buttons.Button.getModule({content:"Add song",theme:"primary"}),modalElement:{title:"Repertoire",content:this.createRepertoireListElement(),scrollable:!0}})},createSetlistSongModalElement:function(){return s.Molecules.Messaging.Modal.getModule({id:"setlist-song-modal-"+this.formData.savedValues.id,triggerElement:s.Atoms.Buttons.Button.getModule({content:"Edit song",theme:"primary"}),modalElement:{title:"Setlist song",content:this.createModalContent(),scrollable:!0}})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._l(e.setlist.setlist_songs,function(t){return n("div",[n("setlist-song",{attrs:{"form-data":{viewType:e.formData.viewType,savedValues:t},"setlist-song-id":t.id}})],1)}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.modalHtmlContent)}})],2)])},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(145),n(146),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"Songs",props:["songs"],data:function(){return{htmlContent:"",csrfToken:window.Laravel.csrfToken}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",listItems:this.getListItems()})},getListItems:function(){var e=[];return this.songs.forEach(function(t){var n={title:t.title,subTitle:this.getSubTitle(t),link:this.getLink(t),buttonRow:this.getButtonRow(t),hiddenButtonRow:!0};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.artist},getLink:function(e){return"/songs/"+e.id},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-pencil",link:"/songs/"+e.id+"/edit",type:"minimal",theme:"primary"},{iconClass:"fa fa-trash",submit:!0,type:"minimal",theme:"primary",formWrapper:{formAction:"/songs/"+e.id,formMethod:"POST",hiddenFields:[{name:"_token",value:this.csrfToken},{name:"_method",value:"DELETE"}]}}]}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(148),n(149),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"UpcomingGigs",props:["gigs"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return s.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,raised:!0,listItems:this.getListItems()})},getListItems:function(){var e=[];return this.gigs.forEach(function(t){var n={title:t.name,subTitle:this.getSubTitle(t),iconClass:this.getIconClass(t),link:this.getLink(t)};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.date+" - "+e.venue+" - "+e.location},getIconClass:function(e){var t="";return void 0!==e.status&&("Proposed"==e.status&&(t="fa fa-question-circle-o"),"Settled"==e.status&&(t="fa fa-check-circle-o"),"Public"==e.status&&(t="fa fa-globe")),t},getLink:function(e){return"/gigs/"+e.id}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(151),n(152),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"BandCards",data:function(){return{htmlContent:""}},props:["bands"],created:function(){this.htmlContent=this.getGridElement(this.bands)},methods:{getGridElement:function(e){var t=[];return e.forEach(function(e){t.push({sizes:{phone:12,tablet:6,tabletLandscape:6,screen:6},content:this.getCardElement(e)})}.bind(this)),s.Molecules.Sections.Grid.getModule({gridItems:t})},getCardElement:function(e){return s.Organisms.Cards.Card.getModule({title:e.name,theme:"primary",content:s.Organisms.Menus.ListMenu.getModule({id:"band-card-list-"+e.id,hover:!0,listItems:this.getListItems(e)})})},getListItems:function(e){return[{title:"Songs",iconClass:"fa fa-music",link:"/bands/"+e.id+"/songs"},{title:"Gigs",iconClass:"fa fa-calendar",link:"/bands/"+e.id+"/gigs"},{title:"Members",iconClass:"fa fa-group",link:"/bands/"+e.id+"/band-memberships"}]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(154),n(155),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"Breadcrumbs",props:["breadcrumbItems"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createBreadcrumbsElement()},methods:{createBreadcrumbsElement:function(){return s.Molecules.Navigation.Breadcrumbs.getModule({breadcrumbItems:this.breadcrumbItems})},createDummyListItems:function(){return[{title:"Lunch Gig",subTitle:"2017-10-28 - Johnny Walk Concert House - Morrisburgh",iconClass:"fa fa-globe",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Student event",subTitle:"2017-08-19 - Wisozk Lodge Stadium - North Lonport",iconClass:"fa fa-check-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Summer Music Fest",subTitle:"2012-12-06 - Shanel Alley Park - Leannonchester",iconClass:"fa fa-question-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}}]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(157),n(158),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"CustomButton",props:["button"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=s.Atoms.Buttons.Button.getModule(this.button)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(160),n(161),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"CustomButtonRow",props:["buttonRow"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=s.Molecules.Buttons.ButtonRow.getModule(this.buttonRow)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(163),n(165),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"MainFooter",props:["appVersion"],data:function(){return{htmlContent:this.createFooterElement()}},methods:{createFooterElement:function(){return s.Organisms.Global.Footer.getModule({logo:{image:{src:n(164),alt:"quarkGUI logo"},url:"/"},content:'\n                        <div class="text-center">\n                            <p>FlowGig licensed under <a href="https://github.com/flowgig/flowgig/blob/master/LICENSE">GNU General Public License</a></p>\n                            <p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>\n                            <small>'+this.appVersion+"</small>\n                        </div>\n\t\t\t        "})}}}},function(e,t){e.exports="/fonts/flowgig-logo-gray.svg?413772836746db575069063b35a2d033"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var s=n(1)(n(167),n(169),null,null,null);e.exports=s.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"MainNavigation",props:["currentBand","currentUser"],data:function(){return{htmlContent:"",header:{}}},created:function(){var e={id:"main-header",theme:"dark",logo:{image:{src:n(168),alt:"FlowGig logo"},url:"/dashboard"},primaryNavigation:{id:"primary-navigation",listItems:[]},sidebar:{sidebarNavigation:{listItems:[{name:"About",link:"",iconClass:"fa fa-info-circle"},{name:"Developers",link:"",iconClass:"fa fa-code"},{name:"Send feedback",link:"",iconClass:"fa fa-comment"}]}}};if(void 0!==this.currentBand){var t={name:this.currentBand.name,dropdownContent:{listItems:[{name:"Songs",link:"/bands/"+this.currentBand.id+"/songs",iconClass:"fa fa-music"},{name:"Gigs",link:"/bands/"+this.currentBand.id+"/gigs",iconClass:"fa fa-calendar"},{name:"Members",link:"/bands/"+this.currentBand.id+"/band-memberships",iconClass:"fa fa-group"}]}};e.primaryNavigation.listItems.push(t)}this.header=e,this.htmlContent=s.Organisms.Global.Header.getModule(this.header)}}},function(e,t){e.exports="/fonts/flowgig-beta-logo-white.svg?59e89767169b8b9e25aacaddc2115866"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){function s(e){n(171)}var o=n(1)(n(172),n(186),s,"data-v-af7af802",null);e.exports=o.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(173),o=n.n(s),a=n(177),i=n.n(a),r=n(181),l=n.n(r),u=n(0);n.n(u);t.default={name:"WelcomeScreen",props:["formType","formData"],components:{welcome:l.a,loginForm:o.a,registerForm:i.a},data:function(){return{logo:u.Atoms.Media.Image.getModule({src:n(185),alt:"FlowGig logo"})}}}},function(e,t,n){function s(e){n(174)}var o=n(1)(n(175),n(176),s,"data-v-e38bb6b6",null);e.exports=o.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"LoginForm",data:function(){return{inputEmail:s.Molecules.FormElements.InputField.getModule({id:"login-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required","autofocus"]}),inputPassword:s.Molecules.FormElements.InputField.getModule({id:"login-password",name:"password",label:"Password",type:"password",attributes:["required"]}),checkboxRemember:s.Molecules.FormElements.Checkbox.getModule({id:"login-remember",name:"remember",label:"Remember Me",value:"true"}),loginButton:s.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Log in"}),csrfToken:window.Laravel.csrfToken}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:e.$parent.formData.loginUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputEmail)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPassword)}}),e._v(" "),n("div",{staticClass:"checkbox-container",domProps:{innerHTML:e._s(e.checkboxRemember)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.loginButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"}),e._v(" "),n("div",{staticClass:"text-center"},[n("a",{attrs:{href:e.$parent.formData.resetUrl}},[e._v("Forgot Your Password?")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box-header"},[n("p",[e._v("Log in")])])}]}},function(e,t,n){function s(e){n(178)}var o=n(1)(n(179),n(180),s,"data-v-50f58f42",null);e.exports=o.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(0);n.n(s);t.default={name:"RegisterForm",data:function(){return{inputName:s.Molecules.FormElements.InputField.getModule({id:"register-name",name:"name",label:"Name",type:"text",value:this.$parent.formData.oldName,attributes:["required","autofocus"]}),inputEmail:s.Molecules.FormElements.InputField.getModule({id:"register-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required"]}),inputPassword:s.Molecules.FormElements.InputField.getModule({id:"register-password",name:"password",label:"Password",type:"password",attributes:["required"]}),inputPasswordConfirmation:s.Molecules.FormElements.InputField.getModule({id:"register-password_confirmation",name:"password_confirmation",label:"Confirm Password",type:"password",attributes:["required"]}),registerButton:s.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Register"}),csrfToken:window.Laravel.csrfToken}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:e.$parent.formData.registerUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputName)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputEmail)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPassword)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPasswordConfirmation)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.registerButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"})])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box-header"},[n("p",[e._v("Register")])])}]}},function(e,t,n){function s(e){n(182)}var o=n(1)(n(183),n(184),s,"data-v-6c4e89ba",null);e.exports=o.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Welcome"}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"float-right"},[n("custom-button-row",{attrs:{"button-row":{id:"buttonRow",buttons:[{link:"/register",theme:"primary",content:"Register"},{link:"/login",theme:"primary",content:"Log in"}]}}})],1)},staticRenderFns:[]}},function(e,t){e.exports="/fonts/flowgig-logo-white.svg?c459988ca87c3c370f8dbc3b416cf9fb"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-screen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title",domProps:{innerHTML:e._s(e.logo)}}),e._v(" "),"welcome"==e.formType?n("div",[n("welcome")],1):"login"==e.formType?n("div",[n("login-form")],1):"register"==e.formType?n("div",[n("register-form")],1):e._e()])])])},staticRenderFns:[]}},function(e,t){}],[33]);