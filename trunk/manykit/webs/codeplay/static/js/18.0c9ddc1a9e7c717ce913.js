webpackJsonp([18],{KbtF:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{numpage:!0,list:"",listnew:"",nowid:1,pageuser:"",checked:!0,sort0101:!1,sort0102:!1,sort0103:!1,isdemohover01:"",isdemohover02:0,isdemohover03:1,oneidbox:[{oneid:0,name:"全部"},{oneid:1,name:"摇滚"},{oneid:2,name:"乡村"},{oneid:3,name:"游戏"},{oneid:4,name:"流行"},{oneid:5,name:"古典"},{oneid:6,name:"爵士"}],pageitem:[{pageid:1},{pageid:2},{pageid:3},{pageid:4},{pageid:5},{pageid:6},{pageid:7},{pageid:8},{pageid:9},{pageid:10}]}},mounted:function(){this.Getsource()},methods:{select01:function(e){var t=this;switch(this.isdemohover01=e,this.isdemohover02=0,e){case e=0:this.axios.post("/res/resourcelist",{onenav:5,pagesize:15}).then(function(e){t.numpage=!0,t.list=e.data.data,t.listnew=e.data.data});break;case e=1:this.axios.post("/res/resourcelist",{onenav:5,twonav:1,pagesize:15}).then(function(e){t.numpage=!1,t.list=e.data.data,t.listnew=e.data.data});break;case e=2:this.axios.post("/res/resourcelist",{onenav:5,twonav:2,pagesize:15}).then(function(e){t.numpage=!1,t.list=e.data.data,t.listnew=e.data.data})}},Getsource:function(){var e=this;this.$store.state.sourcesearch=!1,this.$store.state.sourcebackg=!1,this.$store.state.sourcegame=!1,this.$store.state.sourcegsource=!1,this.$store.state.sourcemusic=!0,this.$store.state.sourcesource01=!1,this.$store.state.sourcelesson=!1,this.$store.state.sourcestudy=!1,this.axios.post("/res/resourcelist",{onenav:5,pagesize:15}).then(function(t){e.list=t.data.data,e.listnew=t.data.data,console.log(t)})},Getsourcetwo:function(e){var t=this;this.isdemohover01=e,this.isdemohover02=0,this.axios.post("/res/resourcelist",{onenav:5,twonav:e}).then(function(e){t.list=e.data.data,t.listnew=e.data.data})},collectmaster:function(e){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:e,state:1}).then(function(e){console.log(e)})},Selectpage:function(e){var t=this;this.isdemohover03=e,this.axios.post("/res/resourcelist",{onenav:5,twonav:this.isdemohover01,pagenum:e,pagesize:15}).then(function(e){t.listnew=e.data.data,t.listnew.length<15?t.numpage=!1:t.numpage=!0,t.listnew=e.data.data})},Selectpageuser:function(){var e=this;this.pageuser<1||this.pageuser>2?this.$message({message:"已经超过页数限制",center:!0}):(this.isdemohover03=this.pageuser,this.axios.post("/res/resourcelist",{onenav:5,twonav:this.isdemohover01,pagenum:this.pageuser,pagesize:15}).then(function(t){e.listnew=t.data.data,e.listnew.length,e.numpage=!0,e.listnew=t.data.data}))},Selectpagebefore:function(){var e=this;this.isdemohover03<=1&&(this.isdemohover03=1),this.axios.post("/res/resourcelist",{onenav:5,twonav:this.isdemohover01,pagenum:--this.isdemohover03,pagesize:15}).then(function(t){e.listnew=t.data.data,e.listnew.length,e.numpage=!0,e.listnew=t.data.data})},Selectpageafter:function(){var e=this;this.isdemohover03>=10&&(this.isdemohover03=10),this.axios.post("/res/resourcelist",{onenav:5,twonav:this.isdemohover01,pagenum:++this.isdemohover03,pagesize:15}).then(function(t){e.listnew=t.data.data,e.listnew.length,e.numpage=!0,e.listnew=t.data.data})}},components:{Sourcehead:s("JA2p").a}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.sourcemusic,expression:"$store.state.sourcemusic"}],staticClass:"container80"},[s("div",{staticClass:"sort01"},[s("p",{staticClass:"sort01text"},[e._v("作品分类:")]),e._v(" "),s("ul",e._l(e.oneidbox,function(t,a){return s("li",{key:t.oneid,class:{demohover:a==e.isdemohover01},on:{click:function(s){e.select01(t.oneid)}}},[s("p",[e._v(e._s(t.name))])])}))]),e._v(" "),s("div",{staticClass:"sort02"},[e._m(0),e._v(" "),s("p",{staticClass:"all"},[e._v("共有"+e._s(e.listnew.length)+"个素材")])]),e._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},e._l(e.listnew,function(t,a){return a<15?s("li",{key:t.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+t.content}})]),e._v(" "),s("div",{staticClass:"roleup"},[s("button",[s("a",{attrs:{href:"/codeplay/"+t.content,download:""}},[e._v("下载")])]),e._v(" "),s("p",{staticClass:"text"},[e._v(e._s(t.name))])])]):e._e()}))]),e._v(" "),s("div",{staticClass:"sortnum01"},[s("ul",e._l(e.pageitem,function(t,a){return a<10?s("li",{key:t.pageid,class:{demohover:a+1==e.isdemohover03},on:{click:function(s){e.Selectpage(t.pageid)}}},[s("p",[e._v(e._s(t.pageid))])]):e._e()})),e._v(" "),s("div",[s("p",{staticClass:"endpage",on:{click:e.Selectpagebefore}},[e._v("上一页")]),e._v(" "),s("p",{staticClass:"nextpage",on:{click:e.Selectpageafter}},[e._v("下一页")])]),e._v(" "),s("div",{staticClass:"sortfly"},[s("p",{staticClass:"one"},[e._v("到第")]),e._v(" "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pageuser,expression:"pageuser"}],attrs:{type:"text"},domProps:{value:e.pageuser},on:{input:function(t){t.target.composing||(e.pageuser=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"two"},[e._v("页")]),e._v(" "),s("button",{on:{click:e.Selectpageuser}},[e._v("确定")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",{staticClass:"more"},[t("p",[this._v("最近更新")])]),this._v(" "),t("li",{staticClass:"new"},[t("p",[this._v("最多使用")])])])}]};var o=s("VU/8")(a,i,!1,function(e){s("s3KU")},"data-v-7ef4e1c7",null);t.default=o.exports},s3KU:function(e,t){}});
//# sourceMappingURL=18.0c9ddc1a9e7c717ce913.js.map