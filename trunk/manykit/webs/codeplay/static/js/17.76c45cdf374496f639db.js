webpackJsonp([17],{LO4v:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{numpage:!0,list:"",listnew:"",nowid:1,pageuser:"",checked:!0,sort0101:!1,sort0102:!1,sort0103:!1,isdemohover01:"",isdemohover02:0,isdemohover03:1,listnewlength:"",listnumtotal:0,cur_page:"",oneidbox:[{oneid:0,name:"全部"},{oneid:1,name:"其他"},{oneid:2,name:"学习用品"}],pageitem:[{pageid:1},{pageid:2}]}},mounted:function(){this.Getsource()},methods:{select01:function(t){var e=this;switch(this.isdemohover01=t,this.isdemohover02=0,t){case t=0:this.axios.post("/res/resourcelist",{onenav:3,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data});break;case t=1:this.axios.post("/res/resourcelist",{onenav:3,twonav:1,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data});break;case t=2:this.axios.post("/res/resourcelist",{onenav:3,twonav:2,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data})}},Getsource:function(){var t=this;this.$store.state.sourcesearch=!1,this.$store.state.sourcebackg=!1,this.$store.state.sourcegame=!1,this.$store.state.sourcegsource=!1,this.$store.state.sourcemusic=!1,this.$store.state.sourcesource01=!1,this.$store.state.sourcelesson=!1,this.$store.state.sourcestudy=!0,this.axios.post("/res/resourcelist",{onenav:3,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},Getsourcetwo:function(t){var e=this;this.isdemohover01=t,this.isdemohover02=0,this.axios.post("/res/resourcelist",{onenav:1,twonav:t}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data})},resentchange:function(){var t=this;this.isdemohover03=1,this.axios.post("/res/resourcelist",{onenav:3,state:1,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},mostuse:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:3,state:2,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},collectmaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:1}).then(function(t){})},handleCurrentChange:function(t){this.cur_page=t,this.getData()},Selectpagebefore:function(){this.cur_page=this.cur_page-1,this.getData()},Selectpageafter:function(){this.cur_page=this.cur_page+1,this.getData()},getData:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:3,twonav:this.isdemohover01,threenav:this.isdemohover02,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnew=e.data.data,t.listnew=e.data.data})}},components:{Sourcehead:s("JA2p").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.sourcestudy,expression:"$store.state.sourcestudy"}],staticClass:"container67"},[s("div",{staticClass:"sort01"},[s("p",{staticClass:"sort01text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.oneidbox,function(e,a){return s("li",{key:e.oneid,class:{demohover:a==t.isdemohover01},on:{click:function(s){t.select01(e.oneid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{staticClass:"sort02"},[s("ul",[s("li",{staticClass:"more"},[s("p",{on:{click:t.resentchange}},[t._v("最近更新")])]),t._v(" "),s("li",{staticClass:"new"},[s("p",{on:{click:t.mostuse}},[t._v("最多下载")])])]),t._v(" "),s("p",{staticClass:"all"},[t._v("共有"+t._s(t.listnewlength)+"个素材")])]),t._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.listnew,function(e,a){return a<15?s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("div",{staticClass:"roleimgbox"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})])]),t._v(" "),s("div",{staticClass:"roleup"},[s("a",{attrs:{href:"/codeplay/"+e.content,download:""}},[s("button",{on:{click:function(s){t.collectmaster(e.id)}}},[t._v("下载")])]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])]):t._e()}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.numpage,expression:"numpage"}],staticClass:"sortpagenum"},[s("div",{staticClass:"sortpagenumcenter"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper",total:t.listnumtotal,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleCurrentChange,"prev-click":t.Selectpagebefore,"next-click":t.Selectpageafter,"update:total":function(e){t.listnumtotal=e}}})],1)])])},staticRenderFns:[]};var n=s("Z0/y")(a,i,!1,function(t){s("ZBeP")},"data-v-97a94058",null);e.default=n.exports},ZBeP:function(t,e){}});
//# sourceMappingURL=17.76c45cdf374496f639db.js.map