webpackJsonp([15],{"3SZ7":function(e,r,t){e.exports={default:t("CnbX"),__esModule:!0}},"6I8f":function(e,r,t){"use strict";var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"new-role"},[t("el-form",{ref:"ruleForm",staticStyle:{width:"60%","min-width":"600px"},attrs:{model:e.ruleForm,"label-width":"80px",rules:e.rules}},[t("el-form-item",{attrs:{label:"岗位名称","label-width":"100px",prop:"roleName"}},[t("el-input",{staticClass:"wid270",attrs:{maxlength:20,placeholder:"请输入岗位名称"},on:{blur:e.findName},model:{value:e.ruleForm.roleName,callback:function(r){e.$set(e.ruleForm,"roleName",r)},expression:"ruleForm.roleName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"权限","label-width":"100px",prop:"roleAuthority"}},[t("el-checkbox-group",{model:{value:e.ruleForm.roleAuthority,callback:function(r){e.$set(e.ruleForm,"roleAuthority",r)},expression:"ruleForm.roleAuthority"}},e._l(e.jurisdiction,function(r){return t("el-checkbox",{key:r.value,attrs:{label:r.value}},[e._v("\n                "+e._s(r.name)+"\n            ")])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"","label-width":"100px"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.changePermission("ruleForm")}}},[e._v(e._s(e.btnHtml))])],1)],1)],1)},n=[],i={render:o,staticRenderFns:n};r.a=i},CnbX:function(e,r,t){var o=t("ZBPP"),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},Cs2c:function(e,r,t){var o=t("SCAr");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("6imX")("26305fec",o,!0)},HKWm:function(e,r,t){"use strict";var o=t("3SZ7"),n=t.n(o),i=t("pgiz");r.a={data:function(){return{csname:"",btnHtml:"保存权限",isAdd:1,listLoading:!1,jurisdiction:[],ruleForm:{storeOperatorRoleId:"",roleName:"",roleAuthority:[]},rules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:1,max:20,message:"请输入角色名称",trigger:"blur"}],roleAuthority:[{type:"array",required:!0,message:"请选择权限",trigger:"change"}]}}},created:function(){var e=this;this.listLoading=!0,Object(i.I)({}).then(function(r){e.listLoading=!1,0==r.data.code?e.jurisdiction=r.data.data:e.$message.error(r.data.message)}).catch(function(r){e.listLoading=!1,e.$message.error("接口建立连接失败")})},mounted:function(){var e=this.$route.params.id;e&&(this.dataFetch(e),this.isAdd=2)},methods:{findName:function(){var e=this;if(!this.ruleForm.roleName||this.ruleForm.roleName==this.csname)return!1;var r={storeId:config.storeId,roleName:this.ruleForm.roleName};Object(i.G)(r).then(function(r){1==r.data.code&&e.$message.error("角色重名，请重新输入角色名称")})},dataFetch:function(e){var r=this;this.btnHtml="修改权限";var t={storeOperatorRoleId:e};this.listLoading=!0,Object(i.H)(t).then(function(e){0==e.data.code&&(r.ruleForm=e.data.data,r.csname=r.ruleForm.roleName,r.ruleForm.roleAuthority?r.ruleForm.roleAuthority=JSON.parse(r.ruleForm.roleAuthority):r.ruleForm.roleAuthority=[]),r.listLoading=!1}).catch(function(e){r.listLoading=!1,r.$message.error("接口建立连接失败")})},sucFun:function(e){var r=this;this.listLoading=!1,0==e.data.code?this.$message({message:"提交成功",type:"success",onClose:function(){r.$router.push({path:"/store/bypass-management/role-list"})}}):this.$message.error(e.data.message)},changePermission:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return!1;r.listLoading=!0;var t=new URLSearchParams;t.append("roleName",r.ruleForm.roleName),t.append("roleAuthority",n()(r.ruleForm.roleAuthority)),2==r.isAdd?(t.append("storeOperatorRoleId",r.ruleForm.storeOperatorRoleId),Object(i.L)(t).then(function(e){r.sucFun(e)}).catch(function(e){r.listLoading=!1,r.$message.error("接口建立连接失败")})):(t.append("storeId",config.storeId),Object(i.K)(t).then(function(e){r.sucFun(e)}).catch(function(e){r.listLoading=!1,r.$message.error("接口建立连接失败")}))})}}}},SCAr:function(e,r,t){r=e.exports=t("bKW+")(!0),r.push([e.i,".new-role{padding:20px 0 0}.new-role .wid270{width:270px}.new-role .el-button{width:100px;height:34px;line-height:34px;background:#41cac0;padding:0;border-color:#41cac0;border-radius:0}","",{version:3,sources:["E:/github/seller-center/src/views/shops/NewRole.vue"],names:[],mappings:"AACA,UACE,gBAAsB,CACvB,AACD,kBACI,WAAa,CAChB,AACD,qBACI,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,UAAW,AACX,qBAAsB,AACtB,eAAiB,CACpB",file:"NewRole.vue",sourcesContent:["\n.new-role {\n  padding: 20px 0 0 0px;\n}\n.new-role .wid270 {\n    width: 270px;\n}\n.new-role .el-button {\n    width: 100px;\n    height: 34px;\n    line-height: 34px;\n    background: #41cac0;\n    padding: 0;\n    border-color: #41cac0;\n    border-radius: 0;\n}\n"],sourceRoot:""}])},xgSY:function(e,r,t){"use strict";function o(e){t("Cs2c")}Object.defineProperty(r,"__esModule",{value:!0});var n=t("HKWm"),i=t("6I8f"),a=t("mPyB"),s=o,l=a(n.a,i.a,!1,s,null,null);r.default=l.exports}});
//# sourceMappingURL=15.4b444820f1e784c752d0.js.map