webpackJsonp([1],{FtFV:function(t,e){},pLZI:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{list01:"",list02:"",list03:""}},mounted:function(){this.sourcerole()},methods:{sourcerole:function(){var t=this;this.axios.post("/res/resourcelist",{userid:sessionStorage.userid,type:1}).then(function(e){t.list01=e.data.data,console.log(e)})},deletemaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:2}).then(function(t){console.log(t)})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container65"},[s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.list01,function(e){return s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})]),t._v(" "),s("div",{staticClass:"roleup"},[s("button",{on:{click:function(s){t.deletemaster(e.id)}}},[t._v("删除")]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])])}))])])},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("FtFV")},"data-v-babd56b2",null);e.default=o.exports}});
//# sourceMappingURL=1.0820b518a6d0bd05dfe3.js.map