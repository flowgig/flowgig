webpackJsonp([1],[,function(e,t){e.exports=function(e,t,n,i,a){var o,r=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(o=e,r=e.default);var s="function"==typeof r?r.options:r;t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),i&&(s._scopeId=i);var u;if(a?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=u):n&&(u=n),u){var d=s.functional,c=d?s.render:s.beforeCreate;d?s.render=function(e,t){return u.call(t),c(e,t)}:s.beforeCreate=c?[].concat(c,u):[u]}return{esModule:o,exports:r,options:s}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){e.exports=[{name:"C",value:"C"},{name:"D",value:"D"},{name:"E",value:"E"},{name:"F",value:"F"},{name:"G",value:"G"},{name:"A",value:"A"},{name:"B",value:"B"},{name:"Cm",value:"Cm"},{name:"Dm",value:"Dm"},{name:"Em",value:"Em"},{name:"Fm",value:"Fm"},{name:"Gm",value:"Gm"},{name:"Am",value:"Am"},{name:"Bm",value:"Bm"},{name:"C♯",value:"C♯"},{name:"D♯",value:"D♯"},{name:"F♯",value:"F♯"},{name:"G♯",value:"G♯"},{name:"A♯",value:"A♯"},{name:"C♯m",value:"C♯m"},{name:"D♯m",value:"D♯m"},{name:"F♯m",value:"F♯m"},{name:"G♯m",value:"G♯m"},{name:"A♯m",value:"A♯m"},{name:"D♭",value:"D♭"},{name:"E♭",value:"E♭"},{name:"G♭",value:"G♭"},{name:"A♭",value:"A♭"},{name:"B♭♯",value:"B♭"},{name:"D♭m",value:"D♭m"},{name:"E♭m",value:"E♭m"},{name:"G♭m",value:"G♭m"},{name:"A♭m",value:"A♭m"},{name:"B♭m",value:"B♭m"}]},function(e,t,n){n(34),e.exports=n(196)},function(e,t,n){"use strict";var i=n(11),a=function(e){return e&&e.__esModule?e:{default:e}}(i),o=n(0),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);window.axios=n(6),window.axios.defaults.headers.common={"X-CSRF-TOKEN":window.Laravel.csrfToken,"X-Requested-With":"XMLHttpRequest"},a.default.component("Gig",n(128)),a.default.component("SetlistSong",n(132)),a.default.component("Song",n(135)),a.default.component("BandMembers",n(138)),a.default.component("Gigs",n(141)),a.default.component("Setlist",n(147)),a.default.component("Songs",n(153)),a.default.component("UpcomingGigs",n(156)),a.default.component("BandCards",n(159)),a.default.component("Breadcrumbs",n(162)),a.default.component("CustomButton",n(165)),a.default.component("CustomButtonRow",n(168)),a.default.component("MainFooter",n(171)),a.default.component("MainNavigation",n(175)),a.default.component("WelcomeScreen",n(179));new a.default({el:"#app"});r.Init.default()},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var i=n(1)(n(129),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(i),n(130)),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Gig",props:["formData"],template:o.default,data:function(){return{form:{data:"create"==this.formData.viewType?{}:this.formData.savedValues,readOnly:"show"==this.formData.viewType},csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";function i(e){return e.attributes.push("readonly"),e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a),r=o.Molecules.FormElements.InputField,l=o.Molecules.FormElements.SelectList,s=o.Molecules.FormElements.DatePicker,u=o.Atoms.Buttons.Button,d={name:{id:"name",name:"name",label:"Name",type:"text",placeholder:"Name of the gig",attributes:["required","v-model='form.data.name'"]},venue:{id:"venue",name:"venue",label:"Venue",type:"text",placeholder:"Venue the gig takes place",attributes:["v-model='form.data.venue'"]},location:{id:"location",name:"location",label:"Location",type:"text",placeholder:"Location of the gig",attributes:["v-model='form.data.location'"]},date:{id:"date",name:"date",label:"Date",type:"datetime",clockOptions:{required:!1},attributes:["v-model='form.data.date'"]},status:{id:"status",name:"status",label:"Status",searchable:!0,placeholder:"Status for the gig",options:n(131),attributes:["v-model='form.data.status'"]},actionButton:{create:{submit:!0,theme:"primary",content:"Create"},edit:{submit:!0,theme:"primary",content:"Update"},show:{submit:!1,theme:"primary",content:"Edit",attributes:["v-bind:href='this.formData.editLink'"]}}},c={name:{editable:r.getModule(d.name),readOnly:r.getModule(i(d.name))},venue:{editable:r.getModule(d.venue),readOnly:r.getModule(i(d.venue))},location:{editable:r.getModule(d.location),readOnly:r.getModule(i(d.location))},date:{editable:s.getModule(d.date),readOnly:s.getModule(i(d.date))},status:{editable:l.getModule(d.status),readOnly:l.getModule(i(d.status))},actionButton:{create:u.getModule(d.actionButton.create),edit:u.getModule(d.actionButton.edit),show:u.getModule(d.actionButton.show)}},f='\n<form method="POST" v-bind:action="formData.postUrl">\n    <input v-if="!form.readOnly" type="hidden" name="_token" v-bind:value="csrfToken" />\n    <input v-if="formData.viewType == \'edit\'" type="hidden" name="_method" value="PUT" />\n    <div v-if="form.readOnly">'+c.name.readOnly+"</div><div v-else>"+c.name.editable+'</div>\n    <div v-if="form.readOnly">'+c.venue.readOnly+"</div><div v-else>"+c.venue.editable+'</div>\n    <div v-if="form.readOnly">'+c.location.readOnly+"</div><div v-else>"+c.location.editable+'</div>\n    <div v-if="form.readOnly">'+c.date.readOnly+"</div><div v-else>"+c.date.editable+'</div>\n    <div v-if="form.readOnly">'+c.status.readOnly+"</div><div v-else>"+c.status.editable+'</div>\n    <div class="input-group float-right">\n        <div v-if="formData.viewType == \'create\'">'+c.actionButton.create+"</div>\n        <div v-else-if=\"formData.viewType == 'edit'\">"+c.actionButton.edit+"</div>\n        <div v-else-if=\"formData.viewType == 'show'\">"+c.actionButton.show+'</div>\n    </div>\n    <div class="clearfix"></div> \n</form>\n';t.default=f},function(e,t){e.exports=[{name:"Proposed",value:"Proposed"},{name:"Settled",value:"Settled"},{name:"Public",value:"Public"}]},function(e,t,n){var i=n(1)(n(133),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(i),n(134)),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"SetlistSong",props:["formData","setlistSongId"],template:o.default,data:function(){return{form:{data:"create"==this.formData.viewType?{}:this.formData.savedValues,readOnly:"show"==this.formData.viewType},csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";function i(e){return e.attributes.push("readonly"),e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a),r=o.Molecules.FormElements.InputField,l=o.Molecules.FormElements.SelectList,s=o.Molecules.FormElements.DatePicker,u=o.Atoms.Buttons.Button,d={key:{id:"key",name:"key",label:"Key",searchable:!0,placeholder:"E.g. F, Am, or C#",options:n(32),attributes:["v-model='form.data.key'","v-bind:id='\"key-\" + form.data.id'"]},bpm:{id:"bpm",name:"bpm",label:"BPM",type:"number",placeholder:"Beats Per Minute",attributes:["min='0'","v-model='form.data.bpm'"]},duration:{id:"duration",name:"duration",label:"Duration",type:"time",placeholder:"03:25",attributes:["v-model='form.data.duration'"],clockOptions:{showHours:!1}},intensity:{id:"intensity",name:"intensity",label:"Intensity",type:"number",placeholder:"1–10 (Ballad–Bebop)",attributes:["min='0'","max='10'","v-model='form.data.intensity'"]},actionButton:{create:{submit:!0,theme:"primary",content:"Create"},edit:{submit:!0,theme:"primary",content:"Update"},show:{submit:!1,theme:"primary",content:"Edit",attributes:["v-bind:href='this.formData.editLink'"]}}},c={key:{editable:l.getModule(d.key),readOnly:l.getModule(i(d.key))},bpm:{editable:r.getModule(d.bpm),readOnly:r.getModule(i(d.bpm))},duration:{editable:s.getModule(d.duration),readOnly:s.getModule(i(d.duration))},intensity:{editable:r.getModule(d.intensity),readOnly:r.getModule(i(d.intensity))},actionButton:{create:u.getModule(d.actionButton.create),edit:u.getModule(d.actionButton.edit),show:u.getModule(d.actionButton.show)}},f='\n<form method="POST" v-bind:action="formData.postUrl">\n    <input v-if="!form.readOnly" type="hidden" name="_token" v-bind:value="csrfToken" />\n    <input v-if="formData.viewType == \'edit\'" type="hidden" name="_method" value="PUT" />\n    <div v-if="form.readOnly">'+c.key.readOnly+"</div><div v-else>"+c.key.editable+'</div>\n    <div v-if="form.readOnly">'+c.bpm.readOnly+"</div><div v-else>"+c.bpm.editable+'</div>\n    <div v-if="form.readOnly">'+c.duration.readOnly+"</div><div v-else>"+c.duration.editable+'</div>\n    <div v-if="form.readOnly">'+c.intensity.readOnly+"</div><div v-else>"+c.intensity.editable+'</div>\n    <div class="input-group float-right">\n        <div v-if="formData.viewType == \'create\'">'+c.actionButton.create+"</div>\n        <div v-else-if=\"formData.viewType == 'edit'\">"+c.actionButton.edit+"</div>\n        <div v-else-if=\"formData.viewType == 'show'\">"+c.actionButton.show+'</div>\n    </div>\n    <div class="clearfix"></div> \n</form>\n';t.default=f},function(e,t,n){var i=n(1)(n(136),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(i),n(137)),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Song",props:["formData"],template:o.default,data:function(){return{form:{data:"create"==this.formData.viewType?{}:this.formData.savedValues,readOnly:"show"==this.formData.viewType},csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";function i(e){return e.attributes.push("readonly"),e}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a),r=o.Molecules.FormElements.InputField,l=o.Molecules.FormElements.SelectList,s=o.Molecules.FormElements.DatePicker,u=o.Atoms.Buttons.Button,d={title:{id:"title",name:"title",label:"Title",type:"text",placeholder:"The song title",attributes:["required","v-model='form.data.title'"]},artist:{id:"artist",name:"artist",label:"Artist",type:"text",placeholder:"The original artist/band",attributes:["v-model='form.data.artist'"]},lyricsBy:{id:"lyrics-by",name:"lyrics_by",label:"Lyrics by",type:"text",placeholder:"The lyrics author",attributes:["v-model='form.data.lyrics_by'"]},musicBy:{id:"music-by",name:"music_by",label:"Music by",type:"text",placeholder:"The music composer",attributes:["v-model='form.data.music_by'"]},key:{id:"key",name:"key",label:"Key",searchable:!0,placeholder:"E.g. F, Am, or C#",options:n(32),attributes:["v-model='form.data.key'"]},bpm:{id:"bpm",name:"bpm",label:"BPM",type:"number",placeholder:"Beats Per Minute",attributes:["min='0'","v-model='form.data.bpm'"]},duration:{id:"duration",name:"duration",label:"Duration",type:"time",placeholder:"03:25",attributes:["v-model='form.data.duration'"],clockOptions:{showHours:!1}},intensity:{id:"intensity",name:"intensity",label:"Intensity",type:"number",placeholder:"1–10 (Ballad–Bebop)",attributes:["min='0'","max='10'","v-model='form.data.intensity'"]},actionButton:{create:{submit:!0,theme:"primary",content:"Create"},edit:{submit:!0,theme:"primary",content:"Update"},show:{submit:!1,theme:"primary",content:"Edit",attributes:["v-bind:href='this.formData.editLink'"]}}},c={title:{editable:r.getModule(d.title),readOnly:r.getModule(i(d.title))},artist:{editable:r.getModule(d.artist),readOnly:r.getModule(i(d.artist))},lyricsBy:{editable:r.getModule(d.lyricsBy),readOnly:r.getModule(i(d.lyricsBy))},musicBy:{editable:r.getModule(d.musicBy),readOnly:r.getModule(i(d.musicBy))},key:{editable:l.getModule(d.key),readOnly:l.getModule(i(d.key))},bpm:{editable:r.getModule(d.bpm),readOnly:r.getModule(i(d.bpm))},duration:{editable:s.getModule(d.duration),readOnly:s.getModule(i(d.duration))},intensity:{editable:r.getModule(d.intensity),readOnly:r.getModule(i(d.intensity))},actionButton:{create:u.getModule(d.actionButton.create),edit:u.getModule(d.actionButton.edit),show:u.getModule(d.actionButton.show)}},f='\n<form method="POST" v-bind:action="formData.postUrl">\n    <input v-if="!form.readOnly" type="hidden" name="_token" v-bind:value="csrfToken" />\n    <input v-if="formData.viewType == \'edit\'" type="hidden" name="_method" value="PUT" />\n    <div v-if="form.readOnly">'+c.title.readOnly+"</div><div v-else>"+c.title.editable+'</div>\n    <div v-if="form.readOnly">'+c.artist.readOnly+"</div><div v-else>"+c.artist.editable+'</div>\n    <div v-if="form.readOnly">'+c.lyricsBy.readOnly+"</div><div v-else>"+c.lyricsBy.editable+'</div>\n    <div v-if="form.readOnly">'+c.musicBy.readOnly+"</div><div v-else>"+c.musicBy.editable+'</div>\n    <p v-if="form.readOnly">\n        The following properties are defaults which may be set different for each instance of this song in setlists\n    </p>\n    <p v-else>\n        You may set the following values different every time you add this song to a setlist, but values entered here will be used as default\n    </p>\n    <div v-if="form.readOnly">'+c.key.readOnly+"</div><div v-else>"+c.key.editable+'</div>\n    <div v-if="form.readOnly">'+c.bpm.readOnly+"</div><div v-else>"+c.bpm.editable+'</div>\n    <div v-if="form.readOnly">'+c.duration.readOnly+"</div><div v-else>"+c.duration.editable+'</div>\n    <div v-if="form.readOnly">'+c.intensity.readOnly+"</div><div v-else>"+c.intensity.editable+'</div>\n    <div class="input-group float-right">\n        <div v-if="formData.viewType == \'create\'">'+c.actionButton.create+"</div>\n        <div v-else-if=\"formData.viewType == 'edit'\">"+c.actionButton.edit+"</div>\n        <div v-else-if=\"formData.viewType == 'show'\">"+c.actionButton.show+'</div>\n    </div>\n    <div class="clearfix"></div> \n</form>\n';t.default=f},function(e,t,n){var i=n(1)(n(139),n(140),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"BandMembers",props:["bandMembers","authUser"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Lists.List.getModule({id:"band-members-list",hover:!1,listItems:this.getListItems()})},getListItems:function(){var e=[];return this.bandMembers.forEach(function(t){var n={title:t.user.name,buttonRow:this.getButtonRow(t)};e.push(n)}.bind(this)),e},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-trash",submit:!0}]}},validateDelete:function(e){return 1==this.bandMembers.length?(alert("You are the last member and cannot be removed.\n(You'll have to delete the band)"),!1):e==this.authUser.id?confirm("This completely removes your access to the band {{ $band->name }}"):confirm("This removes "+userName)}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(142),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(a),n(143)),r=i(o),l=n(146),s=i(l);t.default={name:"Gigs",props:["listItems"],template:s.default,components:{Gig:r.default}}},function(e,t,n){var i=n(1)(n(144),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(i),n(145)),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Gig",props:["listItem"],template:o.default,computed:{statusIconClass:function(){var e="";return void 0!==this.listItem.status&&("Proposed"==this.listItem.status&&(e="fa fa-question-circle-o"),"Settled"==this.listItem.status&&(e="fa fa-check-circle-o"),"Public"==this.listItem.status&&(e="fa fa-globe")),e},subTitle:function(){return this.listItem.date+" - "+this.listItem.venue+" - "+this.listItem.location},links:function(){return{show:"/gigs/"+this.listItem.id,edit:"/gigs/"+this.listItem.id+"/edit"}}},data:function(){return{csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),o=a.Molecules.Lists.ListItem,r=o.getModule({vueBindings:{title:"listItem.name",subTitle:"subTitle",link:"links.show",iconClass:"statusIconClass"},hiddenButtonRow:!0,buttonRow:{buttons:[{iconClass:"fa fa-pencil",type:"minimal",theme:"primary",vueBindings:{link:"links.edit"}},{iconClass:"fa fa-trash",submit:!0,type:"minimal",theme:"primary",formWrapper:{formMethod:"POST",vueBindings:{formAction:"links.show"},hiddenFields:[{name:"_token",vueBindings:{value:"csrfToken"}},{name:"_method",value:"DELETE"}]}}]}}),l=""+r;t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default='\n     <div>\n        <gig v-for="gig in listItems" v-bind:list-item="gig"></gig>\n     </div>\n'},function(e,t,n){var i=n(1)(n(148),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=(a(o),n(10)),l=(a(r),n(149)),s=i(l),u=n(150),d=i(u);t.default={name:"Setlist",props:["setlist","repertoire","formData"],template:s.default,data:function(){return{htmlContent:"",modalHtmlContent:"",csrfToken:"",newSong:{},setlistSongModalButtons:{}}},created:function(){},mounted:function(){},components:{SetlistSong:d.default},events:{reordered:function(e){this.reOrderSetlistSongs(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);a.Molecules.FormElements.InputField;t.default='\n        <div>\n            <div v-for="setlistSong in setlist.setlist_songs">\n                <setlist-song\n                        v-bind:form-data="{\n                            viewType: formData.viewType,\n                            savedValues: setlistSong}"\n                        v-bind:setlist-song-id="setlistSong.id">\n                </setlist-song>\n            </div> \n        </div>\n'},function(e,t,n){var i=n(1)(n(151),null,null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(i),n(152)),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"SetlistSong",props:["formData","setlistSongId"],template:o.default,data:function(){return{form:{data:"create"==this.formData.viewType?{}:this.formData.savedValues,readOnly:"show"==this.formData.viewType},csrfToken:window.Laravel.csrfToken}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),o=a.Molecules.Lists.ListItem,r=a.Atoms.Buttons.Button,l=(a.Molecules.Messaging.Modal,r.getModule({content:"Edit song",theme:"primary"})),s=o.getModule({vueBindings:{title:"form.data.song.title",subTitle:"form.data.song.artist"},buttonRow:{buttons:[{content:"remove",theme:"danger"}],buttonElements:[l]}}),u=""+s;t.default=u},function(e,t,n){var i=n(1)(n(154),n(155),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"Songs",props:["songs"],data:function(){return{htmlContent:"",csrfToken:window.Laravel.csrfToken}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Lists.List.getModule({id:"songs-list",listItems:this.getListItems()})},getListItems:function(){var e=[];return this.songs.forEach(function(t){var n={title:t.title,subTitle:this.getSubTitle(t),link:this.getLink(t),buttonRow:this.getButtonRow(t),hiddenButtonRow:!0};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.artist},getLink:function(e){return"/songs/"+e.id},getButtonRow:function(e){return{buttons:[{iconClass:"fa fa-pencil",link:"/songs/"+e.id+"/edit",type:"minimal",theme:"primary"},{iconClass:"fa fa-trash",submit:!0,type:"minimal",theme:"primary",formWrapper:{formAction:"/songs/"+e.id,formMethod:"POST",hiddenFields:[{name:"_token",value:this.csrfToken},{name:"_method",value:"DELETE"}]}}]}}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(157),n(158),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"UpcomingGigs",props:["gigs"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createListMenuElement()},methods:{createListMenuElement:function(){return a.Organisms.Lists.List.getModule({id:"songs-list",hover:!0,raised:!0,listItems:this.getListItems()})},getListItems:function(){var e=[];return this.gigs.forEach(function(t){var n={title:t.name,subTitle:this.getSubTitle(t),iconClass:this.getIconClass(t),link:this.getLink(t)};e.push(n)}.bind(this)),e},getSubTitle:function(e){return e.date+" - "+e.venue+" - "+e.location},getIconClass:function(e){var t="";return void 0!==e.status&&("Proposed"==e.status&&(t="fa fa-question-circle-o"),"Settled"==e.status&&(t="fa fa-check-circle-o"),"Public"==e.status&&(t="fa fa-globe")),t},getLink:function(e){return"/gigs/"+e.id}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(160),n(161),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"BandCards",data:function(){return{htmlContent:""}},props:["bands"],created:function(){this.htmlContent=this.getGridElement(this.bands)},methods:{getGridElement:function(e){var t=[];return e.forEach(function(e){t.push({sizes:{phone:12,tablet:6,tabletLandscape:6,screen:6},content:this.getCardElement(e)})}.bind(this)),a.Molecules.Sections.Grid.getModule({gridItems:t})},getCardElement:function(e){return a.Organisms.Cards.Card.getModule({title:e.name,theme:"primary",content:a.Organisms.Lists.List.getModule({id:"band-card-list-"+e.id,hover:!0,listItems:this.getListItems(e)})})},getListItems:function(e){return[{title:"Songs",iconClass:"fa fa-music",link:"/bands/"+e.id+"/songs"},{title:"Gigs",iconClass:"fa fa-calendar",link:"/bands/"+e.id+"/gigs"},{title:"Members",iconClass:"fa fa-group",link:"/bands/"+e.id+"/band-memberships"}]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(163),n(164),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"Breadcrumbs",props:["breadcrumbItems"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=this.createBreadcrumbsElement()},methods:{createBreadcrumbsElement:function(){return a.Molecules.Navigation.Breadcrumbs.getModule({breadcrumbItems:this.breadcrumbItems})},createDummyListItems:function(){return[{title:"Lunch Gig",subTitle:"2017-10-28 - Johnny Walk Concert House - Morrisburgh",iconClass:"fa fa-globe",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Student event",subTitle:"2017-08-19 - Wisozk Lodge Stadium - North Lonport",iconClass:"fa fa-check-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}},{title:"Summer Music Fest",subTitle:"2012-12-06 - Shanel Alley Park - Leannonchester",iconClass:"fa fa-question-circle-o",link:"#",buttonRow:{buttons:[{iconClass:"fa fa-pencil"},{iconClass:"fa fa-trash"}]}}]}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(166),n(167),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"CustomButton",props:["button"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=a.Atoms.Buttons.Button.getModule(this.button)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(169),n(170),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"CustomButtonRow",props:["buttonRow"],data:function(){return{htmlContent:""}},created:function(){this.htmlContent=a.Molecules.Buttons.ButtonRow.getModule(this.buttonRow)}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(172),n(174),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"MainFooter",props:["appVersion"],data:function(){return{htmlContent:this.createFooterElement()}},methods:{createFooterElement:function(){return a.Organisms.Global.Footer.getModule({logo:{image:{src:n(173),alt:"quarkGUI logo"},url:"/"},content:'\n                        <div class="text-center">\n                            <p>FlowGig licensed under <a href="https://github.com/flowgig/flowgig/blob/master/LICENSE">GNU General Public License</a></p>\n                            <p><a href="#">About</a> - <a href="#">Developers</a> - <a href="#">Send feedback</a></p>\n                            <small>'+this.appVersion+"</small>\n                        </div>\n\t\t\t        "})}}}},function(e,t){e.exports="/fonts/flowgig-logo-gray.svg?413772836746db575069063b35a2d033"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){var i=n(1)(n(176),n(178),null,null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"MainNavigation",props:["currentBand","currentUser"],data:function(){return{htmlContent:"",header:{}}},created:function(){var e={id:"main-header",theme:"dark",logo:{image:{src:n(177),alt:"FlowGig logo"},url:"/dashboard"},primaryNavigationLeft:{id:"primary-navigation-left",listItems:[]},primaryNavigationRight:{id:"primary-navigation-right",listItems:[]},sidebar:{sidebarNavigation:{listItems:[{name:"About",link:"",iconClass:"fa fa-info-circle"},{name:"Developers",link:"",iconClass:"fa fa-code"},{name:"Send feedback",link:"",iconClass:"fa fa-comment"}]}}};if(void 0!==this.currentBand){var t={name:this.currentBand.name,dropdownContent:{listItems:[{name:"Songs",link:"/bands/"+this.currentBand.id+"/songs",iconClass:"fa fa-music"},{name:"Gigs",link:"/bands/"+this.currentBand.id+"/gigs",iconClass:"fa fa-calendar"},{name:"Members",link:"/bands/"+this.currentBand.id+"/band-memberships",iconClass:"fa fa-group"}]}};e.primaryNavigationLeft.listItems.push(t)}if(void 0!==this.currentUser){var i={name:this.currentUser.name,iconClass:"fa fa-user",responsive:{showIcon:!0,showText:!1},dropdownContent:{listItems:[{name:"Dashboard",link:"/",iconClass:"fa fa fa-dashboard"},{name:"My account",link:"/account",iconClass:"fa fa-user"},{name:"Log out",link:"#",iconClass:"fa fa-sign-out"}]}};e.primaryNavigationRight.listItems.push(i)}this.header=e,this.htmlContent=a.Organisms.Global.Header.getModule(this.header)}}},function(e,t){e.exports="/fonts/flowgig-beta-logo-white.svg?59e89767169b8b9e25aacaddc2115866"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.htmlContent)}})},staticRenderFns:[]}},function(e,t,n){function i(e){n(180)}var a=n(1)(n(181),n(195),i,"data-v-af7af802",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(182),o=i(a),r=n(186),l=i(r),s=n(190),u=i(s),d=n(0),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d);t.default={name:"WelcomeScreen",props:["formType","formData"],components:{welcome:u.default,loginForm:o.default,registerForm:l.default},data:function(){return{logo:c.Atoms.Media.Image.getModule({src:n(194),alt:"FlowGig logo"})}}}},function(e,t,n){function i(e){n(183)}var a=n(1)(n(184),n(185),i,"data-v-e38bb6b6",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"LoginForm",data:function(){return{inputEmail:a.Molecules.FormElements.InputField.getModule({id:"login-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required","autofocus"]}),inputPassword:a.Molecules.FormElements.InputField.getModule({id:"login-password",name:"password",label:"Password",type:"password",attributes:["required"]}),checkboxRemember:a.Molecules.FormElements.Checkbox.getModule({id:"login-remember",name:"remember",label:"Remember Me",value:"true"}),loginButton:a.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Log in"}),csrfToken:window.Laravel.csrfToken}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:e.$parent.formData.loginUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputEmail)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPassword)}}),e._v(" "),n("div",{staticClass:"checkbox-container",domProps:{innerHTML:e._s(e.checkboxRemember)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.loginButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"}),e._v(" "),n("div",{staticClass:"text-center"},[n("a",{attrs:{href:e.$parent.formData.resetUrl}},[e._v("Forgot Your Password?")])])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box-header"},[n("p",[e._v("Log in")])])}]}},function(e,t,n){function i(e){n(187)}var a=n(1)(n(188),n(189),i,"data-v-50f58f42",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i);t.default={name:"RegisterForm",data:function(){return{inputName:a.Molecules.FormElements.InputField.getModule({id:"register-name",name:"name",label:"Name",type:"text",value:this.$parent.formData.oldName,attributes:["required","autofocus"]}),inputEmail:a.Molecules.FormElements.InputField.getModule({id:"register-email",name:"email",label:"E-Mail Address",type:"email",value:this.$parent.formData.oldEmail,attributes:["required"]}),inputPassword:a.Molecules.FormElements.InputField.getModule({id:"register-password",name:"password",label:"Password",type:"password",attributes:["required"]}),inputPasswordConfirmation:a.Molecules.FormElements.InputField.getModule({id:"register-password_confirmation",name:"password_confirmation",label:"Confirm Password",type:"password",attributes:["required"]}),registerButton:a.Atoms.Buttons.Button.getModule({submit:!0,theme:"primary",content:"Register"}),csrfToken:window.Laravel.csrfToken}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box z-2 login-box"},[n("div",{staticClass:"content"},[n("form",{attrs:{method:"POST",action:e.$parent.formData.registerUrl}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrfToken}}),e._v(" "),e._m(0),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputName)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputEmail)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPassword)}}),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.inputPasswordConfirmation)}}),e._v(" "),n("div",{staticClass:"input-group float-right"},[n("div",{domProps:{innerHTML:e._s(e.registerButton)}})]),e._v(" "),n("div",{staticClass:"clearfix"})])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-box-header"},[n("p",[e._v("Register")])])}]}},function(e,t,n){function i(e){n(191)}var a=n(1)(n(192),n(193),i,"data-v-6c4e89ba",null);e.exports=a.exports},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Welcome"}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"float-right"},[n("custom-button-row",{attrs:{"button-row":{id:"buttonRow",buttons:[{link:"/register",theme:"primary",content:"Register"},{link:"/login",theme:"primary",content:"Log in"}]}}})],1)},staticRenderFns:[]}},function(e,t){e.exports="/fonts/flowgig-logo-white.svg?c459988ca87c3c370f8dbc3b416cf9fb"},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-screen"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"title",domProps:{innerHTML:e._s(e.logo)}}),e._v(" "),"welcome"==e.formType?n("div",[n("welcome")],1):"login"==e.formType?n("div",[n("login-form")],1):"register"==e.formType?n("div",[n("register-form")],1):e._e()])])])},staticRenderFns:[]}},function(e,t){}],[33]);