webpackJsonp([38],{"1v9L":function(t,e){},"MqI/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{list01:""}},mounted:function(){this.sourcegame()},methods:{sourcegame:function(){var t=this;this.axios.post("/res/resourcelist",{userid:sessionStorage.userid,type:4}).then(function(e){t.list01=e.data.data,console.log(e)})},deletemaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:2}).then(function(t){console.log(t)})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container71"},[s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.list01,function(e){return s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})]),t._v(" "),s("div",{staticClass:"roleup"},[s("button",{on:{click:function(s){t.deletemaster(e.id)}}},[t._v("删除")]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])])}))])])},staticRenderFns:[]};var a=s("Z0/y")(i,n,!1,function(t){s("1v9L")},"data-v-03d9972b",null);e.default=a.exports}});
//# sourceMappingURL=38.ae4ec1c34e3af172ecc1.js.map