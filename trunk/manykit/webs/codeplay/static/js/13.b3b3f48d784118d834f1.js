webpackJsonp([13],{"+A21":function(t,e){},"9bBU":function(t,e,s){s("mClu");var i=s("FeBl").Object;t.exports=function(t,e,s){return i.defineProperty(t,e,s)}},C4MV:function(t,e,s){t.exports={default:s("9bBU"),__esModule:!0}},CF2s:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s("bOdI"),o=s.n(n),r=(i={data:function(){return{list01:"",list02:"",list03:""}},mounted:function(){this.Getsource01(),this.select01(),this.Getsource03()}},o()(i,"mounted",function(){this.sourcemusic()}),o()(i,"methods",{sourcemusic:function(){var t=this;this.axios.post("/res/resourcelist",{userid:sessionStorage.userid,type:5}).then(function(e){t.list01=e.data.data,console.log(e)})},deletemaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:2}).then(function(t){console.log(t)})}}),i),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container710"},[s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.list01,function(e){return s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})]),t._v(" "),s("div",{staticClass:"roleup"},[s("button",{on:{click:function(s){t.deletemaster(e.id)}}},[t._v("删除")]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])])}))])])},staticRenderFns:[]};var a=s("VU/8")(r,u,!1,function(t){s("+A21")},"data-v-14e8b1a8",null);e.default=a.exports},bOdI:function(t,e,s){"use strict";e.__esModule=!0;var i,n=s("C4MV"),o=(i=n)&&i.__esModule?i:{default:i};e.default=function(t,e,s){return e in t?(0,o.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},mClu:function(t,e,s){var i=s("kM2E");i(i.S+i.F*!s("+E39"),"Object",{defineProperty:s("evD5").f})}});
//# sourceMappingURL=13.b3b3f48d784118d834f1.js.map