webpackJsonp([28],{MRkA:function(e,s){},ZFtp:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});t("7+uW");var i={data:function(){return{dialogImageUrl:"",isactive:!0,dialogVisible:!1,urllarge:"static/publish/9l.png",imageUrl:"",indexdemoid:"",demoname:"",demodes:"",readpicbinary:"",picdemo:"",result:"",Urlimg:[{url:"static/publish/1.png"},{url:"static/publish/2.png"},{url:"static/publish/3.png"},{url:"static/publish/4.png"},{url:"static/publish/5.png"},{url:"static/publish/6.png"},{url:"static/publish/7.png"},{url:"static/publish/8.png"}],uploadimg:{id:this.$store.state.demoxmlid,userid:sessionStorage.userid,title:this.demoname,desc:this.demodes,state:3,surfaceplot:this.indexdemoid},rules:{demoname:[{required:!0,message:"请输入作品名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 10 个字符",trigger:"blur"}],demodes:[{required:!0,message:"请输入作品描述",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}]}}},methods:{pickimg:function(e){this.imageUrl="",this.indexdemoid=e+1,this.urllarge="static/publish/"+this.indexdemoid+"l.png"},submitUpload:function(){var e=this;if(19==this.indexdemoid){this.picdemo=this.$store.state.demoxmlid,sessionStorage.picdemo=this.picdemo,sessionStorage.demoname=this.demoname,sessionStorage.demodes=this.demodes;var s=this.$refs.file_el.files[0];console.log(s),this.uploadFile(s)}else this.axios.post("/res/dealfile",{id:this.$store.state.demoxmlid,userid:sessionStorage.userid,title:this.demoname,desc:this.demodes,state:3,surfaceplot:this.indexdemoid,coverworkid:this.$store.state.demoxmlid}).then(function(s){e.$message({message:"发布成功",center:!0})})},uploadFile:function(e){var s=new FormData;s.append("id",sessionStorage.picdemo),s.append("userid",sessionStorage.userid),s.append("title",sessionStorage.demoname),s.append("desc",sessionStorage.demodes),s.append("state",3),s.append("surfaceplot",9),s.append("files",e),s.append("coverworkid",this.$store.state.demoxmlid);this.axios.post("/res/dealfile",s,{headers:{"Content-Type":"application/x-jpg"}}).then(function(e){console.log(e)}),this.$message({message:"上传成功",center:!0})},choise_file:function(){this.indexdemoid=19,this.urllarge="static/publish/"+this.indexdemoid+"l.png";var e=this.$refs.file_el.files[0],s=new FileReader;s.readAsDataURL(e);var t=this;s.onload=function(){t.imageUrl=this.result}}}},a={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container72"},[t("div",{staticClass:"container73"},[t("p",{staticClass:"publishdemo"},[e._v("发布作品")]),e._v(" "),t("div",{staticClass:"fengexian"}),e._v(" "),t("div",{staticClass:"demoname"},[t("p",[e._v("作品名称")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.demoname,expression:"demoname"}],attrs:{rules:e.rules,type:"text",placeholder:"请填写作品名"},domProps:{value:e.demoname},on:{input:function(s){s.target.composing||(e.demoname=s.target.value)}}})]),e._v(" "),t("div",{staticClass:"demodes"},[t("p",[e._v("作品说明")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.demodes,expression:"demodes"}],attrs:{rules:e.rules,type:"text",placeholder:"请填写作品描述"},domProps:{value:e.demodes},on:{input:function(s){s.target.composing||(e.demodes=s.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"userpic"},[t("input",{ref:"file_el",attrs:{type:"file"},on:{change:e.choise_file}}),e._v(" "),t("img",{attrs:{src:e.imageUrl}})]),e._v(" "),t("el-button",{staticClass:"send",on:{click:e.submitUpload}},[e._v("确认发布")]),e._v(" "),t("p",{staticClass:"uploadcover"},[e._v("作品封面")]),e._v(" "),t("p",{staticClass:"uploadtext"},[e._v("上传封面")]),e._v(" "),t("div",{staticClass:"imglarge"},[t("img",{attrs:{src:e.urllarge,alt:""}})]),e._v(" "),t("ul",{staticClass:"uploadimg"},e._l(e.Urlimg,function(s,i){return t("li",{key:i},[t("img",{attrs:{src:s.url,alt:""},on:{click:function(s){e.pickimg(i)}}})])}))],1)])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("a",{attrs:{href:"#/snap"}},[s("button",{staticClass:"returngo"},[this._v("返回")])])}]};var o=t("VU/8")(i,a,!1,function(e){t("MRkA")},null,null);s.default=o.exports}});
//# sourceMappingURL=28.3b190bcb31f4479981a5.js.map