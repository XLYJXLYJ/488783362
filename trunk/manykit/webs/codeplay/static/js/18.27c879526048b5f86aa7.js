webpackJsonp([18],{"7nWS":function(e,t){},Kalm:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{list:"",listnew:"",nowid:1,pageuser:"",oneselectid:"",checked:!0,sort0101:!1,sort0102:!1,sort0103:!1,isdemohover03:"",pageitem:[{pageid:1},{pageid:2},{pageid:3},{pageid:4},{pageid:5},{pageid:6}]}},mounted:function(){this.Getsource()},methods:{Getsource:function(){var e=this;this.$store.state.sourcesearch=!1,this.$store.state.sourcebackg=!1,this.$store.state.sourcegame=!1,this.$store.state.sourcegsource=!1,this.$store.state.sourcemusic=!1,this.$store.state.sourcesource01=!1,this.$store.state.sourcelesson=!0,this.$store.state.sourcestudy=!1,this.axios.post("/res/resourcelist",{onenav:6,pagesize:15}).then(function(t){e.list=t.data.data,e.listnew=t.data.data,console.log(t)})},collectmaster:function(e){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:e,state:1}).then(function(e){console.log(e)})},Selectpage:function(e){this.nowid=e||1;var t=16*(e-1),s=16*e-1;console.log(t),console.log(s),this.listnew=this.list.slice(t,s)},Selectpageuser:function(e){var t=16*(this.pageuser-1),s=16*this.pageuser-1;console.log(t),console.log(s),this.listnew=this.list.slice(t,s)},Selectpagebefore:function(){var e=this.nowid,t=16*(e-2),s=16*(e-1)-1;this.nowid=this.nowid-1,console.log(t),console.log(s),this.listnew=this.list.slice(t,s)},Selectpageafter:function(){var e=this.nowid,t=16*e,s=16*(e+1)-1;this.nowid=this.nowid+1,console.log(t),console.log(s),this.listnew=this.list.slice(t,s)}},components:{Sourcehead:s("JA2p").a}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.sourcelesson,expression:"$store.state.sourcelesson"}],staticClass:"container6400"},[s("div",{staticClass:"sort01"}),e._v(" "),s("div",{staticClass:"sort02"},[e._m(0),e._v(" "),s("p",{staticClass:"all"},[e._v("共有"+e._s(e.listnew.length)+"个素材")])]),e._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},e._l(e.listnew,function(t,i){return i<15?s("li",{key:t.id},[s("div",{staticClass:"roleimg"},[s("img",{staticClass:"imglesson",attrs:{src:"/codeplay"+t.content}})]),e._v(" "),s("div",{staticClass:"roleup"},[s("button",{on:{click:function(s){e.downloadmaster(t.id)}}},[s("a",{attrs:{href:"/codeplay"+t.content,download:"素材.png"}},[e._v("下载")])]),e._v(" "),s("p",{staticClass:"text"},[e._v(e._s(t.name))])])]):e._e()}))]),e._v(" "),s("div",{staticClass:"sortnum01"},[s("ul",e._l(e.pageitem,function(t,i){return s("li",{key:t.pageid,class:{demohover:i==e.isdemohover03-1},on:{click:function(s){e.Selectpage(t.pageid)}}},[s("p",[e._v(e._s(t.pageid))])])})),e._v(" "),s("div",[s("p",[e._v("...")]),e._v(" "),s("p",{staticClass:"night",on:{click:function(t){e.Selectpage(9)}}},[e._v("9")]),e._v(" "),s("p",{staticClass:"endpage",on:{click:e.Selectpagebefore}},[e._v("上一页")]),e._v(" "),s("p",{staticClass:"nextpage",on:{click:e.Selectpageafter}},[e._v("下一页")])]),e._v(" "),s("div",{staticClass:"sortfly"},[s("p",{staticClass:"one"},[e._v("到第")]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pageuser,expression:"pageuser"}],attrs:{type:"text"},domProps:{value:e.pageuser},on:{input:function(t){t.target.composing||(e.pageuser=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"two"},[e._v("页")]),e._v(" "),s("button",[e._v("确定")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",{staticClass:"more"},[t("p",[this._v("最近更新")])]),this._v(" "),t("li",{staticClass:"new"},[t("p",[this._v("最多使用")])])])}]};var a=s("Z0/y")(i,o,!1,function(e){s("7nWS")},"data-v-7e78caef",null);t.default=a.exports}});
//# sourceMappingURL=18.27c879526048b5f86aa7.js.map