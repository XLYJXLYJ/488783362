webpackJsonp([15],{"0SMW":function(t,e){},eA76:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{list:"",listnew:"",sort0101:!1,sort0102:!1,sort0103:!1,isdemohover01:"",isdemohover02:0,listnewlength:"",listnumtotal:0,cur_page:"",oneidbox:[{oneid:0,name:"全部"},{oneid:1,name:"卡通场景"},{oneid:2,name:"生活场景"},{oneid:3,name:"游戏场景"}],twoidbox01:[{twoid:0,name:"全部"},{twoid:1,name:"名胜古迹"},{twoid:2,name:"乡间风格"},{twoid:3,name:"自然风格"}],twoidbox02:[{twoid:0,name:"全部"},{twoid:1,name:"草地"},{twoid:2,name:"海边"},{twoid:3,name:"街道"},{twoid:4,name:"学校"}],twoidbox03:[{twoid:0,name:"全部"},{twoid:1,name:"节日风"},{twoid:2,name:"名胜古迹"}]}},mounted:function(){this.Getsource()},methods:{select01:function(t){var e=this;switch(this.isdemohover01=t,this.isdemohover02=0,t){case t=0:this.sort0101=!1,this.sort0102=!1,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:2,pagesize:15}).then(function(t){e.numpage=!0,e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data});break;case t=1:this.sort0101=!0,this.sort0102=!1,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:2,twonav:1,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.numpage=!1,e.list=t.data.data,e.listnew=t.data.data});break;case t=2:this.sort0101=!1,this.sort0102=!0,this.sort0103=!1,this.axios.post("/res/resourcelist",{onenav:2,twonav:2,pagesize:15}).then(function(t){e.numpage=!1,e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data});break;case t=3:this.sort0101=!1,this.sort0102=!1,this.sort0103=!0,this.axios.post("/res/resourcelist",{onenav:2,twonav:3,pagesize:15}).then(function(t){e.numpage=!1,e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data})}},select0101:function(t){var e=this;this.isdemohover02=t,0==t?(this.isdemohover03=1,this.axios.post("/res/resourcelist",{onenav:2,twonav:this.isdemohover01,threenav:0,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.listnew=t.data.data,e.numpage=!0})):this.axios.post("/res/resourcelist",{onenav:2,twonav:this.isdemohover01,threenav:t,pagesize:15}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.listnew=t.data.data,e.numpage=!1})},resentchange:function(){var t=this;this.isdemohover03=1,this.axios.post("/res/resourcelist",{onenav:2,state:1,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},mostuse:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:2,state:2,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},Getsource:function(){var t=this;this.$store.state.sourcesearch=!1,this.$store.state.sourcebackg=!0,this.$store.state.sourcegame=!1,this.$store.state.sourcegsource=!1,this.$store.state.sourcemusic=!1,this.$store.state.sourcesource01=!1,this.$store.state.sourcelesson=!1,this.$store.state.sourcestudy=!1,this.axios.post("/res/resourcelist",{onenav:2,pagesize:15}).then(function(e){t.list=e.data.data,t.listnew=e.data.data,t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15)})},collectmaster:function(t){this.axios.post("/res/collectmaterial",{id:t}).then(function(t){})},handleCurrentChange:function(t){this.cur_page=t,this.getData()},Selectpagebefore:function(){this.cur_page=this.cur_page-1,this.getData()},Selectpageafter:function(){this.cur_page=this.cur_page+1,this.getData()},getData:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:2,twonav:this.isdemohover01,threenav:this.isdemohover02,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnew=e.data.data,t.listnew=e.data.data})}},components:{Sourcehead:s("JA2p").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.sourcebackg,expression:"$store.state.sourcebackg"}],staticClass:"container63"},[s("div",{staticClass:"baozhu"},[s("div",{staticClass:"sort01"},[s("p",{staticClass:"sort01text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.oneidbox,function(e,a){return s("li",{key:e.oneid,class:{demohover:a==t.isdemohover01},on:{click:function(s){t.select01(e.oneid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sort0101,expression:"sort0101"}],staticClass:"sort0101"},[s("p",{staticClass:"sort0101text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.twoidbox01,function(e,a){return s("li",{key:e.twoid,class:{demohover:a==t.isdemohover02},on:{click:function(s){t.select0101(e.twoid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sort0102,expression:"sort0102"}],staticClass:"sort0101"},[s("p",{staticClass:"sort0101text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.twoidbox02,function(e,a){return s("li",{key:e.twoid,class:{demohover:a==t.isdemohover02},on:{click:function(s){t.select0101(e.twoid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sort0103,expression:"sort0103"}],staticClass:"sort0101"},[s("p",{staticClass:"sort0101text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.twoidbox03,function(e,a){return s("li",{key:e.twoid,class:{demohover:a==t.isdemohover02},on:{click:function(s){t.select0101(e.twoid)}}},[s("p",[t._v(t._s(e.name))])])}))])]),t._v(" "),s("div",{staticClass:"sort02"},[s("ul",[s("li",{staticClass:"more"},[s("p",{on:{click:t.resentchange}},[t._v("最近更新")])]),t._v(" "),s("li",{staticClass:"new"},[s("p",{on:{click:t.mostuse}},[t._v("最多下载")])])]),t._v(" "),s("p",{staticClass:"all"},[t._v("共有"+t._s(t.listnewlength)+"个素材")])]),t._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.listnew,function(e,a){return a<15?s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("img",{attrs:{src:"/codeplay/"+e.content}})]),t._v(" "),s("div",{staticClass:"roleup"},[s("a",{attrs:{href:"/codeplay/"+e.content,download:""}},[s("button",{on:{click:function(s){t.collectmaster(e.id)}}},[t._v("下载")])]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])]):t._e()}))]),t._v(" "),s("div",{staticClass:"sortpagenum"},[s("div",{staticClass:"sortpagenumcenter"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next, jumper",total:t.listnumtotal,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleCurrentChange,"prev-click":t.Selectpagebefore,"next-click":t.Selectpageafter,"update:total":function(e){t.listnumtotal=e}}})],1)])])},staticRenderFns:[]};var o=s("Z0/y")(a,i,!1,function(t){s("0SMW")},"data-v-e08ab87e",null);e.default=o.exports}});
//# sourceMappingURL=15.6bf4787d5449b3666f34.js.map