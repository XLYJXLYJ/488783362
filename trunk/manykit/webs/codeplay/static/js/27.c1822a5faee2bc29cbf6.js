webpackJsonp([27],{"Im/w":function(t,s){},Usjj:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("VlQd"),i={filters:{formatDate:function(t){var s=new Date(t);return Object(a.a)(s,"yyyy-MM-dd")}},data:function(){return{list:[]}},mounted:function(){this.getdemo01()},methods:{getdemo01:function(){var t=this;this.axios.post("/res/filelist",{state:4,sortstate:2,pagesize:5}).then(function(s){t.list=s.data.data,t.$store.state.searchdemo=!1,t.$store.state.recommenddemo=!0,t.$store.state.productiondemo=!1})},edit04:function(t){sessionStorage.id=t,location.reload()}}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container38"},[e("ul",t._l(t.list,function(s,a){return a<5?e("li",{key:s.id,on:{click:function(e){t.edit04(s.id)}}},[e("img",{staticClass:"jinglin",attrs:{src:s.imgBuffer,alt:""}}),t._v(" "),e("p",{staticClass:"jinglingtext"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"time"},[t._v("分享于："+t._s(t._f("formatDate")(s.create_time)))]),t._v(" "),e("span",{staticClass:"icon_see_zan"},[e("i",{staticClass:"icon_zan"},[e("span",[t._v(t._s(s.looktotal))])])]),t._v(" "),e("span",{staticClass:"icon_see_star01"},[e("i",{staticClass:"icon_star"},[e("span",[t._v(t._s(s.collecttotal))])])]),t._v(" "),e("span",{staticClass:"icon_see_see01"},[e("i",{staticClass:"icon_see"},[e("span",[t._v(t._s(s.praisetotal))])])])]):t._e()}))])},staticRenderFns:[]};var o=e("Z0/y")(i,n,!1,function(t){e("Im/w")},"data-v-34150617",null);s.default=o.exports}});
//# sourceMappingURL=27.c1822a5faee2bc29cbf6.js.map