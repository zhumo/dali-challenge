webpackJsonp([0],{"//t2":function(t,e,r){"use strict";function n(t){r("GmI5")}var s=r("TQ0X"),a=r("wYE7"),i=r("VU/8"),c=n,u=i(s.a,a.a,c,null,null);e.a=u.exports},"/hAm":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"member-terms"},[t._v("Terms: "+t._s(t.termsList))])},s=[],a={render:n,staticRenderFns:s};e.a=a},0:function(t,e){},"5Xm4":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"member-name"},[r("a",{attrs:{href:t.url}},[t._v(t._s(t.name))])])},s=[],a={render:n,staticRenderFns:s};e.a=a},"5aZ+":function(t,e){},"5hxa":function(t,e,r){"use strict";e.a={props:{name:{type:String,required:!0},path:{type:String,required:!0}},computed:{url:function(){return this.path.match(/^\/\//i)?this.path:"http://mappy.dali.dartmouth.edu/"+this.path}}}},AWvJ:function(t,e){},BEbA:function(t,e){},Bwu1:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"member-image"},[r("img",{staticClass:"member-photo",attrs:{src:t.imageSrc}}),t._v(" "),r("yandex-map",{staticClass:"member-map",staticStyle:{width:"200px",height:"200px"},attrs:{coords:t.coords,behaviors:[],controls:["zoomControl"],"map-type":"map",zoom:"3"}},[r("ymap-marker",{attrs:{"marker-type":"placemark",coords:t.coords}})],1)],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},GmI5:function(t,e){},HcNO:function(t,e){},HmNH:function(t,e,r){"use strict";function n(t){r("5aZ+")}var s=r("y9N6"),a=r("/hAm"),i=r("VU/8"),c=n,u=i(s.a,a.a,c,null,null);e.a=u.exports},M93x:function(t,e,r){"use strict";function n(t){r("BEbA")}var s=r("xJD8"),a=r("rHGU"),i=r("VU/8"),c=n,u=i(s.a,a.a,c,null,null);e.a=u.exports},Mbub:function(t,e,r){"use strict";var n=r("uUiK"),s=r("ui6N"),a=r("HmNH"),i=r("//t2");e.a={name:"member",components:{MemberImage:n.a,MemberName:s.a,MemberTerms:a.a,MemberProjects:i.a},props:{member:{type:Object,required:!0}}}},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),s=r("M93x"),a=r("ORbq"),i=r("Hlu6"),c=r.n(i);n.a.config.productionTip=!1,n.a.use(a.a),n.a.use(c.a),new n.a({el:"#app",template:"<App/>",components:{App:s.a}})},TQ0X:function(t,e,r){"use strict";e.a={props:{projects:{type:Array,required:!0}},computed:{filteredProjects:function(){return this.projects.filter(function(t){return t.length>0})},hasProjects:function(){return this.filteredProjects.length>0},projectsList:function(){return this.filteredProjects.join(", ")}}}},ep0M:function(t,e,r){"use strict";function n(t){r("AWvJ")}var s=r("Mbub"),a=r("pERn"),i=r("VU/8"),c=n,u=i(s.a,a.a,c,null,null);e.a=u.exports},n0iN:function(t,e){},pERn:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"member-card"},[r("member-image",{attrs:{coords:t.member.lat_long,iconUrl:t.member.iconUrl}}),t._v(" "),r("member-name",{attrs:{name:t.member.name,path:t.member.url}}),t._v(" "),r("p",{staticClass:"member-message"},[t._v(t._s(t.member.message))]),t._v(" "),r("member-terms",{attrs:{terms:t.member.terms_on}}),t._v(" "),r("member-projects",{attrs:{projects:t.member.project}})],1)},s=[],a={render:n,staticRenderFns:s};e.a=a},rHGU:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},t._l(t.members,function(t){return r("member",{attrs:{member:t}})}))},s=[],a={render:n,staticRenderFns:s};e.a=a},uUiK:function(t,e,r){"use strict";function n(t){r("n0iN")}var s=r("vyeP"),a=r("Bwu1"),i=r("VU/8"),c=n,u=i(s.a,a.a,c,null,null);e.a=u.exports},ui6N:function(t,e,r){"use strict";function n(t){r("HcNO")}var s=r("5hxa"),a=r("5Xm4"),i=r("VU/8"),c=n,u=i(s.a,a.a,c,null,null);e.a=u.exports},vyeP:function(t,e,r){"use strict";e.a={props:{iconUrl:{type:String,required:!0},coords:{type:Array,required:!0}},computed:{imageSrc:function(){return"http://mappy.dali.dartmouth.edu/"+this.iconUrl}}}},wYE7:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.hasProjects?r("p",{staticClass:"member-projects"},[t._v("Projects: "+t._s(t.projectsList))]):t._e()},s=[],a={render:n,staticRenderFns:s};e.a=a},xJD8:function(t,e,r){"use strict";var n=r("ep0M");e.a={name:"app",components:{Member:n.a},data:function(){return{members:[]}},created:function(){var t=this;this.$http.get("http://mappy.dali.dartmouth.edu/members.json").then(function(e){t.members=e.body},function(t){alert("Something went wrong:"+t.status)})}}},y9N6:function(t,e,r){"use strict";e.a={props:{terms:{type:Array,required:!0}},computed:{termsList:function(){return this.terms.join(", ")}}}}},["NHnr"]);
//# sourceMappingURL=app.d76d6e382702366db1a8.js.map