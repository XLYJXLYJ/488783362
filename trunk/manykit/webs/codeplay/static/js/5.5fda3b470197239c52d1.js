webpackJsonp([5],{"59aK":function(t,s){},sp77:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{list:[],i:1,load:!0,loaddown:!1}},mounted:function(){this.getdemo01()},methods:{getdemo01:function(){var t=this;this.axios.post("/res/filelist",{state:4,sortstate:2,pagesize:16}).then(function(s){t.list=s.data.data,t.$store.state.searchdemo=!1,t.$store.state.recommenddemo=!0,t.$store.state.productiondemo=!1})},edit01:function(t){sessionStorage.id=t,this.$store.state.shareid=t},Seemorerecommend:function(){var t=this;this.i=this.i+1,this.axios.post("/res/filelist",{state:4,sortstate:2,pagenum:this.i,pagesize:16}).then(function(s){"这回真的没有了~"==s.data.data.msg?(t.load=!1,t.loaddown=!0):(t.listnum=s.data.data,t.list=t.list.concat(t.listnum))})}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.recommenddemo,expression:"$store.state.recommenddemo"}],staticClass:"container01"},[e("el-row",{attrs:{gutter:10}},t._l(t.list,function(s){return e("el-col",{key:s.id,attrs:{xs:6,sm:6,md:6,lg:6,xl:6}},[e("router-link",{attrs:{to:"/Video"}},[e("div",{staticClass:"grid-content bg-purple list_pic",on:{click:function(e){t.edit01(s.id)}}},[e("div",{staticClass:"imgcon"},[e("img",{attrs:{src:s.imgBuffer,alt:""}})]),t._v(" "),e("p",[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"game_cat"},[t._v(t._s(s.desc))]),t._v(" "),e("span",{staticClass:"down01"},[e("i",{staticClass:"icon_see"},[e("span",[t._v(t._s(s.looktotal))])])]),t._v(" "),e("span",{staticClass:"down02"},[e("i",{staticClass:"icon_love"},[e("span",[t._v(t._s(s.praisetotal))])])]),t._v(" "),e("span",{staticClass:"down03"},[e("i",{staticClass:"icon_star"},[e("span",[t._v(t._s(s.collecttotal))])])])])])],1)})),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"button",on:{click:t.Seemorerecommend}},[t._v("查看更多作品")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.loaddown,expression:"loaddown"}],staticClass:"buttonloaddown"},[t._v("已加载完全部作品")])],1)},staticRenderFns:[]};var i=e("Z0/y")(a,o,!1,function(t){e("59aK")},"data-v-caeb0be2",null);s.default=i.exports}});
//# sourceMappingURL=5.5fda3b470197239c52d1.js.map