webpackJsonp([19],{"9hP1":function(t,e){},qviN:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{list:"",listnew:"",sort0101:!1,sort0102:!1,sort0103:!1,isdemohover01:"",isdemohover02:0,pagesum:"",listnewlength:"",listnumtotal:0,cur_page:"",isresentshow:"",isdownshow:"",currentPage3:1,oneidbox:[{oneid:0,name:"全部"},{oneid:1,name:"NPC"},{oneid:2,name:"宝石"},{oneid:3,name:"穿戴"},{oneid:4,name:"道具"},{oneid:5,name:"技能"},{oneid:6,name:"角色"},{oneid:7,name:"特技"},{oneid:8,name:"武器"},{oneid:9,name:"药水"}],pageitem:[{pageid:1},{pageid:2},{pageid:3},{pageid:4},{pageid:5},{pageid:6},{pageid:7},{pageid:8},{pageid:9},{pageid:10}]}},mounted:function(){this.Getsource()},methods:{Getsource:function(){var t=this;this.currentPage3=1,this.$store.state.sourcesearch=!1,this.$store.state.sourcebackg=!1,this.$store.state.sourcegame=!0,this.$store.state.sourcegsource=!1,this.$store.state.sourcemusic=!1,this.$store.state.sourcesource01=!1,this.$store.state.sourcelesson=!1,this.$store.state.sourcestudy=!1,this.axios.post("/res/resourcelist",{onenav:4,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},Getsourcetwo:function(t){var e=this;this.currentPage3=1,this.isresentshow=!1,this.isdownshow=!1,this.isdemohover01=t,this.isdemohover02=0,0!=t?this.axios.post("/res/resourcelist",{onenav:4,twonav:t}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data}):(this.numpage=!0,this.axios.post("/res/resourcelist",{onenav:4}).then(function(t){e.listnewlength=t.data.total,e.listnumtotal=10*Math.ceil(e.listnewlength/15),e.list=t.data.data,e.listnew=t.data.data}))},resentchange:function(){var t=this;this.currentPage3=1,this.isresentshow=!0,this.isdownshow=!1,this.axios.post("/res/resourcelist",{onenav:4,state:1,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},mostuse:function(){var t=this;this.currentPage3=1,this.isresentshow=!1,this.isdownshow=!0,this.axios.post("/res/resourcelist",{onenav:4,state:2,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnewlength=e.data.total,t.listnumtotal=10*Math.ceil(t.listnewlength/15),t.list=e.data.data,t.listnew=e.data.data})},collectmaster:function(t){this.axios.post("/res/collectmaterial",{userid:sessionStorage.userid,id:t,state:1}).then(function(t){})},handleCurrentChange:function(t){this.cur_page=t,this.currentPage3=t,this.getData()},Selectpagebefore:function(){this.cur_page=this.cur_page-1,this.getData()},Selectpageafter:function(){this.cur_page=this.cur_page+1,this.getData()},getData:function(){var t=this;this.axios.post("/res/resourcelist",{onenav:4,twonav:this.isdemohover01,threenav:this.isdemohover02,pagenum:this.cur_page,pagesize:15}).then(function(e){t.listnew=e.data.data,t.listnew=e.data.data})}},components:{Sourcehead:s("JA2p").a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.sourcegame,expression:"$store.state.sourcegame"}],staticClass:"container64"},[s("div",{staticClass:"sort01"},[s("p",{staticClass:"sort01text"},[t._v("作品分类:")]),t._v(" "),s("ul",t._l(t.oneidbox,function(e,a){return s("li",{key:e.oneid,class:{demohover:a==t.isdemohover01},on:{click:function(s){t.Getsourcetwo(e.oneid)}}},[s("p",[t._v(t._s(e.name))])])}))]),t._v(" "),s("div",{staticClass:"sort02"},[s("ul",[s("li",{staticClass:"more",class:{active:t.isresentshow}},[s("p",{on:{click:t.resentchange}},[t._v("最近更新")])]),t._v(" "),s("li",{staticClass:"new",class:{active:t.isdownshow}},[s("p",{on:{click:t.mostuse}},[t._v("最多下载")])])]),t._v(" "),s("p",{staticClass:"all"},[t._v("共有"+t._s(t.listnewlength)+"个素材")])]),t._v(" "),s("div",{staticClass:"first"},[s("ul",{staticClass:"role"},t._l(t.listnew,function(e,a){return a<15?s("li",{key:e.id},[s("div",{staticClass:"roleimg"},[s("div",{staticClass:"roleimgbox"},[s("img",{attrs:{src:"/codeplay/"+e.content,alt:""}})])]),t._v(" "),s("div",{staticClass:"roleup"},[s("a",{attrs:{href:"/codeplay/"+e.content,download:""}},[s("button",{on:{click:function(s){t.collectmaster(e.id)}}},[t._v("下载")])]),t._v(" "),s("p",{staticClass:"text"},[t._v(t._s(e.name))])])]):t._e()}))]),t._v(" "),s("div",{staticClass:"sortpagenum"},[s("div",{staticClass:"sortpagenumcenter"},[s("el-pagination",{attrs:{background:"","current-page":t.currentPage3,layout:"prev, pager, next, jumper",total:t.listnumtotal,"prev-text":"上一页","next-text":"下一页"},on:{"update:currentPage":function(e){t.currentPage3=e},"current-change":t.handleCurrentChange,"prev-click":t.Selectpagebefore,"next-click":t.Selectpageafter,"update:total":function(e){t.listnumtotal=e}}})],1)]),t._v(" "),s("p",{staticClass:"endtext"},[t._v("部分素材来源自网络，版权归原作者所有。所有素材仅供个人创作娱乐使用，禁止做任何商业用途，由此产生的任何法律纠纷本网站不予承担")])])},staticRenderFns:[]};var n=s("Z0/y")(a,i,!1,function(t){s("9hP1")},"data-v-d306e002",null);e.default=n.exports}});
//# sourceMappingURL=19.fd060df375fb2680a960.js.map