webpackJsonp([11],{"6FDe":function(e,s){},Fc6k:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQdJREFUeNp0kr0KwjAUhW9S6VJFBB9AqKDg5iA+hYOii7tdOuuTCLr7Ti5BHRwURSj1B7RNPUVEmzRnCCH3nEvul7DreJy8Xs58zqpVMkgej3ffZ6USpziWQtw8LzmfjdbJRG429HySPJ3Cfj9ot7Fin2QVHw5hr5dWh0N5uRCOTAHFihP6FPSAbv25lUC0XutWiKWJrzAoxpW7HRUKFEXcdZ3lklUqv5GVsdA16HTQNeh2YyGUKldgPWYzdCXbBq/7dKpg5SrX/R4XKK5WvFbDldR3MMHKxUoZ62j0T0APkMmaG2DhYCC3W16vO4tFBpaG1Wo2OSuXrVbLZIXwN0HdajTgfAswAF+teNpdi8stAAAAAElFTkSuQmCC"},d6bD:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});t("MVMM"),t("9rMa"),t("aozt");var a=t("Dsc+"),i=t.n(a),o={data:function(){return{dialogSave:!1,dialogExport:!1,dialogNew:!1,dialogOpen:!1,dialogUpload:!1,snapdropdown01:!1,snapdemodropdowm:!1,login:!0,sign:!0,user:!1,savestate:"",edittittle:"",editdes:"",snapdemoid:"",snap01:"",snap02:"",dialogRegister:!1,dialogLoginshow:!1,dialogSetpass:!1,dialogLogin:!1,dialogForgetpass:!1,dialogPassSure:!1,publicKey:"",disabled:!1,time:0,btntxt:"获取验证码",btntxtcolor01:!0,btntxtcolor02:!1,inputtext:"文件名称",formLogin:{username:"",password:"",passwordrsc:""},formRegister:{username:"",password:"",checkpassword:"",formRegisterpasswordrsc:"",mail:""},formReset:{password:"",ckeckpassword:"",formResetpasswordrsc:"",mail:"",code:"",msg:""},formSave:{userid:this.$store.state.userid,title:"",exporttitle:"",desc:"",file:"",files:"",filexml:"",filebir:"",filebinary:"",readfilebinary:"",demoxml:"",sign:"",login:"",user:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],mail:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入合法的email邮箱",trigger:"blur,change"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个英文与数字",trigger:"blur"}],checkpassword:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 12 个英文与数字",trigger:"blur"}],code:[{required:!0,message:"验证码不正确",trigger:"blur"},{min:6,max:6,message:"请输入正确的验证码",trigger:"blur"}]}}},mounted:function(){this.Getsession(),this.loadprojectxml(),this.loadprojectdes(),this.formSave.userid=sessionStorage.userid,this.snapdemoid=sessionStorage.snapdemoid,void 0==sessionStorage.snapdemoid||""==sessionStorage.snapdemoid?(this.snap02=!1,this.snap01=!0):(this.snap02=!0,this.snap01=!1)},directives:{focus:{update:function(e,s){s.value&&e.focus()}}},methods:{anothersave:function(){if(this.snap02=!0,this.snap01=!1,this.snapshow||this.$store.state.demoxmlid){this.snapshow=this.snapshow+"-1",this.snapdropdown01=!1,this.savestate=1,this.formSave.userid=sessionStorage.userid,this.formSave.title=this.snapshow,this.formSave.desc=this.editdes,this.formSave.file=window.frames.snap02.ide.exportProject_MANYKIT(" ");var e=this.formSave.file;this.filebinary=new Blob([e]),this.submitUpload()}else this.$message({message:"请先保存作品",center:!0})},snapedit:function(){this.focusState=!0},close:function(){this.dialogLogin=!1},snapdropdowmcontrol01:function(){this.snapdropdown01=!0},snapdropdowmcontrol001:function(){this.snapdropdown01=!this.snapdropdown01},snapdropdowmcontrol02:function(){this.snapdropdown01=!1},issnapdropdowncontrol:function(e){document.getElementById("sanpPanel").contains(e.target)||(this.snapdropdowm=!1)},snapdemodropdowmcontrol01:function(){this.snapdemodropdowm=!0},snapdemodropdowmcontrol02:function(){this.snapdemodropdowm=!1},issnapuserdropdowncontrol:function(e){document.getElementById("sanpuserPanel").contains(e.target)||(this.snapdemodropdowm=!1)},loadprojectxml:function(){var e=this;this.axios.post("/res/getfile",{id:this.$store.state.demoxmlid}).then(function(s){e.demoxml=s.data})},loadprojectdes:function(){var e=this;this.axios.post("/res/getfile",{userid:sessionStorage.userid,id:this.$store.state.demoxmlid,state:1}).then(function(s){e.list=s.data.data,e.edittittle=s.data.data.title,e.editdes=s.data.data.desc,e.snapshow=s.data.data.title})},open:function(){this.snap02=!1,this.snap01=!0,this.snapdemoid="";var e=document.getElementById("xml_seq").value,s=e.indexOf(".");if(".xml"!=(e=e.substring(s)))this.$message({message:"文件格式不正确",center:!0}),document.getElementById("movie_seq").value="";else{this.dialogOpen=!1;var t=new FileReader;t.readAsText(this.$refs.file.files[0]),t.onload=function(){this.readfilebinary=this.result,window.frames.snap01.ide.droppedText(this.readfilebinary,"HHH")}}},newproject:function(){this.snap02=!1,this.snap01=!0,window.frames.snap02.ide.newProject(),window.frames.snap01.ide.newProject(),this.dialogNew=!1,sessionStorage.snapdemoid="",this.$store.state.demoxmlid=""},download:function(e){this.snap02?this.formSave.file=window.frames.snap02.ide.exportProject(e):this.formSave.file=window.frames.snap01.ide.exportProject(e),this.dialogExport=!1},handiframe:function(){if(this.snapdropdown01=!1,1==window.navigator.onLine)if(sessionStorage.userid)if(this.$store.state.demoxmlid){this.savestate=2,this.dialogSave=!0,this.formSave.title=this.edittittle,this.formSave.desc=this.editdes,this.formSave.file=window.frames.snap02.ide.exportProject_MANYKIT(" ");var e=this.formSave.file;this.filebinary=new Blob([e])}else{this.savestate=1,this.dialogSave=!0,this.formSave.title=this.edittittle,this.formSave.desc=this.editdes,this.formSave.file=window.frames.snap01.ide.exportProject_MANYKIT(" ");var s=this.formSave.file;this.filebinary=new Blob([s])}else this.$message({message:"请先登录",center:!0});else this.$message({message:"上传失败，请检查网络",center:!0})},submitUpload:function(){var e=this;if(1==this.savestate)if(""==this.formSave.title||""==this.formSave.desc)this.$message({message:"项目名和文件名不能为空",center:!0});else{var s=new FormData;s.append("userid",this.formSave.userid),s.append("title",this.formSave.title),s.append("desc",this.formSave.desc),s.append("files",this.filebinary),s.append("state",1);this.axios.post("/res/upload",s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(s){e.snapshow=e.formSave.title,e.edittittle=e.formSave.title,e.editdes=e.formSave.desc,e.$store.state.demoxmlid=s.data.data.id,e.$store.state.publicstate}).catch(function(e){console.log(e)}),this.dialogSave=!1,this.$message({message:"上传成功",center:!0})}else{var t=new FormData;t.append("userid",this.formSave.userid),t.append("id",this.$store.state.demoxmlid),t.append("title",this.formSave.title),t.append("desc",this.formSave.desc),t.append("files",this.filebinary),t.append("state",2);this.axios.post("/res/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){}),this.dialogSave=!1,this.$message({message:"上传成功",center:!0})}},handiframepublish:function(){var e=this;if(1==window.navigator.onLine)if(sessionStorage.userid)if(this.$store.state.demoxmlid)0==this.$store.state.publicstate?(this.$store.state.demoxmlid=this.$store.state.demoxmlid,sessionStorage.publishid=this.$store.state.demoxmlid,this.$router.push({name:"Publish"})):this.$message({message:"该作品已经发布，请重新保存",center:!0});else if(this.$store.state.coverid=1){this.$store.state.coverid=2,this.dialogUpload=!0,this.formSave.file=window.frames.snap01.ide.exportProject_MANYKIT("o");var s=this.formSave.file;this.filebinary=new Blob([s]);var t=new FormData;t.append("userid",this.formSave.userid),t.append("state",1),t.append("title","未发布成功的作品"),t.append("desc","未发布成功的作品"),t.append("files",this.filebinary);this.axios.post("/res/upload",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(s){e.$store.state.demoxmlid=s.data.data.id,sessionStorage.publishid=s.data.data.id,console.log(s.data.data.id+"1111"),window.open("/#/Publish")})}else{this.dialogUpload=!0,this.formSave.file=window.frames.snap01.ide.exportProject_MANYKIT("o");var a=this.formSave.file;this.filebinary=new Blob([a]);var i=new FormData;i.append("userid",this.formSave.userid),i.append("state",1),i.append("title","未发布成功的作品"),i.append("desc","未发布成功的作品"),i.append("files",this.filebinary);this.axios.post("/res/upload",i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(s){e.$store.state.demoxmlid=s.data.data.id,sessionStorage.publishid=s.data.data.id,console.log(s.data.data.id+"0000"),window.open("/#/Publish")})}else this.$message({message:"请先登录",center:!0});else this.$message({message:"发布失败，请检查网络",center:!0})},Loginbtn:function(){var e=this,s=this.publicKey,t=new i.a(s);this.formLogin.passwordrsc=t.encrypt(this.formLogin.password,"base64"),""==this.formLogin.username?this.$message({message:"请输入用户名",center:!0}):""==this.formLogin.password&&this.$message({message:"请输入密码",center:!0}),/^[a-zA-Z0-9]\w{4,16}$/.test(this.formLogin.password)?this.axios.post("/res/login",{username:this.formLogin.username,password:this.formLogin.passwordrsc}).then(function(s){var t=s.data;s.data.data?(e.dialogLogin=!1,e.Getsession()):e.$message({message:t.errmsg,center:!0})}).catch(function(e){console.log(e)}):this.$message({message:"密码格式不正确",center:!0})},Registerbtn:function(){var e=this,s=this.publicKey,t=new i.a(s);this.formRegister.formRegisterpasswordrsc=t.encrypt(this.formRegister.password,"base64"),/^[a-zA-Z0-9]\w{3,16}$/.test(this.formRegister.username)?""==this.formRegister.mail||this.formRegister.mail.length<12?this.$message({message:"邮箱格式不正确",center:!0}):/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this.formRegister.mail)?/^[a-zA-Z0-9]\w{4,16}$/.test(this.formRegister.password)?this.formRegister.password!==this.formRegister.checkpassword?this.$message({message:"密码输入不一致",center:!0}):this.axios.post("/res/signup",{username:this.formRegister.username,password:this.formRegister.formRegisterpasswordrsc,mail:this.formRegister.mail}).then(function(s){e.registermsg=s.data.data.msg,e.$message({message:e.registermsg,center:!0}),e.dialogLogin=!1}).catch(function(e){console.log(e)}):this.$message({message:"密码长度（6~20 英文+数字）",center:!0}):this.$message({message:"邮箱格式不正确",center:!0}):this.$message({message:"用户名长度在4-16之间， 只能包含字母、数字",center:!0})},timer:function(){this.time>0?(this.time--,this.btntxt=this.time+"s",setTimeout(this.timer,1e3),this.btntxtcolor01=!1,this.btntxtcolor02=!0):(this.time=0,this.btntxt="获取验证码",this.disabled=!1,this.btntxtcolor01=!0,this.btntxtcolor02=!1)},Getcodebtn:function(){var e=this;this.formReset.mail.length<9?this.$message({message:"请根据提示输入相应的内容",center:!0}):this.axios.post("/res/getverifycode",{mail:this.formReset.mail}).then(function(s){e.$message({message:s.data.data.msg,center:!0}),e.time=60,e.disabled=!0,e.timer()}).catch(function(e){console.log(e)})},Getusercodebtn:function(){var e=this;this.axios.post("/res/checkcode",{code:this.formReset.code,mail:this.formReset.mail}).then(function(s){"验证成功"==s.data.data.msg?(e.$message({message:"验证成功",center:!0}),e.dialogPassSure=!0,e.dialogForgetpass=!1):e.$message({message:"验证失败",center:!0})}).catch(function(e){console.log(e)})},Getuserpassbtn:function(){var e=this,s=this.publicKey,t=new i.a(s);this.formReset.formResetpasswordrsc=t.encrypt(this.formReset.password,"base64"),this.formReset.password!==this.formReset.checkpassword||this.formReset.password<6||this.formReset.checkpassword<6?this.$message({message:"两次输入的密码不一致或密码长度不足6位",center:!0}):this.axios.post("/res/setpassword",{password:this.formReset.formResetpasswordrsc,mail:this.formReset.mail}).then(function(s){e.dialogLogin=!1,e.dialogPasswordSure=!1,e.$message({message:"修改密码成功",center:!0})}).catch(function(e){console.log(e)})},Getsession:function(){var e=this;this.axios.get("/res/verify").then(function(s){s.data.data.userid?(e.dialogLogin=!1,e.publicKey=s.data.data.publicKey,e.login=!1,e.sign=!1,sessionStorage.userid=s.data.data.userid,sessionStorage.usernamesession=s.data.data.username,e.$store.state.usernamesession02=sessionStorage.usernamesession,e.$store.state.userid=sessionStorage.userid,e.user=!0):(e.login=!0,e.sign=!0,e.user=!1,e.publicKey=s.data.data.publicKey)})},Cancellogout:function(){var e=this;this.axios.get("/res/logout").then(function(s){e.snapdemodropdowm=!1,e.login=!0,e.sign=!0,e.user=!1,sessionStorage.usernamesession="",e.$store.state.userid="",sessionStorage.userid=""})}}},r={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"snapbcw",on:{click:e.issnapdropdowncontrol}},[a("div",{staticClass:"snapboxhead",on:{click:e.issnapuserdropdowncontrol}},[a("div",{staticClass:"snapheader"},[a("ul",{staticClass:"snapheaderleft"},[e._m(0),e._v(" "),a("li",{staticClass:"borderlight01",attrs:{id:"sanpPanel"},on:{mouseenter:e.snapdropdowmcontrol01,click:e.snapdropdowmcontrol001}},[a("img",{attrs:{src:t("g2ZZ"),alt:""}})]),e._v(" "),a("li",{staticClass:"borderlight"},[a("img",{attrs:{src:t("fU2z"),alt:""},on:{click:e.handiframe}})]),e._v(" "),a("li",{staticClass:"borderlight03"},[a("img",{attrs:{src:t("pVfY"),alt:""},on:{click:e.handiframepublish}})]),e._v(" "),a("li",[a("div",{on:{keyup:function(s){return s.altKey?e.handiframepublish(s):null}}})]),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.login,expression:"login"}],staticClass:"borderlight04",on:{click:function(s){e.dialogLogin=!0,e.dialogLoginshow=!0,e.dialogRegister=!1,e.dialogForgetpass=!1,e.dialogPassSure=!1}}},[e._v("登陆")]),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.sign,expression:"sign"}],staticClass:"borderlight05",on:{click:function(s){e.dialogLogin=!0,e.dialogLoginshow=!1,e.dialogRegister=!0,e.dialogForgetpass=!1,e.dialogPassSure=!1}}},[e._v("注册")]),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.user,expression:"user"}],staticClass:"borderlight06",attrs:{id:"sanpuserPanel"},on:{mouseenter:e.snapdemodropdowmcontrol01}},[e._v(e._s(e.$store.state.usernamesession02))])]),e._v(" "),a("div",{staticClass:"snapedit",on:{click:e.snapedit}}),e._v(" "),e.snapdropdown01?a("div",{staticClass:"snapdropdowm",on:{mouseleave:e.snapdropdowmcontrol02}},[a("ul",{staticClass:"block-col-12"},[a("li",[a("p",{on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogNew=!0,e.snapdropdown01=!1}}},[e._v("新建")])]),e._v(" "),a("li",[a("p",{on:{click:function(s){return s.stopPropagation(),s.preventDefault(),e.anothersave(s)}}},[e._v("另存为")])]),e._v(" "),a("li",{on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogExport=!0,e.snapdropdown01=!1}}},[a("p",{on:{click:function(s){return s.preventDefault(),e.download(s)}}},[e._v("保存到本地")])]),e._v(" "),a("li",[a("p",{on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogOpen=!0,e.snapdropdown01=!1}}},[e._v("打开本地作品")])])])]):e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.snapdemodropdowm,expression:"snapdemodropdowm"}],staticClass:"snapdemodropdowm",on:{mouseleave:e.snapdemodropdowmcontrol02}},[a("ul",{staticClass:"block-col-12"},[e._m(1),e._v(" "),a("li",[a("p",{on:{click:function(s){return s.preventDefault(),e.Cancellogout(s)}}},[e._v("退出登录")])])])])])]),e._v(" "),a("iframe",{directives:[{name:"show",rawName:"v-show",value:e.snap01,expression:"snap01"}],staticClass:"snap",attrs:{src:"static/snap/pxsnap.html",name:"snap01",id:"myFrameId01",frameborder:"0"}}),e._v(" "),a("iframe",{directives:[{name:"show",rawName:"v-show",value:e.snap02,expression:"snap02"}],staticClass:"snap",attrs:{frameborder:"0",src:"static/snap/pxsnap.html#present:Username=lynn&ProjectName="+e.snapdemoid,id:"myFrameId02",name:"snap02"}}),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",[a("el-dialog",{attrs:{visible:e.dialogSave,modal:!1,width:"420px","show-close":!1},on:{"update:visible":function(s){e.dialogSave=s}}},[a("div",{staticClass:"container50"},[a("el-form",{attrs:{model:e.formSave,rules:e.rules,enctype:"multipart/form-data"}},[a("img",{staticClass:"sign_logo",attrs:{src:t("Fc6k"),alt:""},on:{click:function(s){e.dialogSave=!1}}}),e._v(" "),a("el-form-item",{staticClass:"iden01"},[a("el-input",{staticClass:"texttitle",attrs:{type:"text","auto-complete":"off",placeholder:"请输入项目名称"},model:{value:e.formSave.title,callback:function(s){e.$set(e.formSave,"title",s)},expression:"formSave.title"}})],1),e._v(" "),a("el-form-item",{staticClass:"iden02"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formSave.desc,expression:"formSave.desc"}],staticClass:"textdes",attrs:{type:"text","auto-complete":"off",placeholder:"请输入项目描述"},domProps:{value:e.formSave.desc},on:{input:function(s){s.target.composing||e.$set(e.formSave,"desc",s.target.value)}}})]),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"iden03",on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.submitUpload()}}},[e._v("确定保存")])],1)],1)],1)])],1)]),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",[a("el-dialog",{attrs:{visible:e.dialogExport,modal:!1,width:"420px","show-close":!1},on:{"update:visible":function(s){e.dialogExport=s}}},[a("div",{staticClass:"container501"},[a("el-form",{attrs:{model:e.formSave,rules:e.rules,enctype:"multipart/form-data"}},[a("img",{staticClass:"sign_logo",attrs:{src:t("Fc6k"),alt:""},on:{click:function(s){e.dialogExport=!1}}}),e._v(" "),a("el-form-item",{staticClass:"iden01"},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入项目名称"},model:{value:e.formSave.exporttitle,callback:function(s){e.$set(e.formSave,"exporttitle",s)},expression:"formSave.exporttitle"}})],1),e._v(" "),a("el-button",{staticClass:"iden02",on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.download(e.formSave.exporttitle)}}},[e._v("确定下载")])],1)],1)])],1)]),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",[a("el-dialog",{attrs:{visible:e.dialogNew,modal:!1,width:"420px","show-close":!1},on:{"update:visible":function(s){e.dialogNew=s}}},[a("div",{staticClass:"container502"},[a("el-form",{attrs:{model:e.formSave,rules:e.rules,enctype:"multipart/form-data"}},[a("img",{staticClass:"sign_logo",attrs:{src:t("Fc6k"),alt:""},on:{click:function(s){e.dialogNew=!1}}}),e._v(" "),a("el-form-item",{staticClass:"iden01"},[a("p",[e._v("确定新建新的项目吗？")])]),e._v(" "),a("el-button",{staticClass:"iden02",on:{click:e.newproject}},[e._v("确定")]),e._v(" "),a("el-button",{staticClass:"iden03",on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogNew=!1}}},[e._v("取消")])],1)],1)])],1)]),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",[a("el-dialog",{attrs:{visible:e.dialogOpen,modal:!1,width:"420px","show-close":!1},on:{"update:visible":function(s){e.dialogOpen=s}}},[a("div",{staticClass:"container503"},[a("el-form",{attrs:{model:e.formSave,rules:e.rules,enctype:"multipart/form-data"}},[a("img",{staticClass:"sign_logo",attrs:{src:t("Fc6k"),alt:""},on:{click:function(s){e.dialogOpen=!1}}}),e._v(" "),a("el-form-item",{staticClass:"iden01"},[a("a",{staticClass:"file",attrs:{href:"javascript:;"}},[e._v("选择文件\n                                 "),a("input",{ref:"file",staticClass:"iden04",attrs:{type:"file",id:"xml_seq",multiple:""}})])]),e._v(" "),a("el-button",{staticClass:"iden02",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),e.open(s)}}},[e._v("确定")]),e._v(" "),a("el-button",{staticClass:"iden03",on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogOpen=!1}}},[e._v("取消")])],1)],1)])],1)]),e._v(" "),a("transition",{attrs:{name:"el-fade-in-linear"}},[a("el-dialog",{attrs:{visible:e.dialogLogin,width:"420px",modal:!0,"modal-append-to-body":!1},on:{"update:visible":function(s){e.dialogLogin=s}}},[a("img",{staticClass:"close",attrs:{src:t("1qGb"),alt:""},on:{click:e.close}}),e._v(" "),a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogLoginshow,expression:"dialogLoginshow"}],staticClass:"container2101"},[a("form",{attrs:{action:""}},[a("p",{staticClass:"sign_logo"},[e._v("登录")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formLogin.username,expression:"formLogin.username"}],staticClass:"tele",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:e.formLogin.username},on:{input:function(s){s.target.composing||e.$set(e.formLogin,"username",s.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formLogin.password,expression:"formLogin.password"}],staticClass:"iden01",attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:e.formLogin.password},on:{input:function(s){s.target.composing||e.$set(e.formLogin,"password",s.target.value)}}}),e._v(" "),a("p",{staticClass:"ap_text",on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogLoginshow=!1,e.dialogForgetpass=!0}}},[e._v("忘记密码?")]),e._v(" "),a("button",{staticClass:"register",on:{click:function(s){return s.stopPropagation(),e.Loginbtn(s)}}},[e._v("登录")]),e._v(" "),a("div",{staticClass:"free_res"},[a("p",[e._v("没有账号?")]),a("span",{on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogLoginshow=!1,e.dialogRegister=!0}}},[e._v("免费注册")])])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogRegister,expression:"dialogRegister"}],staticClass:"container1901"},[a("el-form",{attrs:{model:e.formRegister,rules:e.rules}},[a("p",{staticClass:"sign_logo"},[e._v("注册")]),e._v(" "),a("el-form-item",{attrs:{prop:"username"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.username,expression:"formRegister.username"}],staticClass:"tele",attrs:{"auto-complete":"off",placeholder:"请输入用户名"},domProps:{value:e.formRegister.username},on:{input:function(s){s.target.composing||e.$set(e.formRegister,"username",s.target.value)}}})]),e._v(" "),a("el-form-item",{attrs:{prop:"mail"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.mail,expression:"formRegister.mail"}],staticClass:"iden01",attrs:{type:"email","auto-complete":"off",placeholder:"请输入邮箱"},domProps:{value:e.formRegister.mail},on:{input:function(s){s.target.composing||e.$set(e.formRegister,"mail",s.target.value)}}})]),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.password,expression:"formRegister.password"}],staticClass:"iden02",attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},domProps:{value:e.formRegister.password},on:{input:function(s){s.target.composing||e.$set(e.formRegister,"password",s.target.value)}}})]),e._v(" "),a("el-form-item",{attrs:{prop:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formRegister.checkpassword,expression:"formRegister.checkpassword"}],staticClass:"iden03",attrs:{type:"password","auto-complete":"off",placeholder:"请确认密码"},domProps:{value:e.formRegister.checkpassword},on:{input:function(s){s.target.composing||e.$set(e.formRegister,"checkpassword",s.target.value)}}})]),e._v(" "),a("el-button",{staticClass:"register",attrs:{type:"primary"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),e.Registerbtn(s)}}},[e._v("注册")])],1),e._v(" "),a("div",[a("span",{staticClass:"free_res"},[e._v("已有账号?"),a("span",{on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.dialogLoginshow=!0,e.dialogRegister=!1}}},[e._v("点击登录")])])])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogForgetpass,expression:"dialogForgetpass"}],staticClass:"container4601"},[a("el-form",{attrs:{action:"",rules:e.rules}},[a("p",{staticClass:"sign_logo"},[e._v("忘记密码")]),e._v(" "),a("el-form-item",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formReset.mail,expression:"formReset.mail"}],staticClass:"tele",attrs:{type:"email","auto-complete":"off",placeholder:"请输入邮箱"},domProps:{value:e.formReset.mail},on:{input:function(s){s.target.composing||e.$set(e.formReset,"mail",s.target.value)}}})]),e._v(" "),a("el-form-item",{attrs:{prop:"code"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formReset.code,expression:"formReset.code"}],staticClass:"iden01",attrs:{"auto-complete":"off",placeholder:"验证码"},domProps:{value:e.formReset.code},on:{input:function(s){s.target.composing||e.$set(e.formReset,"code",s.target.value)}}})]),e._v(" "),a("button",{class:{iden0202:e.btntxtcolor01,iden020202:e.btntxtcolor02},attrs:{disabled:e.disabled},on:{click:function(s){return s.preventDefault(),e.Getcodebtn(s)}}},[e._v(e._s(e.btntxt))]),e._v(" "),a("button",{staticClass:"register",on:{click:function(s){return s.stopPropagation(),e.Getusercodebtn(s)}}},[e._v("下一步")])],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.dialogPassSure,expression:"dialogPassSure"}]},[a("div",{staticClass:"container4401"},[a("form",{attrs:{action:""}},[a("p",{staticClass:"sign_logo"},[e._v("确认密码")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formReset.password,expression:"formReset.password"}],staticClass:"tele",attrs:{type:"password",placeholder:"输入密码"},domProps:{value:e.formReset.password},on:{input:function(s){s.target.composing||e.$set(e.formReset,"password",s.target.value)}}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formReset.checkpassword,expression:"formReset.checkpassword"}],staticClass:"iden01",attrs:{type:"password",placeholder:"再次确认密码"},domProps:{value:e.formReset.checkpassword},on:{input:function(s){s.target.composing||e.$set(e.formReset,"checkpassword",s.target.value)}}}),e._v(" "),a("button",{staticClass:"register",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),e.Getuserpassbtn(s)}}},[e._v("确认")])])])])])])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("li",{staticClass:"bcw"},[s("a",{attrs:{href:"http://www.manykit.com/codeplay",target:"_blank"}},[s("img",{attrs:{src:t("is5z"),alt:""}})])])},function(){var e=this.$createElement,s=this._self._c||e;return s("li",[s("a",{attrs:{href:"http://www.manykit.com/codeplay/#/Demo/Mydemo",target:"_blank"}},[s("p",[this._v("我的作品")])])])}]};var n=t("Z0/y")(o,r,!1,function(e){t("6FDe")},"data-v-36d4d4b1",null);s.default=n.exports},fU2z:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAPCAYAAACiLkz/AAACnklEQVRIS8WWS4iPYRTGf0/N5NIgE7nFwoKVLKxkgaIks7BgYaGQSxSKsHJJRFmwoalpFDGFLFxKIRKhZoGysFEusbCYBaJcjh69nz7ffJehhrf+i3/ved/3/M55zjmfIuIq0E7zEnBH0o5m039noYh4DUz6gydPSNrYZB8Ri4Cnkl412Rb3I6IFeASskPSk7nwGMApYDHwrMQ5gInAht9cpaUPdxRHRC+wFFgBbamyz7G/O2fi9VcBh4GvN2e4MoFXSuCrDiJgMvCzsd0laW3YmIqYC91NmjwB9kvaVRNrBKQNYBzwEHjdk7xfAGGB3Da0jsq1w2UdJbRUA+4FhkrZHxNEmAEl92T0J3vKZLultk/z+pgayOx3VfsUfEUOBF8AaSVcSwEzgdokzllh7AeAc8CbZ1kmvw/cPBsBO4BDw84ECwBRgHnAqOfgbQCr8i5ZeHiqXnVlAJ/AM2CrpXQYwFugCrMmq9R74AowErNHPxQykWrkL2HaXAfKXRcQcF7akhSX1YB9c+CMqMrsHWAmsl3QjOz+gIrZxRBwE5gLLgAdAWwnAtBRh2xxL3WtCztliBrKtnhRZ/7fclqZ78px23jLMN5OeDGCIJEegckWEU7sEmAHcBIaXRSrBXi8BcGfqSA88By7nHnNErXdLyhkcFIBWoEXSpzT8GgEyCUWEu5WhTqYMOornJV0rSMyQvRUS8nnL717+zIAzUHjI03tAABExGrgEWCbu646yI2yHTks6XmihfwVQO8hKCs4R7FcDOUcyCbmYu/2TdCBfxAnsDGDA5f7kSDOgCsCzYVNVBsYDt4DvTYMj7c8HPjTUgB1fDZyVZOm4EfTrQm6dmZSKABHhZuC54OXWObvYXi0hR7PyM6KurUryBP+v6wer8U6ZT7JqUAAAAABJRU5ErkJggg=="},g2ZZ:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAANCAYAAADmDU2OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTA1NTQ0ODQxNDIxMUU4ODI3OUNCMzFCRjAwMDU5MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTA1NTQ0OTQxNDIxMUU4ODI3OUNCMzFCRjAwMDU5MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMDU1NDQ2NDE0MjExRTg4Mjc5Q0IzMUJGMDAwNTkzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxMDU1NDQ3NDE0MjExRTg4Mjc5Q0IzMUJGMDAwNTkzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yNl0hAAAAgJJREFUeNrMlb9Lw1AQx5Pa0aWCOArRQXER9A9Q0MHONoMFF6GdHJyiDo7SDq5KxU1wqEPdRCpugkpCxUE6SAfBQRwKoq7xe/iNpCG/qeDBh7zcu5fcvXvvTrFtewfcAAvcgxWg/DEFYIKcEiGwMUDdR18RvffbGcwZ4AHsgwY4Vv5eTkEH1GLYloDlCq4ZZpwFL+AAtKjLg1fwHLLuC+yCiwhnZoAZkQHbRz2kqmpXMolxDuMq9QVuRqCoWNTGcwOcUzcIFsB7kA+gCObAeIKsyEnQQLnHAVWVoCRTHZfjTrAmbWYxjtqcrmxE1mfiA5zJpHyLAXhlEsyDadoMMGuPIT+0eHz8RDZQ9wRTYoYtqiqSHQSnO3eIG6R7j5yfHIG1GLveco0lmKkQ20vuYs+xkXshejhquXQ5JwBx2lU8ylEOZXx0ozGD8cp2DJsqHXUc1Jg1r6OiP3SyI/cJLMpTiVEW22DJVfoadnK5S1Cya1KpgMbSbUSUbJNlPo4YTkB5/mzETicTCftQ89eB6B5kBswF9iGFF1tkL8VRuwLtBPY1FgE5UhVe7r5JhhXqmu/FFN8ox7CRQlBnxexyA2XdGC+9zaNY6EdAw2Ad3KZYfwKeQuY19g6n20sgm6556T26Ks3oJ1CDxzGXNiBprMt4rvJnbwnWSr/aAp/KP5JvAQYAZnQ8kzpCGHQAAAAASUVORK5CYII="},is5z:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAARCAYAAACGjBGPAAAESUlEQVRYR82Xa8jfcxjGP5eIySHKC8QLhwnhBZHkFIswoaYoJmlyyHhFhg1TDplTkRfOIVamzaltL4gXiMxpZeWhhFjZC6el5dK17t/Td//9/v//emRz19PzPL/v73u67uu67vsnxoTtg4CngB2BOZJW2c7fHwE7A38DMyR9O26t//u4Rh3Q9mnAy8Ce9d4fwKXAG8BvwHb1/ChJn41ZaxfgdEmvtu/Z3huYLumdbQ3WUDBsXws8DOSdp4EAcXUd+BbgJiAXTGwJGHOA8ySdNQDGycAy4BhJawYBsb0fsD+wF7BB0mv/FWibgWE72X4ICBiJ24APgN2AfYAHGkZ05xoJhu3tgS+AC8Mg218DB4y4VPYP4L8A64BdgbeBxQXMgiFzZwKrgazfxtywEsh4X8wMyJuAYTtyWAKcBPwOXFSbP1IMuRV4DwjVd29WPVxSDtEbti+pw+SCyfKz5TMTPUy4LkBJuj5jtgPaCkkH1v/zgT268W6+7RVJYsec2nOWpHO3lEmTYNg+GHgdyO/vgND5qkYa3ZrPA/cCrwAbDwicIWl536a2dwLer6wkoxsKmEgjWR+M44A12wwM2zOAl4J4HfwK4DHgxCGofgLMLk85Bfg1xjpojpXJw4AvgR+K7ocUu0aCAawsL2mP8HE9GyqTf8UM2zcAi2rHZ4D7gKVjNJ3XfwTOBq6snzybL+mOIQx5EFgr6a7yjEhm+hCwJyQ9V2DeCVzcyCSGO03SW+3ckkW8bW15TTt8D3DjKLkoYTsUDjVjlKuAF5oqMU5ufwFhURgVY10t6YgeH0hFeLMqxvoCI8yIfyQipUgmBp2KEs8IW+MZMd5pAQT4dMyl1klKBcy8+NQmntH6iu0kfmUHeuYEjJSsY4EPgZ/H3X7I+KFA+oVv+pov2+lVvqoLxzRjoKkYXSkNmHl+NJDSeXfAsH0m8HiBtQOQqtBWoRh8jDsgJcaB8W6qVHqaXjC6y1XzE11PJY6U9Pmwiba/r0Nn/XjBQuDJ9CejmGE7XW6Yeg1wfoE02afYjpwXt9lt7tPHjJ+A4yVNTBWMZLDrGkPdm3suPRKMAW0n2ymf0fdQMID7gXll1G1pTQlNz9AXCyTd3sgk8+Mh6VFyh6WS9q3xSZnYPiHMbEtraN7HjLmNDi+r75TBgwwFo/qEHCr+kE2j/9C9k0bW2kwmVYoj4chjEowBYDdjRu33RJlzJBcGppoFkCUx8B4wIuNlWwOMXOic8odUoFA/5TWtfdd0tWCkSixsDHSy6SoPidl3MegZeR4Zpinb2LbbTmmPR8UPL5C0vgEjpfrR6o5nt2DEyaPtwdgSZoz9NqkDBJR8lC2ynU5ysoTWeDJ6OdDSfRQYfVJ5sfvGqc+AZD1GHeNMw7cxbM8CIpUwNV31qS0Y6f9TxpIl15yMz5OUdjwLRCYpXd14Hv8JRCZTrURD5L/1H4/8hN/6x9m2O/4D3sb7xpXrwDcAAAAASUVORK5CYII="},pVfY:function(e,s){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAQCAYAAABtPJ3XAAACuUlEQVRIS8WWT4iOURTGf48oFlMoRDEl2RhKiKLJLMQCIbMh1KxkgWwkJqNGWBALih2KZDFiFkNKlDKYQiiKDSHKbORPqUfn637TO6/3+zPE3OX7nnvOc5/znOdeUbBsrwfmStpb9H84vylf3PZsoBcYA2yVdHo4AeZrDwJsuxG4D0zMBC6XdGMooG3vB45K+mJ7ZuyV9LJaDtvjgFvAMkmfKsUOALY9NjFbKpBZX4GFkp5WSmI7Ch2R1GN7OvAKaEiA1wDRpVPAQUk/K8hwF7BKUku1g5UA2x4F3AEWVQj+ACyQ9LZAQnHAh0CjpH7bAbBTUlM51vZU4AKwU1JfYvPzULqWYufL9kjgErCuRoIXQLOkj9k424eBAHkxfV8CTAYuV8l3RtL7zIFCQsHufNtzgFmSyvkGpQnA0cIo+AOYESzkCnUDPcAI4J6kBznAK0IymW87gGvA63oAJ/aDjNDuXdubgFZJq4v254euGbidC2yX1FlP+9LhHwFTQr917gn9v5O0MclzSICXpknN1uqQdKDO4tHajiqx5yRtyUhhNxCSqrX6JY2PoDzDfwzY9ujkDiGhj5Lac9IJlwknOZ+YXJmk8xjoKpOSl0Tq2sN/AbhkS6HF0DqwVtKbBG4bsB1oCltLun0G7ANihoLBUhf/C+AMgBicXtuLgZNAeGpMfRewVNKTjBwWpyE7/jeAw5LO5gR1UtKxSiJLthiD0ydpwGESUzGsDUCbpCtFOWzXAhwOdFXSpN80XEv5+f8JbFwIcTG0SPqe2N4MhAziTRKeHBYXt9zzghyFgIG4nttS/IkyGeHDy4EYgHpWt6TrmbYG0Lh2Y/LDjjYkTYYE4i1RAmi7FSi//G4m8P3pX/j4N0klO63pw7b3AGFH9awDkg5VaG1odZqkcInCZXseMCHeHFViqt50vwCYdllQV6dfHQAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=11.8b57267e5dfc703fcf55.js.map