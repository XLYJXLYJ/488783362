webpackJsonp([22],{XU4m:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={data:function(){return{list01:"",list02:"",list03:""}},mounted:function(){this.sourcestudy()},methods:{sourcestudy:function(){var t=this;this.axios.post("/res/resourcelist",{userid:sessionStorage.userid,type:3}).then(function(s){t.list01=s.data.data})},deletemaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:2}).then(function(t){})}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container7100"},[e("div",{staticClass:"first"},[e("ul",{staticClass:"role"},t._l(t.list01,function(s){return e("li",{key:s.id},[e("div",{staticClass:"roleimg"},[e("img",{attrs:{src:"/codeplay/"+s.content,alt:""}})]),t._v(" "),e("div",{staticClass:"roleup"},[e("button",{on:{click:function(e){t.deletemaster(s.id)}}},[t._v("删除")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.name))])])])}))])])},staticRenderFns:[]};var a=e("Z0/y")(i,n,!1,function(t){e("Y3ax")},"data-v-79c2949f",null);s.default=a.exports},Y3ax:function(t,s){}});
//# sourceMappingURL=22.f6aa049b0df4d0e4eea6.js.map