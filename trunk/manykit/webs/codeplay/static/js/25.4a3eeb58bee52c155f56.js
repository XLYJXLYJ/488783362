webpackJsonp([25],{"/ZoZ":function(t,e){},urvC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{list:"",listnew:"",nowid:1,pageuser:"",oneselectid:"",checked:!0,sort0101:!1,sort0102:!1,sort0103:!1,isdemohover03:"",pageitem:[{pageid:1},{pageid:2},{pageid:3},{pageid:4},{pageid:5},{pageid:6}]}},mounted:function(){this.Getsource()},methods:{Getsource:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:6,pagesize:15}).then(function(e){t.list=e.data.data,t.listnew=e.data.data,console.log(e)})},collectmaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:1}).then(function(t){console.log(t)})},Selectpage:function(t){this.nowid=t||1;var e=16*(t-1),s=16*t-1;console.log(e),console.log(s),this.listnew=this.list.slice(e,s)},Selectpageuser:function(t){var e=16*(this.pageuser-1),s=16*this.pageuser-1;console.log(e),console.log(s),this.listnew=this.list.slice(e,s)},Selectpagebefore:function(){var t=this.nowid,e=16*(t-2),s=16*(t-1)-1;this.nowid=this.nowid-1,console.log(e),console.log(s),this.listnew=this.list.slice(e,s)},Selectpageafter:function(){var t=this.nowid,e=16*t,s=16*(t+1)-1;this.nowid=this.nowid+1,console.log(e),console.log(s),this.listnew=this.list.slice(e,s)}},components:{Sourcehead:s("JA2p").a}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container640"},[s("div",{staticClass:"sort01"}),t._v(" "),s("div",{staticClass:"sort02"},[t._m(0),t._v(" "),s("p",{staticClass:"all"},[t._v("共有"+t._s(t.listnew.length)+"个素材")])]),t._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.listnew,function(e,i){return i<15?s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+e.content}})]),t._v(" "),s("div",{staticClass:"roleup"},[s("button",{on:{click:function(s){t.collectmaster(e.id)}}},[t._v("采集")]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])]):t._e()}))]),t._v(" "),s("div",{staticClass:"sortnum01"},[s("ul",t._l(t.pageitem,function(e,i){return s("li",{key:e.pageid,class:{demohover:i==t.isdemohover03-1},on:{click:function(s){t.Selectpage(e.pageid)}}},[s("p",[t._v(t._s(e.pageid))])])})),t._v(" "),s("div",[s("p",[t._v("...")]),t._v(" "),s("p",{staticClass:"night",on:{click:function(e){t.Selectpage(9)}}},[t._v("9")]),t._v(" "),s("p",{staticClass:"endpage",on:{click:t.Selectpagebefore}},[t._v("上一页")]),t._v(" "),s("p",{staticClass:"nextpage",on:{click:t.Selectpageafter}},[t._v("下一页")])]),t._v(" "),s("div",{staticClass:"sortfly"},[s("p",{staticClass:"one"},[t._v("到第")]),t._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pageuser,expression:"pageuser"}],attrs:{type:"text"},domProps:{value:t.pageuser},on:{input:function(e){e.target.composing||(t.pageuser=e.target.value)}}})]),t._v(" "),s("p",{staticClass:"two"},[t._v("页")]),t._v(" "),s("button",[t._v("确定")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",{staticClass:"more"},[e("p",[this._v("最近更新")])]),this._v(" "),e("li",{staticClass:"new"},[e("p",[this._v("最多使用")])])])}]};var a=s("Z0/y")(i,o,!1,function(t){s("/ZoZ")},"data-v-463c92d8",null);e.default=a.exports}});
//# sourceMappingURL=25.4a3eeb58bee52c155f56.js.map