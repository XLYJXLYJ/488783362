webpackJsonp([28],{tPhg:function(t,e){},z4fV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{list:"",listnew:"",sort0101:!1,sort0102:!1,sort0103:!1,isdemohover01:"",isdemohover02:0,listnewlength:"",listnumtotal:0,cur_page:"",isresentshow:"",isdownshow:"",oneidbox:[{oneid:0,name:"全部"},{oneid:1,name:"动物"},{oneid:2,name:"工具"},{oneid:3,name:"人物"},{oneid:4,name:"图标"}],twoidbox01:[{twoid:0,name:"全部"},{twoid:1,name:"大象"},{twoid:2,name:"猴子"},{twoid:3,name:"狐狸"},{twoid:4,name:"家禽"},{twoid:5,name:"猫"},{twoid:6,name:"鸟"},{twoid:7,name:"其他"},{twoid:8,name:"狮子"},{twoid:9,name:"水生动物"},{twoid:10,name:"小狗"},{twoid:11,name:"鹦鹉"}],twoidbox02:[{twoid:0,name:"全部"},{twoid:1,name:"交通工具"},{twoid:2,name:"生活工具"}],twoidbox03:[{twoid:0,name:"全部"},{twoid:1,name:"机甲"},{twoid:2,name:"经典卡通"},{twoid:3,name:"龙珠"},{twoid:4,name:"冒险"},{twoid:5,name:"其他"}]}},mounted:function(){this.Getsource()},methods:{select01:function(t){var e=this;switch(this.isresentshow=!1,this.isdownshow=!1,this.isdemohover01=t,this.isdemohover02=0,t){case t=0:this.sort0101=!1,this.sort0102=!1,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:1,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data,e.cur_page=1});break;case t=1:this.sort0101=!0,this.sort0102=!1,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:1,twonav:1,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data,e.cur_page=1});break;case t=2:this.sort0101=!1,this.sort0102=!0,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:1,twonav:2,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data,e.cur_page=1});break;case t=3:this.sort0101=!1,this.sort0102=!1,this.sort0103=!0,this.axios.post("/res/resourcelist",{onenav:1,twonav:3,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data,e.cur_page=1});break;case t=4:this.sort0101=!1,this.sort0102=!1,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:1,twonav:4,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.listnewlength=t.data.total,e.list=t.data.data,e.listnew=t.data.data,e.cur_page=1})}},select0101:function(t){var e=this;this.isresentshow=!1,this.isdownshow=!1,this.isdemohover02=t,this.axios.post("/res/resourcelist",{onenav:1,twonav:this.isdemohover01,threenav:t,pagesize:15}).then(function(t){e.listnew=t.data.data,e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.cur_page=1})},Getsource:function(){var t=this;this.$store.state.sourcesearch=!1,this.$store.state.sourcebackg=!1,this.$store.state.sourcegame=!1,this.$store.state.sourcegsource=!1,this.$store.state.sourcemusic=!1,this.$store.state.sourcesource01=!0,this.$store.state.sourcelesson=!1,this.$store.state.sourcestudy=!1,this.axios.post("/res/resourcelist",{onenav:1,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},resentchange:function(){var t=this;this.isresentshow=!0,this.isdownshow=!1,this.axios.post("/res/resourcelist",{onenav:1,state:1,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.list=e.data.data,t.listnew=e.data.data})},mostuse:function(){var t=this;this.isresentshow=!1,this.isdownshow=!0,this.axios.post("/res/resourcelist",{onenav:1,state:2,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.list=e.data.data,t.listnew=e.data.data})},collectmaster:function(t){this.axios.post("/res/collectmaterial",{id:t}).then(function(t){})},handleCurrentChange:function(t){this.cur_page=t,this.getData()},Selectpagebefore:function(){this.cur_page=this.cur_page-1,this.getData()},Selectpageafter:function(){this.cur_page=this.cur_page+1,this.getData()},getData:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:1,twonav:this.isdemohover01,threenav:this.isdemohover02,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnew=e.data.data,t.listnew=e.data.data})}},components:{Sourcehead:s("JA2p").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.sourcesource01,expression:"$store.state.sourcesource01"}],staticClass:"container66"},[s("div",{staticClass:"sort01"},[s("p",{staticClass:"sort01text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.oneidbox,function(e,a){return s("li",{key:e.oneid,class:{demohover:a==t.isdemohover01},on:{click:function(s){t.select01(e.oneid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sort0101,expression:"sort0101"}],staticClass:"sort0101"},[s("p",{staticClass:"sort0101text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.twoidbox01,function(e,a){return s("li",{key:e.twoid,class:{demohover:a==t.isdemohover02},on:{click:function(s){t.select0101(e.twoid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sort0102,expression:"sort0102"}],staticClass:"sort0101"},[s("p",{staticClass:"sort0101text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.twoidbox02,function(e,a){return s("li",{key:e.twoid,class:{demohover:a==t.isdemohover02},on:{click:function(s){t.select0101(e.twoid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sort0103,expression:"sort0103"}],staticClass:"sort0101"},[s("p",{staticClass:"sort0101text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.twoidbox03,function(e,a){return s("li",{key:e.twoid,class:{demohover:a==t.isdemohover02},on:{click:function(s){t.select0101(e.twoid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{staticClass:"sort02"},[s("ul",[s("li",{staticClass:"more",class:{active:t.isresentshow}},[s("p",{on:{click:t.resentchange}},[t._v("最近更新")])]),t._v(" "),s("li",{staticClass:"new",class:{active:t.isdownshow}},[s("p",{on:{click:t.mostuse}},[t._v("最多下载")])])]),t._v(" "),s("p",{staticClass:"all"},[t._v("有"+t._s(t.listnewlength)+"个素材")])]),t._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.listnew,function(e,a){return a<15?s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("div",{staticClass:"roleimgbox"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})])]),t._v(" "),s("div",{staticClass:"roleup"},[s("a",{attrs:{href:"/codeplay/"+e.content,download:""}},[s("button",{on:{click:function(s){t.collectmaster(e.id)}}},[t._v("下载")])]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])]):t._e()}))]),t._v(" "),s("div",{staticClass:"sortpagenum"},[s("div",{staticClass:"sortpagenumcenter"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper",total:t.listnumtotal,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleCurrentChange,"prev-click":t.Selectpagebefore,"next-click":t.Selectpageafter,"update:total":function(e){t.listnumtotal=e}}})],1)])])},staticRenderFns:[]};var o=s("Z0/y")(a,i,!1,function(t){s("tPhg")},"data-v-6131abea",null);e.default=o.exports}});
//# sourceMappingURL=28.dd9688383b7dfe91ed58.js.map