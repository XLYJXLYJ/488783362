webpackJsonp([29],{"71PL":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("NJF6"),a={filters:{looksums:function(t){t=t;return Object(o.a)(t)}},data:function(){return{list:[],listnum:[],j:1,load:!0,loaddown:!1}},mounted:function(){this.getdemo02()},methods:{getdemo02:function(){var t=this;this.axios.post("/res/filelist",{state:1,pagesize:16}).then(function(s){t.list=s.data.data,t.$store.state.searchdemo=!1,t.$store.state.recommenddemo=!1,t.$store.state.productiondemo=!0})},edit02:function(t){sessionStorage.id=t,this.$store.state.shareid=t},Seemoreproduction:function(){var t=this;this.j=this.j+1,this.axios.post("/res/filelist",{state:1,pagenum:this.j,pagesize:16}).then(function(s){"这回真的没有了~"==s.data.data.msg?(t.load=!1,t.loaddown=!0):(t.listnum=s.data.data,t.list=t.list.concat(t.listnum))})}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.productiondemo,expression:"$store.state.productiondemo"}],staticClass:"container02"},[e("el-row",{attrs:{gutter:10}},t._l(t.list,function(s){return e("el-col",{key:s.id,attrs:{xs:6,sm:6,md:6,lg:6,xl:6}},[e("router-link",{attrs:{to:"/Video"}},[e("div",{staticClass:"grid-content bg-purple list_pic",on:{click:function(e){t.edit02(s.id)}}},[e("div",{staticClass:"imgcon"},[e("img",{attrs:{src:s.imgBuffer,alt:""}})]),t._v(" "),e("p",[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"game_cat"},[t._v(t._s(s.desc))]),t._v(" "),e("span",{staticClass:"down01"},[e("i",{staticClass:"icon_see"},[e("span",[t._v(t._s(t._f("looksums")(s.looktotal)))])])]),t._v(" "),e("span",{staticClass:"down02"},[e("i",{staticClass:"icon_love"},[e("span",[t._v(t._s(t._f("looksums")(s.praisetotal)))])])]),t._v(" "),e("span",{staticClass:"down03"},[e("i",{staticClass:"icon_star"},[e("span",[t._v(t._s(t._f("looksums")(s.collecttotal)))])])])])])],1)})),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.load,expression:"load"}],staticClass:"button",on:{click:t.Seemoreproduction}},[t._v("查看更多作品")]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.loaddown,expression:"loaddown"}],staticClass:"buttonloaddown"},[t._v("已加载完全部作品")])],1)},staticRenderFns:[]};var n=e("Z0/y")(a,i,!1,function(t){e("EMPO")},"data-v-46cf9d99",null);s.default=n.exports},EMPO:function(t,s){}});
//# sourceMappingURL=29.c959d3d21e7d575ef7f4.js.map