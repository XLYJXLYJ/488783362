webpackJsonp([16],{kNWv:function(t,e){},wfOv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("9rMa");var n=s("VlQd"),i={filters:{formatDate:function(t){var e=new Date(t);return Object(n.a)(e,"yyyy-MM-dd hh:mm:ss")}},data:function(){return{nosend:!0,title:[],projectid:""}},mounted:function(){this.getnosenddemo()},methods:{getnosenddemo:function(){var t=this;this.axios.post("/res/filelist",{userid:this.$store.state.userid,state:0}).then(function(e){"这回真的没有了~"==e.data.data.msg?(t.nosend=!1,t.$message({message:"没有未发布的作品",center:!0})):t.title=e.data.data})},edit:function(t){this.$store.state.demoxmlid=t,sessionStorage.snapdemoid=t},publish:function(t){this.$store.state.demoxmlid=t,this.$store.state.publicstate=0},deletedemo:function(t){var e=this;this.axios.post("/res/dealfile",{id:t,userid:sessionStorage.userid,state:4}).then(function(t){e.$message({message:"删除成功，请刷新，如需还原，请到回收站",center:!0}),location.reload()})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container29"},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.nosend,expression:"nosend"}]},t._l(t.title,function(e){return s("li",{key:e.id},[s("div",{staticClass:"all_up"},[s("img",{attrs:{src:e.imgBuffer,alt:""}}),t._v(" "),s("p",[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v(t._s(t._f("formatDate")(e.update_time)))])]),t._v(" "),s("router-link",{attrs:{to:"/Snap"}},[s("button",{staticClass:"button01",on:{click:function(s){t.edit(e.id)}}},[t._v("修改")])]),t._v(" "),s("router-link",{attrs:{to:"/publish"}},[s("button",{staticClass:"button02",on:{click:function(s){t.publish(e.id)}}},[t._v("发布")])]),t._v(" "),s("p",{staticClass:"cancelpub",on:{click:function(s){s.preventDefault(),s.stopPropagation(),t.deletedemo(e.id)}}},[t._v("删除")])],1)}))])},staticRenderFns:[]};var o=s("Z0/y")(i,a,!1,function(t){s("kNWv")},"data-v-cc62ae1a",null);e.default=o.exports}});
//# sourceMappingURL=16.c994362d21dd4bd19544.js.map