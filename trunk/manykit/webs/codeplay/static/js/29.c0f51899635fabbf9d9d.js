webpackJsonp([29],{ZFtp:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("MVMM");var i={data:function(){return{urllarge:"static/publish/8l.png",imageUrl:"static/publish/1l.png",indexdemoid:1,demoname:"",demodes:"",readpicbinary:"",result:"",picdemo:"",Urlimg:[{url:"static/publish/1.png"},{url:"static/publish/2.png"},{url:"static/publish/3.png"},{url:"static/publish/4.png"},{url:"static/publish/5.png"},{url:"static/publish/6.png"},{url:"static/publish/7.png"},{url:"static/publish/8.png"}],rules:{demoname:[{required:!0,message:"请输入作品名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 10 个字符",trigger:"blur"}],demodes:[{required:!0,message:"请输入作品描述",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}]}}},mounted:function(){this.loadprojectdes()},methods:{pickimg:function(e){this.imageUrl="",this.indexdemoid=e+1,this.urllarge="static/publish/"+this.indexdemoid+"l.png"},loadprojectdes:function(){var e=this;console.log(this.$store.state.demoxmlid),this.axios.post("/res/getfile",{userid:sessionStorage.userid,id:this.$store.state.demoxmlid,state:3}).then(function(t){e.demoname=t.data.data.title,e.demodes=t.data.data.desc})},submitUpload:function(){var e=this;if(19==this.indexdemoid){this.picdemo=this.$store.state.demoxmlid,sessionStorage.demoname=this.demoname,sessionStorage.demodes=this.demodes;var t=this.$refs.file_el.files[0];this.uploadFile(t)}else this.axios.post("/res/dealfile",{id:this.$store.state.demoxmlid,userid:sessionStorage.userid,title:this.demoname,desc:this.demodes,state:3,surfaceplot:this.indexdemoid,coverworkid:this.$store.state.demoxmlid}).then(function(t){e.$message({message:"发布成功",center:!0}),setTimeout(e.$router.go(-1),3e3)})},returngo:function(){sessionStorage.snapdemoid=this.$store.state.demoxmlid,this.$router.go(-1)},uploadFile:function(e){var t=new FormData;t.append("id",this.picdemo),t.append("userid",sessionStorage.userid),t.append("title",sessionStorage.demoname),t.append("desc",sessionStorage.demodes),t.append("state",3),t.append("surfaceplot",9),t.append("files",e),t.append("coverworkid",this.$store.state.demoxmlid);this.axios.post("/res/dealfile",t,{headers:{"Content-Type":"application/x-jpg"}}).then(function(e){}),this.$message({message:"发布成功",center:!0}),setTimeout(this.$router.go(-1),3e3)},choise_file:function(){this.indexdemoid=19,this.urllarge="";var e=this.$refs.file_el.files[0],t=new FileReader;t.readAsDataURL(e);var s=this;t.onload=function(){s.imageUrl=this.result}}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container72"},[s("div",{staticClass:"container73"},[s("p",{staticClass:"publishdemo"},[e._v("发布作品")]),e._v(" "),s("div",{staticClass:"fengexian"}),e._v(" "),s("div",{staticClass:"demoname"},[s("p",[e._v("作品名称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.demoname,expression:"demoname"}],attrs:{rules:e.rules,type:"text",placeholder:"请填写作品名"},domProps:{value:e.demoname},on:{input:function(t){t.target.composing||(e.demoname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"demodes"},[s("p",[e._v("作品说明")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.demodes,expression:"demodes"}],attrs:{rules:e.rules,type:"text",placeholder:"请填写作品描述"},domProps:{value:e.demodes},on:{input:function(t){t.target.composing||(e.demodes=t.target.value)}}})]),e._v(" "),s("button",{staticClass:"returngo",on:{click:e.returngo}},[e._v("返回")]),e._v(" "),s("div",{staticClass:"userpic"},[s("input",{ref:"file_el",attrs:{type:"file"},on:{change:e.choise_file}}),e._v(" "),s("img",{attrs:{src:e.imageUrl}})]),e._v(" "),s("el-button",{staticClass:"send",on:{click:e.submitUpload}},[e._v("确认发布")]),e._v(" "),s("p",{staticClass:"uploadcover"},[e._v("作品封面")]),e._v(" "),s("p",{staticClass:"uploadtext"},[e._v("上传封面")]),e._v(" "),s("div",{staticClass:"imglarge"},[s("img",{attrs:{src:e.urllarge,alt:""}})]),e._v(" "),s("ul",{staticClass:"uploadimg"},e._l(e.Urlimg,function(t,i){return s("li",{key:i},[s("img",{attrs:{src:t.url,alt:""},on:{click:function(t){e.pickimg(i)}}})])}))],1)])},staticRenderFns:[]};var o=s("Z0/y")(i,a,!1,function(e){s("pqUP")},"data-v-52a4f04d",null);t.default=o.exports},pqUP:function(e,t){}});
//# sourceMappingURL=29.c0f51899635fabbf9d9d.js.map