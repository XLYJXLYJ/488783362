webpackJsonp([19],{TmYA:function(t,e){},VBLO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{list01:""}},mounted:function(){this.sourcebg()},methods:{sourcebg:function(){var t=this;this.axios.post("/res/resourcelist",{userid:sessionStorage.userid,type:2}).then(function(e){t.list01=e.data.data})},deletemaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:2}).then(function(t){})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container68"},[s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.list01,function(e){return s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})]),t._v(" "),s("div",{staticClass:"roleup"},[s("button",{on:{click:function(s){t.deletemaster(e.id)}}},[t._v("删除")]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])])}))])])},staticRenderFns:[]};var a=s("Z0/y")(i,n,!1,function(t){s("TmYA")},"data-v-732dcefc",null);e.default=a.exports}});
//# sourceMappingURL=19.be6eeddb74c7f5dcabcd.js.map