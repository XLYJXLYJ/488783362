webpackJsonp([28],{IUuK:function(t,s){},Usjj:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("VlQd"),i=e("NJF6"),n={filters:{formatDate:function(t){var s=new Date(t);return Object(a.a)(s,"yyyy-MM-dd")},looksums:function(t){t=t;return Object(i.a)(t)}},data:function(){return{list:[]}},mounted:function(){this.getdemo01()},methods:{getdemo01:function(){var t=this;this.axios.post("/res/filelist",{state:4,sortstate:2,pagesize:5}).then(function(s){t.list=s.data.data,t.$store.state.searchdemo=!1,t.$store.state.recommenddemo=!0,t.$store.state.productiondemo=!1})},edit04:function(t){sessionStorage.id=t,location.reload()}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container38"},[e("ul",t._l(t.list,function(s,a){return a<5?e("li",{key:s.id,on:{click:function(e){t.edit04(s.id)}}},[e("img",{staticClass:"jinglin",attrs:{src:s.imgBuffer,alt:""}}),t._v(" "),e("p",{staticClass:"jinglingtext"},[t._v(t._s(s.title))]),t._v(" "),e("span",{staticClass:"time"},[t._v("分享于："+t._s(t._f("formatDate")(s.create_time)))]),t._v(" "),e("span",{staticClass:"icon_see_zan"},[e("i",{staticClass:"icon_zan"},[e("span",[t._v(t._s(t._f("looksums")(s.praisetotal)))])])]),t._v(" "),e("span",{staticClass:"icon_see_star01"},[e("i",{staticClass:"icon_star"},[e("span",[t._v(t._s(t._f("looksums")(s.collecttotal)))])])]),t._v(" "),e("span",{staticClass:"icon_see_see01"},[e("i",{staticClass:"icon_see"},[e("span",[t._v(t._s(t._f("looksums")(s.looktotal)))])])])]):t._e()}))])},staticRenderFns:[]};var c=e("Z0/y")(n,o,!1,function(t){e("IUuK")},"data-v-2a0b5527",null);s.default=c.exports}});
//# sourceMappingURL=28.3a28669296762f703a14.js.map