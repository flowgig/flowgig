webpackJsonp([1],[,,,function(e,t){e.exports=function(e,t,n,o,a){var i,r=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(i=e,r=e.default);var l="function"==typeof r?r.options:r;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):n&&(u=n),u){var d=l.functional,m=d?l.render:l.beforeCreate;d?l.render=function(e,t){return u.call(t),m(e,t)}:l.beforeCreate=m?[].concat(m,u):[u]}return{esModule:i,exports:r,options:l}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var o=n(3)(n(177),n(178),null,null,null);e.exports=o.exports},function(e,t){e.exports=[{name:"C",value:"C"},{name:"D",value:"D"},{name:"E",value:"E"},{name:"F",value:"F"},{name:"G",value:"G"},{name:"A",value:"A"},{name:"B",value:"B"},{name:"Cm",value:"Cm"},{name:"Dm",value:"Dm"},{name:"Em",value:"Em"},{name:"Fm",value:"Fm"},{name:"Gm",value:"Gm"},{name:"Am",value:"Am"},{name:"Bm",value:"Bm"},{name:"C♯",value:"C♯"},{name:"D♯",value:"D♯"},{name:"F♯",value:"F♯"},{name:"G♯",value:"G♯"},{name:"A♯",value:"A♯"},{name:"C♯m",value:"C♯m"},{name:"D♯m",value:"D♯m"},{name:"F♯m",value:"F♯m"},{name:"G♯m",value:"G♯m"},{name:"A♯m",value:"A♯m"},{name:"D♭",value:"D♭"},{name:"E♭",value:"E♭"},{name:"G♭",value:"G♭"},{name:"A♭",value:"A♭"},{name:"B♭♯",value:"B♭"},{name:"D♭m",value:"D♭m"},{name:"E♭m",value:"E♭m"},{name:"G♭m",value:"G♭m"},{name:"A♭m",value:"A♭m"},{name:"B♭m",value:"B♭m"}]},function(e,t,n){n(40),e.exports=n(234)},function(e,t,n){"use strict";var o=n(13),a=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(2),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);window.axios=n(8),window.axios.defaults.headers.common={"X-CSRF-TOKEN":window.Laravel.csrfToken,"X-Requested-With":"XMLHttpRequest"},a.default.component("Gig",n(173)),a.default.component("SetlistSong",n(37)),a.default.component("Song",n(179)),a.default.component("BandMembers",n(182)),a.default.component("Gigs",n(185)),a.default.component("SetlistEditable",n(188)),a.default.component("Songs",n(191)),a.default.component("UpcomingGigs",n(194)),a.default.component("BandCards",n(197)),a.default.component("Breadcrumbs",n(200)),a.default.component("CustomButton",n(203)),a.default.component("CustomButtonRow",n(206)),a.default.component("MainFooter",n(209)),a.default.component("MainNavigation",n(213)),a.default.component("WelcomeScreen",n(217));new a.default({el:"#app"});r.Init.default()},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var o=n(3)(n(174),null,null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(o),n(175)),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Gig",props:["formData"],template:i.default,data:function(){return{form:{data:"create"==this.formData.viewType?{}:this.formData.savedValues,readOnly:"show"==this.formData.viewType},csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),i=a.Molecules.FormElements.InputField,r=a.Molecules.FormElements.SelectList,s=a.Molecules.FormElements.DatePicker,l=a.Atoms.Buttons.Button,u={name:i.getModule({id:"name",name:"name",label:"Name",type:"text",placeholder:"Name of the gig",attributes:["required","v-bind:readonly='form.readOnly'","v-model='form.data.name'"]}),venue:i.getModule({id:"venue",name:"venue",label:"Venue",type:"text",placeholder:"Venue the gig takes place",attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.venue'"]}),location:i.getModule({id:"location",name:"location",label:"Location",type:"text",placeholder:"Location of the gig",attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.location'"]}),date:s.getModule({id:"date",name:"date",label:"Date",type:"datetime",clockOptions:{required:!1},attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.date'"]}),status:r.getModule({id:"status",name:"status",label:"Status",searchable:!0,placeholder:"Status for the gig",options:n(176),attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.status'"]}),actionButton:{create:l.getModule({submit:!0,theme:"primary",content:"Create"}),edit:l.getModule({submit:!0,theme:"primary",content:"Update"}),show:l.getModule({submit:!1,theme:"primary",content:"Edit",attributes:["v-bind:href='this.formData.editLink'"]})}},d='\n<form method="POST" v-bind:action="formData.postUrl">\n    <input v-if="!form.readOnly" type="hidden" name="_token" v-bind:value="csrfToken" />\n    <input v-if="formData.viewType == \'edit\'" type="hidden" name="_method" value="PUT" />\n    '+u.name+"\n    "+u.venue+"\n    "+u.location+"\n    "+u.date+"\n    "+u.status+'\n    <div class="input-group float-right">\n        <div v-if="formData.viewType == \'create\'">'+u.actionButton.create+"</div>\n        <div v-else-if=\"formData.viewType == 'edit'\">"+u.actionButton.edit+"</div>\n        <div v-else-if=\"formData.viewType == 'show'\">"+u.actionButton.show+'</div>\n    </div>\n    <div class="clearfix"></div> \n</form>\n';t.default=d},function(e,t){e.exports=[{name:"Proposed",value:"Proposed"},{name:"Settled",value:"Settled"},{name:"Public",value:"Public"}]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"SetlistSong",props:["formData","setlistSongId"],data:function(){var e={key:{id:"setlist-song-modal-key-"+this.formData.savedValues.id,value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.key?this.formData.savedValues.key:""},bpm:{id:"setlist-song-modal-bpm-"+this.formData.savedValues.id,value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.bpm?this.formData.savedValues.bpm:""},duration:{id:"setlist-song-modal-duration-"+this.formData.savedValues.id,value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.duration?this.formData.savedValues.duration:""},intensity:{id:"setlist-song-modal-intensity-"+this.formData.savedValues.id,value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.intensity?this.formData.savedValues.intensity:""},comment:{id:"setlist-song-modal-comment-"+this.formData.savedValues.id,value:void 0!==this.formData.savedValues&&void 0!==this.formData.savedValues.comment?this.formData.savedValues.comment:""}};return{setlistSong:e,formElements:{key:a.Molecules.FormElements.SelectList.getModule({id:e.key.id,name:"key",label:"Key",searchable:!0,placeholder:"E.g. F, Am, or C#",value:e.key.value,options:n(38),attributes:"show"==this.formData.viewType?["readonly"]:[]}),bpm:a.Molecules.FormElements.InputField.getModule({id:e.bpm.id,name:"bpm",label:"BPM",type:"number",placeholder:"Beats Per Minute",value:e.bpm.value,attributes:"show"==this.formData.viewType?["readonly"]:["min='0'"]}),duration:a.Molecules.FormElements.DatePicker.getModule({id:e.duration.id,name:"duration",label:"Duration",type:"time",placeholder:"03:25",value:e.duration.value,attributes:"show"==this.formData.viewType?["readonly"]:[],clockOptions:{showHours:!1}}),intensity:a.Molecules.FormElements.InputField.getModule({id:e.intensity.id,name:"intensity",label:"Intensity",type:"number",placeholder:"1&ndash;10 (Ballad&ndash;Bebop)",value:e.intensity.value,attributes:"show"==this.formData.viewType?["readonly"]:["min='0'","max='10'"]}),comment:a.Molecules.FormElements.InputField.getModule({id:e.comment.id,name:"comment",label:"Comment",value:e.comment.value,attributes:"show"==this.formData.viewType?["readonly"]:[]})},csrfToken:window.Laravel.csrfToken}},created:function(){this.$parent.setlistSongModalButtons[this.setlistSongId]=this.createModalElement()},methods:{getActionButtonText:function(){var e="";return"create"==this.formData.viewType?e="Create":"edit"==this.formData.viewType?e="Update":"show"==this.formData.viewType&&(e="Edit"),e},createModalContent:function(){var e="",t="";"show"!==this.formData.viewType&&(e='<input type="hidden" name="_token" value="'+this.csrfToken+'"/>'),"edit"==this.formData.viewType&&(t='<input type="hidden" name="_method" value="PUT">');var n=""+e+t+this.formElements.key+this.formElements.bpm+this.formElements.duration+this.formElements.intensity+this.formElements.comment;return'<div class="content-container"><form method="POST" action="'+this.formData.postUrl+'">'+n+'<div class="clearfix"></div></form></div>'},createModalElement:function(){var e={id:"setlist-song-action-button-"+this.formData.savedValues.id,theme:"primary",content:this.getActionButtonText(),ajaxOptions:{method:"put",url:"/setlistsongs/"+this.formData.savedValues.id,data:{setlist_id:this.formData.savedValues.setlist_id,song_id:this.formData.savedValues.song.id,number_in_list:this.formData.savedValues.number_in_list},getDataFromElements:!0,dataFromElements:[{name:"key",elementId:this.setlistSong.key.id+"-input"},{name:"bpm",elementId:this.setlistSong.bpm.id},{name:"duration",elementId:this.setlistSong.duration.id+"-input"},{name:"intensity",elementId:this.setlistSong.intensity.id},{name:"comment",elementId:this.setlistSong.comment.id}]}};return a.Molecules.Messaging.Modal.getModule({id:"setlist-song-modal-"+this.formData.savedValues.id,triggerElement:a.Atoms.Buttons.Button.getModule({iconClass:"fa fa-pencil",type:"minimal",theme:"primary"}),modalElement:{title:"Setlist song",content:this.createModalContent(),scrollable:!0,footerButtons:{buttonRow:{buttons:[e]}}}})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(180),null,null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(o),n(181)),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Song",props:["formData"],template:i.default,data:function(){return{form:{data:"create"==this.formData.viewType?{}:this.formData.savedValues,readOnly:"show"==this.formData.viewType},csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),i=a.Molecules.FormElements.InputField,r=a.Molecules.FormElements.SelectList,s=a.Molecules.FormElements.DatePicker,l=a.Atoms.Buttons.Button,u={title:i.getModule({id:"title",name:"title",label:"Title",type:"text",placeholder:"The song title",attributes:["required","v-bind:readonly='form.readOnly'","v-model='form.data.title'"]}),artist:i.getModule({id:"artist",name:"artist",label:"Artist",type:"text",placeholder:"The original artist/band",attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.artist'"]}),lyricsBy:i.getModule({id:"lyrics-by",name:"lyrics_by",label:"Lyrics by",type:"text",placeholder:"The lyrics author",attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.lyrics_by'"]}),musicBy:i.getModule({id:"music-by",name:"music_by",label:"Music by",type:"text",placeholder:"The music composer",attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.music_by'"]}),key:r.getModule({id:"key",name:"key",label:"Key",searchable:!0,placeholder:"E.g. F, Am, or C#",options:n(38),attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.key'"]}),bpm:i.getModule({id:"bpm",name:"bpm",label:"BPM",type:"number",placeholder:"Beats Per Minute",attributes:["min='0'","v-bind:readonly='form.readOnly'","v-model='form.data.bpm'"]}),duration:s.getModule({id:"duration",name:"duration",label:"Duration",type:"time",placeholder:"03:25",attributes:["v-bind:readonly='form.readOnly'","v-model='form.data.duration'"],clockOptions:{showHours:!1}}),intensity:i.getModule({id:"intensity",name:"intensity",label:"Intensity",type:"number",placeholder:"1–10 (Ballad–Bebop)",attributes:["min='0'","max='10'","v-bind:readonly='form.readOnly'","v-model='form.data.intensity'"]}),actionButton:{create:l.getModule({submit:!0,theme:"primary",content:"Create"}),edit:l.getModule({submit:!0,theme:"primary",content:"Update"}),show:l.getModule({submit:!1,theme:"primary",content:"Edit",attributes:["v-bind:href='this.formData.editLink'"]})}},d='\n<form method="POST" v-bind:action="formData.postUrl">\n    <input v-if="!form.readOnly" type="hidden" name="_token" v-bind:value="csrfToken" />\n    <input v-if="formData.viewType == \'edit\'" type="hidden" name="_method" value="PUT" />\n    '+u.title+"\n    "+u.artist+"\n    "+u.lyricsBy+"\n    "+u.musicBy+'\n    <p v-if="form.readOnly">The following properties are defaults which may be set\n        different for each instance of this song in setlists\n    </p>\n    <p v-else>You may set the following values different every time you add this song to a setlist,\n        but values entered here will be used as default</p>\n    '+u.key+"\n    "+u.bpm+"\n    "+u.duration+"\n    "+u.intensity+'\n    <div class="input-group float-right">\n        <div v-if="formData.viewType == \'create\'">'+u.actionButton.create+"</div>\n        <div v-else-if=\"formData.viewType == 'edit'\">"+u.actionButton.edit+"</div>\n        <div v-else-if=\"formData.viewType == 'show'\">"+u.actionButton.show+'</div>\n    </div>\n    <div class="clearfix"></div> \n</form>\n';t.default=d},function(e,t,n){var o=n(3)(n(183),n(184),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"BandMembers",props:["bandMembers","authUser"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Menus.ListMenu.getModule({id:"band-members-list",hover:!1,listItems:this.getListItems()})},getListItems:function(){var e=[];return this.bandMembers.forEach(function(t){var n={title:t.user.name,buttonRow:this.getButtonRow(t)};e.push(n)}.bind(this)),e},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-trash",submit:!0}]}},validateDelete:function(e){return 1==this.bandMembers.length?(alert("You are the last member and cannot be removed.\n(You'll have to delete the band)"),!1):e==this.authUser.id?confirm("This completely removes your access to the band {{ $band->name }}"):confirm("This removes "+userName)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(186),n(187),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"Gigs",props:["gigs"],data:function(){return{htmlContent:"",csrfToken:window.Laravel.csrfToken}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Menus.ListMenu.getModule({id:"songs-list",listItems:this.getListItems()})},getListItems:function(){var e=[];return this.gigs.forEach(function(t){var n={title:t.name,subTitle:this.getSubTitle(t),iconClass:this.getIconClass(t),link:this.getLink(t),buttonRow:this.getButtonRow(t),hiddenButtonRow:!0};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.date+" - "+e.venue+" - "+e.location},getIconClass:function(e){var t="";return void 0!==e.status&&("Proposed"==e.status&&(t="fa fa-question-circle-o"),"Settled"==e.status&&(t="fa fa-check-circle-o"),"Public"==e.status&&(t="fa fa-globe")),t},getLink:function(e){return"/gigs/"+e.id},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-pencil",link:"/gigs/"+e.id+"/edit",type:"minimal",theme:"primary"},{iconClass:"fa fa-trash",submit:!0,type:"minimal",theme:"primary",formWrapper:{formAction:"/gigs/"+e.id,formMethod:"POST",hiddenFields:[{name:"_token",value:this.csrfToken},{name:"_method",value:"DELETE"}]}}]}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(189),n(190),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),i=o(a),r=n(12),s=o(r),l=n(37),u=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default={name:"SetlistEditable",props:["setlist","repertoire","formData"],data:function(){return{htmlContent:"",modalHtmlContent:"",csrfToken:"",newSong:{},setlistSongModalButtons:{}}},created:function(){this.modalHtmlContent=this.createRepertoireModalElement()},mounted:function(){this.htmlContent=this.createListElement();var e=this,t=null,n=s([document.querySelector("#songs-list")]);n.on("drag",function(e,n){var o=[].indexOf.call(e.parentNode.children,e);t=o}),n.on("drop",function(n,o,a,i){var r=[].indexOf.call(n.parentNode.children,n);e.setlist.setlist_songs.splice(r,0,e.setlist.setlist_songs.splice(t,1)[0]),this.updateNumberInListForAllSetlistSongs()}.bind(this))},components:{SetlistSong:u.default},events:{reordered:function(e){this.reOrderSetlistSongs(e)}},methods:{createListElement:function(){return i.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,listItems:this.createListItems()})},createListItems:function(){var e=[];return this.setlist.setlist_songs.forEach(function(t){var n=this.setlistSongModalButtons[t.id],o={id:"setlist-"+this.setlist.id+"-song-"+t.song.id,title:t.song.title,buttonRow:{buttons:[{iconClass:"fa fa-minus",type:"minimal"}],buttonElements:[n]}};e.push(o)}.bind(this)),e},updateNumberInListForAllSetlistSongs:function(){this.setlist.setlist_songs.forEach(function(e,t){e.number_in_list=t+1})},createRepertoireListElement:function(){return i.Organisms.Menus.ListMenu.getModule({id:"repertoire-list",hover:!0,listItems:this.createRepertoireListItems()})},createRepertoireListItems:function(){var e=[];return this.repertoire.forEach(function(t){var n={id:"repertoire-"+this.setlist.id+"-song-"+t.id,title:t.title,buttonRow:{buttons:[{iconClass:"fa fa-plus"}]}};e.push(n)}.bind(this)),e},createRepertoireModalElement:function(){return i.Molecules.Messaging.Modal.getModule({id:"repertoire-modal",triggerElement:i.Atoms.Buttons.Button.getModule({content:"Add song",theme:"primary"}),modalElement:{title:"Repertoire",content:this.createRepertoireListElement(),scrollable:!0}})},createSetlistSongModalElement:function(){return i.Molecules.Messaging.Modal.getModule({id:"setlist-song-modal-"+this.formData.savedValues.id,triggerElement:i.Atoms.Buttons.Button.getModule({content:"Edit song",theme:"primary"}),modalElement:{title:"Setlist song",content:this.createModalContent(),scrollable:!0}})}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._l(e.setlist.setlist_songs,function(t){return n("div",[n("setlist-song",{attrs:{"form-data":{viewType:e.formData.viewType,savedValues:t},"setlist-song-id":t.id}})],1)}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.htmlContent)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.modalHtmlContent)}})],2)])},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(192),n(193),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"Songs",props:["songs"],data:function(){return{htmlContent:"",csrfToken:window.Laravel.csrfToken}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Menus.ListMenu.getModule({id:"songs-list",listItems:this.getListItems()})},getListItems:function(){var e=[];return this.songs.forEach(function(t){var n={title:t.title,subTitle:this.getSubTitle(t),link:this.getLink(t),buttonRow:this.getButtonRow(t),hiddenButtonRow:!0};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.artist},getLink:function(e){return"/songs/"+e.id},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-pencil",link:"/songs/"+e.id+"/edit",type:"minimal",theme:"primary"},{iconClass:"fa fa-trash",submit:!0,type:"minimal",theme:"primary",formWrapper:{formAction:"/songs/"+e.id,formMethod:"POST",hiddenFields:[{name:"_token",value:this.csrfToken},{name:"_method",value:"DELETE"}]}}]}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(195),n(196),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"UpcomingGigs",props:["gigs"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Menus.ListMenu.getModule({id:"songs-list",hover:!0,raised:!0,listItems:this.getListItems()})},getListItems:function(){var e=[];return this.gigs.forEach(function(t){var n={title:t.name,subTitle:this.getSubTitle(t),iconClass:this.getIconClass(t),link:this.getLink(t)};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.date+" - "+e.venue+" - "+e.location},getIconClass:function(e){var t="";return void 0!==e.status&&("Proposed"==e.status&&(t="fa fa-question-circle-o"),"Settled"==e.status&&(t="fa fa-check-circle-o"),"Public"==e.status&&(t="fa fa-globe")),t},getLink:function(e){return"/gigs/"+e.id}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(198),n(199),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"BandCards",data:function(){return{htmlContent:""}},props:["bands"],created:function(){this.htmlContent=this.getGridElement(this.bands)},methods:{getGridElement:function(e){var t=[];return e.forEach(function(e){t.push({sizes:{phone:12,tablet:6,tabletLandscape:6,screen:6},content:this.getCardElement(e)})}.bind(this)),a.Molecules.Sections.Grid.getModule({gridItems:t})},getCardElement:function(e){return a.Organisms.Cards.Card.getModule({title:e.name,theme:"primary",content:a.Organisms.Menus.ListMenu.getModule({id:"band-card-list-"+e.id,hover:!0,listItems:this.getListItems(e)})})},getListItems:function(e){return[{title:"Songs",iconClass:"fa fa-music",link:"/bands/"+e.id+"/songs"},{title:"Gigs",iconClass:"fa fa-calendar",link:"/bands/"+e.id+"/gigs"},{title:"Members",iconClass:"fa fa-group",link:"/bands/"+e.id+"/band-memberships"}]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(201),n(202),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"Breadcrumbs",props:["breadcrumbItems"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createBreadcrumbsElement()},methods:{createBreadcrumbsElement:function(){return a.Molecules.Navigation.Breadcrumbs.getModule({breadcrumbItems:this.breadcrumbItems})},createDummyListItems:function(){return[{title:"Lunch Gig",subTitle:"2017-10-28 - Johnny Walk Concert House - Morrisburgh",iconClass:"fa fa-globe",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Student event",subTitle:"2017-08-19 - Wisozk Lodge Stadium - North Lonport",iconClass:"fa fa-check-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Summer Music Fest",subTitle:"2012-12-06 - Shanel Alley Park - Leannonchester",iconClass:"fa fa-question-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}}]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(204),n(205),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"CustomButton",props:["button"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=a.Atoms.Buttons.Button.getModule(this.button)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(207),n(208),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"CustomButtonRow",props:["buttonRow"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=a.Molecules.Buttons.ButtonRow.getModule(this.buttonRow)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(210),n(212),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"MainFooter",props:["appVersion"],data:function(){return{htmlContent:this.createFooterElement()}},methods:{createFooterElement:function(){return a.Organisms.Global.Footer.getModule({logo:{image:{src:n(211),alt:"quarkGUI logo"},url:"/"},content:'\n                        <div class="text-center">\n                            <p>FlowGig licensed under <a href="https://github.com/flowgig/flowgig/blob/master/LICENSE">GNU General Public License</a></p>\n                            <p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>\n                            <small>'+this.appVersion+"</small>\n                        </div>\n\t\t\t        "})}}}},function(e,t){e.exports="/fonts/flowgig-logo-gray.svg?413772836746db575069063b35a2d033"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var o=n(3)(n(214),n(216),null,null,null);e.exports=o.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"MainNavigation",props:["currentBand","currentUser"],data:function(){return{htmlContent:"",header:{}}},created:function(){var e={id:"main-header",theme:"dark",logo:{image:{src:n(215),alt:"FlowGig logo"},url:"/dashboard"},primaryNavigation:{id:"primary-navigation",listItems:[]},sidebar:{sidebarNavigation:{listItems:[{name:"About",link:"",iconClass:"fa fa-info-circle"},{name:"Developers",link:"",iconClass:"fa fa-code"},{name:"Send feedback",link:"",iconClass:"fa fa-comment"}]}}};if(void 0!==this.currentBand){var t={name:this.currentBand.name,dropdownContent:{listItems:[{name:"Songs",link:"/bands/"+this.currentBand.id+"/songs",iconClass:"fa fa-music"},{name:"Gigs",link:"/bands/"+this.currentBand.id+"/gigs",iconClass:"fa fa-calendar"},{name:"Members",link:"/bands/"+this.currentBand.id+"/band-memberships",iconClass:"fa fa-group"}]}};e.primaryNavigation.listItems.push(t)}this.header=e,this.htmlContent=a.Organisms.Global.Header.getModule(this.header)}}},function(e,t){e.exports="/fonts/flowgig-beta-logo-white.svg?59e89767169b8b9e25aacaddc2115866"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){function o(e){n(218)}var a=n(3)(n(219),n(233),o,"data-v-af7af802",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(220),i=o(a),r=n(224),s=o(r),l=n(228),u=o(l),d=n(2),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d);t.default={name:"WelcomeScreen",props:["formType","formData"],components:{welcome:u.default,loginForm:i.default,registerForm:s.default},data:function(){return{logo:m.Atoms.Media.Image.getModule({src:n(232),alt:"FlowGig logo"})}}}},function(e,t,n){function o(e){n(221)}var a=n(3)(n(222),n(223),o,"data-v-e38bb6b6",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"LoginForm",data:function(){return{inputEmail:a.Molecules.FormElements.InputField.getModule({id:"login-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required","autofocus"]}),inputPassword:a.Molecules.FormElements.InputField.getModule({id:"login-password",name:"password",label:"Password",type:"password",attributes:["required"]}),checkboxRemember:a.Molecules.FormElements.Checkbox.getModule({id:"login-remember",name:"remember",label:"Remember Me",value:"true"}),loginButton:a.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Log in"}),csrfToken:window.Laravel.csrfToken}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:e.$parent.formData.loginUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputEmail)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPassword)}}),e._v(" "),n("div",{staticClass:"checkbox-container",domProps:{innerHTML:e._s(e.checkboxRemember)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.loginButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"}),e._v(" "),n("div",{staticClass:"text-center"},[n("a",{attrs:{href:e.$parent.formData.resetUrl}},[e._v("Forgot Your Password?")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box-header"},[n("p",[e._v("Log in")])])}]}},function(e,t,n){function o(e){n(225)}var a=n(3)(n(226),n(227),o,"data-v-50f58f42",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.default={name:"RegisterForm",data:function(){return{inputName:a.Molecules.FormElements.InputField.getModule({id:"register-name",name:"name",label:"Name",type:"text",value:this.$parent.formData.oldName,attributes:["required","autofocus"]}),inputEmail:a.Molecules.FormElements.InputField.getModule({id:"register-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required"]}),inputPassword:a.Molecules.FormElements.InputField.getModule({id:"register-password",name:"password",label:"Password",type:"password",attributes:["required"]}),inputPasswordConfirmation:a.Molecules.FormElements.InputField.getModule({id:"register-password_confirmation",name:"password_confirmation",label:"Confirm Password",type:"password",attributes:["required"]}),registerButton:a.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Register"}),csrfToken:window.Laravel.csrfToken}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:e.$parent.formData.registerUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputName)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputEmail)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPassword)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPasswordConfirmation)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.registerButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"})])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box-header"},[n("p",[e._v("Register")])])}]}},function(e,t,n){function o(e){n(229)}var a=n(3)(n(230),n(231),o,"data-v-6c4e89ba",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Welcome"}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"float-right"},[n("custom-button-row",{attrs:{"button-row":{id:"buttonRow",buttons:[{link:"/register",theme:"primary",content:"Register"},{link:"/login",theme:"primary",content:"Log in"}]}}})],1)},staticRenderFns:[]}},function(e,t){e.exports="/fonts/flowgig-logo-white.svg?c459988ca87c3c370f8dbc3b416cf9fb"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-screen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title",domProps:{innerHTML:e._s(e.logo)}}),e._v(" "),"welcome"==e.formType?n("div",[n("welcome")],1):"login"==e.formType?n("div",[n("login-form")],1):"register"==e.formType?n("div",[n("register-form")],1):e._e()])])])},staticRenderFns:[]}},function(e,t){}],[39]);